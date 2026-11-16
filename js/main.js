/**
 * Shadowdark Tools - Main Landing Page Logic
 * Gerencia o catálogo de geradores, troca de idioma e navegação
 */

(function () {
    "use strict";

    // Dados dos geradores disponíveis
    const generators = [
        {
            id: "level-zero-character",
            audience: "players",
            category: { "pt-BR": "PERSONAGEM", en: "CHARACTER" },
            title: { "pt-BR": "Gerador de Personagem Nível 0", en: "Level 0 Character Generator" },
            description: {
                "pt-BR": "Monte um grupo de funis brutais com atributos 3d6, ancestralidade, background e equipamento inicial.",
                en: "Build a brutal funnel party with 3d6 attributes, ancestry, background, and starting gear."
            },
            icon: "user.svg",
            href: "generators/level-zero-character/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "carousing-generator",
            audience: "players",
            category: { "pt-BR": "FESTANÇAS", en: "CAROUSING" },
            title: { "pt-BR": "Gerador de Festanças", en: "Carousing Generator" },
            description: {
                "pt-BR": "Role o resultado de uma festança no estilo Shadowdark, com opção de acontecimentos expandidos.",
                en: "Roll a Shadowdark-style carousing outcome, with an expanded events option."
            },
            icon: "coins.svg",
            href: "generators/carousing-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "encounter-generator",
            audience: "gms",
            category: { "pt-BR": "ENCONTROS", en: "ENCOUNTERS" },
            title: { "pt-BR": "Gerador de Encontros", en: "Encounter Generator" },
            description: {
                "pt-BR": "Gere encontros aleatórios usando as 22 tabelas d100 por ambiente do livro de regras.",
                en: "Generate random encounters using 22 environment-based d100 tables from the rulebook."
            },
            icon: "sword.svg",
            href: "generators/encounter-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "adventure-generator",
            audience: "gms",
            category: { "pt-BR": "AVENTURAS", en: "ADVENTURES" },
            title: { "pt-BR": "Gerador de Aventuras", en: "Adventure Generator" },
            description: {
                "pt-BR": "Crie objetivos, obstáculos e nomes de locais combinando as tabelas d20 do livro.",
                en: "Create goals, obstacles, and adventuring site names from the book’s d20 tables."
            },
            icon: "scroll-text.svg",
            href: "generators/adventure-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "monster-generator",
            audience: "gms",
            category: { "pt-BR": "MONSTROS", en: "MONSTERS" },
            title: { "pt-BR": "Gerador de Monstros", en: "Monster Generator" },
            description: {
                "pt-BR": "Crie monstros com nível, função de combate, forças, fraquezas e mutações.",
                en: "Create monsters with a level, combat role, strengths, weaknesses, and mutations."
            },
            icon: "skull.svg",
            href: "generators/monster-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "npc-generator",
            audience: "gms",
            category: { "pt-BR": "NPCs", en: "NPCs" },
            title: { "pt-BR": "Gerador de NPCs", en: "NPC Generator" },
            description: {
                "pt-BR": "Crie NPCs marcantes, rivais individuais ou grupos de exploradores rivais.",
                en: "Create memorable NPCs, individual rivals, or rival adventuring parties."
            },
            icon: "user.svg",
            href: "generators/npc-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "settlement-generator",
            audience: "gms",
            category: { "pt-BR": "CIDADES", en: "SETTLEMENTS" },
            title: { "pt-BR": "Gerador de Cidades e Assentamentos", en: "City & Settlement Generator" },
            description: {
                "pt-BR": "Crie assentamentos por distritos e gere tavernas, pontos de interesse e lojas.",
                en: "Build settlements by district and generate taverns, points of interest, and shops."
            },
            icon: "map.svg",
            href: "generators/settlement-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "overland-hex-generator",
            audience: "gms",
            category: { "pt-BR": "TERRENOS", en: "TERRAIN" },
            title: { "pt-BR": "Gerador de Terrenos", en: "Overland Terrain Generator" },
            description: {
                "pt-BR": "Crie mapas hexagonais com terrenos, níveis de perigo, cataclismos e pontos de interesse.",
                en: "Create hex maps with terrain, danger levels, cataclysms, and points of interest."
            },
            icon: "map.svg",
            href: "generators/overland-hex-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "treasure-generator",
            audience: "gms",
            category: { "pt-BR": "TESOUROS", en: "TREASURE" },
            title: { "pt-BR": "Gerador de Tesouros", en: "Treasure Generator" },
            description: {
                "pt-BR": "Role tesouros d100 por nível e verifique a chance de monstros errantes carregarem saque.",
                en: "Roll level-based d100 treasure and check whether wandering monsters carry loot."
            },
            icon: "gem.svg",
            href: "generators/treasure-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        },
        {
            id: "dungeon-map-generator",
            audience: "gms",
            category: { "pt-BR": "MASMORRAS", en: "DUNGEONS" },
            title: { "pt-BR": "Gerador de Mapas de Masmorras", en: "Dungeon Map Generator" },
            description: {
                "pt-BR": "Crie mapas esquemáticos com salas, objetivo, tesouros, monstros e perigos.",
                en: "Create schematic maps with rooms, objectives, treasure, monsters, and hazards."
            },
            icon: "map.svg",
            href: "generators/dungeon-map-generator/index.html",
            badge: { "pt-BR": "DISPONÍVEL", en: "AVAILABLE" },
            available: true
        }
    ];

    // Textos em português e inglês
    const i18n = {
        "pt-BR": {
            eyebrow: "BIBLIOTECA DE FERRAMENTAS",
            title: "Shadowdark Tools",
            description: "Ferramentas utilitárias para mestres e jogadores de <strong>Shadowdark RPG</strong>. Geradores, calculadoras e referências rápidas para suas masmorras.",
            generators: "Geradores",
            playersHeading: "Para jogadores",
            gmsHeading: "Para mestres",
            about: "Sobre",
            home: "Início",
            footerCaption: "Shadowdark Tools · Ferramentas para RPG",
            footerCredit1: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerCredit2: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.',
            openGenerator: "Abrir gerador",
            comingSoon: "Em desenvolvimento",
            noGenerators: "Nenhum gerador disponível no momento."
        },
        "en": {
            eyebrow: "TOOL LIBRARY",
            title: "Shadowdark Tools",
            description: "Utility tools for <strong>Shadowdark RPG</strong> GMs and players. Generators, calculators, and quick references for your dungeons.",
            generators: "Generators",
            playersHeading: "For players",
            gmsHeading: "For GMs",
            about: "About",
            home: "Home",
            footerCaption: "Shadowdark Tools · RPG Utilities",
            footerCredit1: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerCredit2: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.',
            openGenerator: "Open generator",
            comingSoon: "Coming soon",
            noGenerators: "No generators available at the moment."
        }
    };

    let currentLang = "pt-BR";

    // Elementos DOM
    const playerGeneratorGrid = document.getElementById("player-generator-grid");
    const gmGeneratorGrid = document.getElementById("gm-generator-grid");
    const langButtons = document.querySelectorAll(".flag-button");
    const navLinks = document.querySelectorAll(".site-navigation a");

    // Inicialização
    function init() {
        loadPreferredLanguage();
        renderGenerators();
        setupLanguageSwitcher();
        setupNavigation();
    }

    // Renderiza os cards de geradores
    function renderGenerators() {
        if (!playerGeneratorGrid || !gmGeneratorGrid) return;

        const t = i18n[currentLang];
        playerGeneratorGrid.innerHTML = "";
        gmGeneratorGrid.innerHTML = "";
        document.getElementById("players-heading").textContent = t.playersHeading;
        document.getElementById("gms-heading").textContent = t.gmsHeading;

        generators.forEach(gen => {
            const title = gen.title[currentLang];
            const category = gen.category[currentLang];
            const description = gen.description[currentLang];
            const badge = typeof gen.badge === "object" ? gen.badge[currentLang] : gen.badge;

            const card = document.createElement("a");
            card.className = "tool-card" + (gen.available ? "" : " tool-card--disabled");
            if (gen.available) {
                card.href = gen.href;
                card.setAttribute("aria-label", `${t.openGenerator}: ${title}`);
            } else {
                card.href = "#";
                card.setAttribute("aria-disabled", "true");
                card.setAttribute("tabindex", "-1");
            }

            card.innerHTML = `
                <div class="tool-card__topline">
                    <span class="tool-card__icon">
                        <img src="assets/icons/lucide/${gen.icon}" alt="" aria-hidden="true">
                    </span>
                    <span class="tool-card__badge">${badge}</span>
                </div>
                <p class="tool-card__category">${category}</p>
                <h2 class="tool-card__title">${title}</h2>
                <p class="tool-card__description">${description}</p>
                <span class="tool-card__action">
                    <span>${gen.available ? t.openGenerator : t.comingSoon}</span>
                    <img src="assets/icons/lucide/arrow-right.svg" alt="" aria-hidden="true">
                </span>
            `;

            const targetGrid = gen.audience === "players" ? playerGeneratorGrid : gmGeneratorGrid;
            targetGrid.appendChild(card);
        });
    }

    // Configura troca de idioma
    function setupLanguageSwitcher() {
        langButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                // suporte a data-lang ou data-lang-switch
                const lang = btn.dataset.lang || btn.dataset.langSwitch;
                if (lang && lang !== currentLang) {
                    // normalizar "pt" → "pt-BR"
                    const normalizedLang = lang === "pt" ? "pt-BR" : lang;
                    if (i18n[normalizedLang]) {
                        switchLanguage(normalizedLang);
                    }
                }
            });
        });
    }

    function switchLanguage(lang) {
        currentLang = lang;
        const t = i18n[lang];

        langButtons.forEach(btn => {
            const btnLang = btn.dataset.lang || btn.dataset.langSwitch;
            const normalizedBtnLang = btnLang === "pt" ? "pt-BR" : btnLang;
            const isActive = normalizedBtnLang === lang;
            btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        const eyebrow = document.getElementById("titulo-principal");
        if (eyebrow) eyebrow.textContent = t.eyebrow;

        const title = document.getElementById("hero-title");
        if (title) title.innerHTML = t.title;

        const desc = document.getElementById("hero-desc");
        if (desc) desc.innerHTML = t.description;

        const navHome = document.getElementById("nav-home");
        if (navHome) navHome.textContent = t.home;

        const navGenerators = document.getElementById("nav-generators");
        if (navGenerators) navGenerators.textContent = t.generators;

        const navAbout = document.getElementById("nav-about");
        if (navAbout) navAbout.textContent = t.about;

        const footerCaption = document.getElementById("footer-caption");
        if (footerCaption) footerCaption.textContent = t.footerCaption;

        const footerCredit1 = document.getElementById("footer-credit-author");
        if (footerCredit1) footerCredit1.innerHTML = t.footerCredit1;

        const footerCredit2 = document.getElementById("footer-subcredit");
        if (footerCredit2) footerCredit2.innerHTML = t.footerCredit2;

        document.documentElement.lang = lang;
        localStorage.setItem("shadowdark-tools-lang", lang);

        renderGenerators();
    }

    function loadPreferredLanguage() {
        const savedLang = localStorage.getItem("shadowdark-tools-lang") ||
                          (navigator.language.startsWith("pt") ? "pt-BR" : "en");
        if (savedLang && i18n[savedLang]) {
            switchLanguage(savedLang);
        }
    }

    function setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const href = link.getAttribute("href");
                if (href && href.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        });
    }

    // Inicializa quando o DOM estiver pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
