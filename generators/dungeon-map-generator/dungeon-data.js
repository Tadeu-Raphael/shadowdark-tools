(function () {
    "use strict";
    window.DUNGEON_DATA = {
        size: [["Small","Pequena",5,10],["Medium","Média",8,10],["Large","Grande",12,10]],
        type: [["Cave","Caverna"],["Tomb","Tumba"],["Deep tunnels","Túneis profundos"],["Ruins","Ruínas"]],
        roomTypes: [["Empty","Vazia"],["Trap","Armadilha"],["Minor hazard","Perigo menor"],["Solo monster","Monstro solitário"],["NPC","NPC"],["Monster mob","Grupo de monstros"],["Major hazard","Perigo maior"],["Treasure","Tesouro"],["Boss monster","Monstro-chefe"]],
        danger: [["Unsafe","Inseguro"],["Risky","Arriscado"],["Deadly","Letal"]],
        trap: [
            [["Crude","Rudimentar"],["Ensnaring","Imobilizadora"]],[["Ranged","À distância"],["Toxic","Tóxica"]],[["Sturdy","Robusta"],["Mechanical","Mecânica"]],[["Ancient","Antiga"],["Magical","Mágica"]],[["Large","Grande"],["Deadly","Mortal"]]
        ],
        mob: [["Stealthy","Furtivos","Outcasts","Marginais"],["Reckless","Imprudentes","Minions","Lacaios"],["Magical","Mágicos","Tricksters","Trapaceiros"],["Primitive","Primitivos","Vermin","Vermes"],["Organized","Organizados","Warriors","Guerreiros"]],
        minorHazard: [["Short fall","Queda curta"],["Stuck or locked barrier","Barreira emperrada ou trancada"],["Dense rubble","Escombros densos"],["Collapsing walls","Paredes desmoronando"],["Enfeebling magic","Magia debilitante"]],
        majorHazard: [["Long fall","Queda longa"],["Toxic gas or vapors","Gás ou vapores tóxicos"],["Entrapping terrain","Terreno que aprisiona"],["Antimagic zone","Zona antimagia"],["Drowning hazard","Risco de afogamento"]],
        solo: [["Sneaky","Furtivo","Ambusher","Emboscador"],["Mighty","Poderoso","Brute","Brutamontes"],["Clever","Astuto","Spellcaster","Conjurador"],["Mutated","Mutante","Pariah","Pária"]],
        treasure: [["Hidden","Escondido"],["Guarded by monster","Guardado por monstro"],["Protected by trap","Protegido por armadilha"],["Protected by hazard","Protegido por perigo"]],
        npc: [["Hiding","Escondido"],["Captive","Prisioneiro"],["Wounded","Ferido"],["Rival crawlers","Exploradores rivais"]],
        boss: [["Physically strongest","Fisicamente mais forte"],["Religious leader","Líder religioso"],["Guarded by minions","Protegido por lacaios"],["Supreme sorcerer","Feiticeiro supremo"]]
    };
})();
