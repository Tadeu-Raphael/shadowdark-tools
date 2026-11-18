/**
 * Shadowdark Tools - Character Generator Data
 * Dados de criação de personagens (níveis 1–10) extraídos do Livro de Regras.
 * Cada entrada bilíngue usa [pt, en].
 */
(function () {
    "use strict";

    const STAT_MODIFIERS = [
        { min: 1, max: 3, mod: -4 },
        { min: 4, max: 5, mod: -3 },
        { min: 6, max: 7, mod: -2 },
        { min: 8, max: 9, mod: -1 },
        { min: 10, max: 11, mod: 0 },
        { min: 12, max: 13, mod: 1 },
        { min: 14, max: 15, mod: 2 },
        { min: 16, max: 17, mod: 3 },
        { min: 18, max: 99, mod: 4 }
    ];

    const STATS = [
        { key: "str", abbr: "FOR", pt: "Força", en: "Strength" },
        { key: "dex", abbr: "DES", pt: "Destreza", en: "Dexterity" },
        { key: "con", abbr: "CON", pt: "Constituição", en: "Constitution" },
        { key: "int", abbr: "INT", pt: "Inteligência", en: "Intelligence" },
        { key: "wis", abbr: "SAB", pt: "Sabedoria", en: "Wisdom" },
        { key: "cha", abbr: "CAR", pt: "Carisma", en: "Charisma" }
    ];

    const ANCESTRIES = [
        {
            key: "dwarf", pt: "Anão", en: "Dwarf",
            languages: { pt: "Comum e Anão", en: "Common and Dwarvish" },
            perkName: { pt: "Robusto", en: "Stout" },
            perk: { pt: "Começa com +2 PV. Role os PV por nível com vantagem.", en: "Start with +2 HP. Roll hit points per level with advantage." }
        },
        {
            key: "elf", pt: "Elfo", en: "Elf",
            languages: { pt: "Comum, Élfico e Silvestre", en: "Common, Elvish, and Sylvan" },
            perkName: { pt: "Visão Aguçada", en: "Farsight" },
            perk: { pt: "Recebe +1 nas jogadas de ataque com armas à distância ou +1 nos testes de conjuração.", en: "Gain a +1 bonus to ranged weapon attack rolls or a +1 bonus to spellcasting checks." }
        },
        {
            key: "goblin", pt: "Goblin", en: "Goblin",
            languages: { pt: "Comum e Goblin", en: "Common and Goblin" },
            perkName: { pt: "Sentidos Aguçados", en: "Keen Senses" },
            perk: { pt: "Não pode ser surpreendido.", en: "You can't be surprised." }
        },
        {
            key: "halfling", pt: "Halfling", en: "Halfling",
            languages: { pt: "Comum", en: "Common" },
            perkName: { pt: "Furtivo", en: "Stealthy" },
            perk: { pt: "Uma vez por dia, pode ficar invisível por 3 rodadas.", en: "Once per day, you can become invisible for 3 rounds." }
        },
        {
            key: "half-orc", pt: "Meio-Orc", en: "Half-orc",
            languages: { pt: "Comum e Orc", en: "Common and Orcish" },
            perkName: { pt: "Poderoso", en: "Mighty" },
            perk: { pt: "Recebe +1 nas jogadas de ataque e dano com armas corpo a corpo.", en: "You have a +1 bonus to attack and damage rolls with melee weapons." }
        },
        {
            key: "human", pt: "Humano", en: "Human",
            languages: { pt: "Comum e um idioma comum adicional", en: "Common and one additional common language" },
            perkName: { pt: "Ambicioso", en: "Ambitious" },
            perk: { pt: "Recebe uma rolagem adicional de talento no 1º nível.", en: "You gain one additional talent roll at 1st level." }
        }
    ];

    const CLASSES = [
        {
            key: "fighter", pt: "Guerreiro", en: "Fighter",
            weapons: { pt: "Todas as armas", en: "All weapons" },
            armor: { pt: "Todas as armaduras e escudos", en: "All armor and shields" },
            hpDie: "1d8",
            hpLabel: { pt: "1d8 por nível", en: "1d8 per level" },
            talents: [
                { pt: "Mestre em Arma. Escolha um tipo de arma. Recebe +1 em ataque e dano com esse tipo de arma. Além disso, some metade do seu nível a essas jogadas (arredonde para baixo).", en: "Weapon Mastery. Choose one type of weapon. You gain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down)." },
                { pt: "Determinação. Escolha Força ou Destreza. Tem vantagem em testes desse tipo para superar uma força oposta.", en: "Grit. Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force." },
                { pt: "Marinheiro. Some seu modificador de Constituição, se positivo, aos seus espaços de equipamento.", en: "Hauler. Add your Constitution modifier, if positive, to your gear slots." }
            ],
            talentTable: [
                { range: "2", pt: "Ganhe Mestre em Arma com um tipo de arma adicional", en: "Gain Weapon Mastery with one additional weapon type" },
                { range: "3-6", pt: "+1 em ataques corpo a corpo e à distância", en: "+1 to melee and ranged attacks" },
                { range: "7-9", pt: "+2 em Força, Destreza ou Constituição", en: "+2 to Strength, Dexterity, or Constitution stat" },
                { range: "10-11", pt: "Escolha um tipo de armadura. Recebe +1 de CA com essa armadura", en: "Choose one kind of armor. You get +1 AC from that armor" },
                { range: "12", pt: "Escolha um talento ou +2 pontos para distribuir em atributos", en: "Choose a talent or +2 points to distribute to stats" }
            ],
            titles: {
                lawful: { pt: ["Escudeiro", "Cavaleiro", "Cavaleiro", "Barão/Baronesa", "Barão/Baronesa", "Senhor/Senhora", "Senhor/Senhora", "Senhor/Senhora", "Senhor/Senhora", "Senhor/Senhora"], en: ["Squire", "Cavalier", "Knight", "Thane", "Lord/Lady", "Lord/Lady", "Lord/Lady", "Lord/Lady", "Lord/Lady", "Lord/Lady"] },
                neutral: { pt: ["Guerreiro", "Bárbaro", "Batalhador", "Batalhador", "Batalhador", "Batalhador", "Chefe Guerreiro", "Chefe Guerreiro", "Chefe Guerreiro", "Chefe Guerreiro"], en: ["Warrior", "Barbarian", "Battlerager", "Battlerager", "Battlerager", "Battlerager", "Warchief", "Warchief", "Warchief", "Warchief"] },
                chaotic: { pt: ["Ladino", "Bandido", "Matador", "Matador", "Matador", "Matador", "Matador", "Matador", "Senhor da Guerra", "Senhor da Guerra"], en: ["Knave", "Bandit", "Slayer", "Slayer", "Slayer", "Slayer", "Slayer", "Slayer", "Warlord", "Warlord"] }
            }
        },
        {
            key: "priest", pt: "Sacerdote", en: "Priest",
            weapons: { pt: "Clava, besta, adaga, maça, espada longa, cajado, martelo de guerra", en: "Club, crossbow, dagger, mace, longsword, staff, warhammer" },
            armor: { pt: "Todas as armaduras e escudos", en: "All armor and shields" },
            hpDie: "1d6",
            hpLabel: { pt: "1d6 por nível", en: "1d6 per level" },
            talents: [
                { pt: "Idiomas. Conhece Celestial, Diabólico ou Primordial.", en: "Languages. You know Celestial, Diabolic, or Primordial." },
                { pt: "Expulsar Mortos-Vivos. Conhece a magia expulsar mortos-vivos. Ela não conta no seu número de magias conhecidas.", en: "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells." },
                { pt: "Divindade. Escolha um deus para servir que corresponda ao seu alinhamento. Você tem um símbolo sagrado do seu deus (não ocupa espaço de equipamento).", en: "Deity. Choose a god to serve who matches your alignment. You have a holy symbol for your god (it takes up no gear slots)." },
                { pt: "Conjuração. Conhece duas magias de sacerdote de nível 1 de sua escolha. A cada nível, escolhe novas magias conforme a tabela de magias conhecidas.", en: "Spellcasting. You know two tier 1 priest spells of your choice. Each time you gain a level, you choose new priest spells according to the Priest Spells Known table." }
            ],
            talentTable: [
                { range: "2", pt: "Ganhe vantagem ao conjurar uma magia que conhece", en: "Gain advantage on casting one spell you know" },
                { range: "3-6", pt: "+1 em ataques corpo a corpo ou à distância", en: "+1 to melee or ranged attacks" },
                { range: "7-9", pt: "+1 nos testes de conjuração de sacerdote", en: "+1 to priest spellcasting checks" },
                { range: "10-11", pt: "+2 em Força ou Sabedoria", en: "+2 to Strength or Wisdom stat" },
                { range: "12", pt: "Escolha um talento ou +2 pontos para distribuir em atributos", en: "Choose a talent or +2 points to distribute to stats" }
            ],
            spellsKnown: {
                "1": [2, 0, 0, 0, 0], "2": [3, 0, 0, 0, 0], "3": [3, 1, 0, 0, 0], "4": [3, 2, 0, 0, 0], "5": [3, 2, 1, 0, 0],
                "6": [3, 2, 2, 0, 0], "7": [3, 3, 2, 1, 0], "8": [3, 3, 2, 2, 0], "9": [3, 3, 2, 2, 1], "10": [3, 3, 3, 2, 2]
            },
            titles: {
                lawful: { pt: ["Acólito", "Cruzado", "Cruzado", "Templário", "Templário", "Templário", "Campeão", "Campeão", "Paladino", "Paladino"], en: ["Acolyte", "Crusader", "Crusader", "Templar", "Templar", "Templar", "Champion", "Champion", "Paladin", "Paladin"] },
                neutral: { pt: ["Buscador", "Invocador", "Harúspice", "Harúspice", "Harúspice", "Harúspice", "Místico", "Místico", "Oráculo", "Oráculo"], en: ["Seeker", "Invoker", "Haruspex", "Haruspex", "Haruspex", "Haruspex", "Mystic", "Mystic", "Oracle", "Oracle"] },
                chaotic: { pt: ["Iniciado", "Zelote", "Zelote", "Cultista", "Cultista", "Cultista", "Flagelo", "Flagelo", "Cavaleiro do Caos", "Cavaleiro do Caos"], en: ["Initiate", "Zealot", "Zealot", "Cultist", "Cultist", "Cultist", "Scourge", "Scourge", "Chaos Knight", "Chaos Knight"] }
            }
        },
        {
            key: "thief", pt: "Ladino", en: "Thief",
            weapons: { pt: "Clava, besta, adaga, arco curto, espada curta", en: "Club, crossbow, dagger, shortbow, shortsword" },
            armor: { pt: "Armadura de couro, cota de malha de mithral", en: "Leather armor, mithral chainmail" },
            hpDie: "1d4",
            hpLabel: { pt: "1d4 por nível", en: "1d4 per level" },
            talents: [
                { pt: "Golpe pelas Costas. Se acertar uma criatura que não percebe seu ataque, causa um dado de arma adicional de dano. Some dados de arma adicionais de dano iguais à metade do seu nível (arredonde para baixo).", en: "Backstab. If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down)." },
                { pt: "Furtividade. É adepto de habilidades de ladrão e tem as ferramentas do ofício escondidas em sua pessoa (não ocupam espaço de equipamento). Tem vantagem em testes de: escalar, esgueirar-se e esconder-se, aplicar disfarces, encontrar e desarmar armadilhas, tarefas delicadas como furtar bolsos e abrir fechaduras.", en: "Thievery. You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots). You have advantage on: Climbing, Sneaking and hiding, Applying disguises, Finding and disabling traps, Delicate tasks such as picking pockets and opening locks." }
            ],
            talentTable: [
                { range: "2", pt: "Ganhe vantagem em testes de iniciativa (re-rolar se duplicado)", en: "Gain advantage on initiative rolls (reroll if duplicate)" },
                { range: "3-5", pt: "Seu Golpe pelas Costas causa +1 dado de dano", en: "Your Backstab deals +1 dice of damage" },
                { range: "6-9", pt: "+2 em Força, Destreza ou Carisma", en: "+2 to Strength, Dexterity, or Charisma stat" },
                { range: "10-11", pt: "+1 em ataques corpo a corpo e à distância", en: "+1 to melee and ranged attacks" },
                { range: "12", pt: "Escolha um talento ou +2 pontos para distribuir em atributos", en: "Choose a talent or +2 points to distribute to stats" }
            ],
            titles: {
                lawful: { pt: ["Batedor de Carteiras", "Arrombador", "Ladrão", "Ladrão", "Ladrão", "Ladrão", "Subchefe", "Subchefe", "Chefe", "Chefe"], en: ["Footpad", "Burglar", "Rook", "Rook", "Rook", "Rook", "Underboss", "Underboss", "Boss", "Boss"] },
                neutral: { pt: ["Ladrão", "Fora da Lei", "Trapaceiro", "Trapaceiro", "Trapaceiro", "Trapaceiro", "Renegado", "Renegado", "Rei/Rainha dos Bandidos", "Rei/Rainha dos Bandidos"], en: ["Robber", "Outlaw", "Rogue", "Rogue", "Rogue", "Rogue", "Renegade", "Renegade", "Bandit King/Queen", "Bandit King/Queen"] },
                chaotic: { pt: ["Capanga", "Degolador", "Sombrio", "Sombrio", "Sombrio", "Sombrio", "Assassino", "Assassino", "Espectro", "Espectro"], en: ["Thug", "Cutthroat", "Shadow", "Shadow", "Shadow", "Shadow", "Assassin", "Assassin", "Wraith", "Wraith"] }
            }
        },
        {
            key: "wizard", pt: "Mago", en: "Wizard",
            weapons: { pt: "Adaga, cajado", en: "Dagger, staff" },
            armor: { pt: "Nenhuma", en: "None" },
            hpDie: "1d4",
            hpLabel: { pt: "1d4 por nível", en: "1d4 per level" },
            talents: [
                { pt: "Idiomas. Conhece dois idiomas comuns adicionais e dois idiomas raros.", en: "Languages. You know two additional common languages and two rare languages." },
                { pt: "Aprender Magias. Pode aprender permanentemente uma magia de mago de um pergaminho estudando por um dia e passando em um teste de Inteligência CD 15. Independentemente de passar ou falhar, o pergaminho é gasto. Magias aprendidas assim não contam no seu número de magias conhecidas.", en: "Learning Spells. You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. Whether you succeed or fail, you expend the spell scroll. Spells learned this way don't count toward your known spells." },
                { pt: "Conjuração. Conhece três magias de mago de nível 1 de sua escolha. A cada nível, escolhe novas magias conforme a tabela de magias conhecidas.", en: "Spellcasting. You know three tier 1 wizard spells of your choice. Each time you gain a level, you choose new wizard spells according to the Wizard Spells Known table." }
            ],
            talentTable: [
                { range: "2", pt: "Faça 1 item mágico aleatório de um tipo que você escolher", en: "Make 1 random magic item of a type you choose" },
                { range: "3-7", pt: "+2 em Inteligência ou +1 nos testes de conjuração de mago", en: "+2 to Intelligence stat or +1 to wizard spellcasting checks" },
                { range: "8-9", pt: "Ganhe vantagem ao conjurar uma magia que conhece", en: "Gain advantage on casting one spell you know" },
                { range: "10-11", pt: "Aprenda uma magia de mago adicional de qualquer nível que conheça", en: "Learn one additional wizard spell of any tier you know" },
                { range: "12", pt: "Escolha um talento ou +2 pontos para distribuir em atributos", en: "Choose a talent or +2 points to distribute to stats" }
            ],
            spellsKnown: {
                "1": [3, 0, 0, 0, 0], "2": [4, 0, 0, 0, 0], "3": [4, 1, 0, 0, 0], "4": [4, 2, 0, 0, 0], "5": [4, 2, 1, 0, 0],
                "6": [4, 3, 2, 0, 0], "7": [4, 3, 2, 1, 0], "8": [4, 4, 2, 2, 0], "9": [4, 4, 3, 2, 1], "10": [4, 4, 4, 2, 2]
            },
            titles: {
                lawful: { pt: ["Aprendiz", "Conjurador", "Arcanista", "Arcanista", "Arcanista", "Arcanista", "Mago", "Mago", "Arquimago", "Arquimago"], en: ["Apprentice", "Conjurer", "Arcanist", "Arcanist", "Arcanist", "Arcanist", "Mage", "Mage", "Archmage", "Archmage"] },
                neutral: { pt: ["Adepto", "Vidente", "Guardião", "Guardião", "Guardião", "Guardião", "Sábio", "Sábio", "Oráculo", "Oráculo"], en: ["Adept", "Seer", "Warden", "Warden", "Warden", "Warden", "Sage", "Sage", "Oracle", "Oracle"] },
                chaotic: { pt: ["Xamã", "Canalizador", "Bruxo/Bruxa", "Bruxo/Bruxa", "Bruxo/Bruxa", "Bruxo/Bruxa", "Diabolista", "Diabolista", "Feiticeiro", "Feiticeiro"], en: ["Shaman", "Channeler", "Witch/Warlock", "Witch/Warlock", "Witch/Warlock", "Witch/Warlock", "Diabolist", "Diabolist", "Sorcerer", "Sorcerer"] }
            }
        }
    ];

    const BACKGROUNDS = [
        { pt: "Pivete", en: "Urchin", desc: { pt: "Você cresceu nas ruas impiedosas de uma grande cidade.", en: "You grew up in the merciless streets of a large city." } },
        { pt: "Procurado", en: "Wanted", desc: { pt: "Há um preço pela sua cabeça, mas você tem aliados.", en: "There's a price on your head, but you have allies." } },
        { pt: "Iniciado de Culto", en: "Cult Initiate", desc: { pt: "Você conhece segredos e rituais blasfemos.", en: "You know blasphemous secrets and rituals." } },
        { pt: "Guilda dos Ladrões", en: "Thieves' Guild", desc: { pt: "Você tem conexões, contatos e dívidas.", en: "You have connections, contacts, and debts." } },
        { pt: "Banido", en: "Banished", desc: { pt: "Seu povo o expulsou por supostos crimes.", en: "Your people cast you out for supposed crimes." } },
        { pt: "Órfão", en: "Orphaned", desc: { pt: "Um guardião incomum resgatou e criou você.", en: "An unusual guardian rescued and raised you." } },
        { pt: "Aprendiz de Mago", en: "Wizard's Apprentice", desc: { pt: "Você tem queda e olhar para a magia.", en: "You have a knack and eye for magic." } },
        { pt: "Joalheiro", en: "Jeweler", desc: { pt: "Você avalia facilmente valor e autenticidade.", en: "You can easily appraise value and authenticity." } },
        { pt: "Herbalista", en: "Herbalist", desc: { pt: "Você conhece plantas, remédios e venenos.", en: "You know plants, medicines, and poisons." } },
        { pt: "Bárbaro", en: "Barbarian", desc: { pt: "Você deixou a horda, mas ela nunca o deixou de verdade.", en: "You left the horde, but it never quite left you." } },
        { pt: "Mercenário", en: "Mercenary", desc: { pt: "Você lutou contra amigos e inimigos por moedas.", en: "You fought friend and foe alike for your coin." } },
        { pt: "Marinheiro", en: "Sailor", desc: { pt: "Pirata, corsário ou mercador — os mares são seus.", en: "Pirate, privateer, or merchant — the seas are yours." } },
        { pt: "Acólito", en: "Acolyte", desc: { pt: "Você é bem treinado em ritos e doutrinas religiosas.", en: "You're well trained in religious rites and doctrines." } },
        { pt: "Soldado", en: "Soldier", desc: { pt: "Você serviu como combatente em um exército organizado.", en: "You served as a fighter in an organized army." } },
        { pt: "Patrulheiro", en: "Ranger", desc: { pt: "As matas e os ermos são seu verdadeiro lar.", en: "The woods and wilds are your true home." } },
        { pt: "Batedor", en: "Scout", desc: { pt: "Você sobreviveu com furtividade, observação e velocidade.", en: "You survived on stealth, observation, and speed." } },
        { pt: "Músico", en: "Minstrel", desc: { pt: "Você viajou longe com seu charme e talento.", en: "You've traveled far with your charm and talent." } },
        { pt: "Estudioso", en: "Scholar", desc: { pt: "Você sabe muito sobre história antiga e sabedoria.", en: "You know much about ancient history and lore." } },
        { pt: "Nobre", en: "Noble", desc: { pt: "Um nome famoso abriu muitas portas para você.", en: "A famous name has opened many doors for you." } },
        { pt: "Cirurgião", en: "Chirurgeon", desc: { pt: "Você conhece anatomia, cirurgia e primeiros socorros.", en: "You know anatomy, surgery, and first aid." } }
    ];

    const DEITIES = [
        { key: "terragris", pt: "Santa Terragnis", en: "Saint Terragnis", alignment: "lawful" },
        { key: "gede", pt: "Gede", en: "Gede", alignment: "neutral" },
        { key: "madeera", pt: "Madeera, a Aliança", en: "Madeera the Covenant", alignment: "lawful" },
        { key: "ord", pt: "Ord", en: "Ord", alignment: "neutral" },
        { key: "memnon", pt: "Memnon", en: "Memnon", alignment: "chaotic" },
        { key: "ramlaat", pt: "Ramlaat", en: "Ramlaat", alignment: "chaotic" },
        { key: "shune", pt: "Shune, a Vil", en: "Shune the Vile", alignment: "chaotic" }
    ];

    const NAMES = {
        dwarf: { pt: ["Hilde", "Torbin", "Marga", "Bruno", "Karina", "Naugrim", "Brenna", "Darvin", "Elga", "Alric", "Isolde", "Gendry", "Bruga", "Junnor", "Vidrid", "Torson", "Brielle", "Ulfgar", "Sarna", "Grimm"], en: ["Hilde", "Torbin", "Marga", "Bruno", "Karina", "Naugrim", "Brenna", "Darvin", "Elga", "Alric", "Isolde", "Gendry", "Bruga", "Junnor", "Vidrid", "Torson", "Brielle", "Ulfgar", "Sarna", "Grimm"] },
        elf: { pt: ["Eliara", "Ryarn", "Sariel", "Tirolas", "Galira", "Varos", "Daeniel", "Axidor", "Hiralia", "Cyrwin", "Lothiel", "Zaphiel", "Nayra", "Ithior", "Amriel", "Elyon", "Jirwyn", "Natinel", "Fiora", "Ruhiel"], en: ["Eliara", "Ryarn", "Sariel", "Tirolas", "Galira", "Varos", "Daeniel", "Axidor", "Hiralia", "Cyrwin", "Lothiel", "Zaphiel", "Nayra", "Ithior", "Amriel", "Elyon", "Jirwyn", "Natinel", "Fiora", "Ruhiel"] },
        goblin: { pt: ["Iggs", "Tark", "Nix", "Lenk", "Roke", "Fitz", "Tila", "Riggs", "Prim", "Zeb", "Finn", "Borg", "Yark", "Deeg", "Nibs", "Brak", "Fink", "Rizzo", "Squib", "Grix"], en: ["Iggs", "Tark", "Nix", "Lenk", "Roke", "Fitz", "Tila", "Riggs", "Prim", "Zeb", "Finn", "Borg", "Yark", "Deeg", "Nibs", "Brak", "Fink", "Rizzo", "Squib", "Grix"] },
        halfling: { pt: ["Willow", "Benny", "Annie", "Tucker", "Marie", "Hobb", "Cora", "Gordie", "Rose", "Ardo", "Alma", "Norbert", "Jennie", "Barvin", "Tilly", "Pike", "Lydia", "Marlow", "Astrid", "Jasper"], en: ["Willow", "Benny", "Annie", "Tucker", "Marie", "Hobb", "Cora", "Gordie", "Rose", "Ardo", "Alma", "Norbert", "Jennie", "Barvin", "Tilly", "Pike", "Lydia", "Marlow", "Astrid", "Jasper"] },
        "half-orc": { pt: ["Vara", "Gralk", "Ranna", "Korv", "Zasha", "Hrogar", "Klara", "Tragan", "Brolga", "Drago", "Yelena", "Krull", "Ulara", "Tulk", "Shiraal", "Wulf", "Ivara", "Hirok", "Aja", "Zoraan"], en: ["Vara", "Gralk", "Ranna", "Korv", "Zasha", "Hrogar", "Klara", "Tragan", "Brolga", "Drago", "Yelena", "Krull", "Ulara", "Tulk", "Shiraal", "Wulf", "Ivara", "Hirok", "Aja", "Zoraan"] },
        human: { pt: ["Zali", "Bram", "Clara", "Nattias", "Rina", "Denton", "Mirena", "Aran", "Morgan", "Giralt", "Tamra", "Oscar", "Ishana", "Rogar", "Jasmin", "Tarin", "Yuri", "Malchor", "Lienna", "Godfrey"], en: ["Zali", "Bram", "Clara", "Nattias", "Rina", "Denton", "Mirena", "Aran", "Morgan", "Giralt", "Tamra", "Oscar", "Ishana", "Rogar", "Jasmin", "Tarin", "Yuri", "Malchor", "Lienna", "Godfrey"] }
    };

    const LANGUAGES = {
        common: { pt: "Comum", en: "Common" },
        celestial: { pt: "Celestial", en: "Celestial" },
        diabolic: { pt: "Diabólico", en: "Diabolic" },
        draconic: { pt: "Dracônico", en: "Draconic" },
        primordial: { pt: "Primordial", en: "Primordial" },
        dwarvish: { pt: "Anão", en: "Dwarvish" },
        elvish: { pt: "Élfico", en: "Elvish" },
        giant: { pt: "Gigante", en: "Giant" },
        goblin: { pt: "Goblin", en: "Goblin" },
        merran: { pt: "Merran", en: "Merran" },
        orcish: { pt: "Orc", en: "Orcish" },
        reptilian: { pt: "Reptiliano", en: "Reptilian" },
        sylvan: { pt: "Silvestre", en: "Sylvan" },
        thanian: { pt: "Thanian", en: "Thanian" }
    };

    const WEAPONS = [
        { key: "bastard-sword", pt: "Espada bastarda", en: "Bastard sword", cost: "10 gp", type: "M", range: "C", dmg: "1d8/1d10", props: "V, 2 espaços" },
        { key: "club", pt: "Clava", en: "Club", cost: "5 cp", type: "M", range: "C", dmg: "1d4", props: "-" },
        { key: "crossbow", pt: "Besta", en: "Crossbow", cost: "8 gp", type: "R", range: "F", dmg: "1d6", props: "2H, L" },
        { key: "dagger", pt: "Adaga", en: "Dagger", cost: "1 gp", type: "M/R", range: "C/N", dmg: "1d4", props: "F, Th" },
        { key: "greataxe", pt: "Machado grande", en: "Greataxe", cost: "10 gp", type: "M", range: "C", dmg: "1d8/1d10", props: "V, 2 espaços" },
        { key: "greatsword", pt: "Espadão", en: "Greatsword", cost: "12 gp", type: "M", range: "C", dmg: "1d12", props: "2H, 2 espaços" },
        { key: "javelin", pt: "Azagaia", en: "Javelin", cost: "5 sp", type: "M/R", range: "C/F", dmg: "1d4", props: "Th" },
        { key: "longbow", pt: "Arco longo", en: "Longbow", cost: "8 gp", type: "R", range: "F", dmg: "1d8", props: "2H" },
        { key: "longsword", pt: "Espada longa", en: "Longsword", cost: "9 gp", type: "M", range: "C", dmg: "1d8", props: "-" },
        { key: "mace", pt: "Maça", en: "Mace", cost: "5 gp", type: "M", range: "C", dmg: "1d6", props: "-" },
        { key: "shortbow", pt: "Arco curto", en: "Shortbow", cost: "6 gp", type: "R", range: "F", dmg: "1d4", props: "2H" },
        { key: "shortsword", pt: "Espada curta", en: "Shortsword", cost: "7 gp", type: "M", range: "C", dmg: "1d6", props: "-" },
        { key: "spear", pt: "Lança", en: "Spear", cost: "5 sp", type: "M/R", range: "C/N", dmg: "1d6", props: "Th" },
        { key: "staff", pt: "Cajado", en: "Staff", cost: "5 sp", type: "M", range: "C", dmg: "1d4", props: "2H" },
        { key: "warhammer", pt: "Martelo de guerra", en: "Warhammer", cost: "10 gp", type: "M", range: "C", dmg: "1d10", props: "2H" }
    ];

    const ARMORS = [
        { key: "leather", pt: "Armadura de couro", en: "Leather armor", cost: "10 gp", slots: 1, ac: "11 + DES", props: "-" },
        { key: "chainmail", pt: "Cota de malha", en: "Chainmail", cost: "60 gp", slots: 2, ac: "13 + DES", props: "Desvantagem em furtividade e natação" },
        { key: "plate", pt: "Armadura de placas", en: "Plate mail", cost: "130 gp", slots: 3, ac: "15", props: "Sem natação, desvantagem em furtividade" },
        { key: "shield", pt: "Escudo", en: "Shield", cost: "10 gp", slots: 1, ac: "+2", props: "Ocupa uma mão" }
    ];

    const GEAR = [
        { key: "arrows", pt: "Flechas (20)", en: "Arrows (20)", cost: "1 gp", slots: "1-20" },
        { key: "backpack", pt: "Mochila", en: "Backpack", cost: "2 gp", slots: "1" },
        { key: "caltrops", pt: "Caltrops (um saco)", en: "Caltrops (one bag)", cost: "5 sp", slots: "1" },
        { key: "bolts", pt: "Virotes (20)", en: "Crossbow bolts (20)", cost: "1 gp", slots: "1-20" },
        { key: "crowbar", pt: "Pé de cabra", en: "Crowbar", cost: "5 sp", slots: "1" },
        { key: "flask", pt: "Frasco ou garrafa", en: "Flask or bottle", cost: "3 sp", slots: "1" },
        { key: "flint", pt: "Pedra de fogo e aço", en: "Flint and steel", cost: "5 sp", slots: "1" },
        { key: "gem", pt: "Gema", en: "Gem", cost: "Varia", slots: "1-10" },
        { key: "grappling", pt: "Gancho de escalada", en: "Grappling hook", cost: "1 gp", slots: "1" },
        { key: "spikes", pt: "Pregos de ferro (10)", en: "Iron spikes (10)", cost: "1 gp", slots: "1-10" },
        { key: "lantern", pt: "Lanterna", en: "Lantern", cost: "5 gp", slots: "1" },
        { key: "mirror", pt: "Espelho", en: "Mirror", cost: "10 gp", slots: "1" },
        { key: "oil", pt: "Óleo, frasco", en: "Oil, flask", cost: "5 sp", slots: "1" },
        { key: "pole", pt: "Vara", en: "Pole", cost: "5 sp", slots: "1" },
        { key: "rations", pt: "Rações (3)", en: "Rations (3)", cost: "5 sp", slots: "1-3" },
        { key: "rope", pt: "Corda, 60'", en: "Rope, 60'", cost: "1 gp", slots: "1" },
        { key: "torch", pt: "Tocha", en: "Torch", cost: "5 sp", slots: "1" }
    ];

    const CRAWLING_KIT = {
        pt: "Kit de exploração (7 gp, 7 espaços): mochila, pedra de fogo e aço, 2 tochas, 3 rações, 10 pregos de ferro, gancho de escalada, corda de 60'.",
        en: "Crawling kit (7 gp, 7 slots): backpack, flint and steel, 2 torches, 3 rations, 10 iron spikes, grappling hook, 60' rope."
    };

    const SPELLS = {
        priest: [
            { pt: "Luz", en: "Light" }, { pt: "Curar ferimentos", en: "Cure wounds" }, { pt: "Arma sagrada", en: "Holy weapon" },
            { pt: "Proteção contra o mal", en: "Protection from evil" }, { pt: "Escudo da fé", en: "Shield of faith" }
        ],
        wizard: [
            { pt: "Alarme", en: "Alarm" }, { pt: "Mãos flamejantes", en: "Burning hands" }, { pt: "Enfeitiçar pessoa", en: "Charm person" },
            { pt: "Detectar magia", en: "Detect magic" }, { pt: "Queda suave", en: "Feather fall" }, { pt: "Disco flutuante", en: "Floating disk" },
            { pt: "Segurar portal", en: "Hold portal" }, { pt: "Luz", en: "Light" }, { pt: "Armadura arcana", en: "Mage armor" },
            { pt: "Mísseis mágicos", en: "Magic missile" }, { pt: "Proteção contra o mal", en: "Protection from evil" }, { pt: "Sono", en: "Sleep" }
        ]
    };

    const XP_THRESHOLDS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    window.CHARACTER_DATA = {
        STAT_MODIFIERS, STATS, ANCESTRIES, CLASSES, BACKGROUNDS, DEITIES, NAMES,
        LANGUAGES, WEAPONS, ARMORS, GEAR, CRAWLING_KIT, SPELLS, XP_THRESHOLDS
    };
})();