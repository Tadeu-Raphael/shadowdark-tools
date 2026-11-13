// New file
/**
 * Level Zero Character Generator - Shadowdark RPG
 * Regras oficiais: 3d6 stats, ancestralidade (d8/d30), HP = CON mod (mín 1),
 * Background, Alinhamento (1d6), Equipamento (1d4 itens, cada 1d12)
 */

(function () {
    "use strict";

    const SHADOWDARK_DATA = {
        "pt-BR": {
            attributes: ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"],
            attrAbbr: ["FOR", "DES", "CON", "INT", "SAB", "CAR"],
            ancestriesOriginal: [
                { name: "Anão", type: "original" },
                { name: "Elfo", type: "original" },
                { name: "Goblin", type: "original" },
                { name: "Humano", type: "original" },
                { name: "Koboldo", type: "original" },
                { name: "Meio-Modrongo", type: "original" },
                { name: "Metadinha", type: "original" }
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
            backgrounds: ["Açougueiro", "Agricultor", "Alquimista Assistente", "Armeiro Aprendiz", "Barbeiro", "Batedor", "Carrieiro", "Cesteiro", "Coveiro", "Curandeiro Popular", "Doméstico", "Encarregado de Estábulo", "Escravo Fugitivo", "Estalajadeiro", "Ferreiro Aprendiz", "Guarda de Caravana", "Herborista", "Mendigo", "Músico Ambulante", "Padeiro", "Pescador", "Queijeiro", "Rat-catcher", "Sapateiro", "Servente de Pedreiro", "Tanoeiro", "Taverneiro", "Teceiro", "Trabalhador de Doca", "Vendedor Ambulante", "Vigia Noturno"],
backgroundEquipment: {
                "Açougueiro": ["Cutelo (1d6)", "Avental manchado", "Saco de sal (3 usos)"],
                "Agricultor": ["Foice (1d6)", "Roupas rústicas", "Saco de grãos (1 semana de ração)"],
                "Alquimista Assistente": ["Adaga (1d4)", "Kit de alquimia (3 usos)", "Frasco de ácido (1 uso)"],
                "Armeiro Aprendiz": ["Martelo leve (1d6)", "Avental de couro", "Pedra de amolar"],
                "Barbeiro": ["Navalha (1d4)", "Tesoura", "Frasco de tônico (1d4 PV, 1 uso)"],
                "Batedor": ["Arco curto (1d6)", "Aljava com 20 flechas", "Botas silenciosas"],
                "Carrieiro": ["Chicote (1d4)", "Corda (15m)", "Rações (3 dias)"],
                "Cesteiro": ["Faca pequena (1d4)", "Cesto grande", "Vime (10 usos para reparos)"],
                "Coveiro": ["Pá (1d6)", "Lanterna", "Frasco de água benta (1 uso)"],
                "Curandeiro Popular": ["Bastão (1d6)", "Ervas medicinais (3 usos)", "Bandagens (3 usos)"],
                "Doméstico": ["Faca de cozinha (1d4)", "Chaves da casa", "Rações (1 dia)"],
                "Encarregado de Estábulo": ["Forcado (1d6)", "Escova e rastrilho", "Saco de aveia"],
                "Escravo Fugitivo": ["Corrente quebrada (1d6)", "Roupa em farrapos", "Pão duro (1 ração)"],
                "Estalajadeiro": ["Caneca pesada (1d4)", "Garrafa de vinho barato", "Chave reserva"],
                "Ferreiro Aprendiz": ["Martelo de ferreiro (1d6)", "Avental de couro grosso", "Tenaz"],
                "Guarda de Caravana": ["Lança (1d8)", "Escudo de madeira (+1 CA)", "Distintivo"],
                "Herborista": ["Foice pequena (1d4)", "Saco de ervas (5 usos)", "Guia de plantas"],
                "Mendigo": ["Cajado (1d6)", "Tigela de esmolas", "Rações (1 dia)"],
                "Músico Ambulante": ["Alaúde/flauta", "Adaga (1d4)", "Rações (2 dias)"],
                "Padeiro": ["Rolo de massa (1d4)", "Saco de farinha", "Pães (3 rações)"],
                "Pescador": ["Tridente (1d6)", "Rede de pesca", "Botas impermeáveis"],
                "Queijeiro": ["Faca de queijo (1d4)", "Forma de queijo (3 rações)", "Sal"],
                "Rat-catcher": ["Armadilha (3 usos)", "Cajado com gancho (1d6)", "Saco para ratos"],
                "Sapateiro": ["Formão (1d4)", "Couro e linha", "Forma de sapato"],
                "Servente de Pedreiro": ["Martelo de pedra (1d6)", "Cinzel", "Corda (10m)"],
                "Tanoeiro": ["Machado pequeno (1d6)", "Aro de barril", "Resina (3 usos)"],
                "Taverneiro": ["Garrafa quebrada (1d4)", "Chave do porão", "Barril vazio"],
                "Teceiro": ["Tesoura grande (1d4)", "Novelo de linha", "Agulhas"],
                "Trabalhador de Doca": ["Gancho (1d6)", "Corda grossa (20m)", "Luvas de couro"],
                "Vendedor Ambulante": ["Bengala (1d6)", "Bandeja de bugigangas", "Moedas (2d6 PO)"],
                "Vigia Noturno": ["Lanterna", "Sino de alarme", "Clava (1d6)"]
            },
            startingGear: ["Tocha", "Adaga", "Vara", "Arco curto e 5 flechas", "Corda, 60'", "Óleo, frasco", "Pé de cabra", "Pregos de ferro (10)", "Pedra de fogo e aço", "Gancho de escalada", "Clava", "Caltrops (um saco)"],
            alignments: ["Ordeiro", "Neutro", "Caótico"],
            hpLabel: "PV",
            rollLogTitle: "Registro de Rolagens",
            generated: "Personagens gerados",
            exported: "Exportado com sucesso",
            errorGenerating: "Erro ao gerar personagens",
            noCharacters: "Nenhum personagem para exportar"
        },
        "en": {
            attributes: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
            attrAbbr: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
            ancestriesOriginal: [
                { name: "Dwarf", type: "original" },
                { name: "Elf", type: "original" },
                { name: "Goblin", type: "original" },
                { name: "Human", type: "original" },
                { name: "Kobold", type: "original" },
                { name: "Half-Mongrel", type: "original" },
                { name: "Halfling", type: "original" }
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
backgrounds: ["Butcher", "Farmer", "Alchemist's Assistant", "Armorer's Apprentice", "Barber", "Scout", "Teamster", "Basket Weaver", "Gravedigger", "Hedge Healer", "Servant", "Stable Hand", "Runaway Slave", "Innkeeper", "Blacksmith's Apprentice", "Caravan Guard", "Herbalist", "Beggar", "Traveling Musician", "Baker", "Fisher", "Cheesemaker", "Rat-catcher", "Cobbler", "Mason's Laborer", "Cooper", "Tavern Keeper", "Weaver", "Dock Worker", "Peddler", "Night Watchman"],
            backgroundEquipment: {
                "Butcher": ["Cleaver (1d6)", "Bloodstained apron", "Salt sack (3 uses)"],
                "Farmer": ["Sickle (1d6)", "Rough clothing", "Grain sack (1 week rations)"],
                "Alchemist's Assistant": ["Dagger (1d4)", "Alchemy kit (3 uses)", "Acid flask (1 use)"],
                "Armorer's Apprentice": ["Light hammer (1d6)", "Leather apron", "Whetstone"],
                "Barber": ["Straight razor (1d4)", "Shears", "Tonic flask (1d4 HP, 1 use)"],
                "Scout": ["Shortbow (1d6)", "Quiver of 20 arrows", "Silent boots"],
                "Teamster": ["Whip (1d4)", "Rope (50 ft)", "Rations (3 days)"],
                "Basket Weaver": ["Small knife (1d4)", "Large basket", "Wicker (10 repair uses)"],
                "Gravedigger": ["Shovel (1d6)", "Lantern", "Holy water flask (1 use)"],
                "Hedge Healer": ["Staff (1d6)", "Medicinal herbs (3 uses)", "Bandages (3 uses)"],
                "Servant": ["Kitchen knife (1d4)", "House keys", "Rations (1 day)"],
                "Stable Hand": ["Pitchfork (1d6)", "Brush and currycomb", "Oats sack"],
                "Runaway Slave": ["Broken chain (1d6)", "Tattered rags", "Hardtack (1 ration)"],
                "Innkeeper": ["Heavy mug (1d4)", "Cheap wine bottle", "Spare key"],
                "Blacksmith's Apprentice": ["Smith's hammer (1d6)", "Thick leather apron", "Tongs"],
                "Caravan Guard": ["Spear (1d8)", "Wooden shield (+1 AC)", "Badge"],
                "Herbalist": ["Small sickle (1d4)", "Herb pouch (5 uses)", "Plant guide"],
                "Beggar": ["Staff (1d6)", "Alms bowl", "Rations (1 day)"],
                "Traveling Musician": ["Lute/flute", "Dagger (1d4)", "Rations (2 days)"],
                "Baker": ["Rolling pin (1d4)", "Flour sack", "Loaves (3 rations)"],
                "Fisher": ["Trident (1d6)", "Fishing net", "Waterproof boots"],
                "Cheesemaker": ["Cheese knife (1d4)", "Cheese wheel (3 rations)", "Salt"],
                "Rat-catcher": ["Trap (3 uses)", "Hooked staff (1d6)", "Rat sack"],
                "Cobbler": ["Awl (1d4)", "Leather and thread", "Shoe last"],
                "Mason's Laborer": ["Stone hammer (1d6)", "Chisel", "Rope (30 ft)"],
                "Cooper": ["Small axe (1d6)", "Barrel hoop", "Resin (3 uses)"],
                "Tavern Keeper": ["Broken bottle (1d4)", "Cellar key", "Empty barrel"],
                "Weaver": ["Large shears (1d4)", "Thread spool", "Needles"],
                "Dock Worker": ["Hook (1d6)", "Heavy rope (60 ft)", "Leather gloves"],
                "Peddler": ["Walking stick (1d6)", "Tray of trinkets", "Coins (2d6 GP)"],
                "Night Watchman": ["Lantern", "Alarm bell", "Club (1d6)"]
            },
            startingGear: ["Torch", "Dagger", "Pole", "Shortbow and 5 arrows", "Rope, 60'", "Oil, flask", "Crowbar", "Iron spikes (10)", "Flint and steel", "Grappling hook", "Club", "Caltrops (one bag)"],
            alignments: ["Lawful", "Neutral", "Chaotic"],
            hpLabel: "HP",
            rollLogTitle: "Roll Log",
            generated: "Characters generated",
            exported: "Exported successfully",
            errorGenerating: "Error generating characters",
            noCharacters: "No characters to export"
        }
    };
// ===== UTILITÁRIOS =====
function rollD6() { return Math.floor(Math.random() * 6) + 1; }
function rollD4() { return Math.floor(Math.random() * 4) + 1; }
function rollD12() { return Math.floor(Math.random() * 12) + 1; }
function rollD30() { return Math.floor(Math.random() * 30) + 1; }
function rollD8() { return Math.floor(Math.random() * 8) + 1; }
function roll3d6() { const rolls = [rollD6(), rollD6(), rollD6()]; const total = rolls.reduce((a,b)=>a+b,0); return {rolls,total}; }
function getModifier(score) { if (score<=3) return -4; if (score<=5) return -3; if (score<=7) return -2; if (score<=9) return -1; if (score<=11) return 0; if (score<=13) return 1; if (score<=15) return 2; if (score<=17) return 3; return 4; }
function formatModifier(mod) { return mod>=0?"+"+mod:String(mod); }
function pickRandom(array) { return array[Math.floor(Math.random()*array.length)]; }
function generateName(lang) { 
    const firstNames = {"pt-BR":["Aldo","Breno","Ciro","Dante","Elói","Fabrício","Gael","Heitor","Ivo","Jairo","Kai","Lorenzo","Mauro","Nico","Otávio","Pietro","Quico","Rafael","Sérgio","Thiago","Ulisses","Vitor","Wagner","Xisto","Yago","Zeca","Adela","Bruna","Catarina","Dora","Elisa","Fátima","Gisela","Helena","Íris","Joana","Lara","Mara","Nina","Olga","Paula","Quitéria","Rosa","Sofia","Teresa","Úrsula","Vera","Xênia","Yara","Zélia"],"en":["Aldric","Bran","Corin","Dain","Eamon","Finn","Gareth","Hale","Ivar","Joren","Kael","Lorin","Merek","Nolan","Owen","Perrin","Quinn","Rowan","Soren","Tomas","Ulric","Vance","Wyn","Xander","Yorick","Zane","Aelith","Brynn","Cora","Dara","Elara","Fiona","Gwen","Hela","Iris","Jenna","Kira","Lira","Mara","Nora","Orla","Pippa","Quinn","Rhian","Sara","Tara","Una","Vera","Wynne","Xara","Yara","Zara"]}; 
    const lastNames = {"pt-BR":["da Silva","Souza","Oliveira","Lima","Pereira","Costa","Rodrigues","Almeida","Nascimento","Araújo","Ferreira","Carvalho","Gomes","Martins","Rocha","Ribeiro","Barbosa","Cavalcanti","Dantas","Esteves","Figueiredo","Guimarães","Henriques","Iglesias","Junqueira","Klein","Leão","Moura","Nunes","Oliveira","Pinto","Queiroz","Ramires","Santos","Tavares","Uchôa","Vieira","Xavier","Yamamoto","Zambrano"],"en":["Blackwood","Stone","Miller","Smith","Cooper","Fletcher","Thatcher","Walker","Hunter","Baker","Carter","Turner","Porter","Fisher","Weaver","Sawyer","Tyler","Archer","Gardener","Shepherd","Potter","Mason","Wright","Taylor","Clark","Adams","Bell","Cross","Dean","Ellis","Ford","Grant","Hayes","Innes","Joyce","Knox","Lane","Moss","North","Oakes","Pierce","Quinn","Reed","Shaw","Thorpe","Vance","Wade","York","Young"]}; 
    return pickRandom(firstNames[lang])+" "+pickRandom(lastNames[lang]); 
}
// ===== GERADOR PRINCIPAL =====
class LevelZeroGenerator {
    constructor() {
        this.lang = "pt-BR";
        this.ancestryMode = "original";
        this.backgroundMode = "detailed";
        this.characters = [];
        this.rollLog = [];

        this.generateBtn = document.getElementById("generate-btn");
        this.exportTxtBtn = document.getElementById("export-txt-btn");
        this.exportPdfBtn = document.getElementById("export-pdf-btn");
        this.countInput = document.getElementById("character-count");
        this.langSelect = document.getElementById("lang-select");
        this.ancestryModeSelect = document.getElementById("ancestry-mode");
        this.backgroundModeSelect = document.getElementById("background-mode");
        this.contentEl = document.getElementById("generation-content");
        this.infoEl = document.getElementById("generation-info");
        this.logEl = document.getElementById("roll-log");
        this.qtyBtns = document.querySelectorAll(".qty-btn");

        this.init();
    }

    init() {
        this.generateBtn.addEventListener("click", () => this.generate());
        this.exportTxtBtn.addEventListener("click", () => this.exportTXT());
        this.exportPdfBtn.addEventListener("click", () => this.exportPDF());
        this.langSelect.addEventListener("change", (e) => this.setLanguage(e.target.value));
        this.ancestryModeSelect.addEventListener("change", (e) => this.setAncestryMode(e.target.value));
        this.backgroundModeSelect.addEventListener("change", (e) => this.setBackgroundMode(e.target.value));

        this.qtyBtns.forEach(btn => {
            btn.addEventListener("click", () => this.adjustCount(btn.dataset.action));
        });

        this.countInput.addEventListener("change", () => {
            const val = parseInt(this.countInput.value);
            this.countInput.value = Math.max(1, Math.min(20, val));
        });

        const savedLang = localStorage.getItem("shadowdark-l0-lang") || "pt-BR";
        const savedAncestry = localStorage.getItem("shadowdark-l0-ancestry") || "original";
        const savedBackground = localStorage.getItem("shadowdark-l0-background") || "detailed";
        
        this.langSelect.value = savedLang;
        this.ancestryModeSelect.value = savedAncestry;
        this.backgroundModeSelect.value = savedBackground;
        
        this.setLanguage(savedLang);
        this.setAncestryMode(savedAncestry);
        this.setBackgroundMode(savedBackground);
    }

    setLanguage(lang) {
        this.lang = lang;
        localStorage.setItem("shadowdark-l0-lang", lang);
        this.renderCharacters();
        this.renderRollLog();
    }

    setAncestryMode(mode) {
        this.ancestryMode = mode;
        localStorage.setItem("shadowdark-l0-ancestry", mode);
    }

    setBackgroundMode(mode) {
        this.backgroundMode = mode;
        localStorage.setItem("shadowdark-l0-background", mode);
    }

    adjustCount(action) {
        let val = parseInt(this.countInput.value);
        if (action === "increase") val = Math.min(20, val + 1);
        if (action === "decrease") val = Math.max(1, val - 1);
        this.countInput.value = val;
    }
generate() {
        const count = parseInt(this.countInput.value);
        this.characters = [];
        this.rollLog = [];

        this.generateBtn.disabled = true;
        this.generateBtn.innerHTML = '<img src="../../assets/icons/lucide/loader.svg" alt="" class="ui-icon" aria-hidden="true" style="animation: spin 1s linear infinite;"><span>Gerando...</span>';

        setTimeout(() => {
            for (let i = 0; i < count; i++) {
                this.characters.push(this.generateCharacter(i + 1));
            }

            this.renderCharacters();
            this.renderRollLog();

            this.generateBtn.disabled = false;
            this.generateBtn.innerHTML = '<img src="../../assets/icons/lucide/dice-5.svg" alt="" class="ui-icon" aria-hidden="true"><span>Gerar Personagens</span>';

            this.exportTxtBtn.disabled = false;
            this.exportPdfBtn.disabled = false;

            this.infoEl.hidden = false;
            this.showToast(this.getText("generated") + ": " + count, "success");
        }, 300);
    }

    generateCharacter(index) {
        const data = SHADOWDARK_DATA[this.lang];
        const attrs = [];

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
                rolls: roll.rolls,
                total: roll.total,
                mod: mod
            });
        });

        let ancestry;
        if (this.ancestryMode === "original") {
            const roll = Math.floor(Math.random() * data.ancestriesOriginal.length) + 1;
            ancestry = data.ancestriesOriginal[roll - 1];
            this.rollLog.push({
                character: index,
                type: "ancestry",
                roll: roll,
                die: "d" + data.ancestriesOriginal.length,
                ancestry: ancestry.name
            });
        } else {
            const allAncestries = [...data.ancestriesOriginal, ...data.ancestriesHomebrew];
            const roll = Math.floor(Math.random() * allAncestries.length) + 1;
            ancestry = allAncestries[roll - 1];
            this.rollLog.push({
                character: index,
                type: "ancestry",
                roll: roll,
                die: "d" + allAncestries.length,
                ancestry: ancestry.name,
                ancestryType: ancestry.type
            });
        }

        const conAttr = attrs.find(a => a.abbr === "CON");
        const conMod = conAttr ? conAttr.mod : 0;
        const hp = Math.max(1, conMod);
        
        this.rollLog.push({
            character: index,
            type: "hp",
            conMod: conMod,
            hp: hp
        });

        const background = pickRandom(data.backgrounds);
        this.rollLog.push({
            character: index,
            type: "background",
            background: background
        });

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

        let backgroundGear = [];
        if (this.backgroundMode === "detailed") {
            backgroundGear = data.backgroundEquipment[background] || ["Adaga (1d4)", "Rações (1 dia)"];
        }

        return {
            index,
            name: generateName(this.lang),
            ancestry: ancestry.name,
            ancestryType: ancestry.type,
            attributes: attrs,
            hp,
            conMod,
            background,
            backgroundGear,
            alignment,
            startingGear,
            gearCount
        };
    }

    getText(key) {
        return SHADOWDARK_DATA[this.lang][key];
    }
renderCharacters() {
        if (this.characters.length === 0) {
            this.contentEl.innerHTML = '<div class="empty-state"><img src="../../assets/icons/lucide/dice-5.svg" alt="" class="ui-icon empty-icon" aria-hidden="true" style="width: 4rem; height: 4rem; opacity: 0.3;"><p>Clique em <strong>Gerar Personagens</strong> para criar seus funis</p><p class="empty-hint">3d6 atributos, ancestralidade, PV=CON mod, background, alinhamento, equipamento</p></div>';
            return;
        }

        this.contentEl.innerHTML = '<div class="characters-grid">' + this.characters.map((char, i) => this.renderCharacterCard(char, i)).join("") + '</div>';

        this.contentEl.querySelectorAll(".field-reroll").forEach(btn => {
            btn.addEventListener("click", (e) => this.rerollField(e, btn));
        });
    }

    renderCharacterCard(char, index) {
        const data = SHADOWDARK_DATA[this.lang];
        const ancestryBadge = char.ancestryType === "homebrew" ? "homebrew" : "original";

        return '<article class="character-card" data-index="' + char.index + '"><header class="character-header"><h2 class="character-name">' + this.escapeHtml(char.name) + '</h2><div class="character-badges"><span class="character-class">' + this.escapeHtml(char.ancestry) + '</span><span class="ancestry-badge badge badge-' + ancestryBadge + '">' + (ancestryBadge === "homebrew" ? "Habilidades" : "Original") + '</span></div></header><div class="character-body"><div class="attributes-grid">' + char.attributes.map((attr, i) => '<div class="attribute"><span class="attribute-name">' + attr.abbr + '</span><span class="attribute-value">' + attr.total + '</span><span class="attribute-mod ' + (attr.mod >= 0 ? "positive" : "negative") + '">' + formatModifier(attr.mod) + '</span><button class="field-reroll" data-attr-index="' + i + '" data-char-index="' + char.index + '" aria-label="Rerolar ' + attr.name + '" title="Rerolar"><img src="../../assets/icons/lucide/arrow-right.svg" alt="" class="ui-icon" aria-hidden="true"></button></div>').join("") + '</div><div class="character-details"><div class="detail-row"><span class="detail-label">' + data.hpLabel + '</span><div class="hp-display"><span class="hp-value">' + char.hp + '</span><span class="hp-detail">(CON ' + formatModifier(char.conMod) + ')</span></div></div><div class="detail-row"><span class="detail-label">Background</span><span class="detail-value">' + this.escapeHtml(char.background) + '</span></div><div class="detail-row"><span class="detail-label">Alinhamento</span><span class="detail-value alignment-' + char.alignment.toLowerCase() + '">' + this.escapeHtml(char.alignment) + '</span></div>' + (this.backgroundMode === "detailed" && char.backgroundGear.length > 0 ? '<div class="detail-row"><span class="detail-label">Equip. Background</span><ul class="equipment-list">' + char.backgroundGear.map(item => '<li>' + this.escapeHtml(item) + '</li>').join("") + '</ul></div>' : '') + '<div class="detail-row"><span class="detail-label">Equip. Inicial (' + char.gearCount + ')</span><ul class="equipment-list">' + char.startingGear.map(item => '<li>' + this.escapeHtml(item) + '</li>').join("") + '</ul></div></div></div></article>';
    }
renderRollLog() {
        if (this.rollLog.length === 0) {
            this.logEl.innerHTML = "";
            return;
        }

        this.logEl.innerHTML = this.rollLog.map(entry => {
            switch(entry.type) {
                case "attribute":
                    return '<div class="roll-entry"><span class="roll-character">Personagem ' + entry.character + '</span><span class="roll-attribute">' + entry.attribute + '</span><span class="roll-dice">' + entry.rolls.join("+") + '</span><span class="roll-total">= ' + entry.total + ' (' + formatModifier(entry.mod) + ')' + (entry.reroll ? ' [RE-ROLAGEM]' : '') + '</span></div>';
                case "ancestry":
                    const typeLabel = entry.ancestryType === "homebrew" ? " [Habilidades]" : "";
                    return '<div class="roll-entry"><span class="roll-character">Personagem ' + entry.character + '</span><span class="roll-attribute">Ancestralidade (' + entry.die + ')</span><span class="roll-dice">' + entry.roll + '</span><span class="roll-total">' + entry.ancestry + typeLabel + '</span></div>';
                case "hp":
                    return '<div class="roll-entry"><span class="roll-character">Personagem ' + entry.character + '</span><span class="roll-attribute">' + this.getText("hpLabel") + '</span><span class="roll-dice">CON ' + formatModifier(entry.conMod) + '</span><span class="roll-total">= ' + entry.hp + '</span></div>';
                case "background":
                    return '<div class="roll-entry"><span class="roll-character">Personagem ' + entry.character + '</span><span class="roll-attribute">Background</span><span class="roll-profession">' + entry.background + '</span></div>';
                case "alignment":
                    return '<div class="roll-entry"><span class="roll-character">Personagem ' + entry.character + '</span><span class="roll-attribute">Alinhamento (d6)</span><span class="roll-dice">' + entry.roll + '</span><span class="roll-total">' + entry.alignment + '</span></div>';
                case "gear":
                    return '<div class="roll-entry"><span class="roll-character">Personagem ' + entry.character + '</span><span class="roll-attribute">Equip. Inicial (' + entry.count + ' itens)</span><span class="roll-dice">' + entry.rolls.join(",") + '</span><span class="roll-total">' + entry.gear.join(", ") + '</span></div>';
                default:
                    return "";
            }
        }).join("");
    }

    rerollField(event, btn) {
        event.stopPropagation();
        const charIndex = parseInt(btn.dataset.charIndex) - 1;
        const attrIndex = parseInt(btn.dataset.attrIndex);
        const char = this.characters[charIndex];
        const attr = char.attributes[attrIndex];

        const valueEl = btn.parentElement.querySelector(".attribute-value");
        const modEl = btn.parentElement.querySelector(".attribute-mod");
        valueEl.classList.add("rolling");

        setTimeout(() => {
            const roll = roll3d6();
            const mod = getModifier(roll.total);

            attr.rolls = roll.rolls;
            attr.total = roll.total;
            attr.mod = mod;

            if (attr.abbr === "CON") {
                char.conMod = mod;
                char.hp = Math.max(1, mod);
                const hpEl = btn.closest(".character-card").querySelector(".hp-value");
                if (hpEl) hpEl.textContent = char.hp;
                const hpDetailEl = btn.closest(".character-card").querySelector(".hp-detail");
                if (hpDetailEl) hpDetailEl.textContent = "(CON " + formatModifier(mod) + ")";
            }

            valueEl.textContent = roll.total;
            modEl.textContent = formatModifier(mod);
            modEl.className = "attribute-mod " + (mod >= 0 ? "positive" : "negative");

            this.rollLog.push({
                character: char.index,
                type: "attribute",
                attribute: attr.name,
                rolls: roll.rolls,
                total: roll.total,
                mod: mod,
                reroll: true
            });
            this.renderRollLog();

            valueEl.classList.remove("rolling");
        }, 300);
    }
exportTXT() {
        if (this.characters.length === 0) {
            this.showToast(this.getText("noCharacters"), "error");
            return;
        }

        const data = SHADOWDARK_DATA[this.lang];
        let output = "=== PERSONAGENS NÍVEL 0 - SHADOWDARK RPG ===\n";
        output += "Gerado em: " + new Date().toLocaleString(this.lang === "pt-BR" ? "pt-BR" : "en-US") + "\n";
        output += "Total: " + this.characters.length + " personagem(ns)\n\n";

        this.characters.forEach((char, i) => {
            output += "--- PERSONAGEM " + (i + 1) + " ---\n";
            output += "Nome: " + char.name + "\n";
            output += "Ancestralidade: " + char.ancestry + " (" + (char.ancestryType === "homebrew" ? "Habilidades" : "Original") + ")\n";
            output += "PV: " + char.hp + " (CON " + formatModifier(char.conMod) + ")\n";
            output += "Background: " + char.background + "\n";
            output += "Alinhamento: " + char.alignment + "\n\n";

            output += "ATRIBUTOS:\n";
            char.attributes.forEach(attr => {
                output += "  " + attr.abbr + ": " + attr.total + " [" + attr.rolls.join("+") + "] (" + formatModifier(attr.mod) + ")\n";
            });
            output += "\n";

            if (this.backgroundMode === "detailed" && char.backgroundGear.length > 0) {
                output += "EQUIPAMENTO DO BACKGROUND:\n";
                char.backgroundGear.forEach(item => {
                    output += "  - " + item + "\n";
                });
                output += "\n";
            }

            output += "EQUIPAMENTO INICIAL (" + char.gearCount + " itens):\n";
            char.startingGear.forEach(item => {
                output += "  - " + item + "\n";
            });
            output += "\n";
        });

        output += "=== REGISTRO DE ROLAGENS ===\n";
        this.rollLog.forEach(entry => {
            switch(entry.type) {
                case "attribute":
                    output += "Personagem " + entry.character + ": " + entry.attribute + " = " + entry.rolls.join("+") + " = " + entry.total + " (" + formatModifier(entry.mod) + ")" + (entry.reroll ? " [RE-ROLAGEM]" : "") + "\n";
                    break;
                case "ancestry":
                    output += "Personagem " + entry.character + ": Ancestralidade (" + entry.die + ") = " + entry.roll + " -> " + entry.ancestry + (entry.ancestryType === "homebrew" ? " [Habilidades]" : "") + "\n";
                    break;
                case "hp":
                    output += "Personagem " + entry.character + ": PV = CON " + formatModifier(entry.conMod) + " = " + entry.hp + "\n";
                    break;
                case "background":
                    output += "Personagem " + entry.character + ": Background = " + entry.background + "\n";
                    break;
                case "alignment":
                    output += "Personagem " + entry.character + ": Alinhamento (d6) = " + entry.roll + " -> " + entry.alignment + "\n";
                    break;
                case "gear":
                    output += "Personagem " + entry.character + ": Equip. Inicial (" + entry.count + ") = " + entry.rolls.join(",") + " -> " + entry.gear.join(", ") + "\n";
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

        this.showToast(this.getText("exported"), "success");
    }

    exportPDF() {
        this.showToast("Exportação PDF em desenvolvimento", "info");
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
            toast.style.animation = "slide-in 0.3s ease reverse";
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }
}

// Inicializa
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => new LevelZeroGenerator());
} else {
    new LevelZeroGenerator();
}
}());