(function () {
    "use strict";

    const D = window.CHARACTER_DATA;
    const R = window.ShadowdarkCharacterRules;
    const B = window.ShadowdarkBuilderRules;
    const $ = (id) => document.getElementById(id);
    const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
    const mod = (value) => value >= 0 ? `+${value}` : String(value);
    let lang = localStorage.getItem("shadowdark-tools-lang") === "en" ? "en" : "pt-BR";
    let draft = B.createDraft();
    let step = 0;

    const texts = {
        "pt-BR": {
            home: "Início", generators: "Geradores", about: "Sobre", eyebrow: "PASSO A PASSO",
            title: "Construtor de Personagem", intro: "Construa um personagem de nível 1: escolha, role os dados e revise sua ficha.",
            scope: "Suas escolhas ficam nesta página enquanto ela estiver aberta. Exporte a ficha antes de sair.",
            steps: ["Identidade", "Atributos", "Classe", "PV e talentos", "Magias e idiomas", "Equipamento", "Revisão"],
            previous: "Anterior", next: "Próximo", review: "Revisar ficha", restart: "Recomeçar",
            confirmRestart: "Descartar esta ficha e começar outra?", progress: "Etapa", of: "de",
            ancestry: "Ancestralidade", name: "Nome completo", rollName: "Rolar nome duplo",
            alignment: "Alinhamento", lawful: "Ordeiro", neutral: "Neutro", chaotic: "Caótico",
            background: "Background", classKey: "Classe", deity: "Divindade", select: "Escolha uma opção",
            statsHelp: "Role 3d6 para cada atributo, em ordem, ou informe valores de 3 a 18 acordados com seu mestre. Bônus de talentos são somados depois.",
            rollStats: "Rolar atributos (3d6)", manual: "Valor informado", base: "Base", total: "Total",
            rollVitals: "Rolar PV, talentos e ouro", vitalsHelp: "No 1º nível, o bônus de CON para PV é no mínimo +1. Anões recebem +2 PV e rolam o dado da classe duas vezes, ficando com o maior. Humanos recebem um talento extra.",
            talent: "Talento", level: "Nível", roll: "Rolagem", hp: "PV", gold: "Ouro", ac: "CA", slots: "Espaços",
            conBonus: "Bônus de CON aplicado", dwarfBonus: "Bônus de anão", kept: "escolhido", audit: "Registro de rolagens",
            mastery: "Mestre em Arma", grit: "Determinação", elfGift: "Visão Aguçada", ranged: "+1 em ataques à distância", casting: "+1 em testes de conjuração",
            spells: "Magias", languages: "Idiomas", common: "Idiomas comuns adicionais", rare: "Idiomas raros", known: "Conhecidos",
            chooseCount: "Escolha exatamente", turnUndead: "Expulsar Mortos-Vivos (adicional, não conta no limite)",
            noSpells: "Esta classe não conjura magias.", weapon: "Arma", armor: "Armadura", none: "Nenhuma",
            shield: "Escudo (+2 CA, 10 gp)", kit: "Kit de exploração (7 gp, 7 espaços)", gear: "Itens adicionais (uma unidade de cada)",
            equipmentHelp: "Compre com o ouro rolado. Custos e espaços são descontados; munição é comprada separadamente. Bônus de ataque e habilidades condicionais aparecem como regras na ficha.",
            spent: "Gasto", remaining: "Restante", features: "Características", profile: "Perfil", combat: "Combate",
            copy: "Copiar", txt: "Baixar TXT", pdf: "Exportar PDF", copied: "Ficha copiada.",
            copyError: "Não foi possível copiar. Use Baixar TXT.", navLabel: "Navegação principal", stepsLabel: "Etapas de criação",
            exportLabel: "Exportar ficha", languageLabel: "Idioma",
            nameRequired: "Informe ou role um nome para continuar.",
            statsRequired: "Role os atributos ou preencha todos com valores inteiros de 3 a 18.",
            deityRequired: "Escolha uma divindade do mesmo alinhamento.",
            rollRequired: "Role os PV, talentos e ouro antes de continuar.",
            talentRequired: "Resolva a escolha de cada talento.",
            duplicateInitiative: "Vantagem na iniciativa não acumula. Escolha outro talento.",
            spellsRequired: "Escolha a quantidade indicada de magias, sem repetições.",
            knownSpellRequired: "A magia escolhida para vantagem precisa estar entre suas magias conhecidas.",
            languagesRequired: "Escolha a quantidade indicada de idiomas comuns e raros, sem repetições.",
            weaponRequired: "Escolha uma arma permitida pela classe.",
            armorInvalid: "A armadura ou escudo não é permitido para esta classe.",
            twoHands: "Uma arma de duas mãos não pode ser usada com escudo.",
            overBudget: "O equipamento custa mais que o ouro disponível. Remova algum item.",
            overCapacity: "O equipamento ultrapassa os espaços disponíveis. Remova algum item.",
            itemNote: "Talento de item mágico: role os detalhes no catálogo de itens mágicos e combine o resultado com o mestre. O item não é adicionado automaticamente ao inventário.",
            itemLink: "Abrir catálogo de itens mágicos",
            footerCredit: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.'
        },
        en: {
            home: "Home", generators: "Generators", about: "About", eyebrow: "STEP BY STEP",
            title: "Character Builder", intro: "Build a 1st-level character: make choices, roll the dice, and review your sheet.",
            scope: "Your choices stay on this page while it is open. Export your sheet before leaving.",
            steps: ["Identity", "Attributes", "Class", "HP and talents", "Spells and languages", "Equipment", "Review"],
            previous: "Previous", next: "Next", review: "Review sheet", restart: "Start over",
            confirmRestart: "Discard this sheet and start another?", progress: "Step", of: "of",
            ancestry: "Ancestry", name: "Full name", rollName: "Roll double name",
            alignment: "Alignment", lawful: "Lawful", neutral: "Neutral", chaotic: "Chaotic",
            background: "Background", classKey: "Class", deity: "Deity", select: "Choose an option",
            statsHelp: "Roll 3d6 for each attribute in order, or enter scores from 3 to 18 agreed with your GM. Talent bonuses are added later.",
            rollStats: "Roll attributes (3d6)", manual: "Entered score", base: "Base", total: "Total",
            rollVitals: "Roll HP, talents, and gold", vitalsHelp: "At 1st level the CON bonus to HP is at least +1. Dwarves get +2 HP and roll their class die twice, keeping the higher result. Humans get an extra talent.",
            talent: "Talent", level: "Level", roll: "Roll", hp: "HP", gold: "Gold", ac: "AC", slots: "Slots",
            conBonus: "Applied CON bonus", dwarfBonus: "Dwarf bonus", kept: "kept", audit: "Roll log",
            mastery: "Weapon Mastery", grit: "Grit", elfGift: "Farsight", ranged: "+1 to ranged attacks", casting: "+1 to spellcasting checks",
            spells: "Spells", languages: "Languages", common: "Additional common languages", rare: "Rare languages", known: "Known",
            chooseCount: "Choose exactly", turnUndead: "Turn Undead (additional, does not count toward the limit)",
            noSpells: "This class does not cast spells.", weapon: "Weapon", armor: "Armor", none: "None",
            shield: "Shield (+2 AC, 10 gp)", kit: "Crawling kit (7 gp, 7 slots)", gear: "Additional items (one unit of each)",
            equipmentHelp: "Buy with your rolled gold. Costs and slots are deducted; ammunition is purchased separately. Attack bonuses and conditional abilities appear as rules on the sheet.",
            spent: "Spent", remaining: "Remaining", features: "Features", profile: "Profile", combat: "Combat",
            copy: "Copy", txt: "Download TXT", pdf: "Export PDF", copied: "Sheet copied.",
            copyError: "Could not copy. Use Download TXT.", navLabel: "Main navigation", stepsLabel: "Creation steps",
            exportLabel: "Export sheet", languageLabel: "Language",
            nameRequired: "Enter or roll a name to continue.",
            statsRequired: "Roll attributes or enter an integer from 3 to 18 in every field.",
            deityRequired: "Choose a deity matching your alignment.",
            rollRequired: "Roll HP, talents, and gold before continuing.",
            talentRequired: "Resolve each talent choice.",
            duplicateInitiative: "Initiative advantage does not stack. Choose another talent.",
            spellsRequired: "Choose the indicated number of spells without duplicates.",
            knownSpellRequired: "The spell chosen for advantage must be among your known spells.",
            languagesRequired: "Choose the indicated number of common and rare languages without duplicates.",
            weaponRequired: "Choose a weapon allowed by your class.",
            armorInvalid: "This class cannot use the chosen armor or shield.",
            twoHands: "A two-handed weapon cannot be used with a shield.",
            overBudget: "Equipment costs more than your available gold. Remove an item.",
            overCapacity: "Equipment exceeds your available slots. Remove an item.",
            itemNote: "Magic item talent: roll the details in the magic items catalog and agree on the result with your GM. The item is not automatically added to your inventory.",
            itemLink: "Open magic items catalog",
            footerCredit: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.'
        }
    };
    const tr = () => texts[lang];
    const loc = (entry) => entry[lang === "en" ? "en" : "pt"];
    const ancestry = () => D.ANCESTRIES.find((entry) => entry.key === draft.ancestry);
    const classData = () => D.CLASSES.find((entry) => entry.key === draft.classKey);
    const selected = (value, current) => value === current ? " selected" : "";
    const money = (copper) => `${Number((copper / 100).toFixed(2))} gp`;
    const button = (id, label) => `<button type="button" class="character-button" id="${id}">${escape(label)}</button>`;

    function select(id, label, entries, value, placeholder = false) {
        return `<div><label for="${id}">${escape(label)}</label><select class="form-select" id="${id}" data-field="${id}">
            ${placeholder ? `<option value="">${escape(tr().select)}</option>` : ""}
            ${entries.map((entry) => `<option value="${escape(entry.key)}"${selected(entry.key, value)}>${escape(loc(entry))}</option>`).join("")}
        </select></div>`;
    }

    function checks(group, title, entries, values) {
        return `<fieldset class="builder-choices"><legend>${escape(title)}</legend>${entries.map((entry, index) => `
            <label for="${group}-${index}"><input type="checkbox" id="${group}-${index}" data-group="${group}" value="${escape(entry.key)}"${values.includes(entry.key) ? " checked" : ""}>${escape(loc(entry))}</label>
        `).join("")}</fieldset>`;
    }

    function rollName() {
        draft.nameRoll = window.ShadowdarkCharacterNames.rollName(D.NAMES[draft.ancestry][lang === "en" ? "en" : "pt"]);
        draft.name = draft.nameRoll.name;
    }

    function identity() {
        return `<div class="builder-controls card">
            ${select("ancestry", tr().ancestry, D.ANCESTRIES, draft.ancestry)}
            <div><label for="name">${tr().name}</label><input class="form-select" id="name" data-field="name" maxlength="100" value="${escape(draft.name)}" autocomplete="off">${button("roll-name", tr().rollName)}</div>
            ${select("alignment", tr().alignment, ["lawful", "neutral", "chaotic"].map((key) => ({ key, pt: texts["pt-BR"][key], en: texts.en[key] })), draft.alignment)}
            ${select("background", tr().background, D.BACKGROUNDS.map((entry, index) => ({ ...entry, key: String(index) })), draft.background)}
        </div><p>${escape(loc(ancestry().perk))}</p><p>${escape(loc(D.BACKGROUNDS[Number(draft.background)].desc))}</p>`;
    }

    function attributes() {
        return `<p>${tr().statsHelp}</p>${button("roll-stats", tr().rollStats)}
            <div class="builder-controls card">${D.STATS.map((stat) => {
                const value = draft.scores?.[stat.key];
                const detail = draft.statRolls?.[stat.key]?.join(" + ") || tr().manual;
                return `<div><label for="stat-${stat.key}">${escape(loc(stat))}</label><input class="form-select" id="stat-${stat.key}" data-stat="${stat.key}" type="number" min="3" max="18" step="1" value="${value ?? ""}"><span>${escape(detail)}${Number.isInteger(value) && value >= 3 && value <= 18 ? ` · MOD ${mod(R.modifier(value))}` : ""}</span></div>`;
            }).join("")}</div>`;
    }

    function profession() {
        const deities = D.DEITIES.filter((entry) => entry.alignment === draft.alignment);
        const fields = [select("classKey", tr().classKey, D.CLASSES, draft.classKey)];
        if (draft.classKey === "priest") fields.push(select("deity", tr().deity, deities, draft.deity, true));
        if (draft.classKey === "fighter") {
            fields.push(select("mastery", tr().mastery, D.WEAPONS, draft.mastery));
            fields.push(select("grit", tr().grit, D.STATS.filter((entry) => ["str", "dex"].includes(entry.key)), draft.grit));
        }
        if (draft.ancestry === "elf") fields.push(select("elfGift", tr().elfGift, [
            { key: "ranged", pt: texts["pt-BR"].ranged, en: texts.en.ranged },
            { key: "casting", pt: texts["pt-BR"].casting, en: texts.en.casting }
        ], draft.elfGift));
        return `<div class="builder-controls card">${fields.join("")}</div>
            <p>${escape(loc(classData().hpLabel))} · ${escape(loc(classData().weapons))} · ${escape(loc(classData().armor))}</p>
            <ul>${classData().talents.map((entry) => `<li>${escape(loc(entry))}</li>`).join("")}</ul>`;
    }

    function auditLines() {
        const lines = [];
        if (draft.nameRoll) lines.push(`${tr().name}: ${draft.nameRoll.die}=${draft.nameRoll.roll1}, ${draft.nameRoll.die}=${draft.nameRoll.roll2} = ${draft.name}`);
        if (draft.scores) D.STATS.forEach((stat) => lines.push(`${loc(stat)}: ${draft.statRolls?.[stat.key]?.join(" + ") || tr().manual} = ${draft.scores[stat.key]}`));
        if (draft.hp) {
            const hp = draft.hp.rolls.map((entry) => entry.r2 === null ? `${classData().hpDie}=${entry.r1}` : `${classData().hpDie}=${entry.r1} / ${entry.r2} (${tr().kept}: ${entry.kept})`).join(", ");
            const stats = B.scores(draft);
            lines.push(`${tr().hp}: ${hp}; ${tr().conBonus}: +${Math.max(1, R.modifier(stats.con))}; ${tr().dwarfBonus}: +${draft.ancestry === "dwarf" ? 2 : 0}; ${tr().total}: ${B.summary(draft).hp}`);
        }
        draft.talents.forEach((talent, index) => lines.push(`${tr().talent} ${index + 1} (${tr().level} 1): ${talent.rerolled ? `${talent.rerolled.join(" + ")}; ` : ""}${talent.dice.join(" + ")} = ${talent.roll}`));
        if (draft.goldRolls) lines.push(`${tr().gold}: (${draft.goldRolls.join(" + ")}) × 5 = ${money(draft.goldRolls.reduce((a, b) => a + b, 0) * 500)}`);
        return lines;
    }

    function audit() {
        return `<details class="character-reference builder-audit"><summary>${tr().audit}</summary><ul>${auditLines().map((line) => `<li>${escape(line)}</li>`).join("")}</ul></details>`;
    }

    function vitals() {
        return `<p>${tr().vitalsHelp}</p>${button("roll-vitals", tr().rollVitals)}
            ${draft.hp ? `<div class="builder-controls card">${draft.talents.map((talent, index) => {
                const tableEntry = classData().talentTable.find((entry) => {
                    const [min, max = min] = entry.range.split("-").map(Number);
                    return talent.roll >= min && talent.roll <= max;
                });
                return select(`talent-${index}`, `${tr().talent} ${index + 1} · ${tr().level} 1 · 2d6=${talent.roll}: ${loc(tableEntry)}`,
                    B.talentOptions(draft.classKey, talent.roll), draft.talentChoices[index], true);
            }).join("")}</div>${audit()}` : ""}`;
    }

    function magic() {
        const languages = B.languageOptions(draft);
        const pool = D.SPELLS[draft.classKey] || [];
        return `${pool.length ? checks("spells", `${tr().spells} · ${tr().chooseCount} ${B.spellCount(draft)}`, pool.map((entry) => ({ ...entry, key: entry.en })), draft.spells) : `<p>${tr().noSpells}</p>`}
            ${draft.classKey === "priest" ? `<p>${tr().turnUndead}</p>` : ""}
            <p>${tr().known}: ${languages.known.map((key) => escape(loc(D.LANGUAGES[key]))).join(", ")}</p>
            ${languages.commonCount ? checks("languages-common", `${tr().common} · ${tr().chooseCount} ${languages.commonCount}`, languages.common.map((key) => ({ ...D.LANGUAGES[key], key })), draft.languages) : ""}
            ${languages.rareCount ? checks("languages-rare", `${tr().rare} · ${tr().chooseCount} ${languages.rareCount}`, languages.rare.map((key) => ({ ...D.LANGUAGES[key], key })), draft.languages) : ""}`;
    }

    function equipment() {
        const result = B.summary(draft);
        const weapons = R.weapons(draft.classKey).map((entry) => ({ ...entry, pt: `${entry.pt} (${entry.cost}, ${entry.dmg})`, en: `${entry.en} (${entry.cost}, ${entry.dmg})` }));
        const armors = [{ key: "", pt: tr().none, en: tr().none }, ...R.armors(draft.classKey).filter((entry) => entry.key !== "shield").map((entry) => ({ ...entry, pt: `${entry.pt} (${entry.cost})`, en: `${entry.en} (${entry.cost})` }))];
        const extra = [{ key: "kit", pt: texts["pt-BR"].kit, en: texts.en.kit }];
        if (R.armors(draft.classKey).some((entry) => entry.key === "shield")) extra.push({ key: "shield", pt: texts["pt-BR"].shield, en: texts.en.shield });
        return `<p>${tr().equipmentHelp}</p><div class="builder-controls card">
            ${select("weapon", tr().weapon, weapons, draft.weapon, true)}${select("armor", tr().armor, armors, draft.armor)}
            </div>${checks("equipment", tr().features, extra, ["kit", "shield"].filter((key) => draft[key]))}
            ${checks("gear", tr().gear, D.GEAR.filter((entry) => entry.key !== "gem").map((entry) => ({ ...entry, pt: `${entry.pt} (${entry.cost})`, en: `${entry.en} (${entry.cost})` })), draft.gear)}
            <p id="equipment-totals" role="status">${tr().spent}: ${money(result.inventory.spent)} · ${tr().remaining}: ${money(result.gold)} · ${tr().slots}: ${result.inventory.slots}/${result.gearSlots}</p>`;
    }

    function sheet() {
        const result = B.summary(draft);
        const languages = [...B.languageOptions(draft).known, ...draft.languages];
        const features = classData().talents.map(loc);
        if (draft.classKey === "fighter") {
            features.push(`${tr().mastery}: ${loc(D.WEAPONS.find((entry) => entry.key === draft.mastery))}`);
            features.push(`${tr().grit}: ${loc(D.STATS.find((entry) => entry.key === draft.grit))}`);
        }
        if (draft.ancestry === "elf") features.push(`${tr().elfGift}: ${tr()[draft.elfGift]}`);
        const sections = [
            { heading: tr().profile, lines: [
                `${tr().ancestry}: ${loc(ancestry())}`, `${tr().classKey}: ${loc(classData())}`, `${tr().alignment}: ${tr()[draft.alignment]}`,
                `${tr().background}: ${loc(D.BACKGROUNDS[Number(draft.background)])}`, loc(result.title),
                ...(draft.deity ? [`${tr().deity}: ${loc(D.DEITIES.find((entry) => entry.key === draft.deity))}`] : [])
            ] },
            { heading: tr().combat, lines: [`${tr().hp}: ${result.hp} · ${tr().ac}: ${result.ac} · ${tr().gold}: ${money(result.gold)} · ${tr().slots}: ${result.inventory.slots}/${result.gearSlots}`] },
            { heading: tr().talent, lines: B.chosenTalents(draft).map((choice, index) => `${tr().level} 1 (${draft.talents[index].roll}): ${loc(choice)}`) },
            { heading: tr().features, lines: [loc(ancestry().perk), ...features] },
            { heading: tr().languages, lines: [languages.map((key) => loc(D.LANGUAGES[key])).join(", ")] },
            { heading: tr().spells, lines: [...draft.spells.map((name) => loc(D.SPELLS[draft.classKey].find((entry) => entry.en === name))), ...(draft.classKey === "priest" ? [tr().turnUndead] : [])] },
            { heading: tr().gear, lines: result.inventory.entries.map((entry) => `${loc(entry)} (${entry.cost})`) }
        ];
        if (B.chosenTalents(draft).some((entry) => entry.key.startsWith("item:"))) sections.push({ heading: tr().talent, lines: [tr().itemNote] });
        return {
            title: draft.name.trim(), eyebrow: `${tr().level} 1 · XP 0`, badge: `${loc(classData())} · ${loc(ancestry())}`,
            stats: D.STATS.map((stat) => `${loc(stat)} ${result.stats[stat.key]} (${mod(R.modifier(result.stats[stat.key]))})`),
            sections: [...sections, { heading: tr().audit, lines: auditLines() }]
        };
    }

    function review() {
        const card = sheet();
        return `<div id="character-sheet" role="region" aria-live="polite" aria-label="${escape(tr().review)}">
            <article class="character-card"><header class="character-card__header"><div><h3 class="character-card__name">${escape(card.title)}</h3><p>${escape(card.badge)} · ${escape(card.eyebrow)}</p></div></header>
            <div class="character-card__stats">${card.stats.map((stat) => `<div class="character-card__stat">${escape(stat)}</div>`).join("")}</div>
            ${card.sections.filter((section) => section.heading !== tr().audit && section.lines.length).map((section) => `<section class="character-card__section"><h4>${escape(section.heading)}</h4><ul>${section.lines.map((line) => `<li>${escape(line)}</li>`).join("")}</ul></section>`).join("")}
            </article>${audit()}${B.chosenTalents(draft).some((entry) => entry.key.startsWith("item:")) ? `<p><a href="../magic/magic-items.html" target="_blank" rel="noopener">${tr().itemLink}</a></p>` : ""}
        </div>`;
    }

    function render(focus = false) {
        document.documentElement.lang = lang;
        document.title = `${tr().title} — Shadowdark Tools`;
        document.querySelectorAll("[data-text]").forEach((el) => { el.textContent = tr()[el.dataset.text]; });
        document.querySelectorAll("[data-lang]").forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.lang === lang)));
        $("main-navigation").setAttribute("aria-label", tr().navLabel);
        $("builder-progress").setAttribute("aria-label", tr().stepsLabel);
        $("builder-exports").setAttribute("aria-label", tr().exportLabel);
        $("language-switch").setAttribute("aria-label", tr().languageLabel);
        $("footer-credit").innerHTML = tr().footerCredit;
        $("footer-subcredit").innerHTML = tr().footerSubcredit;
        $("builder-progress").innerHTML = `<ol>${tr().steps.map((label, index) => `<li><button type="button" data-step="${index}"${index > step ? " disabled" : ""}${index === step ? ' aria-current="step"' : ""}>${index + 1}. ${escape(label)}</button></li>`).join("")}</ol>`;
        $("step-status").textContent = `${tr().progress} ${step + 1} ${tr().of} ${tr().steps.length}`;
        $("step-title").textContent = tr().steps[step];
        $("step-content").innerHTML = [identity, attributes, profession, vitals, magic, equipment, review][step]();
        $("previous").disabled = step === 0;
        $("next").hidden = step === 6;
        $("next").textContent = step === 5 ? tr().review : tr().next;
        $("builder-exports").hidden = step !== 6;
        ["copy", "download", "export-pdf"].forEach((id) => { $(id).disabled = step !== 6; });
        $("builder-error").hidden = true;
        if (focus) $("step-title").focus();
    }

    function invalidateRolls() {
        draft.hp = null;
        draft.goldRolls = null;
        draft.talents = [];
        draft.talentChoices = [];
        draft.spells = [];
        draft.languages = [];
    }

    $("step-content").addEventListener("input", (event) => {
        if (event.target.id === "name") {
            draft.name = event.target.value;
            draft.nameRoll = null;
        }
    });

    $("step-content").addEventListener("change", (event) => {
        const el = event.target;
        if (el.dataset.stat) {
            draft.scores = { ...draft.scores, [el.dataset.stat]: el.value === "" ? null : Number(el.value) };
            draft.statRolls = null;
            draft.languages = [];
        } else if (el.dataset.field?.startsWith("talent-")) {
            draft.talentChoices[Number(el.dataset.field.slice(7))] = el.value;
            draft.spells = [];
            draft.languages = [];
        } else if (el.dataset.field) {
            const key = el.dataset.field;
            const previous = draft[key];
            draft[key] = el.value;
            if (["ancestry", "classKey"].includes(key) && previous !== el.value) {
                invalidateRolls();
                draft.weapon = "";
                draft.armor = "";
                draft.shield = false;
                draft.deity = "";
                if (key === "ancestry" && draft.nameRoll) rollName();
            }
            if (key === "alignment") draft.deity = "";
        } else if (el.dataset.group) {
            const group = el.dataset.group;
            if (group === "equipment") draft[el.value] = el.checked;
            else {
                const key = group.startsWith("languages") ? "languages" : group;
                draft[key] = draft[key].filter((value) => value !== el.value);
                if (el.checked) draft[key].push(el.value);
            }
        }
        render();
        document.getElementById(el.id)?.focus();
    });

    $("step-content").addEventListener("click", (event) => {
        const id = event.target.closest("button")?.id;
        if (id === "roll-name") rollName();
        else if (id === "roll-stats") {
            const result = B.rollStats();
            draft.scores = result.scores;
            draft.statRolls = result.rolls;
            draft.languages = [];
        } else if (id === "roll-vitals") {
            Object.assign(draft, B.rollVitals(draft));
            draft.talentChoices = draft.talents.map((talent) => {
                const choices = B.talentOptions(draft.classKey, talent.roll);
                return choices.length === 1 ? choices[0].key : "";
            });
            draft.spells = [];
            draft.languages = [];
        } else return;
        render();
        $(id)?.focus();
    });

    $("next").addEventListener("click", () => {
        for (let index = 0; index <= step; index++) {
            const error = B.validate(draft, index);
            if (error) {
                if (step !== index) { step = index; render(true); }
                $("builder-error").textContent = tr()[error];
                $("builder-error").hidden = false;
                return;
            }
        }
        step += 1;
        render(true);
    });
    $("previous").addEventListener("click", () => { step -= 1; render(true); });
    $("builder-progress").addEventListener("click", (event) => {
        const target = event.target.closest("[data-step]");
        if (target && Number(target.dataset.step) < step) { step = Number(target.dataset.step); render(true); }
    });
    $("restart").addEventListener("click", () => {
        if (!window.confirm(tr().confirmRestart)) return;
        draft = B.createDraft();
        step = 0;
        render(true);
    });
    document.querySelectorAll("[data-lang]").forEach((el) => el.addEventListener("click", () => {
        lang = el.dataset.lang;
        localStorage.setItem("shadowdark-tools-lang", lang);
        render();
    }));

    const plainText = () => {
        const card = sheet();
        return [card.title, card.badge, card.eyebrow, ...card.stats, ...card.sections.flatMap((section) => [section.heading, ...section.lines])].join("\n");
    };
    $("copy").addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(plainText());
            $("step-status").textContent = tr().copied;
        } catch (error) {
            $("builder-error").textContent = tr().copyError;
            $("builder-error").hidden = false;
        }
    });
    $("download").addEventListener("click", () => {
        const url = URL.createObjectURL(new Blob([plainText()], { type: "text/plain;charset=utf-8" }));
        const link = document.createElement("a");
        link.href = url;
        link.download = "shadowdark-character.txt";
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 0);
    });
    $("export-pdf").addEventListener("click", () => {
        window.ShadowdarkExport.downloadCardsPdf({
            title: tr().title, subtitle: `${tr().level} 1`, cards: [sheet()],
            footerLabel: lang === "en" ? "SHADOWDARK TOOLS - CHARACTER BUILDER" : "SHADOWDARK TOOLS - CONSTRUTOR DE PERSONAGEM"
        }, "shadowdark-character.pdf");
    });
    render();
})();
