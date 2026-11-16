# Arquitetura do Shadowdark Tools

## Visão geral

Shadowdark Tools é um site estático, executado no navegador e publicado no GitHub Pages. Não há servidor de aplicação, API, banco de dados, etapa de compilação ou gerenciador de dependências configurado no repositório. As páginas podem ser servidas localmente por HTTP, por exemplo com `python3 -m http.server 8000`.

## Camadas

- **Catálogo:** `index.html`, `css/landing.css` e `js/main.js` formam a página principal. `main.js` define o catálogo dos geradores, monta seus cartões e administra idioma e navegação.
- **Geradores:** cada diretório em `generators/` contém a página `index.html` e, normalmente, arquivos JavaScript, dados e CSS próprios. A página carrega scripts em ordem explícita; dados expostos em `window` devem ser carregados antes da lógica que os consome.
- **Apresentação compartilhada:** `css/shadowdark-ui.css` define elementos e tokens comuns; `css/shadowdark-art-direction.css` concentra a direção visual. `css/landing.css` é específico do catálogo.
- **Recursos locais:** ícones Lucide ficam em `assets/icons/lucide/`; informações de licença estão em `licenses/`.
- **Publicação:** `.github/workflows/deploy.yml` publica os arquivos estáticos no GitHub Pages.

## Fluxo de um gerador

1. O navegador carrega a página e seus estilos, dados e lógica pela ordem declarada no HTML.
2. A lógica inicializa idioma e controles, registra eventos e cria tabelas de referência.
3. A ação do usuário escolhe opções e pede uma ou mais rolagens aleatórias.
4. O gerador combina resultados com tabelas locais e monta o resultado no DOM.
5. Quando disponíveis, ações de copiar e baixar usam o conteúdo renderizado. A preferência de idioma é guardada em `localStorage`.

A maioria dos geradores mantém estado e funções dentro de uma IIFE, sem módulos ES nem API pública. Alguns scripts de dados publicam objetos globais, como `window.TREASURE_DATA`, que são consumidos pelo script do gerador. A ordem das tags `<script>` é, portanto, parte do contrato de execução.

## Geradores atuais

O catálogo contém dez ferramentas: personagem nível 0, festanças, encontros, aventuras, monstros, NPCs, assentamentos, terrenos hexagonais, tesouros e mapas de masmorras. A tabela de recursos e a estrutura de pastas correspondem ao README.

## Idioma e conteúdo

As interfaces oferecem português brasileiro e inglês. Os geradores mantêm traduções e tabelas no próprio código ou em arquivos de dados associados. Algumas ferramentas atualizam texto da interface, referências e resultados já gerados ao trocar o idioma; essa expectativa deve ser coberta pelos testes de cada página.

## Limites arquiteturais atuais

- Há lógica, DOM, localização e aleatoriedade frequentemente acoplados em scripts de página. Funções de rolagem não são uniformemente exportadas ou isoladas, o que dificulta testes unitários diretos.
- A infraestrutura de testes atual usa `node:test` e Playwright; funções de regras ainda acopladas a IIFEs limitam testes unitários a contratos de dados até que sejam extraídas para funções puras.
- Os dados globais exigem nomes únicos e ordem de carregamento coerente.
- O site precisa funcionar em caminhos relativos sob subdiretórios, como no GitHub Pages, além de servir na raiz local.

## Direção recomendada para testes

Manter as tabelas e regras como lógica pura sempre que possível, injetar ou encapsular a fonte aleatória para tornar rolagens determinísticas e testar apresentação e interações em DOM separado. A suíte atual e seus comandos estão descritos em [test-plan.md](test-plan.md).
