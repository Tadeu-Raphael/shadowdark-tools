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
            category: "PERSONAGEM",
            title: "Gerador de Personagem Nível 0",
            description: "Crie personagens nível 0 (funis) para Shadowdark RPG. Role atributos, profissão, equipamento inicial e HP. Perfeito para funis brutais e campanhas de origem.",
            icon: "👤",
            href: "generators/level-zero-character/index.html",
            badge: "NOVO",
            featured: true
        }
    ];

    // Textos em português e inglês
    const i18n = {
        "pt-BR": {
            eyebrow: "BIBLIOTECA DE FERRAMENTAS",
            title: "Shadowdark Tools",
            description: "Ferramentas utilitárias para mestres e jogadores de <strong>Shadowdark RPG</strong>. Geradores, calculadoras e referências rápidas para suas masmorras.",
            generators: "Geradores",
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
    const generatorGrid = document.getElementById("generator-grid");
    const langButtons = document.querySelectorAll(".flag-button");
    const navLinks = document.querySelectorAll(".site-navigation a");

    // Inicialização
    function init() {
        renderGenerators();
        setupLanguageSwitcher();
        setupNavigation();
        setupKeyboardNavigation();
        loadPreferredLanguage();
    }

    // Renderiza os cards de geradores
    function renderGenerators() {
        if (!generatorGrid) return;

        const t = i18n[currentLang];
        const availableGenerators = generators.filter(g => !g.comingSoon);

        if (availableGenerators.length === 0) {
            generatorGrid.innerHTML = '<div class="col-12"><div class="card bg-light text-center border-0 shadow-sm"><div class="card-body py-5"><i class="bi bi-dice6-fill text-muted display-4 mb-3"></i><p class="text-muted">' + t.noGenerators + '</p></div></div></div>';
            return;
        }

        generatorGrid.innerHTML = availableGenerators.map(gen => `
            <div class="col">
                <a href="${gen.href}" class="card h-100 shadow-sm border-dark text-dark text-decoration-none" data-generator-id="${gen.id}" aria-label="${t.openGenerator}: ${gen.title}">
                    <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                        <h6 class="card-title mb-0 fw-bold">${gen.title}</h6>
                        ${gen.badge ? '<span class="badge bg-danger text-white">' + gen.badge + '</span>' : ''}
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="category-badge mb-3">
                            <span class="badge bg-secondary text-white text-uppercase small">${gen.category}</span>
                        </div>
                        <p class="card-text flex-grow-1">${gen.description}</p>
                        <div class="mt-auto">
                            <span class="badge bg-info text-dark">${t.openGenerator}</span>
                            <i class="bi bi-arrow-right float-end"></i>
                        </div>
                    </div>
                </a>
            </div>
        `).join("");

        const comingSoonGenerators = generators.filter(g => g.comingSoon || g.badge === "EM BREVE" || g.badge === "PLANEJADO");
        if (comingSoonGenerators.length > 0) {
            comingSoonGenerators.forEach(gen => {
                const card = document.createElement("div");
                card.className = "col";
                card.innerHTML = '<a href="#" class="card h-100 shadow-sm border-dark text-dark text-decoration-none" style="opacity: 0.6; pointer-events: none;" aria-disabled="true"><div class="card-header bg-dark text-white d-flex justify-content-between align-items-center"><h6 class="card-title mb-0 fw-bold">' + gen.title + '</h6><span class="badge bg-secondary text-white">' + gen.badge + '</span></div><div class="card-body d-flex flex-column"><div class="category-badge mb-3"><span class="badge bg-secondary text-white text-uppercase small">' + gen.category + '</span></div><p class="card-text flex-grow-1">' + gen.description + '</p><div class="mt-auto"><span class="badge bg-warning text-dark">' + t.comingSoon + '</span><i class="bi bi-lock float-end"></i></div></div></a>';
                generatorGrid.appendChild(card);
            });
        }
    }
// Configura troca de idioma
    function setupLanguageSwitcher() {
        langButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const lang = btn.dataset.lang;
                if (lang && lang !== currentLang) {
                    switchLanguage(lang);
                }
            });
        });
    }

    function switchLanguage(lang) {
        currentLang = lang;
        const t = i18n[lang];

        langButtons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.setAttribute("aria-pressed", isActive);
        });

        const eyebrow = document.querySelector(".eyebrow");
        if (eyebrow) eyebrow.textContent = t.eyebrow;

        const title = document.querySelector(".generator-section h1");
        if (title) title.innerHTML = t.title;

        const desc = document.querySelector(".section-description");
        if (desc) desc.innerHTML = t.description;

        const footerCaption = document.querySelector(".footer-caption");
        if (footerCaption) footerCaption.textContent = t.footerCaption;

        const footerCredits = document.querySelectorAll(".footer-credit");
        if (footerCredits[0]) footerCredits[0].innerHTML = t.footerCredit1;
        if (footerCredits[1]) footerCredits[1].innerHTML = t.footerCredit2;

        navLinks.forEach((link, index) => {
            const keys = ["home", "generators", "about"];
            if (keys[index]) link.textContent = t[keys[index]];
        });

        renderGenerators();
        localStorage.setItem("shadowdark-tools-lang", lang);
        document.documentElement.lang = lang;
    }

    function loadPreferredLanguage() {
        const saved = localStorage.getItem("shadowdark-tools-lang");
        const browserLang = navigator.language.startsWith("pt") ? "pt-BR" : "en";
        const preferred = saved || browserLang;
        if (i18n[preferred]) switchLanguage(preferred);
    }

    // Configura navegação ativa
    function setupNavigation() {
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === currentPath || (currentPath === "/" && href === "index.html")) {
                link.setAttribute("aria-current", "page");
            }
        });
    }

    // Navegação por teclado
    function setupKeyboardNavigation() {
        document.addEventListener("keydown", (e) => {
            if (e.altKey && e.key >= "1" && e.key <= "3") {
                e.preventDefault();
                const index = parseInt(e.key) - 1;
                if (navLinks[index]) navLinks[index].focus();
            }
        });
    }
// Inicializa quando DOM estiver pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    // Expõe API pública para uso em outros scripts
    window.ShadowdarkTools = {
        getGenerators: () => generators,
        getCurrentLanguage: () => currentLang,
        switchLanguage,
        i18n
    };
}());