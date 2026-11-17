/**
 * Shadowdark Tools - Bestiary
 * Exibe e filtra os 238 monstros do Livro de Regras de Shadowdark RPG
 */

(function () {
    "use strict";

    // i18n texts
    const i18n = {
        "pt-BR": {
            eyebrow: "REFERÊNCIA",
            title: "Bestiário",
            intro: "238 monstros do Livro de Regras de Shadowdark RPG. Busque, filtre e consulte.",
            searchLabel: "Buscar monstro",
            searchPlaceholder: "Nome do monstro...",
            levelLabel: "Nível",
            levelAll: "Todos os níveis",
            level0_2: "Nível 0–2",
            level3_5: "Nível 3–5",
            level6_8: "Nível 6–8",
            level9_11: "Nível 9–11",
            level12_15: "Nível 12–15",
            level16: "Nível 16+",
            alignmentLabel: "Alinhamento",
            alignmentAll: "Todos",
            alignmentLawful: "Leal",
            alignmentNeutral: "Neutro",
            alignmentChaotic: "Caótico",
            typeLabel: "Tipo",
            typeAll: "Todos os tipos",
            typeHumanoid: "Humanoide",
            typeBeast: "Fera",
            typeMonster: "Monstro",
            typeUndead: "Morto-vivo",
            typeDemon: "Demônio",
            typeDevil: "Diabo",
            typeDragon: "Dragão",
            typeGiant: "Gigante",
            typeElemental: "Elemental",
            typeConstruct: "Constructo",
            typePlant: "Planta",
            typeOoze: "Gosma",
            resultsTitle: "Monstros",
            monsterCount: "monstros",
            monsterCountSingular: "monstro",
            emptyMessage: "Nenhum monstro encontrado.",
            glossaryTitle: "Glossário de Termos",
            glosAttack: "ATK (Ataque)",
            glosAttackDesc: "O bônus de ataque do monstro, adicionado à rolagem de d20 para acertar.",
            glosAc: "AC (Classe de Armadura)",
            glosAcDesc: "A dificuldade para acertar o monstro. Menor é mais fácil de acertar.",
            glosHp: "HP (Pontos de Vida)",
            glosHpDesc: "A quantidade de dano que o monstro pode receber antes de morrer.",
            glosMv: "MV (Movimento)",
            glosMvDesc: "A distância que o monstro pode se mover por turno.",
            glosStats: "Atributos (S/D/C/I/W/Ch)",
            glosStatsDesc: "Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma.",
            glosAl: "AL (Alinhamento)",
            glosAlDesc: "Leal (L), Neutro (N) ou Caótico (C). Define a moral e comportamento do monstro.",
            glosLv: "LV (Nível)",
            glosLvDesc: "O nível de desafio do monstro. Monstros de nível maior são mais perigosos.",
            glosAbilities: "Habilidades Especiais",
            glosAbilitiesDesc: "Poderes únicos que o monstro pode usar em combate ou exploração.",
            source: "Dados extraídos do Livro de Regras de Shadowdark RPG (v4.6), páginas 191–270. The Arcane Library.",
            footerCaption: "Shadowdark Tools · Bestiário",
            footerCredit: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.',
            alignmentL: "Leal",
            alignmentN: "Neutro",
            alignmentC: "Caótico",
            levelPrefix: "Nível"
        },
        "en": {
            eyebrow: "REFERENCE",
            title: "Bestiary",
            intro: "238 monsters from the Shadowdark RPG Rulebook. Search, filter, and reference.",
            searchLabel: "Search monster",
            searchPlaceholder: "Monster name...",
            levelLabel: "Level",
            levelAll: "All levels",
            level0_2: "Level 0–2",
            level3_5: "Level 3–5",
            level6_8: "Level 6–8",
            level9_11: "Level 9–11",
            level12_15: "Level 12–15",
            level16: "Level 16+",
            alignmentLabel: "Alignment",
            alignmentAll: "All",
            alignmentLawful: "Lawful",
            alignmentNeutral: "Neutral",
            alignmentChaotic: "Chaotic",
            typeLabel: "Type",
            typeAll: "All types",
            typeHumanoid: "Humanoid",
            typeBeast: "Beast",
            typeMonster: "Monster",
            typeUndead: "Undead",
            typeDemon: "Demon",
            typeDevil: "Devil",
            typeDragon: "Dragon",
            typeGiant: "Giant",
            typeElemental: "Elemental",
            typeConstruct: "Construct",
            typePlant: "Plant",
            typeOoze: "Ooze",
            resultsTitle: "Monsters",
            monsterCount: "monsters",
            monsterCountSingular: "monster",
            emptyMessage: "No monsters found.",
            glossaryTitle: "Glossary of Terms",
            glosAttack: "ATK (Attack)",
            glosAttackDesc: "The monster's attack bonus, added to the d20 roll to hit.",
            glosAc: "AC (Armor Class)",
            glosAcDesc: "The difficulty to hit the monster. Lower is easier to hit.",
            glosHp: "HP (Hit Points)",
            glosHpDesc: "The amount of damage the monster can take before dying.",
            glosMv: "MV (Movement)",
            glosMvDesc: "The distance the monster can move per turn.",
            glosStats: "Attributes (S/D/C/I/W/Ch)",
            glosStatsDesc: "Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.",
            glosAl: "AL (Alignment)",
            glosAlDesc: "Lawful (L), Neutral (N), or Chaotic (C). Defines the monster's morality and behavior.",
            glosLv: "LV (Level)",
            glosLvDesc: "The monster's challenge level. Higher level monsters are more dangerous.",
            glosAbilities: "Special Abilities",
            glosAbilitiesDesc: "Unique powers the monster can use in combat or exploration.",
            source: "Data extracted from the Shadowdark RPG Rulebook (v4.6), pages 191–270. The Arcane Library.",
            footerCaption: "Shadowdark Tools · Bestiary",
            footerCredit: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.',
            alignmentL: "Lawful",
            alignmentN: "Neutral",
            alignmentC: "Chaotic",
            levelPrefix: "Level"
        }
    };

    let currentLang = "pt-BR";
    let allMonsters = [];

    // DOM elements
    const searchInput = document.getElementById("search-input");
    const filterLevel = document.getElementById("filter-level");
    const filterAlignment = document.getElementById("filter-alignment");
    const filterType = document.getElementById("filter-type");
    const monstersGrid = document.getElementById("monsters-grid");
    const monsterCount = document.getElementById("monster-count");
    const emptyState = document.getElementById("empty-state");
    const emptyMessage = document.getElementById("empty-message");
    const langButtons = document.querySelectorAll(".bestiary-language-switch button");

    // Initialize
    function init() {
        loadLanguage();
        allMonsters = window.BestiaryUtils.getAllMonsters();
        renderMonsters(allMonsters);
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

        document.getElementById("eyebrow").textContent = t.eyebrow;
        document.getElementById("title").textContent = t.title;
        document.getElementById("intro").textContent = t.intro;
        document.getElementById("search-label").textContent = t.searchLabel;
        searchInput.placeholder = t.searchPlaceholder;
        document.getElementById("level-filter-label").textContent = t.levelLabel;
        document.getElementById("level-all").textContent = t.levelAll;
        document.getElementById("level-0-2").textContent = t.level0_2;
        document.getElementById("level-3-5").textContent = t.level3_5;
        document.getElementById("level-6-8").textContent = t.level6_8;
        document.getElementById("level-9-11").textContent = t.level9_11;
        document.getElementById("level-12-15").textContent = t.level12_15;
        document.getElementById("level-16").textContent = t.level16;
        document.getElementById("alignment-filter-label").textContent = t.alignmentLabel;
        document.getElementById("alignment-all").textContent = t.alignmentAll;
        document.getElementById("alignment-lawful").textContent = t.alignmentLawful;
        document.getElementById("alignment-neutral").textContent = t.alignmentNeutral;
        document.getElementById("alignment-chaotic").textContent = t.alignmentChaotic;
        document.getElementById("type-filter-label").textContent = t.typeLabel;
        document.getElementById("type-all").textContent = t.typeAll;
        document.getElementById("type-humanoid").textContent = t.typeHumanoid;
        document.getElementById("type-beast").textContent = t.typeBeast;
        document.getElementById("type-monster").textContent = t.typeMonster;
        document.getElementById("type-undead").textContent = t.typeUndead;
        document.getElementById("type-demon").textContent = t.typeDemon;
        document.getElementById("type-devil").textContent = t.typeDevil;
        document.getElementById("type-dragon").textContent = t.typeDragon;
        document.getElementById("type-giant").textContent = t.typeGiant;
        document.getElementById("type-elemental").textContent = t.typeElemental;
        document.getElementById("type-construct").textContent = t.typeConstruct;
        document.getElementById("type-plant").textContent = t.typePlant;
        document.getElementById("type-ooze").textContent = t.typeOoze;
        document.getElementById("results-title").textContent = t.resultsTitle;
        document.getElementById("glossary-title").textContent = t.glossaryTitle;
        document.getElementById("glos-attack").textContent = t.glosAttack;
        document.getElementById("glos-attack-desc").textContent = t.glosAttackDesc;
        document.getElementById("glos-ac").textContent = t.glosAc;
        document.getElementById("glos-ac-desc").textContent = t.glosAcDesc;
        document.getElementById("glos-hp").textContent = t.glosHp;
        document.getElementById("glos-hp-desc").textContent = t.glosHpDesc;
        document.getElementById("glos-mv").textContent = t.glosMv;
        document.getElementById("glos-mv-desc").textContent = t.glosMvDesc;
        document.getElementById("glos-stats").textContent = t.glosStats;
        document.getElementById("glos-stats-desc").textContent = t.glosStatsDesc;
        document.getElementById("glos-al").textContent = t.glosAl;
        document.getElementById("glos-al-desc").textContent = t.glosAlDesc;
        document.getElementById("glos-lv").textContent = t.glosLv;
        document.getElementById("glos-lv-desc").textContent = t.glosLvDesc;
        document.getElementById("glos-abilities").textContent = t.glosAbilities;
        document.getElementById("glos-abilities-desc").textContent = t.glosAbilitiesDesc;
        document.getElementById("source").textContent = t.source;
        document.getElementById("footer-caption").textContent = t.footerCaption;
        document.getElementById("footer-credit").innerHTML = t.footerCredit;
        document.getElementById("footer-subcredit").innerHTML = t.footerSubcredit;
        document.getElementById("empty-message").textContent = t.emptyMessage;

        // Update language buttons
        langButtons.forEach(btn => {
            btn.setAttribute("aria-pressed", btn.dataset.lang === currentLang ? "true" : "false");
        });

        // Re-render monsters with current language
        applyFilters();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener("input", debounce(applyFilters, 200));

        // Filter selects
        filterLevel.addEventListener("change", applyFilters);
        filterAlignment.addEventListener("change", applyFilters);
        filterType.addEventListener("change", applyFilters);

        // Language switch
        langButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                currentLang = btn.dataset.lang;
                localStorage.setItem("shadowdark-tools-lang", currentLang);
                document.documentElement.lang = currentLang;
                updateLanguage();
            });
        });
    }

    // Apply all filters
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const levelFilter = filterLevel.value;
        const alignmentFilter = filterAlignment.value;
        const typeFilter = filterType.value;

        let filtered = allMonsters;

        // Search filter (matches name and content in both languages)
        if (searchTerm) {
            filtered = filtered.filter(m => {
                const en = [m.name, m.description, m.atk,
                    ...m.abilities.map(a => (typeof a === "string" ? a : a.en))].join(" ").toLowerCase();
                const pt = [m.name, m.description_pt || "", m.atk_pt || "",
                    ...m.abilities.map(a => (typeof a === "string" ? a : (a.pt || "")))].join(" ").toLowerCase();
                return en.includes(searchTerm) || pt.includes(searchTerm);
            });
        }

        // Level filter
        if (levelFilter !== "all") {
            filtered = filtered.filter(m => {
                if (levelFilter === "0-2") return m.lv >= 0 && m.lv <= 2;
                if (levelFilter === "3-5") return m.lv >= 3 && m.lv <= 5;
                if (levelFilter === "6-8") return m.lv >= 6 && m.lv <= 8;
                if (levelFilter === "9-11") return m.lv >= 9 && m.lv <= 11;
                if (levelFilter === "12-15") return m.lv >= 12 && m.lv <= 15;
                if (levelFilter === "16+") return m.lv >= 16;
                return true;
            });
        }

        // Alignment filter
        if (alignmentFilter !== "all") {
            filtered = filtered.filter(m => m.al === alignmentFilter);
        }

        // Type filter (basic implementation - checks name patterns)
        if (typeFilter !== "all") {
            filtered = filtered.filter(m => {
                const name = m.name.toLowerCase();
                switch (typeFilter) {
                    case "humanoid":
                        return name.includes("human") || name.includes("elf") ||
                               name.includes("dwarf") || name.includes("orc") ||
                               name.includes("goblin") || name.includes("gnoll") ||
                               name.includes("bugbear") || name.includes("hobgoblin") ||
                               name.includes("kobold") || name.includes("lizardfolk") ||
                               name.includes("merfolk") || name.includes("sahuagin") ||
                               name.includes("viperian") || name.includes("beastman") ||
                               name.includes("bandit") || name.includes("guard") ||
                               name.includes("knight") || name.includes("soldier") ||
                               name.includes("thief") || name.includes("peasant") ||
                               name.includes("noble") || name.includes("priest") ||
                               name.includes("acolyte") || name.includes("cultist") ||
                               name.includes("assassin") || name.includes("berserker") ||
                               name.includes("gladiator") || name.includes("reaver") ||
                               name.includes("thug") || name.includes("pirate") ||
                               name.includes("wizard") || name.includes("apprentice") ||
                               name.includes("mage") || name.includes("archmage") ||
                               name.includes("druid") || name.includes("ranger");
                    case "beast":
                        return name.includes("bear") || name.includes("wolf") ||
                               name.includes("lion") || name.includes("tiger") ||
                               name.includes("ape") || name.includes("gorilla") ||
                               name.includes("horse") || name.includes("camel") ||
                               name.includes("elephant") || name.includes("mammoth") ||
                               name.includes("rhino") || name.includes("hippo") ||
                               name.includes("boar") || name.includes("deer") ||
                               name.includes("moose") || name.includes("smilodon") ||
                               name.includes("panther") || name.includes("vulture") ||
                               name.includes("eagle") || name.includes("hawk") ||
                               name.includes("owl") || name.includes("rat") ||
                               name.includes("bat") || name.includes("badger") ||
                               name.includes("weasel") || name.includes("mastiff") ||
                               name.includes("dog") || name.includes("cat") ||
                               name.includes("horse") || name.includes("pony") ||
                               name.includes("mule") || name.includes("donkey");
                    case "undead":
                        return name.includes("skeleton") || name.includes("zombie") ||
                               name.includes("ghoul") || name.includes("ghost") ||
                               name.includes("wraith") || name.includes("shadow") ||
                               name.includes("vampire") || name.includes("lich") ||
                               name.includes("mummy") || name.includes("wight") ||
                               name.includes("ghast") || name.includes("specter") ||
                               name.includes("poltergeist") || name.includes("revenant") ||
                               name.includes("draugr") || name.includes("banshee");
                    case "demon":
                        return name.includes("demon") || name.includes("balor") ||
                               name.includes("marilith") || name.includes("vrock") ||
                               name.includes("glabrez") || name.includes("dretch") ||
                               name.includes("hezrou") || name.includes("nalfeshnee") ||
                               name.includes("yochlol") || name.includes("succubus") ||
                               name.includes("incubus") || name.includes("quasit") ||
                               name.includes("shadow demon") || name.includes("molydeus");
                    case "devil":
                        return name.includes("devil") || name.includes("imp") ||
                               name.includes("barbed") || name.includes("horned") ||
                               name.includes("erinyes") || name.includes("bone devil") ||
                               name.includes("pit fiend") || name.includes("archdevil") ||
                               name.includes("lemure") || name.includes("spawn");
                    case "dragon":
                        return name.includes("dragon") || name.includes("wyvern") ||
                               name.includes("drake") || name.includes("wyrmling") ||
                               name.includes("wyrm");
                    case "giant":
                        return name.includes("giant") || name.includes("ogre") ||
                               name.includes("troll") || name.includes("ettin") ||
                               name.includes("cyclops") || name.includes("fomorian") ||
                               name.includes("firbolg") || name.includes("verbeeg");
                    case "elemental":
                        return name.includes("elemental") || name.includes("air") ||
                               name.includes("earth") || name.includes("fire") ||
                               name.includes("water") || name.includes("mephit") ||
                               name.includes("dao") || name.includes("djinni") ||
                               name.includes("efreeti") || name.includes("marid") ||
                               name.includes("sylph") || name.includes("gnome") ||
                               name.includes("salamander") || name.includes("golem");
                    case "construct":
                        return name.includes("golem") || name.includes("animated") ||
                               name.includes("armor") || name.includes("shield") ||
                               name.includes("statue") || name.includes("gargoyle") ||
                               name.includes("helmed") || name.includes("horror") ||
                               name.includes("scarecrow") || name.includes("mimic") ||
                               name.includes("rug") || name.includes("carpet") ||
                               name.includes("mirror") || name.includes("book");
                    case "plant":
                        return name.includes("plant") || name.includes("treant") ||
                               name.includes("dryad") || name.includes("shambling") ||
                               name.includes("mound") || name.includes("violet") ||
                               name.includes("fungus") || name.includes("myconid") ||
                               name.includes("spore") || name.includes("mold") ||
                               name.includes("ooze") || name.includes("slime") ||
                               name.includes("jelly") || name.includes("pudding");
                    case "ooze":
                        return name.includes("ooze") || name.includes("slime") ||
                               name.includes("jelly") || name.includes("pudding") ||
                               name.includes("mold") || name.includes("gelatinous") ||
                               name.includes("ochre") || name.includes("gray");
                    default:
                        return true;
                }
            });
        }

        renderMonsters(filtered);
    }

    // Render monsters
    function renderMonsters(monsters) {
        const t = i18n[currentLang];

        // Update count
        const count = monsters.length;
        monsterCount.textContent = `${count} ${count === 1 ? t.monsterCountSingular : t.monsterCount}`;

        // Clear grid
        monstersGrid.innerHTML = "";

        if (count === 0) {
            emptyState.hidden = false;
            return;
        }

        emptyState.hidden = true;

        // Render each monster
        monsters.forEach(monster => {
            const card = createMonsterCard(monster);
            monstersGrid.appendChild(card);
        });
    }

    // Create a monster card element
    function createMonsterCard(monster) {
        const t = i18n[currentLang];
        const card = document.createElement("article");
        card.className = "monster-card";

        const alignmentLabel = t[`alignment${monster.al}`] || monster.al;
        const levelLabel = monster.lv === 0 ? t.level0_2.split("–")[0] : `${t.levelPrefix} ${monster.lv}`;

        // Format attribute modifiers with sign
        const formatMod = (val) => val >= 0 ? `+${val}` : `${val}`;

        // Resolve localized content: pt-BR uses *_pt fields, en uses canon.
        const isPt = currentLang === "pt-BR";
        const description = isPt ? (monster.description_pt || monster.description) : monster.description;
        const atk = isPt ? (monster.atk_pt || monster.atk) : monster.atk;
        const mv = isPt ? (monster.mv_pt || monster.mv) : monster.mv;
        const abilities = monster.abilities.map(a =>
            isPt ? (typeof a === "string" ? a : (a.pt || a.en)) : (typeof a === "string" ? a : a.en)
        );

        card.innerHTML = `
            <div class="monster-card__header">
                <h3 class="monster-card__name">${monster.name}</h3>
                <div class="monster-card__meta">
                    <span class="monster-card__badge monster-card__badge--level">${levelLabel}</span>
                    <span class="monster-card__badge monster-card__badge--alignment" data-alignment="${monster.al}">${alignmentLabel}</span>
                </div>
            </div>
            <div class="monster-card__stats">
                <div class="monster-card__stat">
                    <span class="monster-card__stat-label">AC</span>
                    <span class="monster-card__stat-value">${monster.ac}</span>
                </div>
                <div class="monster-card__stat">
                    <span class="monster-card__stat-label">HP</span>
                    <span class="monster-card__stat-value">${monster.hp_raw}</span>
                </div>
                <div class="monster-card__stat">
                    <span class="monster-card__stat-label">ATK</span>
                    <span class="monster-card__stat-value">${atk.split(" ")[0]}</span>
                </div>
                <div class="monster-card__stat">
                    <span class="monster-card__stat-label">MV</span>
                    <span class="monster-card__stat-value">${mv}</span>
                </div>
            </div>
            <div class="monster-card__attributes">
                <div class="monster-card__attribute">
                    <span class="monster-card__attribute-label">FOR</span>
                    <span class="monster-card__attribute-value">${formatMod(monster.s)}</span>
                </div>
                <div class="monster-card__attribute">
                    <span class="monster-card__attribute-label">DES</span>
                    <span class="monster-card__attribute-value">${formatMod(monster.d)}</span>
                </div>
                <div class="monster-card__attribute">
                    <span class="monster-card__attribute-label">CON</span>
                    <span class="monster-card__attribute-value">${formatMod(monster.c)}</span>
                </div>
                <div class="monster-card__attribute">
                    <span class="monster-card__attribute-label">INT</span>
                    <span class="monster-card__attribute-value">${formatMod(monster.i)}</span>
                </div>
                <div class="monster-card__attribute">
                    <span class="monster-card__attribute-label">SAB</span>
                    <span class="monster-card__attribute-value">${formatMod(monster.w)}</span>
                </div>
                <div class="monster-card__attribute">
                    <span class="monster-card__attribute-label">CAR</span>
                    <span class="monster-card__attribute-value">${formatMod(monster.ch)}</span>
                </div>
            </div>
            <div class="monster-card__body">
                <div class="monster-card__attack">
                    <h4 class="monster-card__attack-title">${t.glosAttack}</h4>
                    <p class="monster-card__attack-desc">${atk}</p>
                </div>
                <p class="monster-card__description">${description}</p>
                ${abilities.length > 0 ? `
                    <div class="monster-card__abilities">
                        <h4 class="monster-card__abilities-title">${t.glosAbilities}</h4>
                        ${abilities.map(ability => {
                            // Split ability into name and description
                            const dotIndex = ability.indexOf('.');
                            if (dotIndex > 0 && dotIndex < 50) {
                                const name = ability.substring(0, dotIndex);
                                const desc = ability.substring(dotIndex);
                                return `<p class="monster-card__ability"><strong>${name}</strong>${desc}</p>`;
                            }
                            return `<p class="monster-card__ability">${ability}</p>`;
                        }).join("")}
                    </div>
                ` : ""}
            </div>
        `;

        return card;
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