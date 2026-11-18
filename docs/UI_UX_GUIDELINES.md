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
