/**
 * Level Zero Character Generator - Shadowdark RPG
 * Geração de funil: 3d6 atributos, ancestralidade, background, alinhamento e equipamento.
 * Padronizado com o estilo estético de G-City e identidade visual de Shadowdark.
 */

(function () {
    "use strict";

    // 1. Nomes Oficiais do Sistema Shadowdark (Tabela d20 por ancestralidade oficial)
    const OFFICIAL_CHARACTER_NAMES = {
        "Dwarf": [
            "Hilde", "Torbin", "Marga", "Bruno", "Karina", "Naugrim", "Brenna", "Darvin", "Elga", "Alric",
            "Isolde", "Gendry", "Bruga", "Junnor", "Vidrid", "Torson", "Brielle", "Ulfgar", "Sarna", "Grimm"
        ],
        "Elf": [
            "Eliara", "Ryarn", "Sariel", "Tirolas", "Galira", "Varos", "Daeniel", "Axidor", "Hiralia", "Cyrwin",
            "Lothiel", "Zaphiel", "Nayra", "Ithior", "Amriel", "Elyon", "Jirwyn", "Natinel", "Fiora", "Ruhiel"
        ],
        "Goblin": [
            "Iggs", "Tark", "Nix", "Lenk", "Roke", "Fitz", "Tila", "Riggs", "Prim", "Zeb",
            "Finn", "Borg", "Yark", "Deeg", "Nibs", "Brak", "Fink", "Rizzo", "Squib", "Grix"
        ],
        "Halfling": [
            "Willow", "Benny", "Annie", "Tucker", "Marie", "Hobb", "Cora", "Gordie", "Rose", "Ardo",
            "Alma", "Norbert", "Jennie", "Barvin", "Tilly", "Pike", "Lydia", "Marlow", "Astrid", "Jasper"
        ],
        "Half-Orc": [
            "Vara", "Gralk", "Ranna", "Korv", "Zasha", "Hrogar", "Klara", "Tragan", "Brolga", "Drago",
            "Yelena", "Krull", "Ulara", "Tulk", "Shiraal", "Wulf", "Ivara", "Hirok", "Aja", "Zoraan"
        ],
        "Human": [
            "Zali", "Bram", "Clara", "Nattias", "Rina", "Denton", "Mirena", "Aran", "Morgan", "Giralt",
            "Tamra", "Oscar", "Ishana", "Rogar", "Jasmin", "Tarin", "Yuri", "Malchor", "Lienna", "Godfrey"
        ]
    };

    // Tabelas próprias (d20) para as ancestralidades homebrew e para Koboldo.
    const HOMEBREW_CHARACTER_NAMES = {
        "Kobold": ["Krik", "Zik", "Vek", "Rikkit", "Sszik", "Tikk", "Krek", "Vix", "Nokk", "Zruk", "Skrit", "Kazz", "Rax", "Tikri", "Snik", "Kett", "Vorrik", "Zekk", "Rikk", "Skrakk"],
        "Boitatami": ["Zharveth", "Kharzun", "Vyrasha", "Thazrik", "Rhazhka", "Zorveth", "Khezara", "Drazhul", "Varkhessa", "Zyrran", "Qazreth", "Thurvakka", "Mazhira", "Rhazhul", "Khorvessa", "Zharakka", "Vezhkar", "Drazhara", "Skarveth", "Zhurakai"],
        "Caramuru": ["Neruvai", "Thalazhur", "Marevyn", "Nerithal", "Selyrra", "Pelavon", "Oshyra", "Mariveth", "Koralyth", "Neryssan", "Aqoryn", "Delythra", "Tethyron", "Muirasha", "Salavyr", "Ephyrel", "Nymorai", "Lirivelle", "Kasmyr", "Vaeluneth"],
        "Cueio": ["Araveth", "Qirava", "Melthyn", "Pavoryn", "Nimvella", "Thessira", "Hovaryn", "Bramvella", "Lukaryn", "Daphel", "Nimvarra", "Kottaryn", "Pivveth", "Velvyr", "Dewvara", "Zelveth", "Merriveth", "Buvvara", "Hazvella", "Kethari"],
        "Cuguja": ["Noctyra", "Strixara", "Huvorin", "Nyxaryn", "Orryvek", "Muunveth", "Tavoryn", "Eulorys", "Nyxavelle", "Fetharyn", "Orlunyx", "Varkyra", "Auraleth", "Sovaryn", "Nythjarel", "Peryvyn", "Orylvak", "Morveth", "Vigoryn", "Lunethra"],
        "Exum": ["Malakhyr", "Veyrasha", "Azrathiel", "Nerezhka", "Belisyr", "Morvaneh", "Kaldryss", "Zarethyn", "Ebonara", "Damarveth", "Valthyra", "Sevrynn", "Oryaz", "Ravessia", "Noxavyr", "Velmoryn", "Astarakh", "Drevasha", "Mordraya", "Iscarveth"],
        "Gattito": ["Mithravelle", "Velkira", "Pavressa", "Savylyn", "Wyspara", "Myettara", "Zindevyn", "Talvora", "Morressa", "Silveth", "Pyrasha", "Vantyra", "Mevessa", "Twyrren", "Softhara", "Lynavyr", "Favelyn", "Duskyra", "Pryssara", "Nythwessa"],
        "Gigas": ["Bolvaryn", "Talveth", "Mammoryn", "Okenvar", "Gravoryx", "Harthavon", "Brontyra", "Karnovar", "Thrumveth", "Magnoryn", "Rumvarya", "Koldravan", "Torraveth", "Drommara", "Garruvyn", "Huldara", "Vastoryn", "Bastivor", "Morvadep", "Rugnaveth"],
        "Jacae": ["Sauryvak", "Miravella", "Kharvyn", "Skalveth", "Krovasha", "Murveth", "Rhaedavyr", "Vessyka", "Mosavyr", "Tarkasha", "Brakveth", "Silthavyn", "Mavrasha", "Rilaveth", "Krovella", "Fenvyr", "Saurenvar", "Murdasha", "Thikveth", "Varnyra"],
        "Jaguart": ["Vulparin", "Zlyvasha", "Renavyr", "Quivara", "Fexglora", "Veylinn", "Ruzkaveth", "Tavoryn", "Rennasha", "Fenyr", "Qlevaryth", "Saffyra", "Wiskara", "Ruzaveth", "Ambravyn", "Vulparyn", "Merravik", "Kesthira", "Fynavyr", "Zorasha"],
        "Jajaraca": ["Sszaravyn", "Vennokh", "Koylasha", "Najyra", "Hyssaveth", "Sibyrra", "Vaskhyn", "Ophirasha", "Krythavyn", "Zesshara", "Zlythira", "Neraskhyn", "Venavyr", "Zlytharae", "Rhazaveth", "Kobryx", "Ekdysara", "Vyparyn", "Sseraveth", "Fanghoryn"],
        "Komodo": ["Dravokh", "Kezharya", "Skalethyr", "Vyrnasha", "Azhkoryn", "Zardaveth", "Zembravyr", "Krazhika", "Sythrava", "Volkrasha", "Threxavyr", "Rhazharyn", "Zindraveth", "Moltharya", "Korravyn", "Vezharya", "Sezhaveth", "Drakmoryn", "Ignivara", "Zorvethyn"],
        "Meio-Miranha": ["Arakhyra", "Syrkaveth", "Vebrynn", "Tesshara", "Sphinnarith", "Velisara", "Ezthyra", "Nexavelle", "Tharynavyn", "Syrkoryn", "Koththara", "Anassyr", "Vefthyn", "Spindara", "Lomaveth", "Araxyra", "Dorsavyn", "Veseryra", "Tanyaveth", "Myrmasha"],
        "Meio-Stigmu": ["Skorvasha", "Styrhoryn", "Khepryra", "Pensereth", "Karapaxyn", "Tavlasha", "Serraveth", "Venatryx", "Klavrya", "Akridasha", "Skorrenvar", "Pensyrra", "Khadriveth", "Skorrixa", "Tarsavyn", "Vexharya", "Khepryss", "Stryhorya", "Khelisara", "Oryxaveth"],
        "Modrongo": ["Grushvak", "Morgutha", "Thrakvyn", "Brakkara", "Grommaveth", "Urzakh", "Dreggora", "Kraghvara", "Murgavyn", "Rukhara", "Skarneth", "Vroggath", "Grakkora", "Durnaveth", "Hroshka", "Krellvyn", "Mogrutha", "Zuggara", "Thrumveth", "Gorvakh"],
        "Obsidianum": ["Obryxara", "Vitryss", "Noxaveth", "Sharvya", "Umbravyn", "Ebonara", "Savelthyr", "Vezperyx", "Khalxira", "Morkaveth", "Nyxavara", "Glomvyr", "Onyxara", "Vitravyn", "Duzkryss", "Kharonyx", "Silithra", "Morvaveth", "Obskuryn", "Ravixara"],
        "Pia-do-Ka": ["Perravyn", "Lyrasha", "Madriveth", "Fandoryn", "Kazendra", "Rosavelle", "Veloryn", "Minuvara", "Gamboryx", "Tavishara", "Belavyn", "Rondaveth", "Dalivara", "Meloryn", "Karilona", "Sathyrra", "Jovavelle", "Revaryn", "Pavanyx", "Kharmont"],
        "Rabudo": ["Kantoryn", "Ekuvar", "Stryvara", "Marathyn", "Galavara", "Hokhlevyn", "Pavthera", "Dapelmara", "Lonaveth", "Harthovyn", "Korvessa", "Brindavyr", "Troveth", "Krupara", "Merrigavyn", "Sadelveth", "Flivara", "Ronsavyr", "Kavalloryn", "Huvlina"],
        "Recortante": ["Morvaskyn", "Varizhara", "Shyvaryn", "Boraveth", "Fekzimir", "Mimrasha", "Flazavyn", "Elshavara", "Vezhaskara", "Maniveth", "Ekhoryn", "Gizaveth", "Pazhymara", "Meldrava", "Skheyn", "Raveloryn", "Miraveth", "Shanjavyr", "Khymerra", "Wyldaveth"],
        "Sao": ["Aurelsha", "Seravyn", "Vezperiel", "Halkyra", "Lumyneth", "Azaryel", "Solavelle", "Elyndravyn", "Kelestra", "Mavryel", "Oriphara", "Davneth", "Samayel", "Velorya", "Kaelithra", "Asteravyn", "Noktyel", "Ithurasha", "Zophaveth", "Ravyel"],
        "Thanobre": ["Palloryn", "Aethraveth", "Nhalyra", "Umbraviel", "Vakuun", "Orvaneth", "Sthylavyr", "Morvasha", "Kaeluma", "Paloryn", "Vuydrasha", "Nadhyra", "Eidoveth", "Threnavara", "Asteryn", "Siderya", "Morvostar", "Noxaviel", "Kvasaryx", "Eklipsara"],
        "Tiuzinho": ["Tzivara", "Phelyn", "Qovaren", "Zhyraveth", "Ulthara", "Veymora", "Qirveth", "Drazhyra", "Thavoryn", "Kelmaveth", "Zyvella", "Pheranor", "Vumeryn", "Kezhara", "Oraveth", "Ylvaryn", "Methavora", "Rhyzeth", "Kovalyra", "Nyzharin"],
        "Troca-Pele": ["Elzavyn", "Boryvara", "Vezhoryn", "Mivareth", "Gharasha", "Sekhyndra", "Lokharyn", "Maniveth", "Ekhavora", "Mazkoryn", "Zheveth", "Twyzara", "Myravyn", "Aldeveth", "Vyzhara", "Fazavyn", "Rhemaveth", "Kaztoryn", "Imavora", "Fakethra"],
        "Vlummi": ["Lhyravyn", "Luvareth", "Wykarya", "Ghivara", "Felykaryn", "Dhivaveth", "Aurylyra", "Zharavyn", "Methara", "Laneryx", "Fozaryn", "Tuvinkara", "Luziveth", "Ghyvamara", "Thyravyn", "Lyvemara", "Vezharyra", "Ghylamoryn", "Vyspaveth", "Shymvara"],
    };

    const HOMEBREW_NAME_TABLE_KEYS = {
        "pt-BR": {
            "Boitatãmi": "Boitatami", "Caramuru": "Caramuru", "Cueio": "Cueio", "Cuguja": "Cuguja", "Exum": "Exum",
            "Gattito": "Gattito", "Gigas": "Gigas", "Jacae": "Jacae", "Jaguart": "Jaguart", "Jajaraca": "Jajaraca",
            "Komodo": "Komodo", "Meio-Miranha": "Meio-Miranha", "Meio-Stigmu": "Meio-Stigmu", "Modrongo": "Modrongo",
            "Obsidianum": "Obsidianum", "Piá-dô-Ka": "Pia-do-Ka", "Rabudo": "Rabudo", "Recortante": "Recortante",
            "São": "Sao", "Thanobre": "Thanobre", "Tiuzinho": "Tiuzinho", "Troca-Pele": "Troca-Pele", "Vlummi": "Vlummi"
        },
        "en": {
            "Boitatãmi": "Boitatami", "Caramuru": "Caramuru", "Cueio": "Cueio", "Cuguja": "Cuguja", "Exum": "Exum",
            "Gattito": "Gattito", "Gigas": "Gigas", "Jacae": "Jacae", "Jaguart": "Jaguart", "Jajaraca": "Jajaraca",
            "Komodo": "Komodo", "Half-Spider": "Meio-Miranha", "Half-Stigmu": "Meio-Stigmu", "Modrongo": "Modrongo",
            "Obsidianum": "Obsidianum", "Piá-dô-Ka": "Pia-do-Ka", "Mongrel": "Rabudo", "Recortante": "Recortante",
            "Saint": "Sao", "Thanobre": "Thanobre", "Tiuzinho": "Tiuzinho", "Skin-Changer": "Troca-Pele", "Vlummi": "Vlummi"
        }
    };

    // Descrições do equipamento inicial, seguindo a seção Gear do livro.
    // Itens de background sem verbete próprio recebem uma descrição curta por tipo.
    const GEAR_DESCRIPTIONS = {
        "pt-BR": {
            "tocha": "Ilumina uma área próxima. Queima por 1 hora de tempo real.",
            "adaga": "Arma pequena e fácil de esconder. Causa 1d4 de dano.",
            "vara": "Vara de madeira com 3 m de comprimento.",
            "arco curto e 5 flechas": "Munição para arcos curtos ou longos.",
            "corda, 60'": "Corda de cânhamo com 18 m de comprimento.",
            "óleo, frasco": "Abastece uma lanterna por 1 hora de tempo real. Um frasco cobre uma área próxima e queima por 4 rodadas, causando 1d4 de dano por rodada.",
            "pé de cabra": "Concede vantagem em testes para abrir objetos emperrados.",
            "pregos de ferro (10)": "Pregos resistentes. Cada um tem um orifício para passar corda; podem ser martelados com armas ou outros pregos de ferro.",
            "pedra de fogo e aço": "Acendedor compacto. Com ele, tentativas rotineiras de acender uma fogueira sempre dão certo.",
            "gancho de escalada": "Âncora de corda com três pontas curvas.",
            "clava": "Arma simples de madeira. Causa 1d4 de dano.",
            "caltrops (um saco)": "Pequenas pontas de ferro triangulares. Criaturas que pisam nelas sofrem 1 de dano e só podem se mover à metade da velocidade por 10 rodadas.",
            "caltrops": "Pequenas pontas de ferro triangulares. Criaturas que pisam nelas sofrem 1 de dano e só podem se mover à metade da velocidade por 10 rodadas.",
            "moeda": "Uma peça de ouro (PO) vale 10 peças de prata (PP) ou 100 peças de cobre (PC).",
            "lanterna": "Ilumina até o dobro da distância próxima. Requer óleo e tem uma tampa para ocultar a luz.",
            "espelho": "Um pequeno espelho polido.",
            "vara de madeira": "Vara de madeira com 3 m de comprimento.",
            "rações": "Suprimento de comida e água para uma pessoa por um dia.",
            "corda": "Corda de cânhamo, útil para amarrar e escalar.",
            "flask": "Recipiente de vidro que comporta uma dose de líquido.",
            "arma": "Arma improvisada ou de trabalho, útil também como ferramenta.",
            "roupas": "Vestuário simples, adequado ao uso diário.",
            "bandagens": "Tiras limpas de tecido para cobrir ferimentos.",
            "faca": "Lâmina curta para cortar e realizar tarefas cotidianas.",
            "adaga cerimonial": "Lâmina curta usada em cerimônias. Causa 1d4 de dano.",
            "arco curto": "Arma de disparo acompanhada de flechas.",
            "espada curta": "Arma de lâmina curta. Causa 1d6 de dano.",
            "lança": "Arma longa que pode ser usada para manter inimigos à distância. Causa 1d8 de dano.",
            "cajado": "Bastão robusto que também serve como arma. Causa 1d6 de dano."
        },
        "en": {
            "torch": "Casts light up to a near distance. Burns for one hour of real time.",
            "dagger": "A small, easily concealed weapon. Deals 1d4 damage.",
            "pole": "Wooden, 10' long.",
            "shortbow and 5 arrows": "Ammunition for shortbows or longbows.",
            "rope, 60'": "Hemp rope, 60' long.",
            "oil, flask": "Fuels a lantern for one hour of real time. One flask covers a close area and burns for 4 rounds, dealing 1d4 damage each round.",
            "crowbar": "Grants advantage on checks to pry open stuck objects.",
            "iron spikes (10)": "Strong spikes. Each has a hole for threading rope. Can be hammered in with weapons or other iron spikes.",
            "flint and steel": "A small fire starter. With it, routine attempts to light a fire always succeed.",
            "grappling hook": "A rope anchor with three curved tines.",
            "club": "A simple wooden weapon. Deals 1d4 damage.",
            "caltrops (one bag)": "Tiny, triangle-shaped iron spikes. Creatures who step on them take 1 damage and can only move at half speed for 10 rounds.",
            "coin": "One gold piece (gp) is worth 10 silver pieces (sp) or 100 copper pieces (cp).",
            "lantern": "Casts light up to a double near distance. Requires oil and has a shutter to hide the light.",
            "mirror": "A small, polished mirror.",
            "rations": "One day of food and water supply for one person.",
            "flask": "A glass container that holds one draught of liquid.",
            "bandages": "Clean strips of cloth for covering wounds.",
            "knife": "A short blade for cutting and everyday tasks.",
            "shortsword": "A short-bladed weapon. Deals 1d6 damage.",
            "spear": "A long weapon useful for keeping foes at a distance. Deals 1d8 damage.",
            "staff": "A sturdy wooden staff that doubles as a weapon. Deals 1d6 damage.",
            "clothing": "Simple clothes suited for everyday wear.",
            "rope": "Hemp rope, useful for climbing and tying things up."
        }
    };

    const WEAPON_STATS = {
        "bastard sword": ["10 gp", "M", "C", "1d8/1d10", "V, 2 slots"],
        "club": ["5 cp", "M", "C", "1d4", "-"],
        "crossbow": ["8 gp", "R", "F", "1d6", "2H, L"],
        "dagger": ["1 gp", "M/R", "C/N", "1d4", "F, Th"],
        "greataxe": ["10 gp", "M", "C", "1d8/1d10", "V, 2 slots"],
        "greatsword": ["12 gp", "M", "C", "1d12", "2H, 2 slots"],
        "javelin": ["5 sp", "M/R", "C/F", "1d4", "Th"],
        "longbow": ["8 gp", "R", "F", "1d8", "2H"],
        "longsword": ["9 gp", "M", "C", "1d8", "-"],
        "mace": ["5 gp", "M", "C", "1d6", "-"],
        "shortbow": ["6 gp", "R", "F", "1d4", "2H"],
        "shortsword": ["7 gp", "M", "C", "1d6", "-"],
        "spear": ["5 sp", "M/R", "C/N", "1d6", "Th"],
        "staff": ["5 sp", "M", "C", "1d4", "2H"],
        "warhammer": ["10 gp", "M", "C", "1d10", "2H"]
    };

    const WEAPON_ALIASES = {
        "espada bastarda": "bastard sword", "clava": "club", "besta": "crossbow",
        "adaga": "dagger", "machado grande": "greataxe", "espadão": "greatsword",
        "azagaia": "javelin", "arco longo": "longbow", "espada longa": "longsword",
        "maça": "mace", "arco curto": "shortbow", "espada curta": "shortsword",
        "lança": "spear", "cajado": "staff", "bastão": "staff", "martelo de guerra": "warhammer"
    };

    function getWeaponStats(item) {
        const name = item.toLocaleLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
        const canonical = WEAPON_ALIASES[name] || name;
        if (WEAPON_STATS[canonical]) return WEAPON_STATS[canonical];
        const alias = Object.keys(WEAPON_ALIASES).find(key =>
            ["adaga", "dagger", "arco curto", "shortbow"].includes(key) && name.startsWith(key + " ")
        );
        return alias ? WEAPON_STATS[WEAPON_ALIASES[alias]] : null;
    }

    function getWeaponDescription(item, lang) {
        const stats = getWeaponStats(item);
        if (!stats) return null;
        const isPt = lang === "pt-BR";
        const [cost, type, range, damage, properties] = stats;
        const typeLabel = isPt ? "Tipo" : "Type";
        const rangeLabel = isPt ? "Alcance" : "Range";
        const damageLabel = isPt ? "Dano" : "Damage";
        const propertiesLabel = isPt ? "Propriedades" : "Properties";
        const explanations = {
            F: isPt ? "Acuidade (F): usa FOR ou DES no ataque." : "Finesse (F): use STR or DEX when attacking.",
            L: isPt ? "Recarga (L): você precisa abrir mão do movimento para recarregar esta arma." : "Loading (L): you must forgo moving to reload this weapon.",
            Th: isPt ? "Arremesso (Th): pode ser arremessada para fazer um ataque à distância usando FOR ou DES." : "Thrown (Th): you may throw this weapon to make a ranged attack using STR or DEX.",
            "2H": isPt ? "Duas mãos (2H): exige as duas mãos para ser usada." : "Two-handed (2H): requires both hands to use.",
            V: isPt ? "Versátil (V): pode ser usada com uma ou duas mãos; use o dano maior com duas mãos." : "Versatile (V): can be used with one or two hands; use the higher damage with two hands."
        };
        const detail = `${cost} · ${typeLabel}: ${type} · ${rangeLabel}: ${range} · ${damageLabel}: ${damage} · ${propertiesLabel}: ${properties}`;
        const propertyNotes = properties.split(", ").filter(code => explanations[code]).map(code => explanations[code]);
        return [detail, ...propertyNotes].join(" ");
    }

    function getGearDescription(item, lang) {
        const isPt = lang === "pt-BR";
        const weaponDescription = getWeaponDescription(item, lang);
        if (weaponDescription) return weaponDescription;
        const dictionary = GEAR_DESCRIPTIONS[isPt ? "pt-BR" : "en"];
        const normalized = item.toLocaleLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
        const exact = dictionary[normalized] || dictionary[item.toLocaleLowerCase().trim()];
        if (exact) return exact;

        // Descrições concisas para itens variados de background e profissões.
        const patterns = isPt ? [
            [/moed|coin|po\)|gp\)/, "Moedas de valor variável, usadas para comprar bens e serviços."],
            [/ra[cç][ãa]o|hardtack|ration|p[ãa]o|loaf|gr[ãa]os|grain|oats|queijo|cheese/, "Provisão de alimento para uma pessoa; a quantidade indicada determina por quantos dias dura."],
            [/corda|rope|linha|thread|fio/, "Fibra resistente para amarrar, prender ou reparar objetos."],
            [/frasco|garrafa|vial|flask|bottle|odre/, "Recipiente portátil para guardar líquidos."],
            [/bandagem|bandage|erva|herb|sal|salt|t[oô]nico|tonic|[áa]cido|acid|[áa]gua benta|holy water/, "Suprimento consumível usado em cuidados, preparo ou tarefas especializadas; as cargas indicadas mostram seus usos."],
            [/arma|espada|sword|adaga|dagger|faca|knife|cutelo|cleaver|machado|axe|foice|sickle|martelo|hammer|clava|club|lan[cç]a|spear|bast[aã]o|staff|cajado|tridente|trident|navalha|razor|gancho|hook|chicote|whip|p[aá]|shovel|forcado|pitchfork|corrente|chain/, "Ferramenta robusta que também pode servir como arma. O dano entre parênteses indica quanto causa em combate."],
            [/escudo|shield/, "Escudo de madeira que protege seu portador; o bônus indicado se aplica à Classe de Armadura."],
            [/roupa|clothes|manto|cloak|peles|furs|avental|apron|bota|boots|luvas|gloves|capuz|hood|trapo|rag/, "Vestuário ou proteção simples, preparado para o trabalho ou para a viagem."],
            [/chave|key|s[ií]mbolo|symbol|bras[aã]o|crest|distintivo|badge|amuleto|amulet|anel|ring|moeda de ferro/, "Objeto pessoal que identifica seu dono, guarda uma lembrança ou pode abrir portas sociais."],
            [/livro|book|pergaminho|parchment|pena|quill|tinta|ink|carv[aã]o|charcoal|mapa|map/, "Material de escrita ou consulta, útil para registrar informações e conhecimentos."],
            [/kit|ferramenta|tools|tesoura|shears|agulha|needle|form[aã]o|awl|cinzel|chisel|tenaz|tongs|escova|brush|rastrilho|currycomb/, "Conjunto de ferramentas de ofício, usado para trabalhos especializados."],
            [/lanterna|lantern/, "Projeta luz em uma área próxima e pode ser fechada para ocultar a chama; requer óleo."],
            [/vela|candle/, "Fonte de luz pequena e portátil, consumida enquanto permanece acesa."],
            [/rede|net|armadilha|trap|cesto|basket|saco|sack|bolsa|pouch|bandeja|tray|tigela|bowl|barril|barrel/, "Recipiente ou ferramenta prática para carregar, guardar ou capturar objetos e criaturas."],
            [/flauta|flute|ala[uú]de|lute|dado|die|sino|bell|garrafa quebrada|broken bottle|caneca|mug|cerveja|ale|vinho|wine|rum/, "Objeto simples de uso cotidiano, entretenimento ou sinalização."],
            [/roupas|clothing/, "Vestuário simples para uso diário."]
        ] : [
            [/coin|gp\)|sp\)/, "Coins of varying value, used to purchase goods and services."],
            [/rations|hardtack|loaf|grain|oats|cheese/, "Food supplies for one person; the listed quantity determines how long they last."],
            [/rope|thread|line/, "Strong fiber for tying, securing, or repairing objects."],
            [/flask|vial|bottle/, "A portable container for holding liquids."],
            [/bandage|herb|salt|tonic|acid|holy water/, "A consumable supply for care, preparation, or specialized tasks; the listed uses show its charges."],
            [/sword|dagger|knife|cleaver|axe|sickle|hammer|club|spear|staff|trident|razor|hook|whip|shovel|pitchfork|chain/, "A sturdy tool that can also serve as a weapon. Any damage listed in parentheses applies in combat."],
            [/shield/, "A wooden shield that protects its bearer; the listed bonus applies to Armor Class."],
            [/clothes|cloak|furs|apron|boots|gloves|hood|rags/, "Simple clothing or protection suited for work or travel."],
            [/key|symbol|crest|badge|amulet|ring|iron coin/, "A personal object that identifies its owner, preserves a memory, or opens social doors."],
            [/book|parchment|quill|ink|charcoal|map/, "Writing or reference material, useful for recording information and knowledge."],
            [/kit|tools|shears|needle|awl|chisel|tongs|brush|currycomb/, "A set of trade tools used for specialized work."],
            [/lantern/, "Casts light up to a near distance and can be shuttered to hide the flame; requires oil."],
            [/candle/, "A small, portable light source that is consumed while lit."],
            [/net|trap|basket|sack|pouch|tray|bowl|barrel/, "A practical container or tool for carrying, storing, or catching things."],
            [/flute|lute|die|bell|mug|ale|wine|rum|bottle/, "A simple object for everyday use, entertainment, or signaling."]
        ];
        const fallback = patterns.find(([pattern]) => pattern.test(item.toLocaleLowerCase()));
        return fallback ? fallback[1] : (isPt ? "Item útil de viagem ou de ofício." : "A useful travel or trade item.");
    }

    // 3. Dados Oficiais de Background do Shadowdark RPG (d20 oficial)
    const OFFICIAL_BACKGROUNDS = {
        "pt-BR": [
            { roll: 1, name: "Pivete", desc: "Você cresceu nas ruas impiedosas de uma grande cidade.", equipment: ["Faca pequena (1d4)", "Ganzua improvisada", "Roupas esfarrapadas"] },
            { roll: 2, name: "Procurado", desc: "Há um preço pela sua cabeça, mas você tem aliados.", equipment: ["Adaga (1d4)", "Capuz de viagem", "Cartaz de procurado com seu rosto"] },
            { roll: 3, name: "Iniciado de Culto", desc: "Você conhece segredos e rituais blasfemos.", equipment: ["Adaga cerimonial (1d4)", "Símbolo blasfemo", "Vela negra"] },
            { roll: 4, name: "Guilda dos Ladrões", desc: "Você tem conexões, contatos e dívidas.", equipment: ["Adaga (1d4)", "Gazua simples", "Moeda de ferro da guilda"] },
            { roll: 5, name: "Banido", desc: "Seu povo o expulsou por supostos crimes.", equipment: ["Clava (1d4)", "Manto rasgado", "Ração dura (1 dia)"] },
            { roll: 6, name: "Órfão", desc: "Um guardião incomum o resgatou e o criou.", equipment: ["Faca pequena (1d4)", "Amuleto do guardião", "Roupas simples"] },
            { roll: 7, name: "Aprendiz de Mago", desc: "Você tem um dom e um olhar para a magia.", equipment: ["Adaga (1d4)", "Pergaminho e carvão", "Frasco de tinta"] },
            { roll: 8, name: "Joalheiro", desc: "Você consegue avaliar facilmente valor e autenticidade.", equipment: ["Lente de aumento", "Martelo pequeno (1d4)", "Bolsa de veludo"] },
            { roll: 9, name: "Herborista", desc: "Você conhece plantas, remédios e venenos.", equipment: ["Foice pequena (1d4)", "Bolsa de ervas secas", "Frasco vazio"] },
            { roll: 10, name: "Bárbaro", desc: "Você deixou a horda, mas ela nunca o deixou completamente.", equipment: ["Machadinha (1d6)", "Amuleto de osso", "Peles rústicas"] },
            { roll: 11, name: "Mercenário", desc: "Você lutou contra amigos e inimigos igualmente por sua moeda.", equipment: ["Espada curta (1d6)", "Distintivo de companhia", "Cerveja barata"] },
            { roll: 12, name: "Marinheiro", desc: "Pirata, corsário ou comerciante — os mares são seus.", equipment: ["Facão (1d6)", "Pedaço de corda (10m)", "Odre de rum"] },
            { roll: 13, name: "Acólito", desc: "Você é bem treinado em ritos e doutrinas religiosas.", equipment: ["Cajado (1d4)", "Símbolo sagrado de madeira", "Livro de orações"] },
            { roll: 14, name: "Soldado", desc: "Você serviu como um combatente em um exército organizado.", equipment: ["Lança (1d6)", "Brasão de infantaria", "Dado de jogo"] },
            { roll: 15, name: "Patrulheiro", desc: "As florestas e terras selvagens são seu verdadeiro lar.", equipment: ["Arco curto (1d6) e 10 flechas", "Armadilha pequena", "Botas de couro"] },
            { roll: 16, name: "Batedor", desc: "Você sobreviveu com furtividade, observação e velocidade.", equipment: ["Arco curto (1d6) e 10 flechas", "Botas silenciosas", "Pederneira"] },
            { roll: 17, name: "Menestrel", desc: "Você viajou para longe com seu charme e talento.", equipment: ["Flauta rústica", "Adaga (1d4)", "Roupas chamativas"] },
            { roll: 18, name: "Erudito", desc: "Você sabe muito sobre história antiga e lendas.", equipment: ["Pena e tinta", "Livro antigo de lendas", "Pergaminho"] },
            { roll: 19, name: "Nobre", desc: "Um nome famoso abriu muitas portas para você.", equipment: ["Adaga fina (1d4)", "Anel de sinete", "Moedas (2d6 PO)"] },
            { roll: 20, name: "Cirurgião", desc: "Você conhece anatomia, cirurgia e primeiros socorros.", equipment: ["Navalha/Bisturi (1d4)", "Bandagens limpas (3 usos)", "Agulha e linha"] }
        ],
        "en": [
            { roll: 1, name: "Urchin", desc: "You grew up in the merciless streets of a large city.", equipment: ["Small knife (1d4)", "Improvised lockpick", "Tattered clothes"] },
            { roll: 2, name: "Wanted", desc: "There's a price on your head, but you have allies.", equipment: ["Dagger (1d4)", "Travel hood", "Wanted poster with your face"] },
            { roll: 3, name: "Cult Initiate", desc: "You know blasphemous secrets and rituals.", equipment: ["Ceremonial dagger (1d4)", "Blasphemous symbol", "Black candle"] },
            { roll: 4, name: "Thieves' Guild", desc: "You have connections, contacts, and debts.", equipment: ["Dagger (1d4)", "Simple thieves' pick", "Guild iron coin"] },
            { roll: 5, name: "Banished", desc: "Your people cast you out for supposed crimes.", equipment: ["Club (1d4)", "Tattered cloak", "Hardtack (1 day ration)"] },
            { roll: 6, name: "Orphaned", desc: "An unusual guardian rescued and raised you.", equipment: ["Small knife (1d4)", "Guardian's amulet", "Simple clothes"] },
            { roll: 7, name: "Wizard's Apprentice", desc: "You have a knack and eye for magic.", equipment: ["Dagger (1d4)", "Parchment and charcoal", "Ink vial"] },
            { roll: 8, name: "Jeweler", desc: "You can easily appraise value and authenticity.", equipment: ["Magnifying glass", "Light hammer (1d4)", "Velvet pouch"] },
            { roll: 9, name: "Herbalist", desc: "You know plants, medicines, and poisons.", equipment: ["Small sickle (1d4)", "Dried herbs pouch", "Empty vial"] },
            { roll: 10, name: "Barbarian", desc: "You left the horde, but it never quite left you.", equipment: ["Hand axe (1d6)", "Bone charm", "Rough furs"] },
            { roll: 11, name: "Mercenary", desc: "You fought friend and foe alike for your coin.", equipment: ["Shortsword (1d6)", "Company badge", "Cheap ale"] },
            { roll: 12, name: "Sailor", desc: "Pirate, privateer, or merchant — the seas are yours.", equipment: ["Cutlass (1d6)", "Rope length (30 ft)", "Rum flask"] },
            { roll: 13, name: "Acolyte", desc: "You're well trained in religious rites and doctrines.", equipment: ["Staff (1d4)", "Wooden holy symbol", "Prayer book"] },
            { roll: 14, name: "Soldier", desc: "You served as a fighter in an organized army.", equipment: ["Spear (1d6)", "Infantry crest", "Gaming die"] },
            { roll: 15, name: "Ranger", desc: "The woods and wilds are your true home.", equipment: ["Shortbow (1d4) and 10 arrows", "Small snare trap", "Leather boots"] },
            { roll: 16, name: "Scout", desc: "You survived on stealth, observation, and speed.", equipment: ["Shortbow (1d4) and 10 arrows", "Silent boots", "Flint and steel"] },
            { roll: 17, name: "Minstrel", desc: "You've traveled far with your charm and talent.", equipment: ["Simple flute", "Dagger (1d4)", "Flashy clothes"] },
            { roll: 18, name: "Scholar", desc: "You know much about ancient history and lore.", equipment: ["Quill and ink", "Ancient lore book", "Parchment"] },
            { roll: 19, name: "Noble", desc: "A famous name has opened many doors for you.", equipment: ["Fine dagger (1d4)", "Signet ring", "Coins (2d6 GP)"] },
            { roll: 20, name: "Chirurgeon", desc: "You know anatomy, surgery, and first aid.", equipment: ["Straight razor (1d4)", "Clean bandages (3 uses)", "Needle and thread"] }
        ]
    };

    // 4. Backgrounds e Ocupações Expandidas / Outros
    const OTHER_OCCUPATIONS = {
        "pt-BR": [
            { name: "Açougueiro", desc: "Especialista em cortes de carne, carcaças e lâminas pesadas.", equipment: ["Cutelo (1d6)", "Avental manchado", "Saco de sal (3 usos)"] },
            { name: "Agricultor", desc: "Calejado pelo trabalho duro na terra sob sol e chuva.", equipment: ["Foice (1d6)", "Roupas rústicas", "Saco de grãos (1 ração)"] },
            { name: "Alquimista Assistente", desc: "Familiarizado com fumos estranhos, misturas e reagentes voláteis.", equipment: ["Adaga (1d4)", "Kit de alquimia (3 usos)", "Frasco de ácido (1 uso)"] },
            { name: "Armeiro Aprendiz", desc: "Treinado no ajuste de placas, malhas e rebites de aço.", equipment: ["Martelo leve (1d6)", "Avental de couro", "Pedra de amolar"] },
            { name: "Barbeiro", desc: "Especialista em navalhas afiadas, sanguessugas e sangrias rápidas.", equipment: ["Navalha (1d4)", "Tesoura", "Frasco de tônico (1d4 PV, 1 uso)"] },
            { name: "Carrieiro", desc: "Guia carretas pesadas por estradas de lama e atoleiros traiçoeiros.", equipment: ["Chicote (1d4)", "Corda (15m)", "Rações (3 dias)"] },
            { name: "Cesteiro", desc: "Trança cestas, gaiolas e esteiras com vime e paciência.", equipment: ["Faca pequena (1d4)", "Cesto grande", "Vime (10 usos)"] },
            { name: "Coveiro", desc: "Cavou covas na terra fria e conhece o silêncio dos cemitérios.", equipment: ["Pá (1d6)", "Lanterna", "Frasco de água benta (1 uso)"] },
            { name: "Curandeiro Popular", desc: "Trata febres e feridas com ervas da floresta e superstição.", equipment: ["Bastão (1d4)", "Ervas medicinais (3 usos)", "Bandagens (3 usos)"] },
            { name: "Doméstico", desc: "Conhece todos os cantos, passagens e fofocas da mansão.", equipment: ["Faca de cozinha (1d4)", "Chaves da casa", "Rações (1 dia)"] },
            { name: "Encarregado de Estábulo", desc: "Trata feridas de montarias, sabe ferrar cascos e acalmar cavalos.", equipment: ["Forcado (1d6)", "Escova e rastrilho", "Saco de aveia"] },
            { name: "Escravo Fugitivo", desc: "Escapou dos grilhões e jurou nunca mais dobrar os joelhos.", equipment: ["Corrente quebrada (1d6)", "Roupa em farrapos", "Pão duro (1 ração)"] },
            { name: "Estalajadeiro", desc: "Ouve todas as conversas ao balcão e sabe conter bêbados.", equipment: ["Caneca pesada (1d4)", "Garrafa de vinho barato", "Chave reserva"] },
            { name: "Ferreiro Aprendiz", desc: "Força bruta lapidada no fole da forja e no bater do malho.", equipment: ["Martelo de ferreiro (1d6)", "Avental de couro grosso", "Tenaz"] },
            { name: "Guarda de Caravana", desc: "Vigiou rotas poeirentas contra bandidos de estrada e emboscadas.", equipment: ["Lança (1d6)", "Escudo de madeira (+1 CA)", "Distintivo"] },
            { name: "Mendigo", desc: "Sobreviveu da caridade alheia e aprendeu a notar tudo sem ser visto.", equipment: ["Cajado (1d4)", "Tigela de esmolas", "Rações (1 dia)"] },
            { name: "Músico Ambulante", desc: "Ganha pão cantando baladas em praças e feiras de aldeia.", equipment: ["Alaúde/flauta", "Adaga (1d4)", "Rações (2 dias)"] },
            { name: "Padeiro", desc: "Acorda antes da alvorada para alimentar vilarejos com pão quente.", equipment: ["Rolo de massa (1d4)", "Saco de farinha", "Pães (3 rações)"] },
            { name: "Pescador", desc: "Lê marés, correntes e ventos melhor do que qualquer mapa.", equipment: ["Tridente (1d6)", "Rede de pesca", "Botas impermeáveis"] },
            { name: "Queijeiro", desc: "Cura queijos em adegas escuras e conhece o valor de um bom sal.", equipment: ["Faca de queijo (1d4)", "Forma de queijo (3 rações)", "Sal"] },
            { name: "Rat-catcher", desc: "Rasteja por esgotos e porões caçando pestes com arames e cães.", equipment: ["Armadilha (3 usos)", "Cajado com gancho (1d6)", "Saco para ratos"] },
            { name: "Sapateiro", desc: "Conserta solas gastas e sabe como calçar pés em terrenos difíceis.", equipment: ["Formão (1d4)", "Couro e linha", "Forma de sapato"] },
            { name: "Servente de Pedreiro", desc: "Carrega blocos de pedra e mistura argamassa de muralhas.", equipment: ["Martelo de pedra (1d6)", "Cinzel", "Corda (10m)"] },
            { name: "Tanoeiro", desc: "Fabrica e veda barris, pipas e tonéis herméticos.", equipment: ["Machado pequeno (1d6)", "Aro de barril", "Resina (3 usos)"] },
            { name: "Taverneiro", desc: "Comanda o salão de bebidas e não aceita desaforos de forasteiros.", equipment: ["Garrafa quebrada (1d4)", "Chave do porão", "Barril vazio"] },
            { name: "Teceiro", desc: "Transforma lã e linho em tecidos grossos para o inverno.", equipment: ["Tesoura grande (1d4)", "Novelo de linha", "Agulhas"] },
            { name: "Trabalhador de Doca", desc: "Descarrega fardos de galeões mercantes dia e noite.", equipment: ["Gancho (1d6)", "Corda grossa (20m)", "Luvas de couro"] },
            { name: "Vendedor Ambulante", desc: "Viaja com quinquilharias e sabe convencer qualquer um a comprar.", equipment: ["Bengala (1d6)", "Bandeja de bugigangas", "Moedas (2d6 PO)"] },
            { name: "Vigia Noturno", desc: "Ronda becos escuros com lanterna e clava enquanto a cidade dorme.", equipment: ["Lanterna", "Sino de alarme", "Clava (1d4)"] }
        ],
        "en": [
            { name: "Butcher", desc: "Skilled in meat cuts, carcasses, and heavy cleavers.", equipment: ["Cleaver (1d6)", "Bloodstained apron", "Salt sack (3 uses)"] },
            { name: "Farmer", desc: "Hardened by honest soil labor under rain and sun.", equipment: ["Sickle (1d6)", "Rough clothing", "Grain sack (1 ration)"] },
            { name: "Alchemist's Assistant", desc: "Familiar with weird fumes, mixtures, and volatile reagents.", equipment: ["Dagger (1d4)", "Alchemy kit (3 uses)", "Acid flask (1 use)"] },
            { name: "Armorer's Apprentice", desc: "Trained in fitting plates, mail, and steel rivets.", equipment: ["Light hammer (1d6)", "Leather apron", "Whetstone"] },
            { name: "Barber", desc: "Skilled with straight razors, leeches, and quick bloodletting.", equipment: ["Straight razor (1d4)", "Shears", "Tonic flask (1d4 HP, 1 use)"] },
            { name: "Teamster", desc: "Drives heavy wagons through muddy roads and treacherous ruts.", equipment: ["Whip (1d4)", "Rope (50 ft)", "Rations (3 days)"] },
            { name: "Basket Weaver", desc: "Weaves baskets, cages, and mats with wicker and patience.", equipment: ["Small knife (1d4)", "Large basket", "Wicker (10 repair uses)"] },
            { name: "Gravedigger", desc: "Dug graves in cold soil and knows the silence of churchyards.", equipment: ["Shovel (1d6)", "Lantern", "Holy water flask (1 use)"] },
            { name: "Hedge Healer", desc: "Treats fevers and wounds with woodland herbs and superstition.", equipment: ["Staff (1d4)", "Medicinal herbs (3 uses)", "Bandages (3 uses)"] },
            { name: "Servant", desc: "Knows every corner, servant hall, and gossip of the manor.", equipment: ["Kitchen knife (1d4)", "House keys", "Rations (1 day)"] },
            { name: "Stable Hand", desc: "Tends mount wounds, shoes hooves, and calms skittish horses.", equipment: ["Pitchfork (1d6)", "Brush and currycomb", "Oats sack"] },
            { name: "Runaway Slave", desc: "Fled iron chains and swore never to bend the knee again.", equipment: ["Broken chain (1d6)", "Tattered rags", "Hardtack (1 ration)"] },
            { name: "Innkeeper", desc: "Hears every tavern rumor and knows how to subdue drunks.", equipment: ["Heavy mug (1d4)", "Cheap wine bottle", "Spare key"] },
            { name: "Blacksmith's Apprentice", desc: "Brute strength forged at the bellows and ringing anvil.", equipment: ["Smith's hammer (1d6)", "Thick leather apron", "Tongs"] },
            { name: "Caravan Guard", desc: "Watched dusty trails against highwaymen and ambushes.", equipment: ["Spear (1d6)", "Wooden shield (+1 AC)", "Badge"] },
            { name: "Beggar", desc: "Survived on spare coins and learned to watch without being noticed.", equipment: ["Staff (1d4)", "Alms bowl", "Rations (1 day)"] },
            { name: "Traveling Musician", desc: "Earns crusts playing ballads in squares and village fairs.", equipment: ["Lute/flute", "Dagger (1d4)", "Rations (2 days)"] },
            { name: "Baker", desc: "Rises before dawn to feed settlements with warm loaves.", equipment: ["Rolling pin (1d4)", "Flour sack", "Loaves (3 rations)"] },
            { name: "Fisher", desc: "Reads tides, currents, and winds better than any map.", equipment: ["Trident (1d6)", "Fishing net", "Waterproof boots"] },
            { name: "Cheesemaker", desc: "Ages wheels in dark cellars and knows the value of good salt.", equipment: ["Cheese knife (1d4)", "Cheese wheel (3 rations)", "Salt"] },
            { name: "Rat-catcher", desc: "Crawls sewers and cellars hunting vermin with wire and terriers.", equipment: ["Trap (3 uses)", "Hooked staff (1d6)", "Rat sack"] },
            { name: "Cobbler", desc: "Repairs worn soles and knows footwear for harsh terrain.", equipment: ["Awl (1d4)", "Leather and thread", "Shoe last"] },
            { name: "Mason's Laborer", desc: "Hauls stone blocks and mixes mortar for battlements.", equipment: ["Stone hammer (1d6)", "Chisel", "Rope (30 ft)"] },
            { name: "Cooper", desc: "Crafts and seals watertight casks, tubs, and barrels.", equipment: ["Small axe (1d6)", "Barrel hoop", "Resin (3 uses)"] },
            { name: "Tavern Keeper", desc: "Runs the taproom and takes no insolence from out-of-towners.", equipment: ["Broken bottle (1d4)", "Cellar key", "Empty barrel"] },
            { name: "Weaver", desc: "Spins wool and flax into sturdy cloth for harsh winters.", equipment: ["Large shears (1d4)", "Thread spool", "Needles"] },
            { name: "Dock Worker", desc: "Unloads cargo crates from trade galleons day and night.", equipment: ["Hook (1d6)", "Heavy rope (60 ft)", "Leather gloves"] },
            { name: "Peddler", desc: "Travels with knickknacks and can persuade anyone to buy.", equipment: ["Walking stick (1d6)", "Tray of trinkets", "Coins (2d6 GP)"] },
            { name: "Night Watchman", desc: "Patrols dark alleys with lantern and cudgel while the town sleeps.", equipment: ["Lantern", "Alarm bell", "Club (1d4)"] }
        ]
    };

    const SHADOWDARK_DATA = {
        "pt-BR": {
            attributes: ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"],
            attrAbbr: ["FOR", "DES", "CON", "INT", "SAB", "CAR"],
            ancestriesOriginal: [
                { name: "Anão", key: "Dwarf", type: "original", description: "Povo robusto que vive em fortalezas subterrâneas.", languages: "Comum e Anão", abilityName: "Robusto", ability: "Começa com +2 PV. Seus PV não podem ser reduzidos abaixo de 1." },
                { name: "Elfo", key: "Elf", type: "original", description: "Povo gracioso, de orelhas pontudas e traços delicados.", languages: "Comum e Élfico", abilityName: "Visão Aguçada", ability: "Recebe +1 nas jogadas de ataque com armas à distância e +1 em testes de iniciativa que dependam da visão." },
                { name: "Goblin", key: "Goblin", type: "original", description: "Povo pequeno e astuto, conhecido por sua esperteza e sentidos atentos.", languages: "Comum e Goblin", abilityName: "Sentidos Aguçados", ability: "Não pode ser surpreendido." },
                { name: "Metadinha", key: "Halfling", type: "original", description: "Pequeno povo do campo, alegre e travesso, que aprecia os prazeres simples da vida.", languages: "Comum", abilityName: "Furtivo", ability: "Uma vez por dia, pode ficar invisível por 3 rodadas." },
                { name: "Meio-Orc", key: "Half-Orc", type: "original", description: "Povo resistente e de pele grossa, acostumado a suportar grandes perigos.", languages: "Comum e Orc", abilityName: "Incansável", ability: "Ao chegar a 0 PV, pode fazer um teste de CON CD 15. Se passar, fica com 1 PV." },
                { name: "Koboldo", key: "Kobold", type: "original", description: "Povo pequeno e engenhoso, capaz de encontrar saídas inesperadas mesmo em situações perigosas." },
                { name: "Humano", key: "Human", type: "original", description: "Povo ousado, adaptável e diverso, capaz de aprender rápido e realizar grandes feitos.", languages: "Comum e um idioma comum adicional", abilityName: "Ambicioso", ability: "Recebe uma rolagem adicional de talento no 1º nível." }
            ],
            ancestriesHomebrew: [
                { name: "Boitatãmi", type: "homebrew" },
                { name: "Caramuru", type: "homebrew" },
                { name: "Cueio", type: "homebrew" },
                { name: "Cuguja", type: "homebrew" },
                { name: "Exum", type: "homebrew" },
                { name: "Gattito", type: "homebrew" },
                { name: "Gigas", type: "homebrew" },
                { name: "Jacae", type: "homebrew" },
                { name: "Jaguart", type: "homebrew" },
                { name: "Jajaraca", type: "homebrew" },
                { name: "Komodo", type: "homebrew" },
                { name: "Meio-Miranha", type: "homebrew" },
                { name: "Meio-Stigmu", type: "homebrew" },
                { name: "Modrongo", type: "homebrew" },
                { name: "Obsidianum", type: "homebrew" },
                { name: "Piá-dô-Ka", type: "homebrew" },
                { name: "Rabudo", type: "homebrew" },
                { name: "Recortante", type: "homebrew" },
                { name: "São", type: "homebrew" },
                { name: "Thanobre", type: "homebrew" },
                { name: "Tiuzinho", type: "homebrew" },
                { name: "Troca-Pele", type: "homebrew" },
                { name: "Vlummi", type: "homebrew" }
            ],
            startingGear: ["Tocha", "Adaga", "Vara", "Arco curto e 5 flechas", "Corda, 60'", "Óleo, frasco", "Pé de cabra", "Pregos de ferro (10)", "Pedra de fogo e aço", "Gancho de escalada", "Clava", "Caltrops (um saco)"],
            alignments: ["Ordeiro", "Neutro", "Caótico"],
            hpLabel: "PV",
            hpBonusAncestryLabel: "Anão",
            ancestryLabel: "Ancestralidade",
            backgroundLabel: "Background",
            descLabel: "Descrição",
            languagesLabel: "Idiomas",
            ancestryAbilityLabel: "Habilidade",
            alignmentLabel: "Alinhamento",
            bgGearLabel: "Equip. Background",
            startingGearLabel: "Equip. Inicial",
            pageTitle: "Gerador de Personagem Nível 0",
            pageDescription: "Crie <strong>funis</strong> (personagens nível 0) para Shadowdark RPG. Role 3d6 para cada atributo, determine ancestralidade, background com descrição, alinhamento e equipamento.",
            lblCharCount: "Quantidade",
            lblAncestry: "Ancestralidade",
            lblBackground: "Background",
            lblLang: "Idioma dos Resultados",
            optAncestryOriginal: "Padrão do Sistema (d7)",
            optAncestryAll: "Expandido + Homebrew (d30)",
            ancestryInfoButton: "Ver lista",
            ancestryDialogTitle: "Ancestralidades cadastradas",
            ancestryDialogSummary: "{count} ancestralidades disponíveis no modo Expandido + Homebrew.",
            ancestryOriginalTitle: "Padrão do Sistema",
            ancestryHomebrewTitle: "Homebrew",
            ancestryDialogClose: "Fechar",
            optBgSystem: "Padrão do Sistema (d20)",
            optBgExpanded: "Customizado (Sistema + Profissões)",
            btnGenerate: "Gerar Personagens",
            btnGenerating: "Gerando...",
            btnExportTxt: "Exportar TXT",
            btnExportPdf: "Exportar .PDF",
            btnBack: "Menu Principal",
            navBack: "Início",
            navGenerators: "Geradores",
            navAbout: "Sobre",
            emptyTitle: "Clique em <strong>Gerar Personagens</strong> para criar seus funis",
            emptySubtitle: "Cada personagem rola 3d6 para atributos, ancestralidade, background com descrição, alinhamento e equipamento inicial",
            rollLogTitle: "Registro de Rolagens",
            colChar: "Personagem",
            colField: "Atributo / Campo",
            colDice: "Dados Rolados",
            colMod: "Mod / Detalhes",
            colResult: "Resultado Final",
            rerollBadge: "Re-rolagem",
            nameTableLabel: "Tabela de Nomes",
            generated: "Personagens gerados",
            exported: "Exportado com sucesso",
            noCharacters: "Nenhum personagem para exportar",
            footerCaption: "Shadowdark Tools · Gerador de Personagem Nível 0",
            footerCredit1: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerCredit2: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.'
        },
        "en": {
            attributes: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
            attrAbbr: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
            ancestriesOriginal: [
                { name: "Dwarf", key: "Dwarf", type: "original", description: "Stout folk who dwell in underground strongholds.", languages: "Common and Dwarvish", abilityName: "Stout", ability: "Start with +2 HP. Your HP can't be reduced below 1." },
                { name: "Elf", key: "Elf", type: "original", description: "Graceful people with pointed ears and fine features.", languages: "Common and Elvish", abilityName: "Farsight", ability: "Gain +1 to ranged weapon attack rolls and +1 to initiative rolls that rely on sight." },
                { name: "Goblin", key: "Goblin", type: "original", description: "Small, clever folk known for their quick wits and keen senses.", languages: "Common and Goblin", abilityName: "Keen Senses", ability: "You can't be surprised." },
                { name: "Halfling", key: "Halfling", type: "original", description: "Small, cheerful country folk with a mischievous streak who enjoy life's simple pleasures.", languages: "Common", abilityName: "Stealthy", ability: "Once per day, you can become invisible for 3 rounds." },
                { name: "Half-Orc", key: "Half-Orc", type: "original", description: "Thick-skinned, resilient people accustomed to enduring danger.", languages: "Common and Orcish", abilityName: "Relentless", ability: "When you fall to 0 HP, make a DC 15 CON check. On a success, you drop to 1 HP instead." },
                { name: "Kobold", key: "Kobold", type: "original", description: "A small, resourceful people who find unexpected ways out of dangerous situations." },
                { name: "Human", key: "Human", type: "original", description: "Bold, adaptable, and diverse people who learn quickly and accomplish mighty deeds.", languages: "Common and one additional common language", abilityName: "Ambitious", ability: "You gain one additional talent roll at 1st level." }
            ],
            ancestriesHomebrew: [
                { name: "Boitatãmi", type: "homebrew" },
                { name: "Caramuru", type: "homebrew" },
                { name: "Cueio", type: "homebrew" },
                { name: "Cuguja", type: "homebrew" },
                { name: "Exum", type: "homebrew" },
                { name: "Gattito", type: "homebrew" },
                { name: "Gigas", type: "homebrew" },
                { name: "Jacae", type: "homebrew" },
                { name: "Jaguart", type: "homebrew" },
                { name: "Jajaraca", type: "homebrew" },
                { name: "Komodo", type: "homebrew" },
                { name: "Half-Spider", type: "homebrew" },
                { name: "Half-Stigmu", type: "homebrew" },
                { name: "Mongrel", type: "homebrew" },
                { name: "Obsidianum", type: "homebrew" },
                { name: "Piá-dô-Ka", type: "homebrew" },
                { name: "Rabudo", type: "homebrew" },
                { name: "Recortante", type: "homebrew" },
                { name: "Saint", type: "homebrew" },
                { name: "Thanobre", type: "homebrew" },
                { name: "Tiuzinho", type: "homebrew" },
                { name: "Skin-Changer", type: "homebrew" },
                { name: "Vlummi", type: "homebrew" }
            ],
            startingGear: ["Torch", "Dagger", "Pole", "Shortbow and 5 arrows", "Rope, 60'", "Oil, flask", "Crowbar", "Iron spikes (10)", "Flint and steel", "Grappling hook", "Club", "Caltrops (one bag)"],
            alignments: ["Lawful", "Neutral", "Chaotic"],
            hpLabel: "HP",
            hpBonusAncestryLabel: "Dwarf",
            ancestryLabel: "Ancestry",
            backgroundLabel: "Background",
            descLabel: "Description",
            languagesLabel: "Languages",
            ancestryAbilityLabel: "Ancestry Ability",
            alignmentLabel: "Alignment",
            bgGearLabel: "Background Gear",
            startingGearLabel: "Starting Gear",
            pageTitle: "Level 0 Character Generator",
            pageDescription: "Build brutal <strong>funnel</strong> (level 0) characters for Shadowdark RPG. Roll 3d6 for attributes, ancestry, background with details, alignment, and starting gear.",
            lblCharCount: "Quantity",
            lblAncestry: "Ancestry",
            lblBackground: "Background",
            lblLang: "Result Language",
            optAncestryOriginal: "System Standard (d7)",
            optAncestryAll: "Expanded + Homebrew (d30)",
            ancestryInfoButton: "View list",
            ancestryDialogTitle: "Registered ancestries",
            ancestryDialogSummary: "{count} ancestries available in Expanded + Homebrew mode.",
            ancestryOriginalTitle: "System Standard",
            ancestryHomebrewTitle: "Homebrew",
            ancestryDialogClose: "Close",
            optBgSystem: "System Standard (d20)",
            optBgExpanded: "Custom (System + Occupations)",
            btnGenerate: "Generate Characters",
            btnGenerating: "Generating...",
            btnExportTxt: "Export TXT",
            btnExportPdf: "Export .PDF",
            btnBack: "Main Menu",
            navBack: "Home",
            navGenerators: "Generators",
            navAbout: "About",
            emptyTitle: "Click on <strong>Generate Characters</strong> to build your funnel",
            emptySubtitle: "Each character rolls 3d6 for attributes, ancestry, background with details, alignment, and starting gear",
            rollLogTitle: "Roll Log",
            colChar: "Character",
            colField: "Attribute / Field",
            colDice: "Dice Rolled",
            colMod: "Mod / Details",
            colResult: "Final Result",
            rerollBadge: "Reroll",
            nameTableLabel: "Name Table",
            generated: "Characters generated",
            exported: "Exported successfully",
            noCharacters: "No characters to export",
            footerCaption: "Shadowdark Tools · Level 0 Character Generator",
            footerCredit1: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerCredit2: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.'
        }
    };

    // Habilidades das ancestralidades homebrew importadas dos itens e talentos do Foundry.
    const HOMEBREW_ANCESTRY_DETAILS = {
        "pt-BR": {
            "Boitatãmi": ["Corno Incandescente", "+1 em testes contra quem xingar você. Uma vez por descanso, ignora um ataque de alguém afetado, que se confunde com seu fogo-fátuo."],
            "Caramuru": ["Anfíbio", "Respira debaixo d'água e nada sem sofrer penalidades."],
            "Cueio": ["Escolha 1 habilidade", "Garoto Brinca: +1 em testes contra pessoas atraídas pelo seu gênero. Pé da Sorti: pode repetir uma falha crítica uma vez por sessão."],
            "Cuguja": ["Pássaro Noturno", "Pode voar se não estiver usando armadura e pode descansar enquanto mantém a vigia."],
            "Exum": ["Baixar o Santo", "Conecta-se a uma entidade maligna e pode fazer um pedido por dia, ficando à mercê do destino para sua intervenção."],
            "Gattito": ["Pata Mansa", "Não faz som ao andar e recebe +2 em testes de furtividade."],
            "Gigas": ["Escolha 1 habilidade", "Burro de Carga: adiciona o modificador positivo de CON aos slots, cumulativamente. Corpos Avantajados: pode atacar alvos a distância próxima com armas de combate."],
            "Jacae": ["Projeção Regenerativa", "Ao dormir, torna-se etéreo e recupera partes pequenas do corpo. Pode descansar sem comer se tiver se alimentado no descanso anterior."],
            "Jaguart": ["Focar na Presa", "No início do combate, escolhe uma presa e recebe +1 em testes contra ela uma vez por encontro."],
            "Jajaraca": ["Escolha 1 habilidade", "Peçonhento: um inimigo atingido sofre -1 em todos os testes. Pode ser usado uma vez por descanso. Pele de Cobra: +1 em testes que envolvam movimentação."],
            "Komodo": ["Escolha 1 habilidade", "Legado Dracônico (Pele): reduz em 1 o dano de todas as origens. Legado Dracônico (Sopro): faz um ataque de CON para causar 1d6 de dano."],
            "Meio-Miranha": ["Suporte Aracnídeo", "Pode andar em superfícies além do chão."],
            "Meio-Stigmu": ["Carapaça", "+1 na Classe de Armadura."],
            "Modrongo": ["Escolha 1 habilidade", "Potente (Ataque): +2 nas rolagens de ataque. Potente (Dano): +2 no dano físico."],
            "Obsidianum": ["Magias Subversivas", "Uma vez por dia, pode usar Névoa, Dança das Sombras ou Encantar Pessoas."],
            "Piá-dô-Ka": ["Rei do Camarote", "Recebe o dobro de experiência em festanças."],
            "Rabudo": ["Quadrúpede", "É considerado uma montaria e viaja no ritmo normal de um cavalo."],
            "Recortante": ["Transfusão", "Pode transformar-se integral ou parcialmente em qualquer animal que conheça."],
            "São": ["Escolha 1 habilidade", "Angelical (Cura): pode usar Curar Ferimentos uma vez por dia. Angelical (Voo): pode usar Queda Lenta uma vez por dia, expandindo as asas."],
            "Thanobre": ["Escolha 1 habilidade", "Glândula Pineal: sente a presença e a quantidade de corpos mortos em uma região próxima. Servo Macabro: pode invocar um escravo morto-vivo que funciona como mordomo."],
            "Tiuzinho": ["Escolha 1 habilidade", "Florestal: pode falar com animais. Pedroso: sente a presença de minérios e metais próximos."],
            "Troca-Pele": ["Imitador", "Pode mudar a aparência do corpo para imitar qualquer pessoa que já tenha visto, exceto a fisionomia."],
            "Vlummi": ["Vagalume", "Pode voar, gastando uma ação para se mover. Ataques à distância contra você têm desvantagem."]
        },
        "en": {
            "Boitatãmi": ["Incandescent Horn", "+1 to checks against anyone who insults you. Once per rest, ignore an attack from someone affected, who is confused by your will-o'-wisp."],
            "Caramuru": ["Amphibious", "Can breathe underwater and swim without penalty."],
            "Cueio": ["Choose 1 ability", "Playful Charm: +1 to checks against people attracted to your gender. Lucky Foot: reroll a critical failure once per session."],
            "Cuguja": ["Night Bird", "Can fly while unarmored and can rest while keeping watch."],
            "Exum": ["Bring Down the Saint", "You are connected to an evil entity and can make one request per day, leaving its intervention to fate."],
            "Gattito": ["Soft Paw", "You make no sound when walking and gain +2 to stealth checks."],
            "Gigas": ["Choose 1 ability", "Pack Mule: add your positive CON modifier to slots, cumulatively. Large Frame: can attack close targets with melee weapons."],
            "Jacae": ["Regenerative Projection", "While sleeping, you become ethereal and recover small body parts. You can rest without food if you ate during your previous rest."],
            "Jaguart": ["Focus on Prey", "At the start of combat, choose prey and gain +1 to checks against it once per encounter."],
            "Jajaraca": ["Choose 1 ability", "Venomous: an enemy you hit takes -1 to all checks. Usable once per rest. Snake Skin: +1 to checks involving movement."],
            "Komodo": ["Choose 1 ability", "Draconic Legacy (Hide): reduce damage from all sources by 1. Draconic Legacy (Breath): make a CON attack to deal 1d6 damage."],
            "Half-Spider": ["Arachnid Support", "Can walk on surfaces other than the ground."],
            "Half-Stigmu": ["Carapace", "+1 to Armor Class."],
            "Mongrel": ["Choose 1 ability", "Powerful (Attack): +2 to attack rolls. Powerful (Damage): +2 to physical damage."],
            "Obsidianum": ["Subversive Magic", "Once per day, can cast Fog, Shadow Dance, or Charm Person."],
            "Piá-dô-Ka": ["Party King", "Gain double experience from carousing."],
            "Rabudo": ["Quadruped", "You count as a mount and travel at a normal horse's pace."],
            "Recortante": ["Transfusion", "Can transform wholly or partially into any animal you know."],
            "Saint": ["Choose 1 ability", "Angelic (Healing): cast Cure Wounds once per day. Angelic (Flight): cast Feather Fall once per day by spreading your wings."],
            "Thanobre": ["Choose 1 ability", "Pineal Gland: sense the presence and number of dead bodies nearby. Macabre Servant: can summon an undead servant who acts as your butler."],
            "Tiuzinho": ["Choose 1 ability", "Woodland: can speak with animals. Stony: can sense nearby ores and metals."],
            "Skin-Changer": ["Mimic", "Can change your body's appearance to imitate anyone you have seen, except for their face."],
            "Vlummi": ["Firefly", "Can fly, spending an action to move. Ranged attacks against you have disadvantage."]
        }
    };

    const HOMEBREW_ANCESTRY_DESCRIPTIONS = {
        "pt-BR": {
            "Boitatãmi": "Humanóides de chifres com uma presença imponente e temperamento intenso. Ofensas despertam sua irritação e fazem seu fogo-fátuo se manifestar de forma imprevisível.",
            "Caramuru": "Seres feéricos dos rios e mares, à vontade nas profundezas e em meio às correntes. A água é seu ambiente natural, não uma barreira.",
            "Cueio": "Povo de traços semelhantes aos de coelhos, conhecido pelo charme, pela rapidez e por uma sorte que às vezes desafia até os piores reveses.",
            "Cuguja": "Povo de olhos atentos e feições de ave noturna. Observa o mundo do alto e consegue manter a vigilância mesmo durante o repouso.",
            "Exum": "Sua linhagem carrega a marca de um antigo vínculo com uma entidade demoníaca. Essa ligação permite pedir sua intervenção, mas cada pedido entrega parte do controle ao destino.",
            "Gattito": "Povo de movimentos leves e passos quase inaudíveis. Sua agilidade natural facilita atravessar lugares sem chamar atenção.",
            "Gigas": "Humanoides de três a quatro metros, grandes e fortes sem alcançar proporções colossais. Seu porte permite carregar mais e lutar contra alvos próximos com armas de combate.",
            "Jacae": "Povo de aparência reptiliana, ligado a ambientes alagados e a uma recuperação incomum. Durante o sono, o corpo se desprende parcialmente das limitações físicas comuns.",
            "Jaguart": "Povo de traços vulpinos, atento e calculista. Em combate, escolhe um adversário para perseguir com foco especial.",
            "Jajaraca": "Povo de feições serpentinas e movimentos precisos. Pode enfraquecer quem atinge ou usar sua mobilidade para superar obstáculos.",
            "Komodo": "Povo de aparência dracônica, com pele resistente e um sopro capaz de ferir seus adversários. Sua herança manifesta-se no corpo ou em um ataque elemental.",
            "Meio-Miranha": "Seres de aparência variável, entre formas mais humanas e mais aracnídeas. Adaptam-se a superfícies verticais e outros caminhos que não seguem pelo chão.",
            "Meio-Stigmu": "Seres que combinam traços humanos e escorpiônicos em proporções variadas. Uma carapaça natural oferece proteção mesmo quando não usam armadura pesada.",
            "Modrongo": "Povo troglodita de vida rude e costumes diretos. Sua força física pode favorecer golpes mais certeiros ou mais devastadores.",
            "Obsidianum": "Povo de pele escura e vítrea, marcado por uma antiga maldição. Sua relação com forças arcanas permite produzir efeitos mágicos de maneira limitada.",
            "Piá-dô-Ka": "Povo de aparência caprina, sociável e vaidoso, que transforma encontros festivos em ocasião para brilhar — e aprender com cada celebração.",
            "Rabudo": "Povo de corpo quadrúpede e grande resistência para viagens. Seu porte permite transportar passageiros e percorrer longas distâncias no ritmo de uma montaria.",
            "Recortante": "Seres capazes de remodelar o próprio corpo para assumir formas animais que conhecem, por inteiro ou apenas em parte.",
            "São": "Seres tocados por uma força celestial ou infernal. Sua herança manifesta-se em poderes extraordinários, como restaurar ferimentos ou escapar de uma queda.",
            "Thanobre": "Povo de pele pálida e origem distante, cuja percepção alcança sinais ligados à morte. Alguns também mantêm um servidor morto-vivo como auxiliar constante.",
            "Tiuzinho": "Povo pequeno e bem-humorado, curioso sobre a vida selvagem e os segredos escondidos sob a terra. Alguns conversam com animais; outros percebem metais próximos.",
            "Troca-Pele": "Seres capazes de reproduzir a aparência corporal de pessoas que observaram. A semelhança é convincente, mas não altera a fisionomia do rosto.",
            "Vlummi": "Pequenos seres luminosos, com asas e brilho próprio. Voam com agilidade e são difíceis de atingir com ataques à distância."
        },
        "en": {
            "Boitatãmi": "Horned humanoids with an imposing presence and an intense temperament. Insults stir their anger and make their will-o'-wisp flare unpredictably.",
            "Caramuru": "Fey beings of rivers and seas, at ease in the depths and among the currents. Water is their natural home, never a barrier.",
            "Cueio": "A people with rabbit-like features, known for their charm, quickness, and luck that can defy even the worst reversals.",
            "Cuguja": "A people with watchful eyes and nocturnal birdlike features. They survey the world from above and can keep watch while resting.",
            "Exum": "Their lineage bears the mark of an ancient bond with a demonic entity. They may ask for its intervention, but every request leaves part of the outcome to fate.",
            "Gattito": "A people of light movements and nearly silent steps. Their natural agility helps them pass through places without drawing attention.",
            "Gigas": "Humanoids three to four meters tall, large and strong without reaching colossal proportions. Their build lets them carry more and fight nearby foes with melee weapons.",
            "Jacae": "A people with reptilian features, tied to wetlands and an unusual capacity for recovery. During sleep, their bodies partly slip free of ordinary physical limits.",
            "Jaguart": "A people with foxlike features, alert and calculating. In battle, they select an opponent and pursue it with special focus.",
            "Jajaraca": "A people with serpentine features and precise movements. They can weaken those they strike or use their mobility to overcome obstacles.",
            "Komodo": "A people with draconic features, resilient skin, and a breath that can harm their foes. Their heritage appears either in their bodies or in an elemental attack.",
            "Half-Spider": "Beings whose appearance ranges from mostly human to mostly arachnid. They adapt to vertical surfaces and paths that do not follow the ground.",
            "Half-Stigmu": "Beings combining human and scorpionlike traits in varying proportions. A natural carapace protects them even without heavy armor.",
            "Mongrel": "A troglodytic people with a rough life and direct customs. Their physical strength can make their blows more accurate or more devastating.",
            "Obsidianum": "A people with dark, glassy skin, marked by an ancient curse. Their bond with arcane forces lets them produce limited magical effects.",
            "Piá-dô-Ka": "A people with goatlike features, sociable and vain, who turn celebrations into chances to shine—and to learn from every revel.",
            "Rabudo": "A people with quadruped bodies and great stamina for travel. Their build lets them carry passengers and cover long distances at a mount's pace.",
            "Recortante": "Beings able to reshape their bodies into animals they know, either wholly or in part.",
            "Saint": "Beings touched by a celestial or infernal force. Their heritage grants extraordinary gifts, such as healing wounds or escaping a fall.",
            "Thanobre": "A pale-skinned people of distant origin whose senses reach toward signs of death. Some also keep an undead servant as a constant aide.",
            "Tiuzinho": "A small, good-humored people, curious about wildlife and secrets hidden underground. Some speak with animals; others sense nearby metals.",
            "Skin-Changer": "Beings able to reproduce the bodily appearance of people they have observed. The likeness is convincing, but does not change the face.",
            "Vlummi": "Small luminous beings with wings and a glow of their own. They fly nimbly and are difficult to hit with ranged attacks."
        }
    };

    const HOMEBREW_ANCESTRY_LANGUAGES = {
        "pt-BR": {
            "Exum": "Comum e um idioma adicional do cenário", "Gigas": "Comum e um idioma adicional do cenário",
            "Jacae": "Comum e um idioma adicional do cenário", "Jaguart": "Comum e um idioma adicional do cenário",
            "Jajaraca": "Comum e um idioma adicional do cenário", "Komodo": "Comum e um idioma adicional do cenário",
            "Meio-Miranha": "Comum e um idioma adicional do cenário", "Meio-Stigmu": "Comum e um idioma adicional do cenário",
            "Modrongo": "Comum e escolha 1 entre dois idiomas", "Obsidianum": "Comum, um idioma adicional e escolha 1 idioma",
            "Rabudo": "Comum e um idioma adicional do cenário", "Recortante": "Comum e um idioma adicional do cenário",
            "São": "Comum e um idioma adicional do cenário", "Tiuzinho": "Comum e escolha 1 idioma",
            "Troca-Pele": "Comum e 1 idioma comum adicional", "Vlummi": "Comum e escolha 1 entre dois idiomas"
        },
        "en": {
            "Exum": "Common and one additional setting language", "Gigas": "Common and one additional setting language",
            "Jacae": "Common and one additional setting language", "Jaguart": "Common and one additional setting language",
            "Jajaraca": "Common and one additional setting language", "Komodo": "Common and one additional setting language",
            "Half-Spider": "Common and one additional setting language", "Half-Stigmu": "Common and one additional setting language",
            "Mongrel": "Common and choose 1 of two languages", "Obsidianum": "Common, one additional language, and choose 1 language",
            "Rabudo": "Common and one additional setting language", "Recortante": "Common and one additional setting language",
            "Saint": "Common and one additional setting language", "Tiuzinho": "Common and choose 1 language",
            "Skin-Changer": "Common and 1 additional common language", "Vlummi": "Common and choose 1 of two languages"
        }
    };

    Object.entries(SHADOWDARK_DATA).forEach(([lang, data]) => {
        data.ancestriesHomebrew.forEach((ancestry) => {
            const details = HOMEBREW_ANCESTRY_DETAILS[lang][ancestry.name];
            if (!details) return;
            ancestry.abilityName = details[0];
            ancestry.ability = details[1];
            ancestry.description = HOMEBREW_ANCESTRY_DESCRIPTIONS[lang][ancestry.name];
            ancestry.languages = HOMEBREW_ANCESTRY_LANGUAGES[lang][ancestry.name] ||
                (lang === "pt-BR" ? "Comum" : "Common");
        });
    });


    // Utilidades Matemáticas e Rolagens
    function rollD6() { return Math.floor(Math.random() * 6) + 1; }
    function rollD4() { return Math.floor(Math.random() * 4) + 1; }
    function rollD12() { return Math.floor(Math.random() * 12) + 1; }
    function roll3d6() {
        const rolls = [rollD6(), rollD6(), rollD6()];
        const total = rolls.reduce((a, b) => a + b, 0);
        return { rolls, total };
    }
    function getModifier(score) {
        if (score <= 3) return -4;
        if (score <= 5) return -3;
        if (score <= 7) return -2;
        if (score <= 9) return -1;
        if (score <= 11) return 0;
        if (score <= 13) return 1;
        if (score <= 15) return 2;
        if (score <= 17) return 3;
        return 4;
    }
    function formatModifier(mod) {
        return mod >= 0 ? "+" + mod : String(mod);
    }
    /** Cada ancestralidade usa uma tabela d20 própria e combina dois resultados distintos. */
    function generateNameForCharacter(ancestryKey, ancestryName, lang) {
        const t = SHADOWDARK_DATA[lang];
        const customTableKey = HOMEBREW_NAME_TABLE_KEYS[lang][ancestryName];
        const table = OFFICIAL_CHARACTER_NAMES[ancestryKey] ||
            HOMEBREW_CHARACTER_NAMES[customTableKey || ancestryKey];
        if (!table || table.length !== 20) {
            return { name: ancestryName, roll1: null, roll2: null, die: "—", source: t.nameTableLabel };
        }

        const roll1 = Math.floor(Math.random() * 20) + 1;
        let roll2 = Math.floor(Math.random() * 20) + 1;
        if (roll2 === roll1) roll2 = (roll1 % 20) + 1;
        const name1 = table[roll1 - 1];
        const name2 = table[roll2 - 1];
        return {
            name: `${name1} ${name2}`,
            roll1,
            roll2,
            die: "d20",
            source: `${t.nameTableLabel} (${ancestryName}): d20=${roll1} → ${name1}, d20=${roll2} → ${name2}`
        };
    }

    // Classe Principal do Gerador
    class LevelZeroGenerator {
        constructor() {
            this.lang = "pt-BR";
            this.ancestryMode = "original";
            this.backgroundMode = "system";
            this.characters = [];
            this.rollLog = [];

            // Elementos DOM
            this.generateBtn = document.getElementById("generate-btn");
            this.exportTxtBtn = document.getElementById("export-txt-btn");
            this.exportPdfBtn = document.getElementById("export-pdf-btn");
            this.countInput = document.getElementById("character-count");
            this.langSelect = document.getElementById("lang-select");
            this.ancestryModeSelect = document.getElementById("ancestry-mode");
            this.ancestryInfoDialog = document.getElementById("ancestry-info-dialog");
            this.backgroundModeSelect = document.getElementById("background-mode");
            this.contentEl = document.getElementById("generation-content");
            this.infoEl = document.getElementById("generation-info");
            this.logEl = document.getElementById("roll-log");
            this.qtyBtns = document.querySelectorAll(".qty-btn");
            this.flagButtons = document.querySelectorAll(".flag-button");

            this.init();
        }

        init() {
            this.generateBtn.addEventListener("click", () => this.generate());
            this.exportTxtBtn.addEventListener("click", () => this.exportTXT());
            this.exportPdfBtn.addEventListener("click", () => this.exportPDF());
            this.langSelect.addEventListener("change", (e) => this.setLanguage(e.target.value));
            this.flagButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    // suporte a data-lang ou data-lang-switch (compatibilidade G-City)
                    const lang = btn.dataset.lang || btn.dataset.langSwitch;
                    if (!lang) return;
                    // normalizar "pt" → "pt-BR"
                    const normalizedLang = lang === "pt" ? "pt-BR" : lang;
                    if (SHADOWDARK_DATA[normalizedLang]) {
                        this.setLanguage(normalizedLang);
                    }
                });
            });
            this.ancestryModeSelect.addEventListener("change", (e) => this.setAncestryMode(e.target.value));
            document.getElementById("ancestry-info-btn").addEventListener("click", () => this.openAncestryInfo());
            document.getElementById("ancestry-dialog-close").addEventListener("click", () => this.ancestryInfoDialog.close());
            this.ancestryInfoDialog.addEventListener("click", (e) => {
                if (e.target === this.ancestryInfoDialog) this.ancestryInfoDialog.close();
            });
            this.backgroundModeSelect.addEventListener("change", (e) => this.setBackgroundMode(e.target.value));

            this.qtyBtns.forEach(btn => {
                btn.addEventListener("click", () => this.adjustCount(btn.dataset.action));
            });

            this.countInput.addEventListener("change", () => {
                const val = Number.parseInt(this.countInput.value, 10);
                this.countInput.value = Math.max(1, Math.min(20, Number.isFinite(val) ? val : 1));
            });

            const savedLang = localStorage.getItem("shadowdark-tools-lang") ||
                              localStorage.getItem("shadowdark-l0-lang") ||
                              (navigator.language.startsWith("pt") ? "pt-BR" : "en");
            const savedAncestry = localStorage.getItem("shadowdark-l0-ancestry") || "original";
            const savedBackground = localStorage.getItem("shadowdark-l0-background") || "system";

            this.langSelect.value = savedLang;
            this.ancestryModeSelect.value = savedAncestry;
            this.backgroundModeSelect.value = savedBackground;

            this.setLanguage(savedLang);
            this.setAncestryMode(savedAncestry);
            this.setBackgroundMode(savedBackground);
        }

        setLanguage(lang) {
            if (!SHADOWDARK_DATA[lang]) return;
            this.lang = lang;
            this.langSelect.value = lang;
            localStorage.setItem("shadowdark-tools-lang", lang);
            localStorage.setItem("shadowdark-l0-lang", lang);

            this.flagButtons.forEach(btn => {
                btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
            });

            const t = SHADOWDARK_DATA[lang];

            document.getElementById("ancestry-info-btn").textContent = t.ancestryInfoButton;
            document.getElementById("ancestry-dialog-title").textContent = t.ancestryDialogTitle;
            document.getElementById("ancestry-original-title").textContent = t.ancestryOriginalTitle;
            document.getElementById("ancestry-homebrew-title").textContent = t.ancestryHomebrewTitle;
            document.getElementById("ancestry-dialog-close").setAttribute("aria-label", t.ancestryDialogClose);
            const allAncestries = [...t.ancestriesOriginal, ...t.ancestriesHomebrew];
            document.getElementById("ancestry-dialog-summary").textContent =
                t.ancestryDialogSummary.replace("{count}", String(allAncestries.length));
            const renderAncestryListItem = (ancestry) => `<li><strong>${this.escapeHtml(ancestry.name)}</strong>${ancestry.ability ? `<p>${this.escapeHtml(ancestry.abilityName)}: ${this.escapeHtml(ancestry.ability)}</p>` : ""}</li>`;
            document.getElementById("ancestry-original-list").innerHTML = t.ancestriesOriginal.map(renderAncestryListItem).join("");
            document.getElementById("ancestry-homebrew-list").innerHTML = t.ancestriesHomebrew.map(renderAncestryListItem).join("");

            // Atualiza textos estáticos
            const pageTitle = document.getElementById("page-title");
            if (pageTitle) pageTitle.textContent = t.pageTitle;

            const pageDesc = document.getElementById("page-description");
            if (pageDesc) pageDesc.innerHTML = t.pageDescription;

            const lblCharCount = document.getElementById("lbl-char-count");
            if (lblCharCount) lblCharCount.textContent = t.lblCharCount;

            const lblAncestry = document.getElementById("lbl-ancestry");
            if (lblAncestry) lblAncestry.textContent = t.lblAncestry;

            const lblBackground = document.getElementById("lbl-background");
            if (lblBackground) lblBackground.textContent = t.lblBackground;

            const lblLang = document.getElementById("lbl-lang");
            if (lblLang) lblLang.textContent = t.lblLang;

            // Atualiza opções dos selects
            if (this.ancestryModeSelect.options.length >= 2) {
                this.ancestryModeSelect.options[0].textContent = t.optAncestryOriginal;
                this.ancestryModeSelect.options[1].textContent = t.optAncestryAll;
            }

            if (this.backgroundModeSelect.options.length >= 2) {
                this.backgroundModeSelect.options[0].textContent = t.optBgSystem;
                this.backgroundModeSelect.options[1].textContent = t.optBgExpanded;
            }

            const btnGenText = document.getElementById("btn-generate-text");
            if (btnGenText) btnGenText.textContent = t.btnGenerate;

            const btnExportTxt = document.getElementById("btn-export-txt-text");
            if (btnExportTxt) btnExportTxt.textContent = t.btnExportTxt;

            const btnExportPdf = document.getElementById("btn-export-pdf-text");
            if (btnExportPdf) btnExportPdf.textContent = t.btnExportPdf;

            const btnBack = document.getElementById("btn-back-text");
            if (btnBack) btnBack.textContent = t.btnBack;

            const navBack = document.getElementById("nav-back-text");
            if (navBack) navBack.textContent = t.navBack;

            const navGenerators = document.getElementById("nav-generators");
            if (navGenerators) navGenerators.textContent = t.navGenerators;

            const navAbout = document.getElementById("nav-about");
            if (navAbout) navAbout.textContent = t.navAbout;

            const rollLogHeading = document.getElementById("roll-log-heading");
            if (rollLogHeading) rollLogHeading.textContent = t.rollLogTitle;

            const emptyTitle = document.getElementById("empty-title");
            if (emptyTitle) emptyTitle.innerHTML = t.emptyTitle;

            const emptySubtitle = document.getElementById("empty-subtitle");
            if (emptySubtitle) emptySubtitle.textContent = t.emptySubtitle;

            const footerCaption = document.getElementById("footer-caption");
            if (footerCaption) footerCaption.textContent = t.footerCaption;

            const footerCredit1 = document.getElementById("footer-credit-author");
            if (footerCredit1) footerCredit1.innerHTML = t.footerCredit1;

            const footerCredit2 = document.getElementById("footer-subcredit");
            if (footerCredit2) footerCredit2.innerHTML = t.footerCredit2;

            document.documentElement.lang = lang;

            this.renderCharacters();
            this.renderRollLog();
        }

        setAncestryMode(mode) {
            this.ancestryMode = mode;
            localStorage.setItem("shadowdark-l0-ancestry", mode);
        }

        openAncestryInfo() {
            this.ancestryInfoDialog.showModal();
        }

        setBackgroundMode(mode) {
            this.backgroundMode = mode;
            localStorage.setItem("shadowdark-l0-background", mode);
            this.renderCharacters();
        }

        adjustCount(action) {
            let val = parseInt(this.countInput.value, 10) || 1;
            if (action === "increase") val = Math.min(20, val + 1);
            if (action === "decrease") val = Math.max(1, val - 1);
            this.countInput.value = val;
        }

        generate() {
            const count = Math.max(1, Math.min(20, Number.parseInt(this.countInput.value, 10) || 1));
            this.countInput.value = count;
            this.characters = [];
            this.rollLog = [];

            const t = SHADOWDARK_DATA[this.lang];

            this.generateBtn.disabled = true;
            this.generateBtn.innerHTML = `
                <img src="../../assets/icons/lucide/loader.svg" alt="" class="ui-icon" aria-hidden="true" style="animation: spin 1s linear infinite;">
                <span>${t.btnGenerating}</span>
            `;

            setTimeout(() => {
                for (let i = 0; i < count; i++) {
                    this.characters.push(this.generateCharacter(i + 1));
                }

                this.renderCharacters();
                this.renderRollLog();

                this.generateBtn.disabled = false;
                this.generateBtn.innerHTML = `
                    <img src="../../assets/icons/lucide/dice-5.svg" alt="" class="ui-icon" aria-hidden="true">
                    <span id="btn-generate-text">${t.btnGenerate}</span>
                `;

                this.exportTxtBtn.disabled = false;
                this.exportPdfBtn.disabled = false;
                // Restore PDF button (icon + text, never overwrite innerHTML on it)
                const pdfTextEl = this.exportPdfBtn.querySelector("#btn-export-pdf-text") ||
                                  this.exportPdfBtn.querySelector("span");
                if (pdfTextEl) pdfTextEl.textContent = t.btnExportPdf;

                this.infoEl.hidden = false;
                this.showToast(t.generated + ": " + count, "success");
            }, 250);
        }

        generateCharacter(index) {
            const data = SHADOWDARK_DATA[this.lang];
            const attrs = [];

            // 1. Rolagem de Atributos (3d6 na ordem clássica)
            data.attributes.forEach((attr, i) => {
                const roll = roll3d6();
                const mod = getModifier(roll.total);
                attrs.push({
                    name: attr,
                    abbr: data.attrAbbr[i],
                    rolls: roll.rolls,
                    total: roll.total,
                    mod: mod
                });

                this.rollLog.push({
                    character: index,
                    type: "attribute",
                    attribute: attr,
                    abbr: data.attrAbbr[i],
                    rolls: roll.rolls,
                    total: roll.total,
                    mod: mod
                });
            });

            // 2. Rolagem de Ancestralidade
            let ancestry;
            let ancestryKey = null;

            if (this.ancestryMode === "original") {
                const roll = Math.floor(Math.random() * data.ancestriesOriginal.length) + 1;
                ancestry = data.ancestriesOriginal[roll - 1];
                ancestryKey = ancestry.key;

                this.rollLog.push({
                    character: index,
                    type: "ancestry",
                    roll: roll,
                    die: "d" + data.ancestriesOriginal.length,
                    ancestry: ancestry.name,
                    ancestryType: ancestry.type
                });
            } else {
                const allAncestries = [...data.ancestriesOriginal, ...data.ancestriesHomebrew];
                const roll = Math.floor(Math.random() * allAncestries.length) + 1;
                ancestry = allAncestries[roll - 1];
                ancestryKey = ancestry.key || null;

                this.rollLog.push({
                    character: index,
                    type: "ancestry",
                    roll: roll,
                    die: "d" + allAncestries.length,
                    ancestry: ancestry.name,
                    ancestryType: ancestry.type
                });
            }

            // 3. Geração de Nome (conforme regras e tabelas de imagem 1)
            const nameInfo = generateNameForCharacter(ancestryKey, ancestry.name, this.lang);
            this.rollLog.push({
                character: index,
                type: "name",
                name: nameInfo.name,
                roll1: nameInfo.roll1 || null,
                roll2: nameInfo.roll2 || null,
                die: nameInfo.die,
                source: nameInfo.source
            });

            // 4. Cálculo de Pontos de Vida (Baseado em CON, mín 1)
            const conAttr = attrs.find(a => a.abbr === data.attrAbbr[2]); // CON
            const conMod = conAttr ? conAttr.mod : 0;
            const ancestryHpBonus = ancestryKey === "Dwarf" ? 2 : 0;
            const hp = Math.max(1, conMod) + ancestryHpBonus;

            this.rollLog.push({
                character: index,
                type: "hp",
                conMod: conMod,
                ancestryHpBonus,
                hp: hp
            });

            // 5. Background e Descrição (Oficial d20 vs Expandido)
            let chosenBg;
            let bgRollDie;
            let bgRollVal;

            const officialList = OFFICIAL_BACKGROUNDS[this.lang];
            const otherList = OTHER_OCCUPATIONS[this.lang];

            if (this.backgroundMode === "system") {
                bgRollDie = "d20";
                bgRollVal = Math.floor(Math.random() * officialList.length) + 1;
                chosenBg = officialList[bgRollVal - 1];
            } else {
                const combinedBgs = [...officialList, ...otherList];
                bgRollDie = "d" + combinedBgs.length;
                bgRollVal = Math.floor(Math.random() * combinedBgs.length) + 1;
                chosenBg = combinedBgs[bgRollVal - 1];
            }

            this.rollLog.push({
                character: index,
                type: "background",
                die: bgRollDie,
                roll: bgRollVal,
                background: chosenBg.name,
                description: chosenBg.desc,
                isOfficial: bgRollVal <= 20
            });

            // 6. Alinhamento (d6: 1-3 Ordeiro, 4-5 Neutro, 6 Caótico)
            const alignRoll = rollD6();
            let alignment;
            if (alignRoll <= 3) alignment = data.alignments[0];
            else if (alignRoll <= 5) alignment = data.alignments[1];
            else alignment = data.alignments[2];

            this.rollLog.push({
                character: index,
                type: "alignment",
                roll: alignRoll,
                alignment: alignment
            });

            // 7. Equipamento Inicial (1d4 itens da tabela d12 de aventureiro)
            const gearCount = rollD4();
            const gearRolls = [];
            const startingGear = [];

            for (let i = 0; i < gearCount; i++) {
                const gearRoll = rollD12();
                gearRolls.push(gearRoll);
                startingGear.push(data.startingGear[gearRoll - 1]);
            }

            this.rollLog.push({
                character: index,
                type: "gear",
                count: gearCount,
                rolls: gearRolls,
                gear: startingGear
            });

            const backgroundGear = chosenBg.equipment || [];

            return {
                index,
                name: nameInfo.name,
                nameInfo,
                ancestry: ancestry.name,
                ancestryKey,
                ancestryType: ancestry.type,
                ancestryHpBonus,
                attributes: attrs,
                hp,
                conMod,
                background: chosenBg.name,
                backgroundDesc: chosenBg.desc,
                backgroundGear,
                alignment,
                startingGear,
                gearCount
            };
        }

        renderCharacters() {
            if (this.characters.length === 0) {
                const t = SHADOWDARK_DATA[this.lang];
                this.contentEl.innerHTML = `
                    <div class="empty-state">
                        <img src="../../assets/icons/lucide/dice-5.svg" alt="" class="empty-dice ui-icon" aria-hidden="true">
                        <p id="empty-title">${t.emptyTitle}</p>
                        <p class="empty-hint" id="empty-subtitle">${t.emptySubtitle}</p>
                    </div>
                `;
                return;
            }

            this.contentEl.innerHTML = `
                <div class="character-grid">
                    ${this.characters.map((char) => this.renderCharacterCard(char)).join("")}
                </div>
            `;

            this.contentEl.querySelectorAll(".field-reroll").forEach(btn => {
                btn.addEventListener("click", (e) => this.rerollField(e, btn));
            });
        }

        renderCharacterCard(char) {
            const t = SHADOWDARK_DATA[this.lang];
            const isHomebrew = char.ancestryType === "homebrew";
            const ancestryDetails = [...t.ancestriesOriginal, ...t.ancestriesHomebrew]
                .find(ancestry => ancestry.ability && ((ancestry.key && ancestry.key === char.ancestryKey) || ancestry.name === char.ancestry));
            const ancestryName = ancestryDetails ? ancestryDetails.name : char.ancestry;
            const badgeText = isHomebrew ? "Homebrew" : "Original";
            const badgeClass = isHomebrew ? "badge-homebrew" : "badge-original";

            return `
                <div class="character-card">
                    <div class="character-card__header">
                        <h3 class="character-card__title" title="${this.escapeHtml(char.name)}">${this.escapeHtml(char.name)}</h3>
                        <span class="character-card__badge ${badgeClass}">${badgeText}</span>
                    </div>
                    <div class="character-card__body">
                        <div class="attributes-grid">
                            ${char.attributes.map((attr, i) => `
                                <div class="attribute-box">
                                    <span class="attribute-name">${attr.abbr}</span>
                                    <span class="attribute-value">${attr.total}</span>
                                    <span class="attribute-mod ${attr.mod >= 0 ? "positive" : "negative"}">${formatModifier(attr.mod)}</span>
                                    <button type="button" class="field-reroll" data-attr-index="${i}" data-char-index="${char.index}" aria-label="Rerolar ${attr.name}" title="Rerolar ${attr.name}">
                                        <img src="../../assets/icons/lucide/arrow-right.svg" alt="" aria-hidden="true">
                                    </button>
                                </div>
                            `).join("")}
                        </div>
                        <div class="character-details">
                            <div class="detail-row">
                                <span class="detail-label">${t.hpLabel}</span>
                                <div class="hp-display">
                                    <span class="hp-value">${char.hp}</span>
                                    <span class="hp-detail">(CON ${formatModifier(char.conMod)}${char.ancestryHpBonus ? `; ${t.hpBonusAncestryLabel} +${char.ancestryHpBonus}` : ""})</span>
                                </div>
                            </div>
                            ${ancestryDetails ? `
                                <div class="detail-row detail-row--block ancestry-details">
                                    <div class="detail-header-line">
                                        <span class="detail-label">${t.ancestryLabel}</span>
                                        <span class="detail-value">${this.escapeHtml(ancestryName)}</span>
                                    </div>
                                    <p class="detail-description">${this.escapeHtml(ancestryDetails.description)}</p>
                                    <p class="ancestry-trait"><span class="detail-label">${t.languagesLabel}:</span> ${this.escapeHtml(ancestryDetails.languages)}</p>
                                    <p class="ancestry-trait"><span class="detail-label">${t.ancestryAbilityLabel}:</span> <strong>${this.escapeHtml(ancestryDetails.abilityName)}.</strong> ${this.escapeHtml(ancestryDetails.ability)}</p>
                                </div>
                            ` : `
                                <div class="detail-row">
                                    <span class="detail-label">${t.ancestryLabel}</span>
                                    <span class="detail-value">${this.escapeHtml(char.ancestry)}</span>
                                </div>
                            `}
                            <div class="detail-row detail-row--block">
                                <div class="detail-header-line">
                                    <span class="detail-label">${t.backgroundLabel}</span>
                                    <span class="detail-value">${this.escapeHtml(char.background)}</span>
                                </div>
                                <p class="detail-description">${this.escapeHtml(char.backgroundDesc)}</p>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">${t.alignmentLabel}</span>
                                <span class="detail-value alignment-${char.alignment.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">${this.escapeHtml(char.alignment)}</span>
                            </div>
                            ${this.backgroundMode === "expanded" && char.backgroundGear.length > 0 ? `
                                <div class="detail-row">
                                    <span class="detail-label">${t.bgGearLabel}</span>
                                    <ul class="equipment-list">
                                        ${char.backgroundGear.map(item => `<li><strong>${this.escapeHtml(item)}</strong><span class="equipment-description">${this.escapeHtml(getGearDescription(item, this.lang))}</span></li>`).join("")}
                                    </ul>
                                </div>
                            ` : ""}
                            <div class="detail-row">
                                <span class="detail-label">${t.startingGearLabel} (${char.gearCount})</span>
                                <ul class="equipment-list">
                                    ${char.startingGear.map(item => `<li><strong>${this.escapeHtml(item)}</strong><span class="equipment-description">${this.escapeHtml(getGearDescription(item, this.lang))}</span></li>`).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        renderRollLog() {
            if (this.rollLog.length === 0) {
                this.logEl.innerHTML = "";
                return;
            }

            const t = SHADOWDARK_DATA[this.lang];
            const isPt = this.lang === "pt-BR";

            const rows = this.rollLog.map(entry => {
                let field = "";
                let dice = "";
                let details = "-";
                let result = "";

                switch (entry.type) {
                    case "attribute":
                        field = entry.attribute;
                        dice = entry.rolls.join(" + ");
                        details = formatModifier(entry.mod);
                        result = `${entry.total} (${formatModifier(entry.mod)})${entry.reroll ? ` <span class="badge bg-gold">${t.rerollBadge}</span>` : ""}`;
                        break;
                    case "ancestry":
                        field = `${t.ancestryLabel} (${entry.die})`;
                        dice = String(entry.roll);
                        details = entry.ancestryType === "homebrew" ? '<span class="badge bg-danger">Homebrew</span>' : '<span class="badge bg-secondary">Original</span>';
                        result = entry.ancestry;
                        break;
                    case "name":
                        field = isPt ? "Nome" : "Name";
                        if (entry.die === "d20" && entry.roll1 != null && entry.roll2 != null) {
                            dice = `2× d20 = ${entry.roll1}, ${entry.roll2}`;
                        } else if (entry.die === "d20" && entry.roll1 != null) {
                            dice = `d20 = ${entry.roll1}`;
                        } else {
                            dice = isPt ? "Mistura" : "Mix";
                        }
                        details = entry.source;
                        result = `<strong>${entry.name}</strong>`;
                        break;
                    case "hp":
                        field = `${t.hpLabel} (${isPt ? "Constituição" : "Constitution"})`;
                        dice = `CON ${formatModifier(entry.conMod)}`;
                        details = entry.ancestryHpBonus
                            ? (isPt ? `Mínimo 1 + Anão +${entry.ancestryHpBonus}` : `Min 1 + Dwarf +${entry.ancestryHpBonus}`)
                            : (isPt ? "Mínimo 1" : "Min 1");
                        result = `${entry.hp} ${t.hpLabel}`;
                        break;
                    case "background":
                        field = `${t.backgroundLabel} (${entry.die})`;
                        dice = entry.roll ? `${entry.die} = ${entry.roll}` : "-";
                        details = entry.isOfficial ? (isPt ? "Oficial d20" : "Official d20") : (isPt ? "Ocupação" : "Occupation");
                        result = `<strong>${entry.background}</strong>: <em>${entry.description}</em>`;
                        break;
                    case "alignment":
                        field = `${t.alignmentLabel} (d6)`;
                        dice = String(entry.roll);
                        details = entry.roll <= 3 ? "1-3" : entry.roll <= 5 ? "4-5" : "6";
                        result = `<span class="alignment-${entry.alignment.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">${entry.alignment}</span>`;
                        break;
                    case "gear":
                        field = `${t.startingGearLabel} (${entry.count} ${isPt ? "itens" : "items"})`;
                        dice = entry.rolls.map(r => `d12=${r}`).join(", ");
                        details = `${entry.count}x d12`;
                        result = entry.gear.join(", ");
                        break;
                    default:
                        break;
                }

                const charLabel = (isPt ? "Personagem " : "Character ") + entry.character;

                return `
                    <tr>
                        <td class="roll-char-cell">${charLabel}</td>
                        <td class="roll-field-cell">${field}</td>
                        <td class="roll-dice-cell">${dice}</td>
                        <td class="roll-detail-cell">${details}</td>
                        <td class="roll-total-cell">${result}</td>
                    </tr>
                `;
            }).join("");

            this.logEl.innerHTML = `
                <div class="table-responsive">
                    <table class="table align-middle text-center mb-0">
                        <thead>
                            <tr>
                                <th>${t.colChar}</th>
                                <th>${t.colField}</th>
                                <th>${t.colDice}</th>
                                <th>${t.colMod}</th>
                                <th>${t.colResult}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            `;
        }

        rerollField(event, btn) {
            event.stopPropagation();
            const charIndex = parseInt(btn.dataset.charIndex, 10) - 1;
            const attrIndex = parseInt(btn.dataset.attrIndex, 10);
            const char = this.characters[charIndex];
            if (!char) return;

            const attr = char.attributes[attrIndex];
            const box = btn.closest(".attribute-box");
            const valueEl = box.querySelector(".attribute-value");
            const modEl = box.querySelector(".attribute-mod");

            valueEl.classList.add("rolling");

            setTimeout(() => {
                const roll = roll3d6();
                const mod = getModifier(roll.total);

                attr.rolls = roll.rolls;
                attr.total = roll.total;
                attr.mod = mod;

                // Se for CON, recalcula HP
                if (attrIndex === 2) {
                    char.conMod = mod;
                    char.hp = Math.max(1, mod) + (char.ancestryHpBonus || 0);
                    const card = btn.closest(".character-card");
                    const hpEl = card.querySelector(".hp-value");
                    const hpDetailEl = card.querySelector(".hp-detail");
                    const t = SHADOWDARK_DATA[this.lang];
                    if (hpEl) hpEl.textContent = char.hp;
                    if (hpDetailEl) hpDetailEl.textContent = "(CON " + formatModifier(mod) + (char.ancestryHpBonus ? "; " + t.hpBonusAncestryLabel + " +" + char.ancestryHpBonus : "") + ")";

                    const hpEntry = this.rollLog.find(entry => entry.type === "hp" && entry.character === char.index);
                    if (hpEntry) {
                        hpEntry.conMod = mod;
                        hpEntry.hp = char.hp;
                    }
                }

                valueEl.textContent = roll.total;
                modEl.textContent = formatModifier(mod);
                modEl.className = "attribute-mod " + (mod >= 0 ? "positive" : "negative");

                this.rollLog.push({
                    character: char.index,
                    type: "attribute",
                    attribute: attr.name,
                    abbr: attr.abbr,
                    rolls: roll.rolls,
                    total: roll.total,
                    mod: mod,
                    reroll: true
                });

                this.renderRollLog();
                valueEl.classList.remove("rolling");
            }, 250);
        }

        exportTXT() {
            if (this.characters.length === 0) {
                this.showToast(SHADOWDARK_DATA[this.lang].noCharacters, "error");
                return;
            }

            const isPt = this.lang === "pt-BR";
            let output = isPt ? "=== PERSONAGENS NÍVEL 0 - SHADOWDARK RPG ===\n" : "=== LEVEL 0 CHARACTERS - SHADOWDARK RPG ===\n";
            output += (isPt ? "Gerado em: " : "Generated on: ") + new Date().toLocaleString(isPt ? "pt-BR" : "en-US") + "\n";
            output += (isPt ? "Total: " : "Total: ") + this.characters.length + (isPt ? " personagem(ns)\n\n" : " character(s)\n\n");

            this.characters.forEach((char, i) => {
                const ancestryDetails = [...SHADOWDARK_DATA[this.lang].ancestriesOriginal, ...SHADOWDARK_DATA[this.lang].ancestriesHomebrew]
                    .find(ancestry => ancestry.ability && ((ancestry.key && ancestry.key === char.ancestryKey) || ancestry.name === char.ancestry));
                const ancestryName = ancestryDetails ? ancestryDetails.name : char.ancestry;
                output += (isPt ? "--- PERSONAGEM " : "--- CHARACTER ") + (i + 1) + " ---\n";
                output += (isPt ? "Nome: " : "Name: ") + char.name + "\n";
                output += (isPt ? "Ancestralidade: " : "Ancestry: ") + ancestryName + " (" + (char.ancestryType === "homebrew" ? "Homebrew" : "Original") + ")\n";
                if (ancestryDetails) {
                    output += (isPt ? "Descrição da ancestralidade: " : "Ancestry description: ") + ancestryDetails.description + "\n";
                    output += (isPt ? "Idiomas: " : "Languages: ") + ancestryDetails.languages + "\n";
                    output += (isPt ? "Habilidade: " : "Ancestry ability: ") + ancestryDetails.abilityName + " — " + ancestryDetails.ability + "\n";
                }
                output += (isPt ? "PV: " : "HP: ") + char.hp + " (CON " + formatModifier(char.conMod) + (char.ancestryHpBonus ? "; " + (isPt ? "Anão" : "Dwarf") + " +" + char.ancestryHpBonus : "") + ")\n";
                output += "Background: " + char.background + " — " + char.backgroundDesc + "\n";
                output += (isPt ? "Alinhamento: " : "Alignment: ") + char.alignment + "\n\n";

                output += (isPt ? "ATRIBUTOS:\n" : "ATTRIBUTES:\n");
                char.attributes.forEach(attr => {
                    output += "  " + attr.abbr + ": " + attr.total + " [" + attr.rolls.join("+") + "] (" + formatModifier(attr.mod) + ")\n";
                });
                output += "\n";

                if (this.backgroundMode === "expanded" && char.backgroundGear && char.backgroundGear.length > 0) {
                    output += (isPt ? "EQUIPAMENTO DO BACKGROUND:\n" : "BACKGROUND GEAR:\n");
                    char.backgroundGear.forEach(item => {
                        output += "  - " + item + " — " + getGearDescription(item, this.lang) + "\n";
                    });
                    output += "\n";
                }

                output += (isPt ? "EQUIPAMENTO INICIAL (" : "STARTING GEAR (") + char.gearCount + (isPt ? " itens):\n" : " items):\n");
                char.startingGear.forEach(item => {
                    output += "  - " + item + " — " + getGearDescription(item, this.lang) + "\n";
                });
                output += "\n";
            });

            output += (isPt ? "=== REGISTRO DE ROLAGENS ===\n" : "=== ROLL LOG ===\n");
            this.rollLog.forEach(entry => {
                const charTag = (isPt ? "Personagem " : "Character ") + entry.character + ": ";
                switch (entry.type) {
                    case "attribute":
                        output += charTag + entry.attribute + " = " + entry.rolls.join("+") + " = " + entry.total + " (" + formatModifier(entry.mod) + ")" + (entry.reroll ? (isPt ? " [RE-ROLAGEM]" : " [REROLL]") : "") + "\n";
                        break;
                    case "ancestry":
                        output += charTag + (isPt ? "Ancestralidade" : "Ancestry") + " (" + entry.die + ") = " + entry.roll + " -> " + entry.ancestry + "\n";
                        break;
                    case "name":
                        if (entry.die === "d20" && entry.roll1 != null && entry.roll2 != null) {
                            output += charTag + (isPt ? "Nome" : "Name") + ` (2× d20 = ${entry.roll1}, ${entry.roll2}) -> ` + entry.name + "\n";
                        } else {
                            output += charTag + (isPt ? "Nome" : "Name") + (isPt ? " (Mistura)" : " (Mix)") + " -> " + entry.name + "\n";
                        }
                        break;
                    case "hp":
                        output += charTag + (isPt ? "PV" : "HP") + " = CON " + formatModifier(entry.conMod) + (entry.ancestryHpBonus ? (isPt ? " + Anão +" : " + Dwarf +") + entry.ancestryHpBonus : "") + " = " + entry.hp + "\n";
                        break;
                    case "background":
                        output += charTag + "Background (" + entry.die + ") = " + entry.background + " — " + entry.description + "\n";
                        break;
                    case "alignment":
                        output += charTag + (isPt ? "Alinhamento" : "Alignment") + " (d6) = " + entry.roll + " -> " + entry.alignment + "\n";
                        break;
                    case "gear":
                        output += charTag + (isPt ? "Equip. Inicial" : "Starting Gear") + " (" + entry.count + ") = " + entry.rolls.join(",") + " -> " + entry.gear.join(", ") + "\n";
                        break;
                }
            });

            const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "shadowdark-level0-" + Date.now() + ".txt";
            a.click();
            URL.revokeObjectURL(url);

            this.showToast(SHADOWDARK_DATA[this.lang].exported, "success");
        }

        exportPDF() {
            window.print();
        }

        showToast(message, type) {
            let container = document.querySelector(".toast-container");
            if (!container) {
                container = document.createElement("div");
                container.className = "toast-container";
                document.body.appendChild(container);
            }

            const toast = document.createElement("div");
            toast.className = "toast " + type;
            toast.textContent = message;
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = "toast-slide 0.3s ease reverse";
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        escapeHtml(text) {
            const div = document.createElement("div");
            div.textContent = text;
            return div.innerHTML;
        }
    }

    // Inicializa quando o DOM estiver pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => new LevelZeroGenerator());
    } else {
        new LevelZeroGenerator();
    }
})();
