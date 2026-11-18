# Plano de testes

## Implementação atual

A infraestrutura usa `node:test` para testes unitários de contrato dos arquivos de dados e Playwright para integração no Chromium. Os scripts estão em `tests/unit/` e `tests/integration/`; `package.json` define os comandos e `.github/workflows/tests.yml` executa a suíte em pushes e pull requests. A execução local requer Node.js 22+, Python 3, `npm install` e `npx playwright install chromium`.

Muitas funções de regras dos geradores ainda ficam dentro de IIFEs e não são diretamente importáveis. A cobertura unitária valida parsing, presença dos dados, tabelas não vazias, cobertura d100, dimensões de tabelas mágicas e estrutura/segmentação dos PDFs gerados. As APIs de nomes, regras compartilhadas de personagem e construtor são carregadas em `node:vm` por `tests/unit/character-builder.test.mjs`, com aleatoriedade injetada. Os testes Playwright cobrem geração real e os fluxos do construtor. Ao refatorar regras futuras para funções puras, complemente os contratos de dados com testes diretos dos limites e resultados da regra.

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
- **Nomes duplos:** dois resultados distintos da tabela da ancestralidade, PT/EN, limites d20=1/20 e colisão resolvida sem laço de rerrolagem; mesma função compartilhada pelo nível 0, gerador nível 1–10 e construtor.
- **Construtor de personagem:** atributos 3d6 nos limites 3/18; bônus de CON para PV limitado a no mínimo +1, aplicado uma vez, e vantagem dos anões com os dois dados por nível; talento humano extra, escolhas bilíngues de todos os resultados 2d6, bônus de atributos, CA, magias adicionais e rerrolagem de iniciativa duplicada sem laço; divindades por alinhamento, idiomas comuns/raros, permissões de arma/armadura, preço em cp/sp/gp, orçamento, capacidade e incompatibilidade de escudo com arma de duas mãos.
- **Personagens nível 1–10:** rolagem de atributos 3d6 e modificadores, PV por nível (dado da classe + mod CON apenas no 1º nível, mínimo 1; demais níveis apenas o dado da classe; anões rolam com vantagem e o registro mostra ambos os valores), CA base, ouro inicial 2d6×5, arma e armadura permitidas por classe, idiomas por ancestralidade e classe, magias conhecidas por nível e tier, talentos por nível (1/3/5/7/9) com destaque do nível de cada talento, e título por faixa de nível e alinhamento.

## Testes de integração no navegador

Executar as páginas servidas por HTTP, tanto na raiz local quanto em caminho equivalente a subdiretório de publicação. Em cada teste, capturar erros de console e respostas de recursos locais com falha.

1. **Catálogo:** abrir a página principal, confirmar os quinze cartões ativos agrupados entre jogadores (personagem nível 0, personagens nível 1–10, construtor e festanças) e mestres (onze ferramentas), confirmar que os cartões de jogadores ficam em uma grade de 3 colunas, alternar os títulos de grupo PT/EN, validar ícone e ação próprios do construtor, navegação e ausência de links quebrados.
2. **Inicialização das páginas:** abrir cada gerador diretamente, confirmar que dados e lógica foram carregados na ordem certa e que as tabelas de referência aparecem.
3. **Geração ponta a ponta:** usar valores fixos nos controles e uma fonte aleatória controlada para gerar resultados reproduzíveis e verificar texto, estrutura e controles habilitados.
4. **Bestiário:** abrir a página, confirmar os 238 cartões e o contador, validar que o conteúdo pt-BR aparece por padrão, trocar para EN e conferir que descrição e habilidades mudam, que os nomes de habilidades continuam em negrito, que a preferência persiste após recarregar e que a busca encontra monstros pelo conteúdo localizado.
5. **Magia:** abrir a página, confirmar os 85 cartões e o contador, validar que a descrição pt-BR aparece por padrão, trocar para EN e conferir que o texto muda, que o filtro de tier restringe a lista, que a preferência persiste após recarregar e que os geradores de pergaminho, varinha e mishap produzem resultados visíveis.
6. **Itens mágicos:** abrir a página, confirmar os 91 cartões e o contador, validar que o nome e a descrição pt-BR aparecem por padrão, trocar para EN e conferir que o texto muda, que o filtro de tipo restringe a lista, que a preferência persiste após recarregar e que os geradores de pergaminho, varinha e item mágico produzem resultados visíveis.
7. **Personagens nível 1–10:** abrir a página, gerar personagem de 1º nível e conferir atributos, PV (dado da classe + mod CON, mínimo 1), CA, título, talentos e equipamento; gerar mago de 10º nível e conferir magias por tier; trocar PT/EN e validar que título, talentos e magias são re-localizados sem re-rolar; ajustar a quantidade e conferir a contagem de cartões; validar que o registro de rolagens aparece após gerar, contém linhas para atributos, classe, ancestralidade, alinhamento, equipamento, talentos e magias, e que o cabeçalho e rótulos são localizados PT/EN; validar que talentos mostram o nível de cada rolagem (1/3/5/7/9).
8. **Troca de idioma:** trocar PT/EN antes e depois de gerar; validar rótulos, opções, referências, resultados, idioma do documento e persistência após recarregar.
9. **Controles condicionais:** conferir campos que aparecem ou somem conforme modo, seleção, quantidade ou opção de geração, sem perder o valor relevante.
10. **Exportação:** validar copiar para área de transferência, ícones dos botões e downloads TXT/PDF após gerar; verificar nome, MIME type e conteúdo atual nos quatorze geradores. Nas páginas com PDF elegante (nível 0 e personagens nível 1–10), confirmar que o arquivo sai no formato de cartões (cabeçalho preto, faixa vermelha, blocos de atributos, seções e rodapé com o rótulo do gerador), não como texto simples. No nível 0, verificar PDF com uma ficha por página, título, cartões de personagem formatados e nome em destaque e ausência de impressão da página.
11. **Fluxos entre geradores:** no assentamento, escolher resultados de taverna/loja e confirmar geração detalhada coerente; no terreno, verificar nomes direcionados ao gerador de assentamentos e referências cruzadas.
12. **Responsividade e acessibilidade básica:** verificar layouts móvel/desktop, associação de labels, ordem de tabulação, foco visível, botões desabilitados sem resultados e anúncio da região de resultados.
13. **Construtor guiado:** em `tests/integration/character-builder.spec.mjs`, percorrer as sete etapas como guerreiro anão; impedir avanço sem nome, rolagens ou orçamento; auditar ambos os dados de PV, preservar estado ao voltar e trocar idioma; resolver magias/idiomas de mago, divindades e talento extra humano de sacerdote; conferir TXT/PDF da ficha real, reinício confirmado e layout em 375 px. Validar nomes digitados como texto, sem interpretar HTML.
14. **Regressão de nomes:** selecionar as seis ancestralidades pelo rótulo visível no gerador e conferir o nome duplo correspondente, auditoria dos dois d20 e TXT; manter o nome após troca PT/EN e confirmar que o nível 0 continua gerando nomes duplos.

### Limites da cobertura do construtor

- Cria personagens de nível 1; progressão de nível não faz parte deste fluxo.
- Rolagens de item mágico concedido por talento são resolvidas no catálogo com o mestre. Bônus de ataque e habilidades condicionais são descritos, não simulados como combate.
- Fichas não persistem após recarregar ou fechar a página; exporte antes de sair.
- O fluxo completo de ladino, a integração da área de transferência (dependente de permissões) e uma auditoria com leitor de tela não estão automatizados. Os contratos de talentos e permissões de todas as classes são cobertos na camada unitária.

## Casos de regressão prioritários

- Gerador de masmorra carrega sem erro de sintaxe e não há cartões duplicados no catálogo.
- Painéis de filtros de todos os geradores compartilham o mesmo padrão visual (`*-controls card`) e não introduzem classes de controle divergentes.
- Ícones de botões de ação permanecem escuros em fundos claros e apenas botões primários usam ícones brancos invertidos; nenhum seletor amplo de botão reintroduz `invert(1)`.
- Exportações de PDF de fichas e personagens usam o layout de cartões (`downloadCardsPdf`) com `footerLabel` próprio de cada gerador.
- Gerador de tesouros carrega todos os arquivos de dados antes de sua lógica; itens mágicos podem ser gerados em todos os seis tipos sem exceção de execução.
- Troca de idioma não mistura idiomas em resultados e tabelas já renderizados.
- O botão de geração continua acessível em telas estreitas e controles condicionais não colapsam o layout.
- Todos os caminhos de CSS, JavaScript, ícones e links funcionam quando servidos de um subdiretório.
- Monstros lendários do bestiário (Ten-Eyed Oracle, Tarrasque, Wandering Merchant) mantêm os blocos de estatísticas corretos após correções de dados.
- O registro de rolagens do gerador de personagens nível 1–10 aparece após gerar, contém todas as categorias esperadas e é localizado corretamente em PT/EN.
- O PV do gerador de personagens nível 1–10 segue a regra: 1º nível = dado da classe + mod CON (mínimo 1); demais níveis = apenas o dado da classe; anões rolam com vantagem (duas rolagens, fica o maior) e o registro de rolagens mostra ambos os valores.
- Talentos do gerador de personagens nível 1–10 mostram o nível de cada rolagem (1/3/5/7/9) em destaque.

## Critério de conclusão da suíte

- `npm test` passa localmente e no CI.
- Fluxos essenciais de cada página passam no navegador sem erros de execução.
- A integração da masmorra confirma conteúdo de armadilha, hazards, tesouro e monstro, inclusive a troca de idioma.
- Testes que dependem de rolagens usam aleatoriedade controlada, sem depender de serviços externos.
- Cada nova funcionalidade acrescenta cobertura unitária da regra/tabela e cobertura de integração do fluxo visível.
