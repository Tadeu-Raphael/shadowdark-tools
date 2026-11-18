/**
 * Shadowdark Tools - Magic Items Catalog
 * Catálogo dos itens mágicos nomeados + geradores de pergaminho, varinha e item mágico.
 */

(function () {
    "use strict";

    const CATALOG = window.MAGIC_ITEM_CATALOG;
    const TABLES = window.MAGIC_ITEMS_TABLES;
    const EXTRA = window.MAGIC_ITEMS_EXTRA;

    const i18n = {
        "pt-BR": {
            eyebrow: "REFERÊNCIA",
            title: "Itens Mágicos",
            intro: "91 itens mágicos do Livro de Regras de Shadowdark RPG. Busque, filtre e consulte.",
            generatorsTitle: "Geradores",
            scrollTitle: "Pergaminho",
            scrollDesc: "Gere um pergaminho aleatório com magia e aparência.",
            scrollBtn: "Gerar Pergaminho",
            wandTitle: "Varinha",
            wandDesc: "Gere uma varinha aleatória com magia e aparência.",
            wandBtn: "Gerar Varinha",
            magicItemTitle: "Item Mágico",
            magicItemDesc: "Gere um item mágico aleatório com tipo, bônus, benefícios e maldições.",
            magicItemBtn: "Gerar Item Mágico",
            searchLabel: "Buscar item",
            searchPlaceholder: "Nome do item...",
            typeLabel: "Tipo",
            typeAll: "Todos os tipos",
            bonusLabel: "Bônus",
            bonusAll: "Todos",
            bonusWith: "Com bônus",
            bonusWithout: "Sem bônus",
            curseLabel: "Maldição",
            curseAll: "Todos",
            curseCursed: "Amaldiçoados",
            curseClean: "Sem maldição",
            resultsTitle: "Itens",
            itemCount: "itens",
            itemCountSingular: "item",
            emptyMessage: "Nenhum item encontrado.",
            source: "Dados extraídos do Livro de Regras de Shadowdark RPG (v4.6), páginas 282–319. The Arcane Library.",
            footerCaption: "Shadowdark Tools · Itens Mágicos",
            footerCredit: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.',
            scrollFeature: "Aparência do Pergaminho",
            wandFeature: "Aparência da Varinha",
            spell: "Magia",
            spellTier: "Tier da magia",
            magicType: "Tipo",
            quality: "Qualidade",
            personality: "Personalidade",
            benefit: "Benefício",
            curse: "Maldição",
            virtue: "Virtude",
            flaw: "Falha",
            trait: "Traço",
            bonus: "Bônus",
            benefits: "Benefícios",
            curses: "Maldições",
            description: "Descrição",
            itemName: "Nome do item",
            effectTable: "Tabela de efeitos",
            consumable: "Consumível: o item é destruído após o uso.",
            armor: "Armadura",
            potion: "Poção",
            scroll: "Pergaminho",
            utility: "Utilitário",
            wand: "Varinha",
            weapon: "Arma",
            staff: "Cajado",
            ring: "Anel/Amulet",
            wondrous: "Maravilhoso"
        },
        "en": {
            eyebrow: "REFERENCE",
            title: "Magic Items",
            intro: "91 magic items from the Shadowdark RPG Rulebook. Search, filter, and reference.",
            generatorsTitle: "Generators",
            scrollTitle: "Scroll",
            scrollDesc: "Generate a random scroll with spell and appearance.",
            scrollBtn: "Generate Scroll",
            wandTitle: "Wand",
            wandDesc: "Generate a random wand with spell and appearance.",
            wandBtn: "Generate Wand",
            magicItemTitle: "Magic Item",
            magicItemDesc: "Generate a random magic item with type, bonus, benefits, and curses.",
            magicItemBtn: "Generate Magic Item",
            searchLabel: "Search item",
            searchPlaceholder: "Item name...",
            typeLabel: "Type",
            typeAll: "All types",
            bonusLabel: "Bonus",
            bonusAll: "All",
            bonusWith: "With bonus",
            bonusWithout: "Without bonus",
            curseLabel: "Curse",
            curseAll: "All",
            curseCursed: "Cursed",
            curseClean: "No curse",
            resultsTitle: "Items",
            itemCount: "items",
            itemCountSingular: "item",
            emptyMessage: "No items found.",
            source: "Data extracted from the Shadowdark RPG Rulebook (v4.6), pages 282–319. The Arcane Library.",
            footerCaption: "Shadowdark Tools · Magic Items",
            footerCredit: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.',
            scrollFeature: "Scroll Appearance",
            wandFeature: "Wand Appearance",
            spell: "Spell",
            spellTier: "Spell tier",
            magicType: "Type",
            quality: "Quality",
            personality: "Personality",
            benefit: "Benefit",
            curse: "Curse",
            virtue: "Virtue",
            flaw: "Flaw",
            trait: "Trait",
            bonus: "Bonus",
            benefits: "Benefits",
            curses: "Curses",
            description: "Description",
            itemName: "Item name",
            effectTable: "Effect table",
            consumable: "Consumable: the item is destroyed after use.",
            armor: "Armor",
            potion: "Potion",
            scroll: "Scroll",
            utility: "Utility",
            wand: "Wand",
            weapon: "Weapon",
            staff: "Staff",
            ring: "Ring/Amulet",
            wondrous: "Wondrous"
        }
    };

    let currentLang = "pt-BR";
    let allItems = [];

    const $ = (id) => document.getElementById(id);
    const searchInput = $("search-input");
    const filterType = $("filter-type");
    const filterBonus = $("filter-bonus");
    const filterCurse = $("filter-curse");
    const itemsGrid = $("items-grid");
    const itemCount = $("item-count");
    const langButtons = document.querySelectorAll(".magic-items-language-switch button");

    const roll = (n) => Math.floor(Math.random() * n) + 1;
    const roll2d6 = () => roll(6) + roll(6);
    const pair = (entry) => {
        if (Array.isArray(entry)) return entry[currentLang === "en" ? 0 : 1];
        const parts = String(entry).split("|");
        return currentLang === "en" ? parts[0] : (parts[1] || parts[0]);
    };
    const v = (entry) => pair(entry);

    function bandResult(bands, die) {
        return bands.find((r) => die >= r[0] && die <= r[1]);
    }

    function plural(label, count) {
        const base = label.toLowerCase();
        if (count === 1) return base;
        if (currentLang === "pt-BR") {
            if (base.endsWith("maldição")) return "maldições";
            if (base.endsWith("virtude")) return "virtudes";
            return `${base}s`;
        }
        if (base.endsWith("ch")) return `${base}es`;
        if (base.endsWith("y")) return `${base.slice(0, -1)}ies`;
        return `${base}s`;
    }

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

    function setText(id, value) {
        const el = $(id);
        if (el) el.textContent = value;
    }

    function setHTML(id, value) {
        const el = $(id);
        if (el) el.innerHTML = value;
    }

    function updateLanguage() {
        const t = i18n[currentLang];

        setText("nav-back-text", t.navHome);
        setText("nav-generators", t.navGenerators);
        setText("nav-about", t.navAbout);
        setText("eyebrow", t.eyebrow);
        setText("title", t.title);
        setText("intro", t.intro);
        setText("generators-title", t.generatorsTitle);
        setText("scroll-title", t.scrollTitle);
        setText("scroll-desc", t.scrollDesc);
        setText("generate-scroll", t.scrollBtn);
        setText("wand-title", t.wandTitle);
        setText("wand-desc", t.wandDesc);
        setText("generate-wand", t.wandBtn);
        setText("magic-item-title", t.magicItemTitle);
        setText("magic-item-desc", t.magicItemDesc);
        setText("generate-magic-item", t.magicItemBtn);
        setText("search-label", t.searchLabel);
        searchInput.placeholder = t.searchPlaceholder;
        setText("type-filter-label", t.typeLabel);
        setText("type-all", t.typeAll);
        setText("type-armor", t.armor);
        setText("type-weapon", t.weapon);
        setText("type-potion", t.potion);
        setText("type-wand", t.wand);
        setText("type-staff", t.staff);
        setText("type-ring", t.ring);
        setText("type-wondrous", t.wondrous);
        setText("bonus-filter-label", t.bonusLabel);
        setText("bonus-all", t.bonusAll);
        setText("bonus-with", t.bonusWith);
        setText("bonus-without", t.bonusWithout);
        setText("curse-filter-label", t.curseLabel);
        setText("curse-all", t.curseAll);
        setText("curse-cursed", t.curseCursed);
        setText("curse-clean", t.curseClean);
        setText("results-title", t.resultsTitle);
        setText("source", t.source);
        setText("footer-caption", t.footerCaption);
        setHTML("footer-credit", t.footerCredit);
        setHTML("footer-subcredit", t.footerSubcredit);

        langButtons.forEach((btn) => {
            btn.setAttribute("aria-pressed", btn.dataset.lang === currentLang ? "true" : "false");
        });

        applyFilters();
    }

    function setupEventListeners() {
        searchInput.addEventListener("input", debounce(applyFilters, 200));
        filterType.addEventListener("change", applyFilters);
        filterBonus.addEventListener("change", applyFilters);
        filterCurse.addEventListener("change", applyFilters);

        langButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                currentLang = btn.dataset.lang;
                localStorage.setItem("shadowdark-tools-lang", currentLang);
                document.documentElement.lang = currentLang;
                updateLanguage();
            });
        });

        $("generate-scroll").addEventListener("click", generateScroll);
        $("generate-wand").addEventListener("click", generateWand);
        $("generate-magic-item").addEventListener("click", generateMagicItem);
    }

    function applyFilters() {
        const term = searchInput.value.toLowerCase().trim();
        const type = filterType.value;
        const bonus = filterBonus.value;
        const curse = filterCurse.value;

        let filtered = allItems;

        if (term) {
            filtered = filtered.filter((item) => {
                const en = [item.name, item.description, ...(item.benefits || [])].join(" ").toLowerCase();
                const pt = [item.name_pt, item.description_pt, ...(item.benefits_pt || [])].join(" ").toLowerCase();
                return en.includes(term) || pt.includes(term);
            });
        }

        if (type !== "all") {
            filtered = filtered.filter((item) => item.type === type);
        }

        if (bonus === "with") {
            filtered = filtered.filter((item) => Boolean(item.bonus));
        } else if (bonus === "without") {
            filtered = filtered.filter((item) => !item.bonus);
        }

        if (curse === "cursed") {
            filtered = filtered.filter((item) => item.curses && item.curses.length > 0);
        } else if (curse === "clean") {
            filtered = filtered.filter((item) => !item.curses || item.curses.length === 0);
        }

        renderItems(filtered);
    }

    function renderItems(items) {
        const t = i18n[currentLang];
        const count = items.length;
        itemCount.textContent = `${count} ${count === 1 ? t.itemCountSingular : t.itemCount}`;

        itemsGrid.innerHTML = "";

        if (count === 0) {
            $("empty-state").hidden = false;
            return;
        }
        $("empty-state").hidden = true;

        const frag = document.createDocumentFragment();
        items.forEach((item) => frag.appendChild(createItemCard(item)));
        itemsGrid.appendChild(frag);
    }

    function createItemCard(item) {
        const t = i18n[currentLang];
        const isPt = currentLang === "pt-BR";
        const card = document.createElement("article");
        card.className = "item-card";

        const name = isPt ? item.name_pt : item.name;
        const description = isPt ? item.description_pt : item.description;
        const typeLabel = v(CATALOG.types[item.type] || [item.type, item.type]);
        const alignment = isPt ? item.alignment_pt : item.alignment;
        const bonus = isPt ? item.bonus_pt : item.bonus;
        const benefits = (isPt ? item.benefits_pt : item.benefits) || [];
        const curses = (isPt ? item.curses_pt : item.curses) || [];

        const header = document.createElement("div");
        header.className = "item-card__header";

        const h3 = document.createElement("h3");
        h3.className = "item-card__name";
        h3.textContent = name;
        header.appendChild(h3);

        const meta = document.createElement("div");
        meta.className = "item-card__meta";

        const typeBadge = document.createElement("span");
        typeBadge.className = "item-card__badge item-card__badge--type";
        typeBadge.textContent = typeLabel;
        meta.appendChild(typeBadge);

        if (bonus) {
            const bonusBadge = document.createElement("span");
            bonusBadge.className = "item-card__badge item-card__badge--bonus";
            bonusBadge.textContent = bonus;
            meta.appendChild(bonusBadge);
        }

        if (alignment) {
            const alignBadge = document.createElement("span");
            alignBadge.className = "item-card__badge item-card__badge--alignment";
            alignBadge.dataset.alignment = alignment;
            alignBadge.textContent = alignment;
            meta.appendChild(alignBadge);
        }

        header.appendChild(meta);
        card.appendChild(header);

        const body = document.createElement("div");
        body.className = "item-card__body";

        const desc = document.createElement("p");
        desc.className = "item-card__description";
        desc.textContent = description;
        body.appendChild(desc);

        if (bonus) {
            const section = document.createElement("div");
            section.className = "item-card__section";
            const title = document.createElement("h4");
            title.className = "item-card__section-title";
            title.textContent = t.bonus;
            section.appendChild(title);
            const entry = document.createElement("p");
            entry.className = "item-card__entry item-card__entry--bonus";
            entry.textContent = bonus;
            section.appendChild(entry);
            body.appendChild(section);
        }

        if (benefits.length > 0) {
            const section = document.createElement("div");
            section.className = "item-card__section";
            const title = document.createElement("h4");
            title.className = "item-card__section-title";
            title.textContent = t.benefits;
            section.appendChild(title);
            benefits.forEach((text) => {
                const entry = document.createElement("p");
                entry.className = "item-card__entry";
                entry.textContent = text;
                section.appendChild(entry);
            });
            body.appendChild(section);
        }

        if (curses.length > 0) {
            const section = document.createElement("div");
            section.className = "item-card__section";
            const title = document.createElement("h4");
            title.className = "item-card__section-title";
            title.textContent = t.curses;
            section.appendChild(title);
            curses.forEach((text) => {
                const entry = document.createElement("p");
                entry.className = "item-card__entry item-card__entry--curse";
                entry.textContent = text;
                section.appendChild(entry);
            });
            body.appendChild(section);
        }

        card.appendChild(body);
        return card;
    }

    // -----------------------------------------------------------------------
    // Geradores
    // -----------------------------------------------------------------------

    function spellByTier() {
        const tierDie = roll2d6();
        const tier = bandResult(TABLES.spellTiers, tierDie)[2];
        const spellRoll = roll(12);
        return { tier, tierDie, spellRoll, spell: pair(TABLES.spells[tier - 1][spellRoll - 1]) };
    }

    function generateScroll() {
        const t = i18n[currentLang];
        const featureRoll = roll(8);
        const feature = pair(TABLES.scrollFeature[featureRoll - 1]);
        const spell = spellByTier();

        const out = $("scroll-result");
        out.innerHTML = "";
        out.appendChild(resultLabel(t.scrollFeature));
        out.appendChild(resultText(`d8 ${featureRoll} · ${feature}`));
        out.appendChild(resultLabel(t.spell));
        out.appendChild(resultText(`2d6 ${spell.tierDie} · ${t.spellTier} ${spell.tier} · d12 ${spell.spellRoll} · ${spell.spell}`));
        out.hidden = false;
    }

    function generateWand() {
        const t = i18n[currentLang];
        const featureRoll = roll(8);
        const feature = pair(TABLES.wandFeature[featureRoll - 1]);
        const spell = spellByTier();
        const effectDie = roll2d6();
        const effectTable = bandResult(TABLES.wandEffectTables, effectDie)[2];

        const out = $("wand-result");
        out.innerHTML = "";
        out.appendChild(resultLabel(t.wandFeature));
        out.appendChild(resultText(`d8 ${featureRoll} · ${feature}`));
        out.appendChild(resultLabel(t.spell));
        out.appendChild(resultText(`2d6 ${spell.tierDie} · ${t.spellTier} ${spell.tier} · d12 ${spell.spellRoll} · ${spell.spell}`));
        out.appendChild(resultLabel(t.effectTable));
        out.appendChild(resultText(`2d6 ${effectDie} · ${t[effectTable] || effectTable}`));
        out.hidden = false;
    }

    function generateMagicItem() {
        const t = i18n[currentLang];
        const typeRoll = roll(6);
        const typeIndex = typeRoll - 1;
        const qualityRoll = roll2d6();
        const personalityRoll = roll2d6();
        const quality = bandResult(
            [[2, 3, 0, 1], [4, 7, 1, 1], [8, 11, 1, 0], [12, 12, 2, 0]],
            qualityRoll
        );
        const personality = bandResult(
            [[2, 3, 0, 1], [4, 9, 0, 0], [10, 11, 1, 1], [12, 12, 1, 0]],
            personalityRoll
        );

        const typeKey = ["armor", "potion", "scroll", "utility", "wand", "weapon"][typeIndex];
        const typeLabel = v(EXTRA.magicTypes[typeIndex]);
        const nameRoll = roll(20) - 1;
        const nameParts = EXTRA.magicNames[nameRoll].map(v);
        const itemName = currentLang === "en"
            ? nameParts.join(" ")
            : `${nameParts[1]} ${nameParts[0].replace(/^(O|A) /, "")} ${nameParts[2]}`;

        const out = $("magic-item-result");
        out.innerHTML = "";
        out.appendChild(resultLabel(t.itemName));
        out.appendChild(resultText(itemName));
        out.appendChild(resultLabel(t.magicType));
        out.appendChild(resultText(`d6 ${typeRoll} · ${typeLabel}`));
        out.appendChild(resultLabel(t.quality));
        out.appendChild(resultText(`2d6 ${qualityRoll} · ${quality[2]} ${plural(t.benefit, quality[2])} · ${quality[3]} ${plural(t.curse, quality[3])}`));
        out.appendChild(resultLabel(t.personality));
        out.appendChild(resultText(`2d6 ${personalityRoll} · ${personality[2]} ${plural(t.virtue, personality[2])} · ${personality[3]} ${plural(t.flaw, personality[3])}`));

        const details = magicItemDetails(typeIndex, typeKey, quality, personality);
        details.effects.forEach((line) => {
            out.appendChild(resultLabel(line.label));
            out.appendChild(resultText(line.text));
        });
        details.personality.forEach((line) => {
            out.appendChild(resultLabel(line.label));
            out.appendChild(resultText(line.text));
        });

        out.hidden = false;
    }

    function effectTableFor(typeIndex, typeKey) {
        if (typeIndex === 2 || typeIndex === 4) return "armor";
        return typeKey;
    }

    function magicItemDetails(typeIndex, typeKey, quality, personality) {
        const t = i18n[currentLang];
        const lines = [];
        const effects = [];
        const personalityLines = [];

        if (typeIndex === 0) {
            let typeDie = roll2d6();
            let mithral = false;
            if (typeDie === 12) {
                mithral = true;
                typeDie = roll2d6();
                if (typeDie === 12) typeDie = 11;
            }
            const armorType = bandResult(TABLES.armorType, typeDie)[2];
            const bonusDie = roll2d6();
            const bonus = bandResult(TABLES.armorBonus, bonusDie)[2];
            const featureRoll = roll(20);
            lines.push({ label: t.armor, text: `${v(armorType)}${mithral ? " · Mithral" : ""} · 2d6 ${typeDie}` });
            lines.push({ label: t.bonus, text: `${bonus} · 2d6 ${bonusDie}` });
            lines.push({ label: t.description, text: `d20 ${featureRoll} · ${v(TABLES.armorFeature[featureRoll - 1])}` });
        } else if (typeIndex === 1) {
            const rolls = [roll(8), roll(8), roll(8)];
            rolls.forEach((r, i) => {
                const parts = [
                    v(TABLES.potionFeatures[r - 1]),
                    v(TABLES.potionFeature2[r - 1]),
                    v(TABLES.potionFeature3[r - 1])
                ];
                lines.push({ label: `${t.potion} ${i + 1}`, text: parts.join(" · ") });
            });
            lines.push({ label: t.magicType, text: t.consumable });
        } else if (typeIndex === 2) {
            const featureRoll = roll(8);
            const spell = spellByTier();
            lines.push({ label: t.scrollFeature, text: `d8 ${featureRoll} · ${pair(TABLES.scrollFeature[featureRoll - 1])}` });
            lines.push({ label: t.spell, text: `2d6 ${spell.tierDie} · ${t.spellTier} ${spell.tier} · d12 ${spell.spellRoll} · ${spell.spell}` });
        } else if (typeIndex === 3) {
            const typeRoll = roll(20);
            const featureRoll = roll(20);
            lines.push({ label: t.magicType, text: `d20 ${typeRoll} · ${v(TABLES.utilityTypes[typeRoll - 1])}` });
            lines.push({ label: t.description, text: `d20 ${featureRoll} · ${v(TABLES.utilityFeature[featureRoll - 1])}` });
        } else if (typeIndex === 4) {
            const featureRoll = roll(8);
            const spell = spellByTier();
            const effectDie = roll2d6();
            const effectTable = bandResult(TABLES.wandEffectTables, effectDie)[2];
            lines.push({ label: t.wandFeature, text: `d8 ${featureRoll} · ${pair(TABLES.wandFeature[featureRoll - 1])}` });
            lines.push({ label: t.spell, text: `2d6 ${spell.tierDie} · ${t.spellTier} ${spell.tier} · d12 ${spell.spellRoll} · ${spell.spell}` });
            lines.push({ label: t.effectTable, text: `2d6 ${effectDie} · ${t[effectTable] || effectTable}` });
        } else {
            const typeRoll = roll(20);
            const featureRoll = roll(20);
            const bonusDie = roll2d6();
            lines.push({ label: t.weapon, text: `${v(TABLES.weaponTypes[typeRoll - 1])} · d20 ${typeRoll}` });
            lines.push({ label: t.description, text: `d20 ${featureRoll} · ${v(TABLES.weaponFeature[featureRoll - 1])}` });
            lines.push({ label: t.bonus, text: `${bandResult(TABLES.weaponBonus, bonusDie)[2]} · 2d6 ${bonusDie}` });
        }

        const tableKey = effectTableFor(typeIndex, typeKey);
        const benefitKey = `${tableKey}Benefit`;
        const curseKey = `${tableKey}Curse`;
        const benefits = TABLES[benefitKey] || [];
        const curses = TABLES[curseKey] || [];

        for (let i = 0; i < quality[2]; i += 1) {
            const r = roll(benefits.length);
            effects.push({ label: t.benefit, text: `d12 ${r} · ${v(benefits[r - 1])}` });
        }
        for (let i = 0; i < quality[3]; i += 1) {
            const r = roll(curses.length);
            effects.push({ label: t.curse, text: `d12 ${r} · ${v(curses[r - 1])}` });
        }

        for (let i = 0; i < personality[2]; i += 1) {
            const r = roll(20);
            personalityLines.push({ label: t.virtue, text: `d20 ${r} · ${v(EXTRA.virtues[r - 1])}` });
        }
        for (let i = 0; i < personality[3]; i += 1) {
            const r = roll(20);
            personalityLines.push({ label: t.flaw, text: `d20 ${r} · ${v(EXTRA.flaws[r - 1])}` });
        }
        if (personality[2] + personality[3] > 0) {
            const t1 = roll(4);
            const t2 = roll(4);
            personalityLines.push({ label: t.trait, text: `d4 ${t1} × d4 ${t2} · ${v(EXTRA.traits[t1 - 1][t2 - 1])}` });
        }

        return { effects, personality: personalityLines };
    }

    function resultLabel(text) {
        const el = document.createElement("div");
        el.className = "result-label";
        el.textContent = text;
        return el;
    }

    function resultText(text) {
        const el = document.createElement("p");
        el.textContent = text;
        return el;
    }

    function debounce(func, wait) {
        let timeout;
        return function executed(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function init() {
        loadLanguage();
        allItems = CATALOG.items;
        renderItems(allItems);
        setupEventListeners();
        updateLanguage();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();