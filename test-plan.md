# Plano de testes

## Implementação atual

A infraestrutura usa `node:test` para testes unitários de contrato dos arquivos de dados e Playwright para integração no Chromium. Os scripts estão em `tests/unit/` e `tests/integration/`; `package.json` define os comandos e `.github/workflows/tests.yml` executa a suíte em pushes e pull requests. A execução local requer Node.js 22+, Python 3, `npm install` e `npx playwright install chromium`.

As funções de regras dos geradores ainda ficam dentro de IIFEs e não são diretamente importáveis. A cobertura unitária atual valida parsing, presença dos dados, tabelas não vazias, cobertura d100 e dimensões de tabelas mágicas. Os testes Playwright cobrem a geração real nas dez páginas e fluxos de variantes recém-adicionadas. Ao refatorar regras futuras para funções puras, complemente os contratos de dados com testes diretos dos limites e resultados da regra.

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
- **Tesouros:** faixa d100 por nível, chance de 50% para monstros errantes, gemas e multiplicador de gema gigante, subrolagens de item luxuoso, tipos de dádiva, qualidade, personalidade, tipo de item mágico e atributos específicos de armaduras, poções, pergaminhos, utilitários, varinhas e armas.
- **Personagem nível 0:** rolagens de atributos e tabelas de ancestralidade, background, alinhamento e equipamento, respeitando os dados e limites apresentados pela ferramenta.

## Testes de integração no navegador

Executar as páginas servidas por HTTP, tanto na raiz local quanto em caminho equivalente a subdiretório de publicação. Em cada teste, capturar erros de console e respostas de recursos locais com falha.

1. **Catálogo:** abrir a página principal, confirmar os dez cartões ativos, idioma selecionado, navegação para cada rota e ausência de links quebrados.
2. **Inicialização das páginas:** abrir cada gerador diretamente, confirmar que dados e lógica foram carregados na ordem certa e que as tabelas de referência aparecem.
3. **Geração ponta a ponta:** usar valores fixos nos controles e uma fonte aleatória controlada para gerar resultados reproduzíveis e verificar texto, estrutura e controles habilitados.
4. **Troca de idioma:** trocar PT/EN antes e depois de gerar; validar rótulos, opções, referências, resultados, idioma do documento e persistência após recarregar.
5. **Controles condicionais:** conferir campos que aparecem ou somem conforme modo, seleção, quantidade ou opção de geração, sem perder o valor relevante.
6. **Exportação:** validar copiar para área de transferência e baixar TXT, conteúdo, nome do arquivo e codificação dos caracteres acentuados.
7. **Fluxos entre geradores:** no assentamento, escolher resultados de taverna/loja e confirmar geração detalhada coerente; no terreno, verificar nomes direcionados ao gerador de assentamentos e referências cruzadas.
8. **Responsividade e acessibilidade básica:** verificar layouts móvel/desktop, associação de labels, ordem de tabulação, foco visível, botões desabilitados sem resultados e anúncio da região de resultados.

## Casos de regressão prioritários

- Gerador de masmorra carrega sem erro de sintaxe e não há cartões duplicados no catálogo.
- Gerador de tesouros carrega todos os arquivos de dados antes de sua lógica; itens mágicos podem ser gerados em todos os seis tipos sem exceção de execução.
- Troca de idioma não mistura idiomas em resultados e tabelas já renderizados.
- O botão de geração continua acessível em telas estreitas e controles condicionais não colapsam o layout.
- Todos os caminhos de CSS, JavaScript, ícones e links funcionam quando servidos de um subdiretório.

## Critério de conclusão da suíte

- `npm test` passa localmente e no CI.
- Fluxos essenciais de cada página passam no navegador sem erros de execução.
- A integração da masmorra confirma conteúdo de armadilha, hazards, tesouro e monstro, inclusive a troca de idioma.
- Testes que dependem de rolagens usam aleatoriedade controlada, sem depender de serviços externos.
- Cada nova funcionalidade acrescenta cobertura unitária da regra/tabela e cobertura de integração do fluxo visível.
