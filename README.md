# Shadowdark Tools

> Ferramentas para mestres e jogadores de **Shadowdark RPG**: geradores, tabelas de referência e utilitários para preparar aventuras.

[![Deploy to GitHub Pages](https://github.com/Tadeu-Raphael/shadowdark-tools/actions/workflows/deploy.yml/badge.svg)](https://github.com/Tadeu-Raphael/shadowdark-tools/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Geradores

A homepage separa as ferramentas para jogadores (Personagem Nível 0 e Festanças) das ferramentas para mestres (as outras dez). O catálogo oferece doze geradores. A interface pode ser usada em português (Brasil) ou inglês; as páginas lembram o idioma escolhido no navegador.

| Gerador | Recursos |
| --- | --- |
| **Personagem Nível 0** | Cria personagens de funil com atributos, ancestralidade, background, alinhamento e equipamento inicial. |
| **Festanças** | Gera resultados padrão ou expandidos, com gasto, consequência, acontecimentos e recompensas. |
| **Encontros** | Rola encontros por ambiente, inclui detalhes do encontro e oferece tabelas independentes de acontecimentos, rumores, armadilhas e perigos. |
| **Aventuras** | Combina as tabelas d20 de objetivo, complicação e nome de local. |
| **Monstros** | Cria monstros por nível médio do grupo, com função de combate, qualidade, força, fraqueza, ataques e até três mutações. |
| **NPCs** | Gera NPCs comuns, rivais individuais e grupos rivais, com nomes, características, ocupações e dados de grupo. |
| **Cidades e Assentamentos** | Cria assentamentos por tipo e distritos, pontos de interesse, tavernas, comidas, bebidas e lojas. |
| **Mapas de Masmorras** | Gera mapas esquemáticos com salas conectadas, perigo, objetivo e conteúdo detalhado vinculado aos geradores de monstros, tesouros, armadilhas e hazards. |
| **Terrenos Hexagonais** | Gera mapas de viagem pelo ermo com terreno, nível de perigo, pontos de interesse e cataclismos. A tabela de nomes de assentamentos está integrada ao gerador de assentamentos. |
| **Tesouros** | Gera tesouro por nível, itens mundanos e gemas, itens luxuosos, dádivas (juramentos, segredos e bênçãos) e itens mágicos com atributos por tipo. Inclui as tabelas de referência de tesouro, gemas, itens luxuosos, bênçãos e propriedades de armaduras, poções, pergaminhos, varinhas, utilitários e armas. |
| **Bestiário** | Referência com os 238 monstros do Livro de Regras, incluindo descrição, CA, PV, ataque, movimento, atributos e habilidades especiais. Oferece busca, filtros por nível, alinhamento e tipo, glossário de termos e conteúdo completo em português e inglês. Os dados foram validados contra o PDF oficial (v4.6). |
| **Magia** | Referência com as 85 magias do Livro de Regras, com busca e filtros por tier, classe e alcance. Inclui geradores de pergaminhos e varinhas (magia + aparência aleatórias) e rolagem de mishaps por tier, além de glossário e conteúdo bilíngue. |

Os resultados dos geradores podem ser copiados e baixados como TXT ou PDF. As tabelas de referência ficam acessíveis na própria ferramenta.

## Testes automatizados

Instale Node.js 22 ou superior e Python 3. Instale as dependências e o Chromium do Playwright, depois execute a suíte completa:

```bash
npm install
npx playwright install chromium
npm test
```

`npm run test:unit` valida os contratos e dimensões das tabelas. `npm run test:integration` executa os fluxos no Chromium, servindo o site localmente por HTTP. Os mesmos testes rodam em cada push e pull request pelo workflow `Tests`.

Ao adicionar ou alterar uma funcionalidade, inclua um teste unitário para regras/dados e um teste de integração para o fluxo observável na página. Para novos resultados aleatórios, controle a fonte aleatória no teste em vez de depender de uma rolagem imprevisível.

## Acesso online

**GitHub Pages:** <https://tadeu-raphael.github.io/shadowdark-tools/>

## Executar localmente

Clone o repositório e sirva a pasta raiz com um servidor HTTP:

```bash
git clone https://github.com/Tadeu-Raphael/shadowdark-tools.git
cd shadowdark-tools
python3 -m http.server 8000
```

Acesse <http://localhost:8000>. Também é possível usar `npx serve .`.

## Estrutura do projeto

```text
shadowdark-tools/
├── index.html
├── css/
│   ├── export-actions.css
│   ├── shadowdark-ui.css
│   ├── shadowdark-art-direction.css
│   └── landing.css
├── js/
│   ├── export-actions.js
│   ├── main.js
│   └── ui-icons.js
├── assets/icons/lucide/
├── generators/
│   ├── adventure-generator/
│   ├── bestiary/
│   ├── carousing-generator/
│   ├── dungeon-map-generator/
│   ├── encounter-generator/
│   ├── level-zero-character/
│   ├── magic/
│   ├── monster-generator/
│   ├── npc-generator/
│   ├── overland-hex-generator/
│   ├── settlement-generator/
│   └── treasure-generator/
├── licenses/
├── .github/workflows/deploy.yml
├── docs/
│   ├── ARCHITECTURE.md
│   ├── TEST_PLAN.md
│   └── UI_UX_GUIDELINES.md
├── AGENTS.md
├── LICENSE
└── README.md
```

Cada gerador tem sua página HTML, estilos e lógica próprios. Os geradores que usam tabelas separadas também incluem seus arquivos de dados.

## Interface e idiomas

- Direção visual monocromática: moldura preta, páginas brancas, títulos ornamentais e divisórias marcantes.
- Cabeçalhos de tabelas em preto e branco; texto funcional em fonte sem serifa de alto contraste.
- Layout responsivo para telas grandes e pequenas.
- Interface em português brasileiro e inglês.
- Idioma detectado pelo navegador e preferência guardada em `localStorage`.
- Ícones Lucide locais, servidos pelo projeto.

## Adicionar um gerador

1. Crie uma pasta em `generators/` com `index.html`, CSS e JavaScript próprios.
2. Inclua os arquivos de dados necessários para as tabelas.
3. Adicione o cartão bilíngue ao catálogo em `js/main.js`.
4. Use os estilos compartilhados em `css/shadowdark-ui.css` e verifique caminhos relativos para os recursos.

## Licenças e atribuição

- **Código:** MIT — consulte [LICENSE](LICENSE).
- **Ícones Lucide:** ISC — consulte `licenses/LUCIDE-ISC.txt`.
- **Fontes:** Google Fonts, com licenças OFL/SIL indicadas pelos respectivos projetos.
- **Shadowdark RPG:** propriedade de [The Arcane Library](https://thearcanelibrary.com/). Este é um projeto de fã não oficial.

## Contribuir

1. Faça um fork e crie uma branch para sua alteração.
2. Faça commits com mensagens claras.
3. Envie a branch e abra um Pull Request.

## Autor

**Tadeu Raphael** — [GitHub](https://github.com/Tadeu-Raphael)

---

*Shadowdark RPG é uma marca de The Arcane Library. Este projeto não é afiliado, endossado ou patrocinado pela The Arcane Library.*
