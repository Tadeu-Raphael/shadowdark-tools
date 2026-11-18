(function () {
    "use strict";

    function rollName(table, random = Math.random) {
        if (!Array.isArray(table) || table.length < 2) {
            throw new Error("Character names require at least two entries.");
        }
        const roll1 = Math.floor(random() * table.length) + 1;
        let roll2 = Math.floor(random() * table.length) + 1;
        if (roll2 === roll1) roll2 = (roll1 % table.length) + 1;
        return {
            name: `${table[roll1 - 1]} ${table[roll2 - 1]}`,
            roll1,
            roll2,
            die: `d${table.length}`
        };
    }

    window.ShadowdarkCharacterNames = { rollName };
})();
