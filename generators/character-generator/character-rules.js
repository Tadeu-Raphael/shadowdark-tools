(function () {
    "use strict";

    const D = window.CHARACTER_DATA;
    const weaponKeys = {
        priest: ["club", "crossbow", "dagger", "mace", "longsword", "staff", "warhammer"],
        thief: ["club", "crossbow", "dagger", "shortbow", "shortsword"],
        wizard: ["dagger", "staff"]
    };

    function modifier(score) {
        const row = D.STAT_MODIFIERS.find((entry) => score >= entry.min && score <= entry.max);
        if (!row) throw new RangeError("Invalid ability score.");
        return row.mod;
    }

    function hitPoints(classData, level, scores, ancestryKey, random = Math.random) {
        const sides = Number(classData.hpDie.slice(2));
        const die = () => Math.floor(random() * sides) + 1;
        const rolls = Array.from({ length: level }, () => {
            const r1 = die();
            const r2 = ancestryKey === "dwarf" ? die() : null;
            return { r1, r2, kept: r2 === null ? r1 : Math.max(r1, r2) };
        });
        const conBonus = Math.max(1, modifier(scores.con));
        const ancestryBonus = ancestryKey === "dwarf" ? 2 : 0;
        return {
            total: rolls.reduce((sum, roll) => sum + roll.kept, 0) + conBonus + ancestryBonus,
            rolls, conBonus, ancestryBonus
        };
    }

    function weapons(classKey) {
        return D.WEAPONS.filter((weapon) => classKey === "fighter" || weaponKeys[classKey]?.includes(weapon.key));
    }

    function armors(classKey) {
        return D.ARMORS.filter((armor) => classKey === "fighter" || classKey === "priest" ||
            (classKey === "thief" && armor.key === "leather"));
    }

    window.ShadowdarkCharacterRules = { modifier, hitPoints, weapons, armors };
})();
