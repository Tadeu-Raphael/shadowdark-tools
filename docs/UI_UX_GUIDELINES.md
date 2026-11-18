# Diretrizes de UI e UX

## Direção visual

- Preserve a identidade monocromática inspirada em Shadowdark: superfícies claras, molduras escuras e contraste forte.
- Use títulos ornamentais para cabeçalhos e uma fonte sem serifa legível para controles, instruções e resultados.
- Separe conteúdo em blocos claros, com divisórias e respiro consistente. Evite decorar elementos que não ajudam a leitura.
- Reutilize variáveis e componentes de `css/shadowdark-ui.css` e `css/shadowdark-art-direction.css`.

## Controles e ações

- Use controles nativos com rótulos visíveis e botões semânticos com estados de foco e desabilitado perceptíveis.
- Mantenha ações relacionadas próximas dos resultados. Ações de copiar, TXT e PDF devem usar ícones Lucide locais, alinhados ao texto e com contraste herdado do botão.
- Desabilite exportações antes de haver resultados. As exportações devem representar os resultados atuais, não as tabelas de referência da página.
- Em telas estreitas, permita que grupos de ações quebrem linha sem cortar rótulos ou reduzir a área acionável.

## Ícones de botões

- **Regra de contraste**: ícones de botões de ação (copiar, TXT, PDF, etc.) que ficam sobre fundo claro (`--parchment-raised`) devem permanecer **escuros** (`filter: none`). Apenas botões primários (fundo preto/`--blood`) recebem `filter: brightness(0) invert(1)` para ficarem brancos.
- Nunca aplique `invert(1)` a um seletor de botão genérico (ex.: `.algum-button img`), pois isso afeta também os botões de ação claros e torna os ícones invisíveis. Escopo a regra ao modificador primário (ex.: `.algum-button--primary img`).
- O override central em `css/shadowdark-art-direction.css` (`[class*="-button"]:not([class*="primary"]) img`) força `filter: none` nos botões não primários; mantenha-o e não reintroduza `invert(1)` em seletores amplos.

## Painéis de filtros

- Todo painel de filtros deve seguir o padrão `*-controls card`: `display: grid`, `grid-template-columns` responsivo, `gap: .85rem`, `padding: 1.2rem`, `border: 1px solid var(--edge)`, `border-radius: var(--radius-md)`, `background: var(--parchment-raised)` e `box-shadow: var(--shadow-shallow)`.
- Cada campo fica em um `<div>` com `<label>` associado + `<select class="form-select">` (ou `<input>`); o botão primário usa `min-height: 2.65rem` e `background: var(--blood)`.
- Consulte `generators/npc-generator/npc.css` como referência. Não introduza classes de controle novas quando o padrão existir.

## Cabeçalho e navegação

- Todas as páginas devem ter botão de voltar no header com ícone SVG de seta + classe `home-link` + `id="nav-back"` + `<span id="nav-back-text">`, seguindo o padrão de `generators/level-zero-character/index.html`.
- O JS deve atualizar `#nav-back-text`, `#nav-generators` e `#nav-about` no `updateLanguage`/`localize` para que os textos de navegação acompanhem a troca de idioma.

## Rodapé e alternância de idioma

- Todas as páginas devem usar botões de bandeira (`.flag-button` com SVG inline) para alternância de idioma, seguindo o padrão de `generators/level-zero-character/index.html`. Não use botões de texto "PT/EN".
- As linhas de crédito do rodapé (`#footer-credit`, `#footer-subcredit`, `#footer-credit-author`) contêm links `<a>` e devem ser atualizadas com `innerHTML`, nunca `textContent`.
- O seletor CSS `[class$="-language-switch"] .flag-button` em `css/shadowdark-ui.css` sobrescreve estilos por gerador para garantir que os botões de bandeira tenham aparência consistente.

## Conteúdo e acessibilidade

- Preserve português brasileiro e inglês em páginas com alternância de idioma.
- Associe cada campo ao seu rótulo, use texto acessível para ações com ícones e mantenha foco visível.
- Resultados dinâmicos devem permanecer em regiões anunciáveis por tecnologia assistiva.
- Não use cor ou ícone como única indicação de estado.

## Responsividade

- Projete primeiro para leitura em coluna única e expanda grades quando houver espaço.
- Evite rolagem horizontal da página. Tabelas largas podem usar contêiner próprio com rolagem horizontal.
- Garanta que filtros, botões e resultados continuem utilizáveis em largura móvel.

## Exportação

- Copiar deve enviar somente os resultados gerados para a área de transferência.
- TXT deve preservar quebras de linha e caracteres do idioma selecionado.
- PDF deve gerar um arquivo baixável com o resultado atual, sem dependência de serviços externos.
- **PDF elegante (cartões)**: páginas com fichas, personagens ou resultados estruturados devem usar `window.ShadowdarkExport.downloadCardsPdf({ title, subtitle, cards, footerLabel })`, que produz cabeçalho preto, faixa vermelha, blocos de atributos, seções e rodapé. Cada gerador passa seu próprio `footerLabel` (ex.: `'SHADOWDARK TOOLS  -  PERSONAGENS'`). Não use `createPdf`/`downloadPdf` de texto simples para esses casos.

## Melhoria contínua e padronização

Estas diretrizes são um contrato vivo. Sempre que um ajuste de estilo, padrão visual ou convenção de UI for aplicado manualmente em uma página, siga o ciclo abaixo para que o conhecimento não se perca e o padrão se propague automaticamente:

1. **Reconheça o padrão**: ao notar que uma página está fora do padrão (filtros, botões, rodapé, cabeçalho, ícones, espaçamentos), trate isso como um bug de UI, não como preferência estética.
2. **Corrija na origem e propague**: aplique a correção no componente compartilhado (`css/shadowdark-ui.css`, `css/shadowdark-art-direction.css`, `js/export-actions.js`) sempre que o problema for global. Só edite o CSS de um gerador quando a mudança for legítima e específica dele.
3. **Documente a regra**: adicione ou atualize o item correspondente neste arquivo (e no `AGENTS.md` quando afetar o fluxo de trabalho dos agentes), descrevendo o padrão, o seletor/token envolvido e o motivo.
4. **Varredura de consistência**: antes de concluir, verifique as demais páginas com busca por padrão (ex.: `grep` por `invert(1)`, `textContent`, `control-group`, `data-export-pdf`) para confirmar que nenhuma outra página ficou divergente.
5. **Registre a validação**: inclua a verificação no `docs/TEST_PLAN.md` e, quando fizer sentido, um teste automatizado que falhe se o padrão for quebrado no futuro.

### Checklist rápido de padronização

- [ ] Os filtros seguem o padrão `*-controls card`?
- [ ] Os ícones de ação estão escuros e os ícones primários brancos?
- [ ] O rodapé usa `innerHTML` nas linhas de crédito e bandeiras `.flag-button`?
- [ ] O cabeçalho tem o botão de voltar com `home-link` + `#nav-back-text`?
- [ ] O PDF usa `downloadCardsPdf` com `footerLabel` próprio?
- [ ] A troca de idioma atualiza navegação, rótulos, resultados e rodapé?
- [ ] A busca por padrões equivalentes nas outras páginas não retornou divergências?
