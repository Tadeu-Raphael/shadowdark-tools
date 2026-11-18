# Arquitetura do Shadowdark Tools

## Visão geral

Shadowdark Tools é um site estático, executado no navegador e publicado no GitHub Pages. Não há servidor de aplicação, API, banco de dados ou etapa de compilação. O npm é usado para dependências e execução dos testes, sem dependência de runtime para os geradores. As páginas podem ser servidas localmente por HTTP, por exemplo com `python3 -m http.server 8000`.

## Camadas

- **Catálogo:** `index.html`, `css/landing.css` e `js/main.js` formam a página principal. `main.js` define o catálogo dos geradores, monta seus cartões e administra idioma e navegação.
- **Geradores:** cada diretório em `generators/` contém a página `index.html` e, normalmente, arquivos JavaScript, dados e CSS próprios. A página carrega scripts em ordem explícita; dados expostos em `window` devem ser carregados antes da lógica que os consome.
- **Apresentação compartilhada:** `css/shadowdark-ui.css` define elementos e tokens comuns; `css/shadowdark-art-direction.css` concentra a direção visual. `css/landing.css` é específico do catálogo; `css/export-actions.css` padroniza os ícones de copiar/TXT/PDF.
- **Recursos locais:** ícones Lucide ficam em `assets/icons/lucide/`; informações de licença estão em `licenses/`.
- **Publicação:** `.github/workflows/deploy.yml` publica os arquivos estáticos no GitHub Pages.

## Fluxo de um gerador

1. O navegador carrega a página e seus estilos, dados e lógica pela ordem declarada no HTML.
2. A lógica inicializa idioma e controles, registra eventos e cria tabelas de referência.
3. A ação do usuário escolhe opções e pede uma ou mais rolagens aleatórias.
4. O gerador combina resultados com tabelas locais e monta o resultado no DOM.
5. As ações compartilhadas de PDF em `js/export-actions.js` criam localmente um PDF paginado do conteúdo dos resultados; ações de copiar e TXT usam o conteúdo renderizado. A preferência de idioma é guardada em `localStorage`.

A maioria dos geradores mantém estado e funções dentro de uma IIFE, sem módulos ES nem API pública. Alguns scripts de dados publicam objetos globais, como `window.TREASURE_DATA`, que são consumidos pelo script do gerador. Tabelas de armadilhas e hazards agora são compartilhadas entre os geradores de encontros e de masmorras; dados de monstros e tesouros também alimentam as salas da masmorra. A ordem das tags `<script>` é, portanto, parte do contrato de execução.

## Geradores atuais

O catálogo contém quinze ferramentas: personagem nível 0, personagens nível 1–10, construtor de personagem, festanças, encontros, aventuras, monstros, NPCs, assentamentos, terrenos hexagonais, tesouros, mapas de masmorras, bestiário, magia e itens mágicos. A tabela de recursos e a estrutura de pastas correspondem ao README.

## Criação guiada de personagens

`generators/character-builder/` contém uma página independente com sete etapas de criação de personagem de nível 1. `builder-rules.js` publica `window.ShadowdarkBuilderRules`, com regras testáveis sem DOM e aleatoriedade injetável; `builder.js` controla o rascunho em memória, a navegação, validação, localização e exportação. Não há persistência da ficha nem comunicação com serviços.

O construtor e o gerador nível 1–10 carregam `generators/character-generator/character-data.js` antes de `character-rules.js` (`window.ShadowdarkCharacterRules`), que compartilha modificadores, PV com auditoria da vantagem dos anões e permissões de equipamento. Ambos e o nível 0 carregam `js/character-names.js` (`window.ShadowdarkCharacterNames`), que combina dois resultados distintos da tabela local de nomes da ancestralidade. As páginas devem carregar esses scripts antes de seus consumidores.

Voltar etapas e trocar idioma preserva as escolhas e rolagens. Trocar ancestralidade ou classe invalida PV/talentos e escolhas dependentes; editar atributos recalcula os bônus sem rolar PV novamente. O construtor aplica escolhas de talentos que alteram atributos, magias conhecidas ou CA; bônus de ataque e habilidades condicionais permanecem descritos na ficha. O talento de item mágico oferece acesso ao catálogo para resolução com o mestre, sem item automático no inventário. Copiar, TXT e PDF usam a mesma representação da ficha revisada e incluem o registro de rolagens; o PDF usa `downloadCardsPdf` com rodapé próprio.

## Idioma e conteúdo

As interfaces oferecem português brasileiro e inglês. Os geradores mantêm traduções e tabelas no próprio código ou em arquivos de dados associados. Algumas ferramentas atualizam texto da interface, referências e resultados já gerados ao trocar o idioma; essa expectativa deve ser coberta pelos testes de cada página.

O bestiário segue um contrato de dados bilíngue próprio: `generators/bestiary/bestiary-data.js` mantém os campos canônicos em inglês (`description`, `atk`, `mv`) e espelha cada um em `*_pt`, enquanto `abilities` é uma lista de pares `{ en, pt }`. O script do bestiário escolhe o campo conforme o idioma ativo e mantém termos de alcance e movimento (`near`, `far`, `close`, `double`, `swim`, `fly`, `climb`, `burrow`, `teleport`) e o jargão de regras em inglês por design. A preferência de idioma usa a chave compartilhada `shadowdark-tools-lang`. Os 238 blocos de estatísticas foram validados contra o PDF oficial (v4.6) e um teste de regressão protege os monstros lendários contra deslocamentos de dados.

A ferramenta de magia segue o mesmo padrão: `generators/magic/magic-data.js` publica `window.MAGIC_DATA` com as 85 magias (`name`, `tier`, `classes`, `duration`, `range`, `description`, `description_pt`), as três tabelas de mishap por tier e as tabelas de aparência de pergaminho e varinha. Nomes de magias, tiers, durações e alcances permanecem em inglês nos dois idiomas; apenas a prosa é traduzida.

## Limites arquiteturais atuais

- Há lógica, DOM, localização e aleatoriedade frequentemente acoplados em scripts de página. Funções de rolagem não são uniformemente exportadas ou isoladas, o que dificulta testes unitários diretos.
- A infraestrutura de testes atual usa `node:test` e Playwright; muitas funções ainda acopladas a IIFEs limitam testes unitários a contratos de dados. As regras e os nomes compartilhados do construtor já possuem testes diretos com aleatoriedade controlada.
- Os dados globais exigem nomes únicos e ordem de carregamento coerente.
- O site precisa funcionar em caminhos relativos sob subdiretórios, como no GitHub Pages, além de servir na raiz local.

## Direção recomendada para testes

Manter as tabelas e regras como lógica pura sempre que possível, injetar ou encapsular a fonte aleatória para tornar rolagens determinísticas e testar apresentação e interações em DOM separado. A suíte atual e seus comandos estão descritos em [TEST_PLAN.md](TEST_PLAN.md).
