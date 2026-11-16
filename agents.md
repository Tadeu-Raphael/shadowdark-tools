# Instruções para agentes e contribuidores

## Contexto do projeto

Este repositório é um site estático de ferramentas para Shadowdark RPG. Leia `README.md` para a lista de recursos e `architecture.md` para a estrutura e os fluxos. Não há backend nem etapa de build. Os testes usam `node:test` e Playwright; veja `test-plan.md` para instalar e executar.

## Regras de alteração

- Preserve a arquitetura estática e as convenções existentes, salvo quando a tarefa pedir uma mudança arquitetural.
- Mantenha cada ferramenta autocontida em `generators/<nome>/`, com HTML, lógica, dados e CSS próprios quando aplicável.
- Se separar tabelas de dados em arquivos, carregue-os antes do script consumidor e use um nome global exclusivo. Revise todos os caminhos relativos para funcionar em páginas aninhadas e no GitHub Pages.
- Preserve os dois idiomas suportados: português brasileiro e inglês. Atualize interface, resultados, tabelas de referência e textos acessíveis em ambos os idiomas quando aplicável.
- Reutilize tokens e componentes de `css/shadowdark-ui.css` e siga `css/shadowdark-art-direction.css`; evite estilos globais novos quando a mudança é específica de uma ferramenta.
- Preserve acessibilidade: rótulos associados aos controles, botões semânticos, foco visível, texto alternativo apropriado e regiões de resultado anunciáveis.
- Evite dependências, processo de build ou serviços externos novos sem necessidade. Não inclua segredos nem conteúdo de usuário nos arquivos.
- Ao adicionar uma ferramenta, atualize `js/main.js`, `README.md` e a documentação de arquitetura se a estrutura ou os fluxos mudarem.
- Ao alterar tabelas ou regras, confira a integridade dos dados, os limites das rolagens e as referências de origem. Não invente resultados ausentes.

## Testes e validação

- Antes de concluir qualquer alteração de código, execute `npm test` e corrija falhas relacionadas à mudança. Se a suíte completa não puder ser executada, execute os testes aplicáveis disponíveis e informe claramente o bloqueio e o que ficou sem validar.
- Para cada funcionalidade nova, crie testes unitários para regras e dados e testes Playwright para o fluxo visível no navegador. Para correções, acrescente ou ajuste casos de regressão que reproduzam o problema.
- Atualize `test-plan.md` na mesma alteração para registrar a nova cobertura, os cenários relevantes e lacunas que permanecerem. Se o escopo dos comandos ou ferramentas de teste mudar, atualize também `package.json`, o README e o workflow de CI.
- Torne os testes aleatórios determinísticos com uma fonte de aleatoriedade controlada. Cubra limites, variantes e idiomas quando forem afetados.
- Não afirme que algo foi validado por testes sem executar os testes correspondentes. Para alterações apenas documentais, revise links, nomes de arquivos e consistência com a árvore do repositório; não execute testes sem necessidade.

## Entrega

Descreva os arquivos alterados, a intenção, as validações efetivamente realizadas e limitações relevantes. Não diga que testes passaram quando nenhum teste foi executado.
