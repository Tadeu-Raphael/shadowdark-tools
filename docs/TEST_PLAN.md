# Plano de testes

## Implementação atual

A infraestrutura usa `node:test` para testes unitários de contrato dos arquivos de dados e Playwright para integração no Chromium. Os scripts estão em `tests/unit/` e `tests/integration/`; `package.json` define os comandos e `.github/workflows/tests.yml` executa a suíte em pushes e pull requests. A execução local requer Node.js 22+, Python 3, `npm install` e `npx playwright install chromium`.

As funções de regras dos geradores ainda ficam dentro de IIFEs e não são diretamente importáveis. A cobertura unitária atual valida parsing, presença dos dados, tabelas não vazias, cobertura d100, dimensões de tabelas mágicas e estrutura/segmentação dos PDFs gerados. Os testes Playwright cobrem a geração real nas dez páginas e fluxos de variantes recém-adicionadas. Ao refatorar regras futuras para funções puras, complemente os contratos de dados com testes diretos dos limites e resultados da regra.

## Testes unitários de lógica

- **Dados e intervalos:** validar que tabelas possuem a quantidade esperada de linhas, intervalos não se sobrepõem nem deixam lacunas e todo resultado traduzido tem os dois idiomas.
- **Rolagens:** testar limites mínimo e máximo de cada dado e conversão de rolagem para faixa, incluindo casos especiais como `00` em d100.
- **Encontros:** selecionar ambiente, resultado d100, distância, atividade, reação e tesouro conforme os limites das respectivas tabelas; verificar bônus de Carisma e criaturas sempre hostis.
- **Aventuras:** combinar as rolagens das tabelas de objetivo e local, preservando os fragmentos de nomes.
- **Festanças:** custo, consequência, evento, bônus e recompensa para faixas normais e expandidas; validar que valor selecionado no controle corresponde ao gasto exibido.
- **NPCs:** NPC comum, rival individual e grupo; validar ancestrais, alinhamento, ocupações, quantidade e campos específicos de rivais.
- **Assentamentos:** tipo, tamanho, distritos, alinhamento e pontos de interesse; rolagens de taverna/loja devem gerar conteúdo pelos mesmos dados/regras de seus geradores próprios.
- **Masmorras:** tipo e tamanho do local, número de salas, conexões, nível do grupo, conteúdo de sala, perfil de monstro derivado dos dados do gerador de monstros, tesouro d100 pelo nível do grupo e armadilhas/hazards compartilhados com o gerador de encontros. Cobrir todas essas categorias, limites de nível e troca de idioma no resultado.
- **Terrenos hexagonais:** sequência circular de terreno, regras de novo hex, perigo, POIs e cataclismo; verificar limites e distribuição por faixa.
- **Monstros:** modificador de combate aplicado ao nível médio do grupo, faixa de dano/ataques e quantidade permitida de mutações.
- **Bestiário:** os 238 monstros possuem `description_pt`, `atk_pt`, `mv_pt` e pares `{en, pt}` em todas as habilidades; o texto pt-BR não vaza prosa em inglês e preserva o jargão de regras (DC, CON, STR, DEX, WIS, CHA, INT, HP, AC, LV, ADV, DISADV) e os termos de alcance/movimento (`near`, `far`, `close`, `double`, `swim`, `fly`, `climb`, `burrow`, `teleport`), mantidos em inglês por design. Os monstros lendários (Ten-Eyed Oracle, Tarrasque, Wandering Merchant) têm blocos de estatísticas verificados contra o PDF oficial.
- **Magia:** as 85 magias possuem `name`, `tier` (1–5), `classes` (`wizard`/`priest`), `duration`, `range`, `description` e `description_pt`; nomes e termos de alcance/duração permanecem em inglês por design. As três tabelas de mishap (tiers 1–2, 3–4 e 5) têm 12 linhas cada, e as tabelas de aparência de pergaminho e varinha têm 8 itens cada.
- **Itens mágicos:** as 91 entradas do catálogo possuem `name`, `name_pt`, `type` (sete tipos válidos), `description`, `description_pt`, `bonus`/`bonus_pt`, `benefits`/`benefits_pt`, `curses`/`curses_pt`, `alignment`/`alignment_pt` e `personality`/`personality_pt`; os arrays de benefícios e maldições têm o mesmo tamanho nos dois idiomas e `description` difere de `description_pt`.
- **Tesouros:** faixa d100 por nível, chance de 50% para monstros errantes, gemas e multiplicador de gema gigante, subrolagens de item luxuoso, tipos de dádiva, qualidade, personalidade, tipo de item mágico e atributos específicos de armaduras, poções, pergaminhos, utilitários, varinhas e armas.
- **Personagem nível 0:** rolagens de atributos e tabelas de ancestralidade, background, alinhamento e equipamento, respeitando os dados e limites apresentados pela ferramenta.

## Testes de integração no navegador

Executar as páginas servidas por HTTP, tanto na raiz local quanto em caminho equivalente a subdiretório de publicação. Em cada teste, capturar erros de console e respostas de recursos locais com falha.

1. **Catálogo:** abrir a página principal, confirmar os treze cartões ativos agrupados entre jogadores (personagem nível 0 e festanças) e mestres (onze ferramentas), confirmar que grades com um ou dois cartões ficam centralizadas, alternar os títulos de grupo PT/EN, validar navegação e ausência de links quebrados.
2. **Inicialização das páginas:** abrir cada gerador diretamente, confirmar que dados e lógica foram carregados na ordem certa e que as tabelas de referência aparecem.
3. **Geração ponta a ponta:** usar valores fixos nos controles e uma fonte aleatória controlada para gerar resultados reproduzíveis e verificar texto, estrutura e controles habilitados.
4. **Bestiário:** abrir a página, confirmar os 238 cartões e o contador, validar que o conteúdo pt-BR aparece por padrão, trocar para EN e conferir que descrição e habilidades mudam, que os nomes de habilidades continuam em negrito, que a preferência persiste após recarregar e que a busca encontra monstros pelo conteúdo localizado.
5. **Magia:** abrir a página, confirmar os 85 cartões e o contador, validar que a descrição pt-BR aparece por padrão, trocar para EN e conferir que o texto muda, que o filtro de tier restringe a lista, que a preferência persiste após recarregar e que os geradores de pergaminho, varinha e mishap produzem resultados visíveis.
6. **Itens mágicos:** abrir a página, confirmar os 91 cartões e o contador, validar que o nome e a descrição pt-BR aparecem por padrão, trocar para EN e conferir que o texto muda, que o filtro de tipo restringe a lista, que a preferência persiste após recarregar e que os geradores de pergaminho, varinha e item mágico produzem resultados visíveis.
7. **Troca de idioma:** trocar PT/EN antes e depois de gerar; validar rótulos, opções, referências, resultados, idioma do documento e persistência após recarregar.
8. **Controles condicionais:** conferir campos que aparecem ou somem conforme modo, seleção, quantidade ou opção de geração, sem perder o valor relevante.
9. **Exportação:** validar copiar para área de transferência, ícones dos botões e downloads TXT/PDF após gerar; verificar nome, MIME type e conteúdo atual nos treze geradores. No nível 0, verificar PDF com uma ficha por página, título, cartões de personagem formatados e nome em destaque e ausência de impressão da página.
10. **Fluxos entre geradores:** no assentamento, escolher resultados de taverna/loja e confirmar geração detalhada coerente; no terreno, verificar nomes direcionados ao gerador de assentamentos e referências cruzadas.
11. **Responsividade e acessibilidade básica:** verificar layouts móvel/desktop, associação de labels, ordem de tabulação, foco visível, botões desabilitados sem resultados e anúncio da região de resultados.

## Casos de regressão prioritários

- Gerador de masmorra carrega sem erro de sintaxe e não há cartões duplicados no catálogo.
- Gerador de tesouros carrega todos os arquivos de dados antes de sua lógica; itens mágicos podem ser gerados em todos os seis tipos sem exceção de execução.
- Troca de idioma não mistura idiomas em resultados e tabelas já renderizados.
- O botão de geração continua acessível em telas estreitas e controles condicionais não colapsam o layout.
- Todos os caminhos de CSS, JavaScript, ícones e links funcionam quando servidos de um subdiretório.
- Monstros lendários do bestiário (Ten-Eyed Oracle, Tarrasque, Wandering Merchant) mantêm os blocos de estatísticas corretos após correções de dados.

## Critério de conclusão da suíte

- `npm test` passa localmente e no CI.
- Fluxos essenciais de cada página passam no navegador sem erros de execução.
- A integração da masmorra confirma conteúdo de armadilha, hazards, tesouro e monstro, inclusive a troca de idioma.
- Testes que dependem de rolagens usam aleatoriedade controlada, sem depender de serviços externos.
- Cada nova funcionalidade acrescenta cobertura unitária da regra/tabela e cobertura de integração do fluxo visível.
