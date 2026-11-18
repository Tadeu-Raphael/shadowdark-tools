/**
 * Shadowdark Tools - Character Generator (Levels 1–10)
 * Cria personagens seguindo as regras do Livro de Regras de Shadowdark RPG.
 */
(function () {
    "use strict";

    const D = window.CHARACTER_DATA;
    const $ = (id) => document.getElementById(id);

    let lang = localStorage.getItem("shadowdark-tools-lang") || (navigator.language.startsWith("pt") ? "pt-BR" : "en");
    if (lang !== "en") lang = "pt-BR";

    let characters = [];
    let rollLog = [];

    const t = {
        "pt-BR": {
            navHome: "Início", navGenerators: "Geradores", navAbout: "Sobre",
            eyebrow: "PERSONAGEM", title: "Gerador de Personagens",
            intro: "Crie personagens de nível 1 a 10 seguindo as regras do Livro de Regras de Shadowdark RPG.",
            level: "Nível", classLabel: "Classe", ancestryLabel: "Ancestralidade", alignmentLabel: "Alinhamento",
            count: "Quantidade", random: "Aleatório", randomAlign: "Aleatório",
            generate: "Gerar Personagem", generatePlural: "Gerar Personagens",
            note: "Cada personagem recebe atributos em 3d6, ancestralidade, classe, talentos, equipamento inicial e título conforme o nível.",
            results: "Resultados", copy: "Copiar", copied: "Copiado!", download: "Baixar TXT", exportPdf: "Exportar PDF",
            empty: "Escolha as opções e clique em <strong>Gerar Personagem</strong> para começar.",
            reference: "Consultar regras", source: "Regras de criação de personagens adaptadas do Livro de Regras de Shadowdark RPG, páginas 12–41.",
            footer: "Shadowdark Tools · Gerador de Personagens",
            levelLabel: "Nível", xpLabel: "XP", titleLabel: "Título", classLabelShort: "Classe",
            ancestryLabelShort: "Ancestralidade", alignmentLabelShort: "Alinhamento", backgroundLabel: "Background",
            deityLabel: "Divindade", statsLabel: "Atributos", hpLabel: "PV", acLabel: "CA",
            attacksLabel: "Ataques", gearLabel: "Equipamento", talentsLabel: "Talentos",
            spellsLabel: "Magias", languagesLabel: "Idiomas", goldLabel: "Ouro",
            weaponLabel: "Arma", armorLabel: "Armadura", gearSlotsLabel: "Espaços de equipamento",
            hpRollLabel: "Rolagem de PV", talentRollLabel: "Rolagem de talento",
            modLabel: "Mod", scoreLabel: "Valor", classFeaturesLabel: "Características de classe",
            spellcastingLabel: "Conjuração", spellsKnownLabel: "Magias conhecidas",
            tierLabel: "Nível", spellLabel: "Magia", knownLabel: "Conhecidas",
            alignmentLawful: "Ordeiro", alignmentNeutral: "Neutro", alignmentChaotic: "Caótico",
            ancestryPerkLabel: "Habilidade racial", languagesPerkLabel: "Idiomas",
            gearSlotsInfo: "Espaços de equipamento disponíveis",
            startingGold: "Ouro inicial", buyGearNote: "Ouro para comprar equipamento",
            noSpells: "Esta classe não conjura magias.",
            levelUpNote: "A cada nível: role o dado de PV da classe e some o modificador de Constituição (mínimo 1).",
            talentNote: "Personagens ganham rolagens de talento nos níveis 1, 3, 5, 7 e 9.",
            xpNote: "XP necessário para o próximo nível",
            copyError: "Não foi possível copiar",
            rollLogTitle: "Registro de Rolagens",
            colChar: "Personagem",
            colField: "Atributo / Campo",
            colDice: "Dados Rolados",
            colMod: "Mod / Detalhes",
            colResult: "Resultado Final",
            rollClass: "Classe",
            rollAncestry: "Ancestralidade",
            rollAlignment: "Alinhamento",
            rollBackground: "Background",
            rollName: "Nome",
            rollHp: "PV",
            rollGold: "Ouro",
            rollWeapon: "Arma",
            rollArmor: "Armadura",
            rollTalents: "Talentos",
            rollSpells: "Magias",
            rollLanguages: "Idiomas",
            rollDeity: "Divindade",
            rollTitle: "Título",
            rollStats: "Atributos",
            rollDice: "Dados",
            rollMod: "Modificador",
            rollResult: "Resultado",
            rollTotal: "Total",
            rollItems: "itens",
            rollDc: "CD",
            rollBonus: "Bônus",
            rollNone: "—",
            rollClassFeature: "Característica",
            rollKnown: "conhecidas",
            rollTier: "Nível",
            rollHpPerLevel: "PV por nível",
            rollConMod: "Mod CON",
            rollMinOne: "Mínimo 1",
            rollDwarfBonus: "Anão",
            rollLevel: "Nível",
            rollSpell: "Magia",
            rollTalent: "Talento",
            rollScore: "Valor",
            rollModifier: "Mod",
            rollAbility: "Habilidade",
            classFeatures: {
                fighter: "Mestre em Arma, Determinação, Marinheiro",
                priest: "Idiomas, Expulsar Mortos-Vivos, Divindade, Conjuração",
                thief: "Golpe pelas Costas, Furtividade",
                wizard: "Idiomas, Aprender Magias, Conjuração"
            }
        },
        en: {
            navHome: "Home", navGenerators: "Generators", navAbout: "About",
            eyebrow: "CHARACTER", title: "Character Generator",
            intro: "Create 1st to 10th level characters following the Shadowdark RPG Rulebook.",
            level: "Level", classLabel: "Class", ancestryLabel: "Ancestry", alignmentLabel: "Alignment",
            count: "Quantity", random: "Random", randomAlign: "Random",
            generate: "Generate Character", generatePlural: "Generate Characters",
            note: "Each character gets 3d6 attributes, ancestry, class, talents, starting gear, and a level-based title.",
            results: "Results", copy: "Copy", copied: "Copied!", download: "Download TXT", exportPdf: "Export PDF",
            empty: "Choose the options and click <strong>Generate Character</strong> to begin.",
            reference: "Consult rules", source: "Character creation rules adapted from the Shadowdark RPG Rulebook, pages 12–41.",
            footer: "Shadowdark Tools · Character Generator",
            levelLabel: "Level", xpLabel: "XP", titleLabel: "Title", classLabelShort: "Class",
            ancestryLabelShort: "Ancestry", alignmentLabelShort: "Alignment", backgroundLabel: "Background",
            deityLabel: "Deity", statsLabel: "Attributes", hpLabel: "HP", acLabel: "AC",
            attacksLabel: "Attacks", gearLabel: "Gear", talentsLabel: "Talents",
            spellsLabel: "Spells", languagesLabel: "Languages", goldLabel: "Gold",
            weaponLabel: "Weapon", armorLabel: "Armor", gearSlotsLabel: "Gear slots",
            hpRollLabel: "HP roll", talentRollLabel: "Talent roll",
            modLabel: "Mod", scoreLabel: "Score", classFeaturesLabel: "Class features",
            spellcastingLabel: "Spellcasting", spellsKnownLabel: "Spells known",
            tierLabel: "Tier", spellLabel: "Spell", knownLabel: "Known",
            alignmentLawful: "Lawful", alignmentNeutral: "Neutral", alignmentChaotic: "Chaotic",
            ancestryPerkLabel: "Ancestry ability", languagesPerkLabel: "Languages",
            gearSlotsInfo: "Available gear slots",
            startingGold: "Starting gold", buyGearNote: "Gold to buy gear",
            noSpells: "This class doesn't cast spells.",
            levelUpNote: "Each level: roll your class hit point die and add your Constitution modifier (minimum 1).",
            talentNote: "Characters gain talent rolls at levels 1, 3, 5, 7, and 9.",
            xpNote: "XP needed for the next level",
            copyError: "Could not copy",
            rollLogTitle: "Roll Log",
            colChar: "Character",
            colField: "Attribute / Field",
            colDice: "Dice Rolled",
            colMod: "Mod / Details",
            colResult: "Final Result",
            rollClass: "Class",
            rollAncestry: "Ancestry",
            rollAlignment: "Alignment",
            rollBackground: "Background",
            rollName: "Name",
            rollHp: "HP",
            rollGold: "Gold",
            rollWeapon: "Weapon",
            rollArmor: "Armor",
            rollTalents: "Talents",
            rollSpells: "Spells",
            rollLanguages: "Languages",
            rollDeity: "Deity",
            rollTitle: "Title",
            rollStats: "Attributes",
            rollDice: "Dice",
            rollMod: "Modifier",
            rollResult: "Result",
            rollTotal: "Total",
            rollItems: "items",
            rollDc: "DC",
            rollBonus: "Bonus",
            rollNone: "—",
            rollClassFeature: "Feature",
            rollKnown: "known",
            rollTier: "Tier",
            rollHpPerLevel: "HP per level",
            rollConMod: "CON mod",
            rollMinOne: "Min 1",
            rollDwarfBonus: "Dwarf",
            rollLevel: "Level",
            rollSpell: "Spell",
            rollTalent: "Talent",
            rollScore: "Score",
            rollModifier: "Mod",
            rollAbility: "Ability",
            classFeatures: {
                fighter: "Weapon Mastery, Grit, Hauler",
                priest: "Languages, Turn Undead, Deity, Spellcasting",
                thief: "Backstab, Thievery",
                wizard: "Languages, Learning Spells, Spellcasting"
            }
        }
    };

    const tr = () => t[lang];
    const isPt = () => lang === "pt-BR";
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const dice = (sides) => Math.floor(Math.random() * sides) + 1;
    const roll3d6 = () => dice(6) + dice(6) + dice(6);

    function set(id, value) {
        const el = $(id);
        if (el) el.textContent = value;
    }

    function setHTML(id, value) {
        const el = $(id);
        if (el) el.innerHTML = value;
    }

    function statMod(score) {
        const entry = D.STAT_MODIFIERS.find((m) => score >= m.min && score <= m.max);
        return entry ? entry.mod : 0;
    }

    function fmtMod(mod) {
        return mod >= 0 ? `+${mod}` : String(mod);
    }

    function localized(obj) {
        if (obj == null) return "";
        if (typeof obj === "string") return obj;
        return isPt() ? (obj.pt || obj.en || "") : (obj.en || obj.pt || "");
    }

    function pickClass() {
        return pick(D.CLASSES);
    }

    function pickAncestry() {
        return pick(D.ANCESTRIES);
    }

    function pickAlignment() {
        const roll = dice(6);
        if (roll <= 3) return "lawful";
        if (roll <= 5) return "neutral";
        return "chaotic";
    }

    function alignmentName(key) {
        const map = { lawful: tr().alignmentLawful, neutral: tr().alignmentNeutral, chaotic: tr().alignmentChaotic };
        return map[key] || key;
    }

    function ancestryByKey(key) {
        return D.ANCESTRIES.find((a) => a.key === key) || pickAncestry();
    }

    function classByKey(key) {
        return D.CLASSES.find((c) => c.key === key) || pickClass();
    }

    function nameFor(ancestryKey) {
        const table = D.NAMES[ancestryKey] || D.NAMES.human;
        return window.ShadowdarkCharacterNames.rollName(table[isPt() ? "pt" : "en"]);
    }

    function rollStats() {
        const scores = {};
        D.STATS.forEach((s) => { scores[s.key] = roll3d6(); });
        return scores;
    }

    function modifierFor(key, scores) {
        return statMod(scores[key]);
    }

    function conMod(scores) {
        return modifierFor("con", scores);
    }

    function ancestryHpBonus(ancestryKey) {
        return ancestryKey === "dwarf" ? 2 : 0;
    }

    function rollHitPoints(classData, level, scores, ancestryKey) {
        return window.ShadowdarkCharacterRules.hitPoints(classData, level, scores, ancestryKey);
    }

    function baseArmorClass(scores) {
        return 10 + modifierFor("dex", scores);
    }

    function startingGold() {
        return (dice(6) + dice(6)) * 5;
    }

    function pickWeaponForClass(classKey) {
        return pick(window.ShadowdarkCharacterRules.weapons(classKey));
    }

    function pickArmorForClass(classKey) {
        const list = window.ShadowdarkCharacterRules.armors(classKey);
        return list.length ? pick(list) : null;
    }

    function pickBackground() {
        return pick(D.BACKGROUNDS);
    }

    function pickDeity(alignment) {
        const options = D.DEITIES.filter((d) => d.alignment === alignment);
        return options.length ? pick(options) : pick(D.DEITIES);
    }

    function pickLanguages(ancestryKey, classKey) {
        const langs = [D.LANGUAGES.common];
        const ancestryLangs = {
            dwarf: ["dwarvish"], elf: ["elvish", "sylvan"], goblin: ["goblin"],
            halfling: [], "half-orc": ["orcish"], human: []
        };
        (ancestryLangs[ancestryKey] || []).forEach((k) => langs.push(D.LANGUAGES[k]));

        if (classKey === "priest") {
            langs.push(pick([D.LANGUAGES.celestial, D.LANGUAGES.diabolic, D.LANGUAGES.primordial]));
        }
        if (classKey === "wizard") {
            const common = ["dwarvish", "elvish", "giant", "goblin", "merran", "orcish", "reptilian", "sylvan", "thanian"];
            const shuffled = common.map((k) => D.LANGUAGES[k]).sort(() => Math.random() - 0.5);
            langs.push(shuffled[0], shuffled[1]);
        }
        if (ancestryKey === "human") {
            const extra = ["dwarvish", "elvish", "goblin", "orcish", "sylvan"].map((k) => D.LANGUAGES[k]);
            langs.push(pick(extra));
        }
        return langs;
    }

    function spellsForLevel(classData, level) {
        if (!classData.spellsKnown) return null;
        const row = classData.spellsKnown[String(level)] || classData.spellsKnown["1"];
        return row;
    }

    function pickSpells(classKey, level) {
        const classData = classByKey(classKey);
        const counts = spellsForLevel(classData, level);
        if (!counts) return null;
        const pool = D.SPELLS[classKey] || [];
        const result = [];
        counts.forEach((count, tierIndex) => {
            const tier = tierIndex + 1;
            const available = pool.filter((s) => !result.some((r) => r.en === s.en));
            for (let i = 0; i < count && available.length; i++) {
                const idx = Math.floor(Math.random() * available.length);
                result.push({ ...available[idx], tier });
                available.splice(idx, 1);
            }
        });
        return result;
    }

    function titleFor(classData, level, alignment) {
        const table = classData.titles[alignment] || classData.titles.neutral;
        const band = Math.floor((Math.min(level, 10) - 1) / 2);
        return { pt: table.pt[band], en: table.en[band] };
    }

    function talentRollsForLevel(level) {
        const rolls = [];
        [1, 3, 5, 7, 9].forEach((lvl) => {
            if (level >= lvl) rolls.push(lvl);
        });
        return rolls;
    }

    function rollTalents(classData, level) {
        const results = [];
        const levels = talentRollsForLevel(level);
        levels.forEach((talentLevel) => {
            const roll = dice(6) + dice(6);
            const entry = classData.talentTable.find((row) => {
                const [min, max] = row.range.split("-").map(Number);
                return max ? roll >= min && roll <= max : roll === min;
            }) || classData.talentTable[0];
            results.push({ roll, pt: entry.pt, en: entry.en, level: talentLevel });
        });
        return results;
    }

    function generateCharacter(options, charIndex) {
        const level = options.level;
        const classData = options.classKey === "random" ? pickClass() : classByKey(options.classKey);
        const ancestry = options.ancestryKey === "random" ? pickAncestry() : ancestryByKey(options.ancestryKey);
        const alignment = options.alignment === "random" ? pickAlignment() : options.alignment;

        const scores = rollStats();
        const hp = rollHitPoints(classData, level, scores, ancestry.key);
        const gold = startingGold();
        const weapon = pickWeaponForClass(classData.key);
        const armor = pickArmorForClass(classData.key);
        const background = pickBackground();
        const deity = classData.key === "priest" ? pickDeity(alignment) : null;
        const languages = pickLanguages(ancestry.key, classData.key);
        const spells = pickSpells(classData.key, level);
        const talents = rollTalents(classData, level);
        const title = titleFor(classData, level, alignment);
        const nameRoll = nameFor(ancestry.key);
        const name = nameRoll.name;

        const character = {
            name, nameRoll, level, classData, ancestry, alignment, scores, hp, gold,
            weapon, armor, background, deity, languages, spells, talents, title,
            ac: baseArmorClass(scores),
            gearSlots: Math.max(10, scores.str)
        };

        recordRolls(character, charIndex);
        return character;
    }

    function recordRolls(c, charIndex) {
        const label = `${tr().colChar} ${charIndex + 1}`;
        const push = (entry) => rollLog.push({ ...entry, charLabel: label });

        push({ type: "name", field: tr().rollName, dice: `${c.nameRoll.die}=${c.nameRoll.roll1}, ${c.nameRoll.die}=${c.nameRoll.roll2}`, detail: localized(c.ancestry), result: `<strong>${c.name}</strong>` });
        push({ type: "class", field: tr().rollClass, dice: "d4", detail: "1d4", result: `<strong>${localized(c.classData)}</strong>` });
        push({ type: "ancestry", field: tr().rollAncestry, dice: "d12", detail: "1d12", result: `<strong>${localized(c.ancestry)}</strong>` });
        push({ type: "alignment", field: tr().rollAlignment, dice: "d6", detail: "1d6", result: `<strong>${alignmentName(c.alignment)}</strong>` });

        D.STATS.forEach((s) => {
            const score = c.scores[s.key];
            const mod = statMod(score);
            push({
                type: "stat",
                field: `${tr().rollStats} · ${s.abbr}`,
                dice: `3d6 = ${score}`,
                detail: `${tr().rollModifier} ${fmtMod(mod)}`,
                result: `<strong>${score}</strong> (${fmtMod(mod)})`
            });
        });

        push({
            type: "hp",
            field: `${tr().rollHp} (${tr().rollLevel} ${c.level})`,
            dice: c.hp.rolls.map((r) => {
                const die = `d${c.classData.hpDie.replace("1d", "")}`;
                if (r.r2 !== null) {
                    return `${die}=${r.r1}/${r.r2}→${r.kept}`;
                }
                return `${die}=${r.r1}`;
            }).join(", "),
            detail: c.level === 1
                ? `${tr().rollConMod} ${fmtMod(conMod(c.scores))}${c.ancestry.key === "dwarf" ? ` · ${tr().rollDwarfBonus} +${ancestryHpBonus(c.ancestry.key)}` : ""}`
                : `${tr().rollHpPerLevel}${c.ancestry.key === "dwarf" ? ` · ${tr().rollDwarfBonus} +${ancestryHpBonus(c.ancestry.key)}` : ""}`,
            result: `<strong>${c.hp.total}</strong> ${tr().rollHp}`
        });

        push({
            type: "gold",
            field: tr().rollGold,
            dice: `2d6×5 = ${c.gold}`,
            detail: "2d6×5",
            result: `<strong>${c.gold}</strong> gp`
        });

        push({ type: "weapon", field: tr().rollWeapon, dice: "—", detail: c.weapon.dmg, result: `<strong>${localized(c.weapon)}</strong>` });
        if (c.armor) {
            push({ type: "armor", field: tr().rollArmor, dice: "—", detail: `${c.armor.ac} ${tr().acLabel}`, result: `<strong>${localized(c.armor)}</strong>` });
        }

        push({ type: "background", field: tr().rollBackground, dice: "d20", detail: "1d20", result: `<strong>${localized(c.background)}</strong>` });

        if (c.deity) {
            push({ type: "deity", field: tr().rollDeity, dice: "d8", detail: "1d8", result: `<strong>${localized(c.deity)}</strong>` });
        }

        push({ type: "title", field: tr().rollTitle, dice: "—", detail: `${tr().rollLevel} ${c.level}`, result: `<strong>${localized(c.title)}</strong>` });

        c.talents.forEach((talent) => {
            push({
                type: "talent",
                field: `${tr().rollTalents} · ${tr().rollLevel} ${talent.level}`,
                dice: `2d6 = ${talent.roll}`,
                detail: talent.roll <= 2 ? "2" : talent.roll <= 6 ? "3-6" : talent.roll <= 9 ? "7-9" : talent.roll <= 11 ? "10-11" : "12",
                result: `<strong>${localized(talent)}</strong>`
            });
        });

        if (c.spells && c.spells.length) {
            c.spells.forEach((spell) => {
                push({
                    type: "spell",
                    field: tr().rollSpells,
                    dice: "—",
                    detail: `${tr().rollTier} ${spell.tier}`,
                    result: `<strong>${localized(spell)}</strong>`
                });
            });
        }

        push({
            type: "languages",
            field: tr().rollLanguages,
            dice: "—",
            detail: `${c.languages.length} ${tr().rollKnown}`,
            result: `<strong>${c.languages.map(localized).join(", ")}</strong>`
        });
    }

    function renderRollLog() {
        const container = $("roll-log");
        const section = $("generation-info");
        if (!container || !section) return;

        if (!rollLog.length) {
            container.innerHTML = "";
            section.hidden = true;
            return;
        }

        section.hidden = false;
        const rows = rollLog.map((entry) => `
            <tr>
                <td class="roll-char-cell">${entry.charLabel}</td>
                <td class="roll-field-cell">${entry.field}</td>
                <td class="roll-dice-cell">${entry.dice}</td>
                <td class="roll-detail-cell">${entry.detail}</td>
                <td class="roll-total-cell">${entry.result}</td>
            </tr>
        `).join("");

        container.innerHTML = `
            <div class="table-responsive">
                <table class="table align-middle text-center mb-0">
                    <thead>
                        <tr>
                            <th>${tr().colChar}</th>
                            <th>${tr().colField}</th>
                            <th>${tr().colDice}</th>
                            <th>${tr().colMod}</th>
                            <th>${tr().colResult}</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    }

    function characterToText(c) {
        const lines = [];
        lines.push(`${c.name} — ${localized(c.classData)} ${c.level} (${localized(c.ancestry)})`);
        lines.push(`${tr().titleLabel}: ${localized(c.title)}`);
        lines.push(`${tr().alignmentLabelShort}: ${alignmentName(c.alignment)}`);
        lines.push(`${tr().backgroundLabel}: ${localized(c.background)} — ${localized(c.background.desc)}`);
        if (c.deity) lines.push(`${tr().deityLabel}: ${localized(c.deity)}`);
        lines.push("");
        lines.push(`${tr().statsLabel}:`);
        D.STATS.forEach((s) => {
            lines.push(`  ${s.abbr}: ${c.scores[s.key]} (${fmtMod(statMod(c.scores[s.key]))})`);
        });
        lines.push(`${tr().hpLabel}: ${c.hp.total} | ${tr().acLabel}: ${c.ac} | ${tr().gearSlotsLabel}: ${c.gearSlots}`);
        lines.push("");
        lines.push(`${tr().attacksLabel}:`);
        lines.push(`  ${tr().weaponLabel}: ${localized(c.weapon)} (${c.weapon.dmg})`);
        if (c.armor) lines.push(`  ${tr().armorLabel}: ${localized(c.armor)} (${c.armor.ac})`);
        lines.push("");
        lines.push(`${tr().talentsLabel}:`);
        c.talents.forEach((talent) => lines.push(`  [${talent.roll}] ${localized(talent)}`));
        lines.push("");
        lines.push(`${tr().languagesLabel}: ${c.languages.map(localized).join(", ")}`);
        if (c.spells) {
            lines.push("");
            lines.push(`${tr().spellsLabel}:`);
            c.spells.forEach((s) => lines.push(`  [${tr().tierLabel} ${s.tier}] ${localized(s)}`));
        }
        lines.push("");
        lines.push(`${tr().goldLabel}: ${c.gold} gp | ${tr().buyGearNote}`);
        return lines.join("\n");
    }

    function plainText() {
        return characters.map(characterToText).join("\n\n———\n\n");
    }

    function renderCharacter(c, index) {
        const card = document.createElement("article");
        card.className = "character-card";

        const stats = D.STATS.map((s) => `
            <div class="character-card__stat">
                <span class="character-card__stat-abbr">${s.abbr}</span>
                <span class="character-card__stat-score">${c.scores[s.key]}</span>
                <span class="character-card__stat-mod">${fmtMod(statMod(c.scores[s.key]))}</span>
            </div>`).join("");

        const talents = c.talents.map((talent) => `
            <li class="character-card__talent">
                <span class="character-card__talent-level">${tr().rollLevel} ${talent.level}</span>
                <span class="character-card__talent-roll">(${talent.roll})</span>
                <span>${localized(talent)}</span>
            </li>`).join("");

        const spells = c.spells && c.spells.length
            ? `<div class="character-card__spells">
                    <h4>${tr().spellsLabel}</h4>
                    <ul>${c.spells.map((s) => `<li><span class="character-card__spell-tier">${tr().tierLabel} ${s.tier}</span> ${localized(s)}</li>`).join("")}</ul>
               </div>`
            : "";

        const deity = c.deity
            ? `<p class="character-card__field"><strong>${tr().deityLabel}:</strong> ${localized(c.deity)}</p>`
            : "";

        const armor = c.armor
            ? `<p class="character-card__field"><strong>${tr().armorLabel}:</strong> ${localized(c.armor)} <span class="character-card__muted">(${c.armor.ac} ${tr().acLabel})</span></p>`
            : "";

        card.innerHTML = `
            <header class="character-card__header">
                <div>
                    <h3 class="character-card__name">${c.name}</h3>
                    <p class="character-card__subtitle">
                        ${localized(c.classData)} ${c.level} · ${localized(c.ancestry)} · ${alignmentName(c.alignment)}
                    </p>
                </div>
                <span class="character-card__level">${tr().levelLabel} ${c.level}</span>
            </header>
            <div class="character-card__title">${tr().titleLabel}: <strong>${localized(c.title)}</strong></div>
            <div class="character-card__stats">${stats}</div>
            <div class="character-card__vitals">
                <span><strong>${tr().hpLabel}:</strong> ${c.hp.total}</span>
                <span><strong>${tr().acLabel}:</strong> ${c.ac}</span>
                <span><strong>${tr().gearSlotsLabel}:</strong> ${c.gearSlots}</span>
                <span><strong>${tr().goldLabel}:</strong> ${c.gold} gp</span>
            </div>
            <div class="character-card__section">
                <h4>${tr().backgroundLabel}</h4>
                <p>${localized(c.background)} — <span class="character-card__muted">${localized(c.background.desc)}</span></p>
                ${deity}
            </div>
            <div class="character-card__section">
                <h4>${tr().attacksLabel}</h4>
                <p class="character-card__field"><strong>${tr().weaponLabel}:</strong> ${localized(c.weapon)} <span class="character-card__muted">(${c.weapon.dmg})</span></p>
                ${armor}
            </div>
            <div class="character-card__section">
                <h4>${tr().talentsLabel}</h4>
                <ul class="character-card__talents">${talents}</ul>
            </div>
            <div class="character-card__section">
                <h4>${tr().languagesLabel}</h4>
                <p class="character-card__muted">${c.languages.map(localized).join(" · ")}</p>
            </div>
            ${spells}
        `;
        return card;
    }

    function render() {
        const container = $("results");
        if (!container) return;
        container.innerHTML = "";

        if (!characters.length) {
            const empty = document.createElement("div");
            empty.className = "character-empty";
            empty.id = "empty";
            empty.innerHTML = tr().empty;
            container.appendChild(empty);
            $("copy").disabled = true;
            $("download").disabled = true;
            $("export-pdf").disabled = true;
            return;
        }

        characters.forEach((c, i) => container.appendChild(renderCharacter(c, i)));
        $("copy").disabled = false;
        $("download").disabled = false;
        $("export-pdf").disabled = false;
    }

    function renderReference() {
        const grid = $("reference-grid");
        if (!grid) return;
        const alignmentRows = [
            [tr().alignmentLawful, "Ordem e virtude"],
            [tr().alignmentNeutral, "Equilíbrio"],
            [tr().alignmentChaotic, "Destruição e ambição"]
        ];
        const classRows = D.CLASSES.map((c) => [localized(c), c.hpLabel[isPt() ? "pt" : "en"]]);
        const xpRows = D.XP_THRESHOLDS.slice(1).map((xp, i) => [String(i + 1), `${xp} XP`]);

        grid.innerHTML = `
            <section class="character-reference__block">
                <h3>${tr().classLabel}</h3>
                <ul>${classRows.map(([name, hp]) => `<li><strong>${name}</strong> — ${hp}</li>`).join("")}</ul>
            </section>
            <section class="character-reference__block">
                <h3>${tr().alignmentLabel}</h3>
                <ul>${alignmentRows.map(([name, desc]) => `<li><strong>${name}</strong> — ${desc}</li>`).join("")}</ul>
            </section>
            <section class="character-reference__block">
                <h3>${tr().xpLabel}</h3>
                <ul>${xpRows.map(([lvl, xp]) => `<li><strong>${tr().levelLabel} ${lvl}:</strong> ${xp}</li>`).join("")}</ul>
            </section>
            <section class="character-reference__block">
                <h3>${tr().talentsLabel}</h3>
                <p class="character-card__muted">${tr().talentNote}</p>
                <p class="character-card__muted">${tr().levelUpNote}</p>
            </section>
        `;
    }

    function localize() {
        const x = tr();
        ["nav-back-text", "nav-generators", "nav-about"].forEach((id, i) => set(id, [x.navHome, x.navGenerators, x.navAbout][i]));
        set("eyebrow", x.eyebrow);
        set("title", x.title);
        set("intro", x.intro);
        set("level-label", x.level);
        set("class-label", x.classLabel);
        set("ancestry-label", x.ancestryLabel);
        set("alignment-label", x.alignmentLabel);
        set("count-label", x.count);
        set("generate-label", x.generate);
        set("rule-note", x.note);
        set("results-title", x.results);
        set("copy-label", x.copy);
        set("download-label", x.download);
        set("export-pdf-label", x.exportPdf);
        set("reference-title", x.reference);
        set("source", x.source);
        set("roll-log-heading", x.rollLogTitle);
        document.getElementById("generation-info").setAttribute("aria-label", x.rollLogTitle);
        set("footer-caption", x.footer);

        const classSelect = $("class-select");
        classSelect.options[0].text = x.random;
        const classKeys = ["fighter", "priest", "thief", "wizard"];
        classKeys.forEach((key, i) => {
            const data = D.CLASSES.find((c) => c.key === key);
            classSelect.options[i + 1].text = localized(data);
        });

        const ancestrySelect = $("ancestry-select");
        ancestrySelect.options[0].text = x.random;
        D.ANCESTRIES.forEach((a, i) => { ancestrySelect.options[i + 1].text = localized(a); });

        const alignSelect = $("alignment-select");
        alignSelect.options[0].text = x.randomAlign;
        alignSelect.options[1].text = x.alignmentLawful;
        alignSelect.options[2].text = x.alignmentNeutral;
        alignSelect.options[3].text = x.alignmentChaotic;

        setHTML("footer-credit", isPt()
            ? 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>'
            : 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>');
        setHTML("footer-subcredit", isPt()
            ? 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.'
            : 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.');

        document.documentElement.lang = lang;
        document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"));

        renderReference();
        render();
        renderRollLog();
    }

    function generate() {
        const level = parseInt($("level").value, 10) || 1;
        const classKey = $("class-select").value;
        const ancestryKey = $("ancestry-select").value;
        const alignment = $("alignment-select").value;
        const count = Math.max(1, Math.min(10, parseInt($("count").value, 10) || 1));

        rollLog = [];
        characters = Array.from({ length: count }, (_, index) => generateCharacter({ level, classKey, ancestryKey, alignment }, index));
        render();
        renderRollLog();
    }

    function init() {
        $("generate").addEventListener("click", generate);

        $("copy").addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(plainText());
                const b = $("copy");
                const label = $("copy-label");
                const original = label.textContent;
                label.textContent = tr().copied;
                setTimeout(() => { label.textContent = original; }, 1400);
            } catch (e) {
                alert(tr().copyError);
            }
        });

        $("download").addEventListener("click", () => {
            const blob = new Blob([plainText()], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "shadowdark-characters.txt";
            a.click();
            URL.revokeObjectURL(url);
        });

        $("export-pdf").addEventListener("click", () => {
            if (!characters.length) return;
            const cards = characters.map((c, index) => ({
                title: c.name,
                badge: `${localized(c.classData)} ${c.level} · ${localized(c.ancestry)} · ${alignmentName(c.alignment)}`,
                eyebrow: isPt()
                    ? `PERSONAGEM ${index + 1} DE ${characters.length}`
                    : `CHARACTER ${index + 1} OF ${characters.length}`,
                stats: D.STATS.map((s) => `${s.abbr} ${c.scores[s.key]} (${fmtMod(statMod(c.scores[s.key]))})`),
                sections: [
                    {
                        heading: isPt() ? "PERFIL" : "PROFILE",
                        lines: [
                            `${tr().titleLabel}: ${localized(c.title)}`,
                            `${tr().backgroundLabel}: ${localized(c.background)}`,
                            c.deity ? `${tr().deityLabel}: ${localized(c.deity)}` : "",
                        ].filter(Boolean)
                    },
                    {
                        heading: isPt() ? "COMBATE" : "COMBAT",
                        lines: [
                            `${tr().hpLabel}: ${c.hp.total}  |  ${tr().acLabel}: ${c.ac}  |  ${tr().goldLabel}: ${c.gold} gp`,
                            `${tr().weaponLabel}: ${localized(c.weapon)} (${c.weapon.dmg})`,
                            c.armor ? `${tr().armorLabel}: ${localized(c.armor)} (${c.armor.ac} ${tr().acLabel})` : "",
                        ].filter(Boolean)
                    },
                    {
                        heading: tr().talentsLabel,
                        lines: c.talents.map((talent) => `(${talent.roll}) ${localized(talent)}`)
                    },
                    {
                        heading: tr().languagesLabel,
                        lines: [c.languages.map(localized).join(", ")]
                    },
                ]
            }));
            const english = !isPt();
            const title = english ? "CHARACTERS" : "PERSONAGENS";
            const subtitle = english
                ? `${cards.length} generated character${cards.length === 1 ? "" : "s"}`
                : `${cards.length} personagem(ns) gerado(s)`;
            const footerLabel = english ? "SHADOWDARK TOOLS  -  CHARACTERS" : "SHADOWDARK TOOLS  -  PERSONAGENS";
            window.ShadowdarkExport.downloadCardsPdf({ title, subtitle, cards, footerLabel }, "shadowdark-characters.pdf");
        });

        document.querySelectorAll("[data-lang]").forEach((b) => {
            b.addEventListener("click", () => {
                lang = b.dataset.lang;
                localStorage.setItem("shadowdark-tools-lang", lang);
                localize();
            });
        });

        localize();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
    else init();
})();