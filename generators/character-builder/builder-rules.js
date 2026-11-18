(function () {
    "use strict";

    const D = window.CHARACTER_DATA;
    const R = window.ShadowdarkCharacterRules;
    const commonLanguages = ["dwarvish", "elvish", "giant", "goblin", "merran", "orcish", "reptilian", "sylvan", "thanian"];
    const rareLanguages = ["celestial", "diabolic", "draconic", "primordial"];
    const ancestryLanguages = { dwarf: ["dwarvish"], elf: ["elvish", "sylvan"], goblin: ["goblin"], halfling: [], "half-orc": ["orcish"], human: [] };
    const die = (sides, random) => Math.floor(random() * sides) + 1;
    const option = (key, pt, en, effect = {}) => ({ key, pt, en, ...effect });

    function createDraft() {
        return {
            ancestry: "human", classKey: "fighter", alignment: "lawful", background: "0", deity: "",
            name: "", nameRoll: null, scores: null, statRolls: null, hp: null, goldRolls: null,
            talents: [], talentChoices: [], spells: [], languages: [],
            weapon: "", armor: "", shield: false, kit: false, gear: [],
            mastery: "club", grit: "str", elfGift: "ranged"
        };
    }

    function rollStats(random = Math.random) {
        const rolls = Object.fromEntries(D.STATS.map(({ key }) => [key, [die(6, random), die(6, random), die(6, random)]]));
        return {
            rolls,
            scores: Object.fromEntries(Object.entries(rolls).map(([key, values]) => [key, values.reduce((a, b) => a + b, 0)]))
        };
    }

    function rollVitals(draft, random = Math.random) {
        const classData = D.CLASSES.find((entry) => entry.key === draft.classKey);
        const count = draft.ancestry === "human" ? 2 : 1;
        const talents = [];
        for (let i = 0; i < count; i++) {
            const dice = [die(6, random), die(6, random)];
            let roll = dice[0] + dice[1];
            // A second initiative talent must be rerolled; choose from the remaining 2d6 outcomes without a retry loop.
            if (draft.classKey === "thief" && roll === 2 && talents.some((entry) => entry.roll === 2)) {
                const outcomes = [];
                for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b !== 2) outcomes.push([a, b]);
                const replacement = outcomes[Math.floor(random() * outcomes.length)];
                talents.push({ dice: replacement, roll: replacement[0] + replacement[1], level: 1, rerolled: dice });
            } else {
                talents.push({ dice, roll, level: 1 });
            }
        }
        return {
            talents,
            hp: R.hitPoints(classData, 1, draft.scores, draft.ancestry, random),
            goldRolls: [die(6, random), die(6, random)]
        };
    }

    function statOptions(keys, amount) {
        return keys.map((key) => {
            const stat = D.STATS.find((entry) => entry.key === key);
            return option(`stat:${key}:${amount}`, `+${amount} ${stat.pt}`, `+${amount} ${stat.en}`, { stats: { [key]: amount } });
        });
    }

    function talentOptions(classKey, roll) {
        if (roll === 12) {
            const stats = D.STATS.flatMap((first, index) => D.STATS.slice(index).map((second) => {
                const gains = first.key === second.key ? { [first.key]: 2 } : { [first.key]: 1, [second.key]: 1 };
                return option(`distribute:${first.key}:${second.key}`, `+1 ${first.pt}, +1 ${second.pt}`, `+1 ${first.en}, +1 ${second.en}`, { stats: gains });
            }));
            const talents = [2, 4, 8, 10].flatMap((value) => talentOptions(classKey, value));
            return [...talents, ...stats];
        }
        if (classKey === "fighter") {
            if (roll === 2) return D.WEAPONS.map((weapon) => option(`mastery:${weapon.key}`, `Mestre em Arma: ${weapon.pt}`, `Weapon Mastery: ${weapon.en}`));
            if (roll <= 6) return [option("attack:all", "+1 em ataques", "+1 to attacks")];
            if (roll <= 9) return statOptions(["str", "dex", "con"], 2);
            return D.ARMORS.filter((armor) => armor.key !== "shield").map((armor) => option(`armor:${armor.key}`, `+1 CA: ${armor.pt}`, `+1 AC: ${armor.en}`, { armorBonus: armor.key }));
        }
        if (classKey === "priest") {
            if (roll === 2) return D.SPELLS.priest.map((spell) => option(`advantage:${spell.en}`, `Vantagem: ${spell.pt}`, `Advantage: ${spell.en}`, { spell: spell.en }));
            if (roll <= 6) return [option("attack:melee", "+1 ataques corpo a corpo", "+1 melee attacks"), option("attack:ranged", "+1 ataques à distância", "+1 ranged attacks")];
            if (roll <= 9) return [option("casting", "+1 em testes de conjuração", "+1 to spellcasting checks")];
            return statOptions(["str", "wis"], 2);
        }
        if (classKey === "thief") {
            if (roll === 2) return [option("initiative", "Vantagem na iniciativa", "Advantage on initiative")];
            if (roll <= 5) return [option("backstab", "+1 dado de Golpe pelas Costas", "+1 Backstab die")];
            if (roll <= 9) return statOptions(["str", "dex", "cha"], 2);
            return [option("attack:all", "+1 em ataques", "+1 to attacks")];
        }
        if (roll === 2) return [
            option("item:armor", "Item mágico: armadura", "Magic item: armor"),
            option("item:potion", "Item mágico: poção", "Magic item: potion"),
            option("item:scroll", "Item mágico: pergaminho", "Magic item: scroll"),
            option("item:utility", "Item mágico: utilitário", "Magic item: utility"),
            option("item:wand", "Item mágico: varinha", "Magic item: wand"),
            option("item:weapon", "Item mágico: arma", "Magic item: weapon")
        ];
        if (roll <= 7) return [...statOptions(["int"], 2), option("casting", "+1 em testes de conjuração", "+1 to spellcasting checks")];
        if (roll <= 9) return D.SPELLS.wizard.map((spell) => option(`advantage:${spell.en}`, `Vantagem: ${spell.pt}`, `Advantage: ${spell.en}`, { spell: spell.en }));
        return [option("extra-spell", "Uma magia adicional", "One additional spell", { extraSpell: 1 })];
    }

    function chosenTalents(draft) {
        return draft.talents.map((talent, index) => talentOptions(draft.classKey, talent.roll).find((entry) => entry.key === draft.talentChoices[index]));
    }

    function scores(draft) {
        if (!draft.scores) return null;
        const result = { ...draft.scores };
        chosenTalents(draft).filter(Boolean).forEach((choice) => {
            Object.entries(choice.stats || {}).forEach(([key, value]) => { result[key] += value; });
        });
        return result;
    }

    function spellCount(draft) {
        const base = draft.classKey === "wizard" ? 3 : draft.classKey === "priest" ? 2 : 0;
        return base + chosenTalents(draft).reduce((sum, choice) => sum + (choice?.extraSpell || 0), 0);
    }

    function languageOptions(draft) {
        const known = ["common", ...ancestryLanguages[draft.ancestry]];
        const intellect = draft.scores ? Math.max(0, R.modifier(scores(draft).int)) : 0;
        return {
            known,
            common: commonLanguages.filter((key) => !known.includes(key)),
            rare: draft.classKey === "priest" ? rareLanguages.filter((key) => key !== "draconic") : rareLanguages,
            commonCount: intellect + (draft.ancestry === "human" ? 1 : 0) + (draft.classKey === "wizard" ? 2 : 0),
            rareCount: draft.classKey === "wizard" ? 2 : draft.classKey === "priest" ? 1 : 0
        };
    }

    function price(cost) {
        const match = /^(\d+(?:\.\d+)?) (cp|sp|gp)$/.exec(cost);
        if (!match) throw new Error(`Unknown equipment price: ${cost}`);
        return Math.round(Number(match[1]) * { cp: 1, sp: 10, gp: 100 }[match[2]]);
    }

    function inventory(draft) {
        const entries = [];
        const weapon = R.weapons(draft.classKey).find((entry) => entry.key === draft.weapon);
        const armor = R.armors(draft.classKey).find((entry) => entry.key === draft.armor && entry.key !== "shield");
        if (weapon) entries.push({ ...weapon, slots: weapon.props.includes("2 espaços") ? 2 : 1 });
        if (armor) entries.push(armor);
        if (draft.shield) entries.push(D.ARMORS.find((entry) => entry.key === "shield"));
        if (draft.kit) entries.push({ pt: D.CRAWLING_KIT.pt, en: D.CRAWLING_KIT.en, cost: "7 gp", slots: 7 });
        draft.gear.forEach((key) => {
            const item = D.GEAR.find((entry) => entry.key === key);
            if (!item || item.key === "gem") throw new Error(`Invalid equipment: ${key}`);
            entries.push({ ...item, slots: 1 });
        });
        return { entries, spent: entries.reduce((sum, entry) => sum + price(entry.cost), 0), slots: entries.reduce((sum, entry) => sum + Number(entry.slots), 0) };
    }

    function summary(draft) {
        const stats = scores(draft);
        const items = inventory(draft);
        const classData = D.CLASSES.find((entry) => entry.key === draft.classKey);
        const armor = D.ARMORS.find((entry) => entry.key === draft.armor);
        let ac = armor?.key === "plate" ? 15 : (armor?.key === "chainmail" ? 13 : armor ? 11 : 10) + R.modifier(stats.dex);
        if (draft.shield) ac += 2;
        chosenTalents(draft).filter(Boolean).forEach((choice) => { if (armor && choice.armorBonus === armor.key) ac += 1; });
        const hp = draft.hp ? draft.hp.rolls.reduce((sum, entry) => sum + entry.kept, 0) + Math.max(1, R.modifier(stats.con)) + (draft.ancestry === "dwarf" ? 2 : 0) : null;
        return {
            stats, hp, ac, inventory: items,
            gold: draft.goldRolls ? draft.goldRolls.reduce((a, b) => a + b, 0) * 500 - items.spent : null,
            gearSlots: Math.max(10, stats.str) + (draft.classKey === "fighter" ? Math.max(0, R.modifier(stats.con)) : 0),
            title: { pt: classData.titles[draft.alignment].pt[0], en: classData.titles[draft.alignment].en[0] }
        };
    }

    function validate(draft, step) {
        if (step === 0 && !draft.name.trim()) return "nameRequired";
        if (step === 1 && (!draft.scores || D.STATS.some(({ key }) => !Number.isInteger(draft.scores[key]) || draft.scores[key] < 3 || draft.scores[key] > 18))) return "statsRequired";
        if (step === 2 && draft.classKey === "priest" && !D.DEITIES.some((entry) => entry.key === draft.deity && entry.alignment === draft.alignment)) return "deityRequired";
        if (step === 3) {
            if (!draft.hp || !draft.goldRolls || draft.talents.length !== (draft.ancestry === "human" ? 2 : 1)) return "rollRequired";
            const choices = chosenTalents(draft);
            if (choices.some((entry) => !entry)) return "talentRequired";
            if (choices.filter((entry) => entry.key === "initiative").length > 1) return "duplicateInitiative";
        }
        if (step === 4) {
            const pool = D.SPELLS[draft.classKey] || [];
            if (draft.spells.length !== spellCount(draft) || new Set(draft.spells).size !== draft.spells.length ||
                draft.spells.some((name) => !pool.some((entry) => entry.en === name))) return "spellsRequired";
            if (chosenTalents(draft).some((entry) => entry?.spell && !draft.spells.includes(entry.spell))) return "knownSpellRequired";
            const langs = languageOptions(draft);
            if (new Set(draft.languages).size !== draft.languages.length ||
                draft.languages.filter((key) => langs.common.includes(key)).length !== langs.commonCount ||
                draft.languages.filter((key) => langs.rare.includes(key)).length !== langs.rareCount ||
                draft.languages.length !== langs.commonCount + langs.rareCount) return "languagesRequired";
        }
        if (step === 5) {
            if (!R.weapons(draft.classKey).some((entry) => entry.key === draft.weapon)) return "weaponRequired";
            if ((draft.armor && !R.armors(draft.classKey).some((entry) => entry.key === draft.armor && entry.key !== "shield")) ||
                (draft.shield && !R.armors(draft.classKey).some((entry) => entry.key === "shield"))) return "armorInvalid";
            const weapon = D.WEAPONS.find((entry) => entry.key === draft.weapon);
            if (draft.shield && weapon.props.includes("2H")) return "twoHands";
            const result = summary(draft);
            if (result.gold < 0) return "overBudget";
            if (result.inventory.slots > result.gearSlots) return "overCapacity";
        }
        return null;
    }

    window.ShadowdarkBuilderRules = {
        createDraft, rollStats, rollVitals, talentOptions, chosenTalents, scores, spellCount,
        languageOptions, price, inventory, summary, validate
    };
})();
