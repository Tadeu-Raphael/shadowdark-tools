(function () {
    "use strict";

    const TEXT = {
        "pt-BR": {
            navHome: "Início", navGenerators: "Geradores", navAbout: "Sobre",
            eyebrow: "MESTRE", title: "Gerador de Encontros",
            description: "Role nas tabelas de encontros aleatórios por ambiente e use os resultados como estão ou como inspiração para a cena.",
            environment: "Ambiente", count: "Quantidade", generate: "Rolar encontros",
            encounterCharismaLabel: "Mod. Carisma",
            sourceLanguage: "As descrições dos encontros são exibidas em português.",
            specialRule: "Regra da tabela: 98–99 gera dois resultados adicionais; se algum deles também cair em 98–99, repita essa rolagem.",
            results: "Resultados", copy: "Copiar", copied: "Copiado", copyFailed: "Não foi possível copiar",
            download: "Baixar TXT", tableSummary: "Consultar a tabela d100",
            tableDescription: "A tabela do ambiente selecionado, com os intervalos usados na rolagem.",
            filter: "Filtrar resultados", rollColumn: "d100", entryColumn: "Encontro",
            empty: "Escolha um ambiente e role para gerar um encontro.",
            reroll: "Rolar novamente", resultTitle: "Encontro", combined: "Resultados combinados",
            resultDetails: "Detalhes do encontro", rerollDetails: "Rolar detalhes novamente",
            rerolls: "Rolagens 98–99 repetidas", sourceCredit: "Tabelas de encontros do Livro de Regras fornecido, páginas 142–185; regras de encontros, armadilhas e hazards, páginas 112–115.",
            footerCaption: "Shadowdark Tools · Gerador de Encontros",
            error: "Não foi possível carregar as tabelas de encontros. Recarregue a página e tente novamente.",
            all: "Tudo",
            guideEyebrow: "REGRAS RÁPIDAS", guideHeading: "Como usar encontros aleatórios",
            purposeTitle: "Propósito", purposeCopy: "Encontros aleatórios mantêm a pressão do tempo. Se o grupo demorar demais, aumenta o risco de novos encontros.",
            frequencyTitle: "Frequência", frequencyCopy: "O Mestre verifica encontros durante rodadas de exploração, conforme o perigo do ambiente:",
            unsafeFrequency: "<strong>Inseguro:</strong> a cada 3 rodadas.", riskyFrequency: "<strong>Arriscado:</strong> a cada 2 rodadas.", deadlyFrequency: "<strong>Letal:</strong> a cada rodada.",
            checkGuideTitle: "Teste de encontro", checkGuideCopy: "Role 1d6: um encontro acontece com resultado 1. O Mestre também pode testar após um ruído alto.",
            travelGuideTitle: "Viagem e distância", travelGuideCopy: "Em viagens pelo ermo, conte horas em vez de rodadas. Quando criaturas surgirem, determine a distância inicial abaixo.",
            supportEyebrow: "NA CENA", supportHeading: "Detalhes do encontro", supportDescription: "Role cada detalhe quando precisar; a reação aceita o modificador de Carisma de quem interage.",
            checkCardTitle: "Verificar encontro", checkCardCopy: "Escolha o perigo da área. Role 1d6; com resultado 1, o gerador rola na tabela d100 selecionada.",
            dangerLevel: "Perigo da área", unsafe: "Inseguro · a cada 3 rodadas", risky: "Arriscado · a cada 2 rodadas", deadly: "Letal · a cada rodada",
            rollD6: "Rolar d6", roll2D6: "Rolar 2d6", rollD100: "Rolar d100", rollD12: "Rolar d12",
            checkEncounter: "Rolar teste d6", checkHit: "Encontro! Rolando na tabela d100…", checkMiss: "Nenhum encontro (o resultado precisa ser 1).",
            distanceTitle: "Distância inicial", distanceCopy: "Quando criaturas errantes aparecem, role 1d6.", close: "Muito perto", near: "Perto", far: "Longe",
            activityTitle: "O que estão fazendo?", activityCopy: "Role 2d6 para determinar a atividade atual das criaturas.",
            hunting: "Caçando", eating: "Comendo", nesting: "Construindo / fazendo ninho", social: "Socializando / brincando", guarding: "Vigiando", sleeping: "Dormindo",
            reactionTitle: "Reação", reactionCopy: "Role 2d6 e some o modificador de Carisma do personagem que interage. Mortos-vivos e algumas criaturas vis são sempre hostis.", charisma: "Modificador de Carisma",
            hostile: "Hostil", suspicious: "Desconfiada", neutral: "Neutra", curious: "Curiosa", friendly: "Amigável",
            treasureTitle: "Tesouro", treasureCopy: "Há 50% de chance de uma criatura ou grupo encontrado ter tesouro.", hasTreasure: "Há tesouro.", noTreasure: "Não há tesouro.",
            specialEyebrow: "PERIGOS", specialHeading: "Armadilhas e hazards", specialDescription: "Role estas tabelas separadamente para acrescentar uma armadilha ou um perigo ambiental à cena.",
            trapsTitle: "Armadilhas", trapsCopy: "Armadilhas costumam dar sinais; buscas focadas as encontram automaticamente.", hazardsTitle: "Hazards", hazardsCopy: "Hazards são perigos ambientais, em geral visíveis, que restringem movimento, causam dano ou enfraquecem.",
            trap: "Armadilha", trigger: "Gatilho", effect: "Dano ou efeito", movement: "Movimento", damage: "Dano", weaken: "Enfraquecimento",
            purpose: "Propósito", howOften: "Frequência", reactionCheck: "Reação", treasure: "Tesouro", encounterTableSource: "Regras e tabelas de encontros aleatórios, armadilhas e hazards do Livro de Regras de Shadowdark, páginas 112–115 e 142–185.",
            trapTell: "Armadilhas acrescentam perigo e surpresa; um teste de atributo relevante pode evitar seus efeitos. Dê pistas e não exagere na frequência. Uma busca focada encontra a armadilha automaticamente. Personagens treinados podem desarmá-la com tempo e um método razoável; sob pressão ou grande dificuldade, o Mestre pode pedir um teste de atributo.",
            hazardRule: "Hazards são perigos passivos, em geral visíveis, que podem restringir movimento, causar dano contínuo ou enfraquecer. Normalmente não podem ser evitados ou desativados permanentemente, e podem ser combinados."
        },
        en: {
            navHome: "Home", navGenerators: "Generators", navAbout: "About",
            eyebrow: "GAME MASTER", title: "Encounter Generator",
            description: "Roll on the random encounter tables by environment and use the results as written or as inspiration for the scene.",
            environment: "Environment", count: "Quantity", generate: "Roll encounters",
            encounterCharismaLabel: "CHA mod.",
            sourceLanguage: "Encounter descriptions are displayed in English.",
            specialRule: "Table rule: 98–99 produces two additional results; if either is also 98–99, reroll that result.",
            results: "Results", copy: "Copy", copied: "Copied", copyFailed: "Could not copy",
            download: "Download TXT", tableSummary: "Browse the d100 table",
            tableDescription: "The selected environment's table and its roll ranges.",
            filter: "Filter results", rollColumn: "d100", entryColumn: "Encounter",
            empty: "Choose an environment and roll to generate an encounter.",
            reroll: "Roll again", resultTitle: "Encounter", combined: "Combined results",
            resultDetails: "Encounter details", rerollDetails: "Reroll details",
            rerolls: "Repeated 98–99 rolls", sourceCredit: "Encounter tables from the supplied rulebook, pages 142–185; encounter, trap, and hazard rules, pages 112–115.",
            footerCaption: "Shadowdark Tools · Encounter Generator",
            error: "Could not load the encounter tables. Reload the page and try again.",
            all: "All",
            guideEyebrow: "QUICK RULES", guideHeading: "Using random encounters",
            purposeTitle: "Purpose", purposeCopy: "Random encounters keep time pressure up. If the party lingers too long, the risk of another encounter rises.",
            frequencyTitle: "How often?", frequencyCopy: "The GM checks for encounters during crawling rounds based on the environment's danger level:",
            unsafeFrequency: "<strong>Unsafe:</strong> check every 3 rounds.", riskyFrequency: "<strong>Risky:</strong> check every 2 rounds.", deadlyFrequency: "<strong>Deadly:</strong> check every round.",
            checkGuideTitle: "Encounter check", checkGuideCopy: "Roll 1d6: an encounter occurs on a 1. The GM can also check after a loud disturbance.",
            travelGuideTitle: "Travel and distance", travelGuideCopy: "For overland travel, count hours instead of rounds. When creatures appear, determine their starting distance below.",
            supportEyebrow: "IN THE SCENE", supportHeading: "Encounter details", supportDescription: "Roll each detail as needed; the reaction check accepts the interacting character's Charisma modifier.",
            checkCardTitle: "Check for an encounter", checkCardCopy: "Choose the area's danger level. Roll 1d6; on a 1, the generator rolls on the selected d100 table.",
            dangerLevel: "Area danger", unsafe: "Unsafe · every 3 rounds", risky: "Risky · every 2 rounds", deadly: "Deadly · every round",
            rollD6: "Roll d6", roll2D6: "Roll 2d6", rollD100: "Roll d100", rollD12: "Roll d12",
            checkEncounter: "Roll encounter check", checkHit: "Encounter! Rolling on the d100 table…", checkMiss: "No encounter (the result must be 1).",
            distanceTitle: "Starting distance", distanceCopy: "When wandering creatures appear, roll 1d6.", close: "Close", near: "Near", far: "Far",
            activityTitle: "What are they doing?", activityCopy: "Roll 2d6 to determine the creatures' current activity.",
            hunting: "Hunting", eating: "Eating", nesting: "Building / nesting", social: "Socializing / playing", guarding: "Guarding", sleeping: "Sleeping",
            reactionTitle: "Reaction", reactionCopy: "Roll 2d6 and add the interacting character's Charisma modifier. Undead and some vicious creatures are always hostile.", charisma: "Charisma modifier",
            hostile: "Hostile", suspicious: "Suspicious", neutral: "Neutral", curious: "Curious", friendly: "Friendly",
            treasureTitle: "Treasure", treasureCopy: "There is a 50% chance an encountered creature or group has treasure.", hasTreasure: "It has treasure.", noTreasure: "It has no treasure.",
            specialEyebrow: "DANGERS", specialHeading: "Traps and hazards", specialDescription: "Roll these tables separately to add a trap or environmental hazard to the scene.",
            trapsTitle: "Traps", trapsCopy: "Traps usually give a tell; focused searches find them automatically.", hazardsTitle: "Hazards", hazardsCopy: "Hazards are environmental dangers, often visible, that restrict movement, deal damage, or weaken.",
            trap: "Trap", trigger: "Trigger", effect: "Damage or effect", movement: "Movement", damage: "Damage", weaken: "Weaken",
            purpose: "Purpose", howOften: "How often?", reactionCheck: "Reaction", treasure: "Treasure", encounterTableSource: "Random encounter, trap, and hazard rules and tables from the Shadowdark Rulebook, pages 112–115 and 142–185.",
            trapTell: "Traps add peril and surprise; a relevant stat check can avoid their effects. Give them a tell and use them sparingly. A focused search automatically finds one. Trained characters can disable a trap with time and a reasonable method; under pressure or for a difficult trap, the GM may call for a stat check.",
            hazardRule: "Hazards are passive dangers, often obvious, that can restrict movement, deal ongoing damage, or weaken. They usually cannot be avoided or permanently disabled, and multiple types can be combined."
        }
    };

    const TITLES = {
        arctic: ["Ártico", "Arctic"],
        "artisan-district": ["Distrito dos Artesãos", "Artisan District"],
        "castle-district": ["Distrito do Castelo", "Castle District"],
        cave: ["Caverna", "Cave"],
        "deep-tunnels": ["Túneis Profundos", "Deep Tunnels"],
        desert: ["Deserto", "Desert"],
        forest: ["Floresta", "Forest"],
        grassland: ["Campos", "Grassland"],
        "high-district": ["Distrito Alto", "High District"],
        jungle: ["Selva", "Jungle"],
        "low-district": ["Distrito Baixo", "Low District"],
        market: ["Mercado", "Market"],
        mountain: ["Montanha", "Mountain"],
        ocean: ["Oceano", "Ocean"],
        "river-and-coast": ["Rio e Costa", "River and Coast"],
        ruins: ["Ruínas", "Ruins"],
        slums: ["Bairros Pobres", "Slums"],
        swamp: ["Pântano", "Swamp"],
        tavern: ["Taverna", "Tavern"],
        "temple-district": ["Distrito do Templo", "Temple District"],
        tomb: ["Tumba", "Tomb"],
        "university-district": ["Distrito Universitário", "University District"]
    };

    const SUPPORT_TABLES = {
        distances: [
            { range: "1", key: "close" }, { range: "2–4", key: "near" }, { range: "5–6", key: "far" }
        ],
        activities: [
            { min: 2, max: 4, range: "2–4", key: "hunting" },
            { min: 5, max: 6, range: "5–6", key: "eating" },
            { min: 7, max: 8, range: "7–8", key: "nesting" },
            { min: 9, max: 10, range: "9–10", key: "social" },
            { min: 11, max: 11, range: "11", key: "guarding" },
            { min: 12, max: 12, range: "12", key: "sleeping" }
        ],
        reactions: [
            { max: 6, key: "hostile" }, { min: 7, max: 8, key: "suspicious" },
            { min: 9, max: 9, key: "neutral" }, { min: 10, max: 11, key: "curious" }, { min: 12, key: "friendly" }
        ],
        traps: [
            { name: ["Besta", "Crossbow"], trigger: ["Fio de disparo", "Tripwire"], effect: ["1d6", "1d6"] },
            { name: ["Chuva de agulhas", "Hail of needles"], trigger: ["Placa de pressão", "Pressure plate"], effect: ["1d6 / sono", "1d6 / sleep"] },
            { name: ["Gás tóxico", "Toxic gas"], trigger: ["Abrir uma porta", "Opening a door"], effect: ["1d6 / paralisia", "1d6 / paralyze"] },
            { name: ["Rede farpada", "Barbed net"], trigger: ["Alavanca ou botão", "Switch or button"], effect: ["1d6 / cegueira", "1d6 / blind"] },
            { name: ["Pedregulho rolante", "Rolling boulder"], trigger: ["Degrau falso na escada", "False step on stairs"], effect: ["2d8", "2d8"] },
            { name: ["Lâmina cortante", "Slicing blade"], trigger: ["Fechar uma porta", "Closing a door"], effect: ["2d8 / sono", "2d8 / sleep"] },
            { name: ["Fosso com estacas", "Spiked pit"], trigger: ["Romper um feixe de luz", "Breaking a light beam"], effect: ["2d8 / paralisia", "2d8 / paralyze"] },
            { name: ["Azagaia", "Javelin"], trigger: ["Puxar uma alavanca", "Pulling a lever"], effect: ["2d8 / confusão", "2d8 / confuse"] },
            { name: ["Glifo mágico", "Magical glyph"], trigger: ["Pronunciar uma palavra", "A word is spoken"], effect: ["3d10", "3d10"] },
            { name: ["Explosão de fogo", "Blast of fire"], trigger: ["Gancho em um fio", "Hook on a thread"], effect: ["3d10 / paralisia", "3d10 / paralyze"] },
            { name: ["Bloco em queda", "Falling block"], trigger: ["Remover um objeto", "Removing an object"], effect: ["3d10 / inconsciência", "3d10 / unconscious"] },
            { name: ["Estátua amaldiçoada", "Cursed statue"], trigger: ["Lançar uma magia", "Casting a spell"], effect: ["3d10 / petrificação", "3d10 / petrify"] }
        ],
        hazards: [
            { movement: ["Areia movediça", "Quicksand"], damage: ["Poças de ácido", "Acid pools"], weaken: ["Fumaça cegante", "Blinding smoke"] },
            { movement: ["Estrepes", "Caltrops"], damage: ["Rochas explosivas", "Exploding rocks"], weaken: ["Campo magnético", "Magnetic field"] },
            { movement: ["Entulho solto", "Loose debris"], damage: ["Água gelada", "Icy water"], weaken: ["Runas exaustivas", "Exhausting runes"] },
            { movement: ["Campo de piche", "Tar field"], damage: ["Lava", "Lava"], weaken: ["Zona antimagia", "Antimagic zone"] },
            { movement: ["Trepadeiras agarradoras", "Grasping vines"], damage: ["Granizo pesado", "Pummeling hail"], weaken: ["Apagam fontes de luz", "Snuffs light sources"] },
            { movement: ["Ladeira íngreme", "Steep incline"], damage: ["Jatos de vapor", "Steam vents"], weaken: ["Som desorientador", "Disorienting sound"] },
            { movement: ["Gelo escorregadio", "Slippery ice"], damage: ["Mofo tóxico", "Toxic mold"], weaken: ["Silêncio mágico", "Magical silence"] },
            { movement: ["Correnteza", "Rushing water"], damage: ["Detritos em queda", "Falling debris"], weaken: ["Frio entorpecente", "Numbing cold"] },
            { movement: ["Teias pegajosas", "Sticky webs"], damage: ["Chuva ácida", "Acid rain"], weaken: ["Cheiro nauseante", "Sickening smell"] },
            { movement: ["Vento de vendaval", "Gale force wind"], damage: ["Cortina de fogo", "Curtain of fire"], weaken: ["Esporos que induzem sono", "Sleep-inducing spores"] },
            { movement: ["Piso engordurado", "Greased floor"], damage: ["Campo eletrificado", "Electrified field"], weaken: ["Reflexos confusos", "Confusing reflections"] },
            { movement: ["Terreno ilusório", "Illusory terrain"], damage: ["Fluxo gravitacional", "Gravity flux"], weaken: ["Roubo de memórias", "Memory-stealing"] }
        ]
    };

    const $ = (id) => document.getElementById(id);
    const environmentSelect = $("environment-select");
    const resultList = $("result-list");
    const tableBody = $("table-body");
    const searchInput = $("table-search");
    let language = localStorage.getItem("shadowdark-tools-lang") || (navigator.language.startsWith("pt") ? "pt-BR" : "en");
    if (!TEXT[language]) language = "pt-BR";
    let tables = [];
    let results = [];
    let supportRolls = { check: null, distance: null, activity: null, reaction: null, treasure: null, trap: null, hazard: null };

    function titleFor(table) {
        const pair = TITLES[table.id];
        return pair ? pair[language === "pt-BR" ? 0 : 1] : table.title;
    }

    function entryText(entry) {
        return language === "pt-BR" ? (entry.textPt || entry.text) : entry.text;
    }

    function setLanguage(nextLanguage) {
        if (!TEXT[nextLanguage]) return;
        language = nextLanguage;
        localStorage.setItem("shadowdark-tools-lang", language);
        document.documentElement.lang = language;
        const t = TEXT[language];
        const textMap = {
            "nav-home": t.navHome, "nav-generators": t.navGenerators, "nav-about": t.navAbout,
            "page-eyebrow": t.eyebrow, "page-title": t.title, "page-description": t.description,
            "environment-label": t.environment, "count-label": t.count, "generate-label": t.generate,
            "encounter-charisma-label": t.encounterCharismaLabel,
            "source-language-note": t.sourceLanguage, "results-heading": t.results,
            "special-rule-note": t.specialRule,
            "copy-label": t.copy, "export-label": t.download, "table-summary": t.tableSummary,
            "table-description": t.tableDescription, "roll-column": t.rollColumn,
            "entry-column": t.entryColumn, "source-credit": t.sourceCredit,
            "footer-caption": t.footerCaption,
            "guide-eyebrow": t.guideEyebrow, "guide-heading": t.guideHeading,
            "purpose-title": t.purposeTitle, "purpose-copy": t.purposeCopy,
            "frequency-title": t.frequencyTitle, "frequency-copy": t.frequencyCopy,
            "check-guide-title": t.checkGuideTitle, "check-guide-copy": t.checkGuideCopy,
            "travel-guide-title": t.travelGuideTitle, "travel-guide-copy": t.travelGuideCopy,
            "support-eyebrow": t.supportEyebrow, "support-heading": t.supportHeading, "support-description": t.supportDescription,
            "check-card-title": t.checkCardTitle, "check-card-copy": t.checkCardCopy, "danger-level-label": t.dangerLevel,
            "check-encounter-button": t.checkEncounter,
            "distance-title": t.distanceTitle, "distance-copy": t.distanceCopy, "distance-button": t.rollD6,
            "activity-title": t.activityTitle, "activity-copy": t.activityCopy, "activity-button": t.roll2D6,
            "reaction-title": t.reactionTitle, "reaction-copy": t.reactionCopy, "reaction-button": t.roll2D6, "charisma-label": t.charisma,
            "treasure-title": t.treasureTitle, "treasure-copy": t.treasureCopy, "treasure-button": t.rollD100,
            "special-eyebrow": t.specialEyebrow, "special-tables-heading": t.specialHeading, "special-tables-description": t.specialDescription,
            "traps-title": t.trapsTitle, "traps-copy": t.trapsCopy, "traps-guidance": t.trapTell, "trap-button": t.rollD12,
            "hazards-title": t.hazardsTitle, "hazards-copy": t.hazardsCopy, "hazards-guidance": t.hazardRule, "hazard-button": t.rollD12,
            "trap-column": t.trap, "trigger-column": t.trigger, "effect-column": t.effect,
            "movement-column": t.movement, "damage-column": t.damage, "weaken-column": t.weaken
        };
        Object.entries(textMap).forEach(([id, value]) => {
            const el = $(id);
            if (el) {
                if (["unsafe-frequency", "risky-frequency", "deadly-frequency"].includes(id)) el.innerHTML = value;
                else el.textContent = value;
            }
        });
        $("unsafe-frequency").innerHTML = t.unsafeFrequency;
        $("risky-frequency").innerHTML = t.riskyFrequency;
        $("deadly-frequency").innerHTML = t.deadlyFrequency;
        const dangerOptions = [t.unsafe, t.risky, t.deadly];
        Array.from($("danger-level").options).forEach((option, index) => { option.textContent = dangerOptions[index]; });
        searchInput.placeholder = t.filter;
        searchInput.setAttribute("aria-label", t.filter);
        document.querySelectorAll(".encounter-language-switch button").forEach((button) => {
            button.setAttribute("aria-pressed", button.dataset.lang === language ? "true" : "false");
        });
        const selectedTable = getSelectedTable();
        renderSupplementalTables();
        renderSupplementalResults();
        if (selectedTable) {
            renderTable(selectedTable);
            renderResults();
        } else {
            renderEmpty();
        }
    }

    function getSelectedTable() {
        return tables.find((table) => table.id === environmentSelect.value) || null;
    }

    function rollDie(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    function renderSupplementalTables() {
        const suffix = language === "pt-BR" ? 0 : 1;
        $("trap-table-body").innerHTML = "";
        SUPPORT_TABLES.traps.forEach((item, index) => {
            const row = document.createElement("tr");
            [String(index + 1), item.name[suffix], item.trigger[suffix], item.effect[suffix]].forEach((value) => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            $("trap-table-body").appendChild(row);
        });
        $("hazard-table-body").innerHTML = "";
        SUPPORT_TABLES.hazards.forEach((item, index) => {
            const row = document.createElement("tr");
            [String(index + 1), item.movement[suffix], item.damage[suffix], item.weaken[suffix]].forEach((value) => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            $("hazard-table-body").appendChild(row);
        });
    }

    function getActivity(total) {
        return SUPPORT_TABLES.activities.find((item) => total >= item.min && total <= item.max);
    }

    function getReaction(total) {
        return SUPPORT_TABLES.reactions.find((item) => (item.min === undefined || total >= item.min) && (item.max === undefined || total <= item.max));
    }

    function getEncounterCharismaModifier() {
        const value = Number.parseInt($("encounter-charisma-modifier").value, 10) || 0;
        return Math.max(-10, Math.min(10, value));
    }

    function rollEncounterDetails() {
        const distance = rollDie(6);
        const firstActivityDie = rollDie(6);
        const secondActivityDie = rollDie(6);
        const firstReactionDie = rollDie(6);
        const secondReactionDie = rollDie(6);
        const charismaModifier = getEncounterCharismaModifier();
        return {
            distance: { roll: distance },
            activity: { first: firstActivityDie, second: secondActivityDie, total: firstActivityDie + secondActivityDie },
            reaction: {
                first: firstReactionDie,
                second: secondReactionDie,
                modifier: charismaModifier,
                total: firstReactionDie + secondReactionDie + charismaModifier
            },
            treasure: { roll: rollDie(100) }
        };
    }

    function encounterDetailLines(details) {
        const t = TEXT[language];
        const distanceEntry = details.distance.roll === 1 ? SUPPORT_TABLES.distances[0] : details.distance.roll <= 4 ? SUPPORT_TABLES.distances[1] : SUPPORT_TABLES.distances[2];
        const activityEntry = getActivity(details.activity.total);
        const reactionEntry = getReaction(details.reaction.total);
        const reactionModifier = details.reaction.modifier ? ` ${details.reaction.modifier > 0 ? "+" : "−"} ${Math.abs(details.reaction.modifier)}` : "";
        return [
            `${t.distanceTitle}: d6 ${details.distance.roll} — ${t[distanceEntry.key]}`,
            `${t.activityTitle}: 2d6 ${details.activity.first} + ${details.activity.second} = ${details.activity.total} — ${t[activityEntry.key]}`,
            `${t.reactionTitle}: 2d6 ${details.reaction.first} + ${details.reaction.second}${reactionModifier} = ${details.reaction.total} — ${t[reactionEntry.key]}`,
            `${t.treasureTitle}: d100 ${formatRoll(details.treasure.roll)} — ${details.treasure.roll <= 50 ? t.hasTreasure : t.noTreasure}`
        ];
    }

    function renderSupplementalResults() {
        const t = TEXT[language];
        const suffix = language === "pt-BR" ? 0 : 1;
        const check = supportRolls.check;
        $("check-encounter-result").textContent = check
            ? `${t[check.danger]} · 1d6 ${check.roll} · ${check.roll === 1 ? t.checkHit : t.checkMiss}`
            : "";

        const distance = supportRolls.distance;
        const distanceEntry = distance && (distance.roll === 1 ? SUPPORT_TABLES.distances[0] : distance.roll <= 4 ? SUPPORT_TABLES.distances[1] : SUPPORT_TABLES.distances[2]);
        $("distance-result").textContent = distance ? `d6 ${distance.roll} · ${t[distanceEntry.key]}` : "";

        const activity = supportRolls.activity;
        const activityEntry = activity && getActivity(activity.total);
        $("activity-result").textContent = activity ? `2d6 ${activity.first} + ${activity.second} = ${activity.total} · ${t[activityEntry.key]}` : "";

        const reaction = supportRolls.reaction;
        const reactionEntry = reaction && getReaction(reaction.total);
        const modText = reaction && reaction.modifier ? ` ${reaction.modifier > 0 ? "+" : "−"} ${Math.abs(reaction.modifier)}` : "";
        $("reaction-result").textContent = reaction ? `2d6 ${reaction.first} + ${reaction.second}${modText} = ${reaction.total} · ${t[reactionEntry.key]}` : "";

        const treasure = supportRolls.treasure;
        $("treasure-result").textContent = treasure ? `d100 ${formatRoll(treasure.roll)} · ${treasure.roll <= 50 ? t.hasTreasure : t.noTreasure}` : "";

        const trap = supportRolls.trap;
        if (trap) {
            const item = SUPPORT_TABLES.traps[trap.roll - 1];
            $("trap-result").textContent = `d12 ${trap.roll} · ${item.name[suffix]} — ${item.trigger[suffix]} — ${item.effect[suffix]}`;
        } else $("trap-result").textContent = "";

        const hazard = supportRolls.hazard;
        if (hazard) {
            const item = SUPPORT_TABLES.hazards[hazard.roll - 1];
            $("hazard-result").textContent = `d12 ${hazard.roll} · ${item.movement[suffix]} — ${item.damage[suffix]} — ${item.weaken[suffix]}`;
        } else $("hazard-result").textContent = "";
    }

    function rollSupplemental(type) {
        if (type === "distance") supportRolls.distance = { roll: rollDie(6) };
        if (type === "activity") {
            const first = rollDie(6), second = rollDie(6);
            supportRolls.activity = { first, second, total: first + second };
        }
        if (type === "reaction") {
            const first = rollDie(6), second = rollDie(6);
            const modifier = Number.parseInt($("charisma-modifier").value, 10) || 0;
            supportRolls.reaction = { first, second, modifier, total: first + second + modifier };
        }
        if (type === "treasure") supportRolls.treasure = { roll: rollDie(100) };
        if (type === "trap") supportRolls.trap = { roll: rollDie(12) };
        if (type === "hazard") supportRolls.hazard = { roll: rollDie(12) };
        renderSupplementalResults();
    }

    function checkForEncounter() {
        supportRolls.check = { roll: rollDie(6), danger: $("danger-level").value };
        renderSupplementalResults();
        if (supportRolls.check.roll === 1) generate();
    }

    function populateEnvironments() {
        environmentSelect.innerHTML = "";
        tables.forEach((table) => {
            const option = document.createElement("option");
            option.value = table.id;
            option.textContent = titleFor(table);
            environmentSelect.appendChild(option);
        });
        const saved = localStorage.getItem("shadowdark-encounter-environment");
        if (saved && tables.some((table) => table.id === saved)) environmentSelect.value = saved;
    }

    function rollD100() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function formatRoll(value) {
        if (value === 100) return "00";
        return String(value).padStart(2, "0");
    }

    function getEntry(table, roll) {
        const percentile = roll === 100 ? 0 : roll;
        return table.entries.find((entry) => {
            const [start, end] = entry.roll.split("-").map(Number);
            return percentile >= start && percentile <= (end || start);
        });
    }

    function rollEncounter(table, mayCombine = true) {
        const repeatedRolls = [];
        let roll = rollD100();
        while (!mayCombine && (roll === 98 || roll === 99)) {
            repeatedRolls.push(roll);
            roll = rollD100();
        }
        const entry = getEntry(table, roll);
        if (!entry) throw new Error(`Missing d100 table entry for ${roll}`);
        if (mayCombine && (roll === 98 || roll === 99)) {
            return {
                roll,
                entry,
                combined: [rollEncounter(table, false), rollEncounter(table, false)],
                repeatedRolls
            };
        }
        return { roll, entry, combined: null, repeatedRolls };
    }

    function createResultCard(result, index) {
        const t = TEXT[language];
        const article = document.createElement("article");
        article.className = "encounter-result-card";

        const header = document.createElement("div");
        header.className = "encounter-result-card__header";
        const heading = document.createElement("h3");
        heading.textContent = `${t.resultTitle} ${index + 1} · ${titleFor(result.table)}`;
        const rollLabel = document.createElement("span");
        rollLabel.className = "encounter-roll";
        rollLabel.textContent = `d100 ${formatRoll(result.roll)}`;
        header.append(heading, rollLabel);
        article.appendChild(header);

        const description = document.createElement("p");
        description.textContent = entryText(result.entry);
        article.appendChild(description);

        if (result.combined) {
            const combined = document.createElement("div");
            combined.className = "encounter-result-card__combined";
            result.combined.forEach((subResult, subIndex) => {
                const item = document.createElement("p");
                item.className = "encounter-combined-item";
                item.textContent = `${subIndex + 1}. d100 ${formatRoll(subResult.roll)} (${subResult.entry.roll}): ${entryText(subResult.entry)}`;
                combined.appendChild(item);
            });
            article.appendChild(combined);
        }

        if (result.combined && result.combined.some((item) => item.repeatedRolls.length)) {
            const repeated = document.createElement("p");
            repeated.className = "encounter-result-card__note";
            const rolls = result.combined.flatMap((item) => item.repeatedRolls).map(formatRoll).join(", ");
            repeated.textContent = `${t.rerolls}: ${rolls}`;
            article.appendChild(repeated);
        }

        if (result.details) {
            const details = document.createElement("div");
            details.className = "encounter-result-card__details";
            const detailsHeader = document.createElement("div");
            detailsHeader.className = "encounter-result-card__details-header";
            const detailsTitle = document.createElement("h4");
            detailsTitle.textContent = t.resultDetails;
            const rerollDetails = document.createElement("button");
            rerollDetails.type = "button";
            rerollDetails.textContent = t.rerollDetails;
            rerollDetails.addEventListener("click", () => {
                results[index].details = rollEncounterDetails();
                renderResults();
            });
            detailsHeader.append(detailsTitle, rerollDetails);

            const detailList = document.createElement("ul");
            encounterDetailLines(result.details).forEach((line) => {
                const item = document.createElement("li");
                item.textContent = line;
                detailList.appendChild(item);
            });
            details.append(detailsHeader, detailList);
            article.appendChild(details);
        }

        const footer = document.createElement("div");
        footer.className = "encounter-result-card__footer";
        const reroll = document.createElement("button");
        reroll.type = "button";
        reroll.textContent = t.reroll;
        reroll.addEventListener("click", () => {
            const table = getSelectedTable();
            if (!table) return;
            results[index] = { ...rollEncounter(table), table, details: rollEncounterDetails() };
            renderResults();
        });
        footer.appendChild(reroll);
        article.appendChild(footer);
        return article;
    }

    function renderEmpty() {
        resultList.innerHTML = "";
        const empty = document.createElement("div");
        empty.className = "encounter-empty";
        empty.textContent = TEXT[language].empty;
        resultList.appendChild(empty);
    }

    function renderResults() {
        resultList.innerHTML = "";
        if (!results.length) {
            renderEmpty();
            $("copy-button").disabled = true;
            $("export-button").disabled = true;
            return;
        }
        results.forEach((result, index) => resultList.appendChild(createResultCard(result, index)));
        $("copy-button").disabled = false;
        $("export-button").disabled = false;
    }

    function generate() {
        const table = getSelectedTable();
        if (!table) return;
        const count = Math.max(1, Math.min(10, Number.parseInt($("encounter-count").value, 10) || 1));
        $("encounter-count").value = String(count);
        localStorage.setItem("shadowdark-encounter-environment", table.id);
        results = Array.from({ length: count }, () => ({ ...rollEncounter(table), table, details: rollEncounterDetails() }));
        renderResults();
    }

    function renderTable(table) {
        const query = searchInput.value.trim().toLocaleLowerCase();
        tableBody.innerHTML = "";
        table.entries.filter((entry) => !query || `${entry.roll} ${entryText(entry)}`.toLocaleLowerCase().includes(query)).forEach((entry) => {
            const row = document.createElement("tr");
            const roll = document.createElement("td");
            roll.textContent = entry.roll;
            const text = document.createElement("td");
            text.textContent = entryText(entry);
            row.append(roll, text);
            tableBody.appendChild(row);
        });
    }

    function resultAsText(result, index) {
        const output = [`${TEXT[language].resultTitle} ${index + 1} — ${titleFor(result.table)} — d100 ${formatRoll(result.roll)}`, entryText(result.entry)];
        if (result.combined) {
            result.combined.forEach((subResult, subIndex) => {
                output.push(`${subIndex + 1}. d100 ${formatRoll(subResult.roll)} (${subResult.entry.roll}): ${entryText(subResult.entry)}`);
            });
        }
        if (result.details) output.push(...encounterDetailLines(result.details));
        return output.join("\n");
    }

    async function copyResults() {
        const text = results.map(resultAsText).join("\n\n");
        try {
            await navigator.clipboard.writeText(text);
            $("copy-label").textContent = TEXT[language].copied;
            setTimeout(() => { $("copy-label").textContent = TEXT[language].copy; }, 1400);
        } catch {
            $("copy-label").textContent = TEXT[language].copyFailed;
            setTimeout(() => { $("copy-label").textContent = TEXT[language].copy; }, 1800);
        }
    }

    function exportResults() {
        const text = results.map(resultAsText).join("\n\n");
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `shadowdark-encounters-${getSelectedTable()?.id || "results"}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    }

    async function init() {
        document.querySelectorAll(".encounter-language-switch button").forEach((button) => {
            button.addEventListener("click", () => setLanguage(button.dataset.lang));
        });
        $("generate-button").addEventListener("click", generate);
        $("copy-button").addEventListener("click", copyResults);
        $("export-button").addEventListener("click", exportResults);
        $("check-encounter-button").addEventListener("click", checkForEncounter);
        document.querySelectorAll("[data-roll]").forEach((button) => {
            button.addEventListener("click", () => rollSupplemental(button.dataset.roll));
        });
        $("encounter-charisma-modifier").addEventListener("input", () => { $("charisma-modifier").value = $("encounter-charisma-modifier").value; });
        $("charisma-modifier").addEventListener("input", () => { $("encounter-charisma-modifier").value = $("charisma-modifier").value; });
        environmentSelect.addEventListener("change", () => {
            const table = getSelectedTable();
            if (!table) return;
            localStorage.setItem("shadowdark-encounter-environment", table.id);
            renderTable(table);
            results = [];
            renderResults();
        });
        searchInput.addEventListener("input", () => {
            const table = getSelectedTable();
            if (table) renderTable(table);
        });

        try {
            const response = await fetch("data/encounters.json");
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            tables = await response.json();
            populateEnvironments();
            setLanguage(language);
            renderTable(getSelectedTable());
        } catch (error) {
            console.error("Encounter tables failed to load", error);
            $("generate-button").disabled = true;
            resultList.textContent = TEXT[language].error;
        }
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
