# Shadowdark Tools

> Ferramentas utilitárias para **Shadowdark RPG** — Geradores, calculadoras e referências rápidas para suas masmorras.

[![Deploy to GitHub Pages](https://github.com/Tadeu-Raphael/shadowdark-tools/actions/workflows/deploy.yml/badge.svg)](https://github.com/Tadeu-Raphael/shadowdark-tools/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🎲 Geradores Disponíveis

| Gerador | Descrição | Status |
|---------|-----------|--------|
| **Gerador de Personagem Nível 0** | Crie funis brutais com atributos 3d6, profissão aleatória, equipamento inicial e HP | ✅ Disponível |
| Gerador de Masmorras | Masmorras processuais com salas, corredores, armadilhas, monstros e tesouros | 🚧 Em desenvolvimento |
| Gerador de Encontros | Encontros balanceados por nível com reações, moral e tesouros | 📋 Planejado |
| Gerador de NPCs | NPCs memoráveis com personalidade, motivações e estatísticas rápidas | 📋 Planejado |
| Gerador de Tesouros | Tesouros aleatórios por nível: moedas, gemas, itens mágicos, pergaminhos | 📋 Planejado |
| Gerador de Grimórios | Grimórios únicos com feitiços, efeitos colaterais e corrupção | 📋 Planejado |

## 🌐 Acesso Online

**GitHub Pages:** https://tadeu-raphael.github.io/shadowdark-tools/

## 🚀 Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/Tadeu-Raphael/shadowdark-tools.git
cd shadowdark-tools

# Sirva com Python (recomendado)
python3 -m http.server 8000

# Ou com Node.js
npx serve .

# Ou abra index.html diretamente no navegador
```

Acesse: http://localhost:8000

## 🏗️ Estrutura do Projeto

```
shadowdark-tools/
├── index.html                    # Página inicial / catálogo
├── css/
│   ├── shadowdark-ui.css         # Tema visual compartilhado (estilo pergaminho Shadowdark)
│   └── landing.css               # Estilos da página inicial
├── js/
│   ├── ui-icons.js               # Substitui emojis por ícones Lucide SVG
│   └── main.js                   # Lógica da página inicial (i18n, renderização)
├── assets/
│   └── icons/lucide/             # Subconjunto local de ícones SVG Lucide
├── generators/
│   └── level-zero-character/     # Gerador de Personagem Nível 0
│       ├── index.html
│       ├── level-zero.css
│       └── level-zero.js
├── licenses/                     # Licenças de terceiros
├── .github/workflows/
│   └── deploy.yml                # GitHub Pages deployment
├── LICENSE
└── README.md
```

## 🎨 Tema Visual - Shadowdark

O design é inspirado na estética do **Shadowdark RPG**:

- **Cores:** Pergaminho envelhecido (`#f4efe6`), tinta escura (`#1a1612`), sangue (`#7b1f1f`), dourado (`#b8964a`), ferro (`#4a453d`)
- **Tipografia:** Cinzel (títulos), EB Garamond (corpo), JetBrains Mono (dados/código)
- **Texturas:** Grão de papel sutil, vinheta de pergaminho
- **Sombras:** Estilo "papel levantado" com offset 2-6px
- **Ícones:** Subconjunto local do Lucide (funciona offline e no GitHub Pages)

### Variáveis CSS Principais

```css
:root {
  --parchment: #f4efe6;        /* Fundo base */
  --parchment-raised: #faf7f0; /* Cards elevados */
  --parchment-sunk: #e8e0d4;   /* Áreas afundadas */
  --ink: #1a1612;              /* Texto principal */
  --ink-muted: #4a4238;        /* Texto secundário */
  --blood: #7b1f1f;            /* Acento primário (vermelho sangue) */
  --gold: #b8964a;             /* Acento secundário (dourado) */
  --iron: #4a453d;             /* Acento terciário (ferro) */
  --edge: #c4b8a6;             /* Bordas */
  --rule: #8b7355;             /* Linhas decorativas */
}
```

## 🌍 Internacionalização

Suporte a **Português (Brasil)** e **English** com:
- Detecção automática do idioma do navegador
- Persistência no `localStorage`
- Troca manual via botões de bandeira
- Textos da interface e dados dos geradores traduzidos

## 📦 Adicionando Novos Geradores

1. Crie uma pasta em `generators/novo-gerador/`
2. Adicione `index.html`, `novo-gerador.css`, `novo-gerador.js`
3. Cada gerador é **autocontido** (copia local do tema e ícones)
4. Registre no `js/main.js` no array `generators`
5. O gerador funcionará sozinho ou dentro do catálogo

## 📄 Licenças

- **Código:** MIT License — veja [LICENSE](LICENSE)
- **Ícones Lucide:** [ISC License](licenses/LUCIDE-ISC.txt)
- **Fontes Google Fonts:** [OFL/SIL](https://fonts.google.com/attribution)
- **Shadowdark RPG:** Propriedade de [The Arcane Library](https://thearcanelibrary.com/) — este é um projeto de fã não oficial

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/novo-gerador`)
3. Commit suas mudanças (`git commit -m 'Add novo gerador'`)
4. Push para a branch (`git push origin feature/novo-gerador`)
5. Abra um Pull Request

## 👨‍💻 Autor

**Tadeu Raphael** — [GitHub](https://github.com/Tadeu-Raphael)

---

*Shadowdark RPG é uma marca registrada de The Arcane Library. Este projeto não é afiliado, endossado ou patrocinado pela The Arcane Library.*
