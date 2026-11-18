/**
 * Shadowdark Tools - Magic
 * Exibe e filtra as 85 magias do Livro de Regras de Shadowdark RPG
 */

(function () {
    "use strict";

    // i18n texts
    const i18n = {
        "pt-BR": {
            eyebrow: "REFERÊNCIA",
            title: "Magia",
            intro: "85 magias do Livro de Regras de Shadowdark RPG. Busque, filtre e consulte.",
            searchLabel: "Buscar magia",
            searchPlaceholder: "Nome da magia...",
            tierLabel: "Tier",
            tierAll: "Todos os tiers",
            tier1: "Tier 1",
            tier2: "Tier 2",
            tier3: "Tier 3",
            tier4: "Tier 4",
            tier5: "Tier 5",
            classLabel: "Classe",
            classAll: "Todas as classes",
            classWizard: "Wizard",
            classPriest: "Priest",
            rangeLabel: "Alcance",
            rangeAll: "Todos os alcances",
            rangeClose: "Close",
            rangeNear: "Near",
            rangeFar: "Far",
            rangeSelf: "Self",
            rangeUnlimited: "Unlimited",
            resultsTitle: "Magias",
            spellCount: "magias",
            spellCountSingular: "magia",
            emptyMessage: "Nenhuma magia encontrada.",
            generatorsTitle: "Geradores",
            scrollTitle: "Pergaminho",
            scrollDesc: "Gere um pergaminho aleatório com magia e aparência.",
            scrollBtn: "Gerar Pergaminho",
            wandTitle: "Varinha",
            wandDesc: "Gere uma varinha aleatória com magia e aparência.",
            wandBtn: "Gerar Varinha",
            mishapTitle: "Mishap",
            mishapDesc: "Role um mishap de magia baseado no tier da magia.",
            mishapTierLabel: "Tier da Magia:",
            mishapTier1: "Tier 1-2",
            mishapTier2: "Tier 3-4",
            mishapTier3: "Tier 5",
            mishapBtn: "Rolar Mishap",
            glossaryTitle: "Glossário de Termos",
            glosTier: "Tier",
            glosTierDesc: "O nível de poder da magia. Vai de 1 (mais fraca) a 5 (mais poderosa).",
            glosDuration: "Duração",
            glosDurationDesc: "Quanto tempo a magia dura. Pode ser Instant, Focus, ou um número de rodadas/minutos/horas.",
            glosRange: "Alcance",
            glosRangeDesc: "A que distância a magia pode ser conjurada. Close (5 pés), Near (30 pés), Far (à vista), Self (você mesmo), Unlimited (ilimitado).",
            glosFocus: "Focus",
            glosFocusDesc: "Magias com duração Focus exigem que você faça uma rolagem de conjuração no início do seu turno para mantê-las. Se falhar, a magia termina.",
            glosMishap: "Mishap",
            glosMishapDesc: "Falha crítica em uma rolagem de conjuração. O conjurador deve rolar na tabela de mishap apropriada ao tier da magia.",
            glosScroll: "Pergaminho",
            glosScrollDesc: "Item consumível que contém uma magia. Após o uso, o pergaminho desaparece. Usuários devem ser conjuradores.",
            glosWand: "Varinha",
            glosWandDesc: "Item mágico que contém uma magia. Pode ser usada múltiplas vezes, mas falha críticamente quebra a varinha.",
            glosDC: "DC (Dificuldade de Classe)",
            glosDCDesc: "A dificuldade para resistir ou detectar a magia. Maior é mais difícil de resistir.",
            source: "Dados extraídos do Livro de Regras de Shadowdark RPG (v4.6), páginas 43–74. The Arcane Library.",
            footerCaption: "Shadowdark Tools · Magic",
            footerCredit: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.',
            itemsCatalogLink: "Catálogo de Itens Mágicos",
            scrollFeature: "Aparência do Pergaminho",
            wandFeature: "Aparência da Varinha",
            mishapResult: "Resultado do Mishap",
            mishapName: "Nome",
            mishapDesc: "Descrição"
        },
        "en": {
            navHome: "Início", navGenerators: "Geradores", navAbout: "Sobre",
            navHome: "Home", navGenerators: "Generators", navAbout: "About",
            eyebrow: "REFERENCE",
            title: "Magic",
            intro: "85 spells from the Shadowdark RPG Rulebook. Search, filter, and reference.",
            searchLabel: "Search spell",
            searchPlaceholder: "Spell name...",
            tierLabel: "Tier",
            tierAll: "All tiers",
            tier1: "Tier 1",
            tier2: "Tier 2",
            tier3: "Tier 3",
            tier4: "Tier 4",
            tier5: "Tier 5",
            classLabel: "Class",
            classAll: "All classes",
            classWizard: "Wizard",
            classPriest: "Priest",
            rangeLabel: "Range",
            rangeAll: "All ranges",
            rangeClose: "Close",
            rangeNear: "Near",
            rangeFar: "Far",
            rangeSelf: "Self",
            rangeUnlimited: "Unlimited",
            resultsTitle: "Spells",
            spellCount: "spells",
            spellCountSingular: "spell",
            emptyMessage: "No spells found.",
            generatorsTitle: "Generators",
            scrollTitle: "Scroll",
            scrollDesc: "Generate a random scroll with spell and appearance.",
            scrollBtn: "Generate Scroll",
            wandTitle: "Wand",
            wandDesc: "Generate a random wand with spell and appearance.",
            wandBtn: "Generate Wand",
            mishapTitle: "Mishap",
            mishapDesc: "Roll a spell mishap based on the spell's tier.",
            mishapTierLabel: "Spell Tier:",
            mishapTier1: "Tier 1-2",
            mishapTier2: "Tier 3-4",
            mishapTier3: "Tier 5",
            mishapBtn: "Roll Mishap",
            glossaryTitle: "Glossary of Terms",
            glosTier: "Tier",
            glosTierDesc: "The power level of the spell. Ranges from 1 (weakest) to 5 (most powerful).",
            glosDuration: "Duration",
            glosDurationDesc: "How long the spell lasts. Can be Instant, Focus, or a number of rounds/minutes/hours.",
            glosRange: "Range",
            glosRangeDesc: "How far away the spell can be cast. Close (5 ft), Near (30 ft), Far (line of sight), Self (yourself), Unlimited (unlimited).",
            glosFocus: "Focus",
            glosFocusDesc: "Spells with Focus duration require you to make a spellcasting check at the start of your turn to maintain them. If you fail, the spell ends.",
            glosMishap: "Mishap",
            glosMishapDesc: "Critical failure on a spellcasting check. The caster must roll on the mishap table appropriate to the spell's tier.",
            glosScroll: "Scroll",
            glosScrollDesc: "Consumable item that contains a spell. After use, the scroll disappears. Users must be spellcasters.",
            glosWand: "Wand",
            glosWandDesc: "Magic item that contains a spell. Can be used multiple times, but critically failing breaks the wand.",
            glosDC: "DC (Difficulty Class)",
            glosDCDesc: "The difficulty to resist or detect the spell. Higher is harder to resist.",
            source: "Data extracted from the Shadowdark RPG Rulebook (v4.6), pages 43–74. The Arcane Library.",
            footerCaption: "Shadowdark Tools · Magic",
            footerCredit: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.',
            itemsCatalogLink: "Magic Items Catalog",
            scrollFeature: "Scroll Appearance",
            wandFeature: "Wand Appearance",
            mishapResult: "Mishap Result",
            mishapName: "Name",
            mishapDesc: "Description"
        }
    };

    let currentLang = "pt-BR";
    let allSpells = [];

    // DOM elements
    const searchInput = document.getElementById("search-input");
    const filterTier = document.getElementById("filter-tier");
    const filterClass = document.getElementById("filter-class");
    const filterRange = document.getElementById("filter-range");
    const spellsGrid = document.getElementById("spells-grid");
    const spellCount = document.getElementById("spell-count");
    const langButtons = document.querySelectorAll(".magic-language-switch button");

    // Generator elements
    const generateScrollBtn = document.getElementById("generate-scroll");
    const generateWandBtn = document.getElementById("generate-wand");
    const generateMishapBtn = document.getElementById("generate-mishap");
    const mishapTierSelect = document.getElementById("mishap-tier");
    const scrollResult = document.getElementById("scroll-result");
    const wandResult = document.getElementById("wand-result");
    const mishapResult = document.getElementById("mishap-result");

    // Initialize
    function init() {
        loadLanguage();
        allSpells = window.MAGIC_DATA.spells;
        renderSpells(allSpells);
        setupEventListeners();
        updateLanguage();
    }

    // Load preferred language
    function loadLanguage() {
        const saved = localStorage.getItem("shadowdark-tools-lang");
        if (saved && i18n[saved]) {
            currentLang = saved;
        } else {
            const browserLang = navigator.language || navigator.userLanguage;
            currentLang = browserLang.startsWith("pt") ? "pt-BR" : "en";
        }
        document.documentElement.lang = currentLang;
    }

    // Update all texts based on current language
    function updateLanguage() {
        const t = i18n[currentLang];

        const setText = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };

        const setHTML = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = value;
        };

        setText("nav-back-text", t.navHome);
        setText("nav-generators", t.navGenerators);
        setText("nav-about", t.navAbout);
        setText("eyebrow", t.eyebrow);
        setText("title", t.title);
        setText("intro", t.intro);
        setText("search-label", t.searchLabel);
        searchInput.placeholder = t.searchPlaceholder;
        setText("tier-filter-label", t.tierLabel);
        setText("tier-all", t.tierAll);
        setText("tier-1", t.tier1);
        setText("tier-2", t.tier2);
        setText("tier-3", t.tier3);
        setText("tier-4", t.tier4);
        setText("tier-5", t.tier5);
        setText("class-filter-label", t.classLabel);
        setText("class-all", t.classAll);
        setText("class-wizard", t.classWizard);
        setText("class-priest", t.classPriest);
        setText("range-filter-label", t.rangeLabel);
        setText("range-all", t.rangeAll);
        setText("range-close", t.rangeClose);
        setText("range-near", t.rangeNear);
        setText("range-far", t.rangeFar);
        setText("range-self", t.rangeSelf);
        setText("range-unlimited", t.rangeUnlimited);
        setText("results-title", t.resultsTitle);
        setText("generators-title", t.generatorsTitle);
        setText("scroll-title", t.scrollTitle);
        setText("scroll-desc", t.scrollDesc);
        setText("generate-scroll", t.scrollBtn);
        setText("wand-title", t.wandTitle);
        setText("wand-desc", t.wandDesc);
        setText("generate-wand", t.wandBtn);
        setText("mishap-title", t.mishapTitle);
        setText("mishap-desc", t.mishapDesc);
        setText("mishap-tier-label", t.mishapTierLabel);
        setText("generate-mishap", t.mishapBtn);
        setText("glossary-title", t.glossaryTitle);
        setText("glos-tier", t.glosTier);
        setText("glos-tier-desc", t.glosTierDesc);
        setText("glos-duration", t.glosDuration);
        setText("glos-duration-desc", t.glosDurationDesc);
        setText("glos-range", t.glosRange);
        setText("glos-range-desc", t.glosRangeDesc);
        setText("glos-focus", t.glosFocus);
        setText("glos-focus-desc", t.glosFocusDesc);
        setText("glos-mishap", t.glosMishap);
        setText("glos-mishap-desc", t.glosMishapDesc);
        setText("glos-scroll", t.glosScroll);
        setText("glos-scroll-desc", t.glosScrollDesc);
        setText("glos-wand", t.glosWand);
        setText("glos-wand-desc", t.glosWandDesc);
        setText("glos-dc", t.glosDC);
        setText("glos-dc-desc", t.glosDCDesc);
        setText("source", t.source);
        setText("footer-caption", t.footerCaption);
        setHTML("footer-credit", t.footerCredit);
        setHTML("footer-subcredit", t.footerSubcredit);
        setText("items-catalog-link", t.itemsCatalogLink);

        // Update language buttons
        langButtons.forEach(btn => {
            btn.setAttribute("aria-pressed", btn.dataset.lang === currentLang ? "true" : "false");
        });

        // Re-render spells with current language
        applyFilters();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener("input", debounce(applyFilters, 200));

        // Filter selects
        filterTier.addEventListener("change", applyFilters);
        filterClass.addEventListener("change", applyFilters);
        filterRange.addEventListener("change", applyFilters);

        // Language switch
        langButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                currentLang = btn.dataset.lang;
                localStorage.setItem("shadowdark-tools-lang", currentLang);
                document.documentElement.lang = currentLang;
                updateLanguage();
            });
        });

        // Generator buttons
        generateScrollBtn.addEventListener("click", generateScroll);
        generateWandBtn.addEventListener("click", generateWand);
        generateMishapBtn.addEventListener("click", generateMishap);
    }

    // Apply all filters
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const tierFilter = filterTier.value;
        const classFilter = filterClass.value;
        const rangeFilter = filterRange.value;

        let filtered = allSpells;

        // Search filter (matches name and content in both languages)
        if (searchTerm) {
            filtered = filtered.filter(s => {
                const en = [s.name, s.description].join(" ").toLowerCase();
                const pt = [s.name, s.description_pt || ""].join(" ").toLowerCase();
                return en.includes(searchTerm) || pt.includes(searchTerm);
            });
        }

        // Tier filter
        if (tierFilter !== "all") {
            filtered = filtered.filter(s => s.tier === parseInt(tierFilter));
        }

        // Class filter
        if (classFilter !== "all") {
            filtered = filtered.filter(s => s.classes.includes(classFilter));
        }

        // Range filter
        if (rangeFilter !== "all") {
            filtered = filtered.filter(s => s.range === rangeFilter);
        }

        renderSpells(filtered);
    }

    // Render spells
    function renderSpells(spells) {
        const t = i18n[currentLang];

        // Update count
        const count = spells.length;
        spellCount.textContent = `${count} ${count === 1 ? t.spellCountSingular : t.spellCount}`;

        // Clear grid
        spellsGrid.innerHTML = "";

        if (count === 0) {
            document.getElementById("empty-state").hidden = false;
            return;
        }

        document.getElementById("empty-state").hidden = true;

        // Render each spell
        spells.forEach(spell => {
            const card = createSpellCard(spell);
            spellsGrid.appendChild(card);
        });
    }

    // Create a spell card element
    function createSpellCard(spell) {
        const t = i18n[currentLang];
        const card = document.createElement("article");
        card.className = "spell-card";

        // Resolve localized content
        const isPt = currentLang === "pt-BR";
        const description = isPt ? (spell.description_pt || spell.description) : spell.description;

        card.innerHTML = `
            <div class="spell-card__header">
                <h3 class="spell-card__name">${spell.name}</h3>
                <div class="spell-card__meta">
                    <span class="spell-card__badge spell-card__badge--tier">${t.tierLabel} ${spell.tier}</span>
                    ${spell.classes.map(cls => `
                        <span class="spell-card__badge spell-card__badge--class" data-class="${cls}">${t.classLabel === "Classe" ? (cls === "wizard" ? "Wizard" : "Priest") : (cls === "wizard" ? "Wizard" : "Priest")}</span>
                    `).join("")}
                </div>
            </div>
            <div class="spell-card__stats">
                <div class="spell-card__stat">
                    <span class="spell-card__stat-label">${t.glosDuration}</span>
                    <span class="spell-card__stat-value">${spell.duration}</span>
                </div>
                <div class="spell-card__stat">
                    <span class="spell-card__stat-label">${t.glosRange}</span>
                    <span class="spell-card__stat-value">${spell.range}</span>
                </div>
                <div class="spell-card__stat">
                    <span class="spell-card__stat-label">${t.glosTier}</span>
                    <span class="spell-card__stat-value">${spell.tier}</span>
                </div>
            </div>
            <div class="spell-card__body">
                <p class="spell-card__description">${description}</p>
            </div>
        `;

        return card;
    }

    // Generate scroll
    function generateScroll() {
        const t = i18n[currentLang];
        const spell = allSpells[Math.floor(Math.random() * allSpells.length)];
        const feature = window.MAGIC_DATA.scrollFeatures[Math.floor(Math.random() * window.MAGIC_DATA.scrollFeatures.length)];

        scrollResult.innerHTML = `
            <div class="result-label">${t.scrollFeature}</div>
            <p>${feature}</p>
            <div class="result-label" style="margin-top: 0.75rem;">${t.resultsTitle}</div>
            <h4>${spell.name}</h4>
            <p>${spell.description_pt || spell.description}</p>
        `;
        scrollResult.hidden = false;
    }

    // Generate wand
    function generateWand() {
        const t = i18n[currentLang];
        const spell = allSpells[Math.floor(Math.random() * allSpells.length)];
        const feature = window.MAGIC_DATA.wandFeatures[Math.floor(Math.random() * window.MAGIC_DATA.wandFeatures.length)];

        wandResult.innerHTML = `
            <div class="result-label">${t.wandFeature}</div>
            <p>${feature}</p>
            <div class="result-label" style="margin-top: 0.75rem;">${t.resultsTitle}</div>
            <h4>${spell.name}</h4>
            <p>${spell.description_pt || spell.description}</p>
        `;
        wandResult.hidden = false;
    }

    // Generate mishap
    function generateMishap() {
        const t = i18n[currentLang];
        const tier = parseInt(mishapTierSelect.value);
        const mishaps = window.MAGIC_DATA.mishaps[tier];
        const mishap = mishaps[Math.floor(Math.random() * mishaps.length)];

        mishapResult.innerHTML = `
            <div class="result-label">${t.mishapResult}</div>
            <h4>${currentLang === "pt-BR" ? (mishap.name_pt || mishap.name) : mishap.name}</h4>
            <p>${mishap.description}</p>
        `;
        mishapResult.hidden = false;
    }

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Start
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();