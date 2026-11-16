(function () {
    "use strict";
    window.NPC_DATA = {
        ancestry: [["Human","Humano"],["Elf","Elfo"],["Dwarf","Anão"],["Halfling","Halfling"],["Half-orc","Meio-orc"],["Goblin","Goblin"]],
        age: [["Child","Criança"],["Adolescent","Adolescente"],["Adult","Adulto"],["Middle-aged","Meia-idade"],["Elderly","Idoso"],["Ancient","Ancião"]],
        alignment: [["Lawful","Ordeiro"],["Neutral","Neutro"],["Chaotic","Caótico"]],
        wealth: [["Poor","Pobre"],["Standard","Padrão"],["Wealthy","Abastada"],["Extravagant","Exorbitante"]],
        quality: [
            ["Balding","Careca","Spits","Cospe","Hiding a fugitive","Esconde um fugitivo"], ["Stocky build","Atarracado","Always eating","Está sempre comendo","Adores baby animals","Adora filhotes de animais"],
            ["Very tall","Muito alto","Moves quickly","Move-se com rapidez","Obsessed with fire","É obcecado por fogo"], ["Beauty mark","Sinal de beleza","Card tricks","Faz truques com cartas","In a religious cult","Faz parte de um culto religioso"],
            ["One eye","Caolho","Prays aloud","Reza em voz alta","Is a half-demon","É meio-demônio"], ["Braided hair","Cabelo trançado","Writes in diary","Escreve em um diário","Was a wizard's apprentice","Foi aprendiz de mago"],
            ["Muscular","Musculoso","Apologetic","Pede desculpas por tudo","Needlessly picks pockets","Furta sem necessidade"], ["White hair","Cabelo branco","Slaps backs","Dá tapinhas nas costas","Has a false identity","Tem uma identidade falsa"],
            ["Scar on face","Cicatriz no rosto","Drops things","Deixa coisas caírem","Afraid of storms","Tem medo de tempestades"], ["Willowy build","Esbelto","Swears oaths","Faz juramentos","Has functional gills","Tem guelras funcionais"],
            ["Sweaty","Suado","Makes puns","Faz trocadilhos","In deep gambling debt","Está muito endividado com jogos"], ["Cleft chin","Queixo fendido","Rare accent","Tem um sotaque incomum","Works as a smuggler","Trabalha como contrabandista"],
            ["Frail","Frágil","Easily spooked","Assusta-se facilmente","Is a werewolf","É um lobisomem"], ["Big eyebrows","Sobrancelhas grossas","Forgetful","É esquecido","Can actually smell lies","Consegue sentir o cheiro de mentiras"],
            ["Tattooed","Tatuado","Speaks quietly","Fala baixo","Cast out of wealthy family","Foi expulso de uma família rica"], ["Floppy hat","Chapéu mole","Twitches","Tem espasmos","In love with a bartender","Está apaixonado por alguém do balcão"],
            ["Gold tooth","Dente de ouro","Moves slowly","Move-se devagar","Left the Thieves' Guild","Abandonou a Guilda dos Ladrões"], ["Six fingers","Seis dedos","Speaks loudly","Fala alto","Best friends with a prince","É melhor amigo de um príncipe"],
            ["Very short","Muito baixo","Swaggers","Anda com arrogância","Retired crawler","Aposentou-se da exploração de masmorras"], ["Large nose","Nariz grande","Smokes pipe","Fuma cachimbo","Has a pet basilisk","Tem um basilisco de estimação"]
        ],
        occupations: [
            [["Gravedigger","Coveiro"],["Carpenter","Carpinteiro"],["Scholar","Estudioso"],["Blacksmith","Ferreiro"]],
            [["Tax collector","Cobrador de impostos"],["Farmer","Fazendeiro"],["Bartender","Bartender"],["Beggar","Mendigo"]],
            [["Baker","Padeiro"],["Cook","Cozinheiro"],["Sailor","Marinheiro"],["Butcher","Açougueiro"]],
            [["Locksmith","Chaveiro"],["Cobbler","Sapateiro"],["Friar/nun","Frei/freira"],["Merchant","Mercador"]]
        ],
        names: [
            ["Hera","Sarenia","Kog","Myrtle","Torga","Hesta"],["Torin","Ravos","Dibbs","Robby","Boraal","Matteo"],["Ginny","Imeria","Fronk","Nora","Urgana","Rosalin"],["Gant","Farond","Irv","Percy","Zoraal","Merlin"],["Olga","Isolden","Squag","Daisy","Scalga","Kiara"],
            ["Dendor","Kieren","Mort","Jolly","Krell","Yao"],["Ygrid","Mirenel","Vig","Evelyn","Korina","Corina"],["Pike","Riarden","Sticks","Horace","Morak","Rowan"],["Sarda","Allindra","Gorb","Willie","Draga","Hariko"],["Brigg","Arlomas","Yogg","Gertie","Sorak","Ikam"],
            ["Zorli","Sylara","Plok","Peri","Varga","Mariel"],["Yorin","Tyr","Zrak","Carlsby","Ulgar","Jin"],["Jorgena","Rinariel","Dent","Nyx","Jala","Hana"],["Trogin","Saramir","Krik","Kellan","Kresh","Lios"],["Riga","Vedana","Mizzo","Fern","Zana","Indra"],
            ["Barton","Elindos","Bort","Harlow","Torvash","Remy"],["Katrina","Ophelia","Nabo","Moira","Rokara","Nura"],["Egrim","Cydaros","Hink","Sage","Gartak","Vakesh"],["Elsa","Tiramel","Bree","Reenie","Iskana","Una"],["Orgo","Varond","Kreeb","Wendry","Ziraak","Nabilo"]
        ],
        syllables: [
            ["Ir","an","l","-int"],["Van","ish","n","-us"],["Cyr","tos","pil","-ios"],["Den","zar","g","-el"],["Cor","ven","z","-inne"],
            ["Hil","sen","bor","-os"],["Sal","win","t","-ian"],["Bri","on","c","-ius"],["Mar","en","ar","-iol"],["Gar","lin","q","-an"],
            ["Tin","sor","v","-isk"],["Vor","oc","iv","-erg"],["Nel","vyn","ov","-ent"],["Ri","al","b","-ial"],["Quor","osh","den","-ant"],
            ["Bal","er","k","-iel"],["Mur","in","s","-onne"],["Par","el","r","-org"],["Tor","un","jen","-enne"],["Lem","nar","w","-ynne"]
        ],
        identifiers: [["The Gray","One-Eye","The Lesser","The Cunning"],["Silvertongue","The Outcast","Fasthands","The Bold"],["The Elder","The Charmer","The Exiled","The Wise"],["Tree-Speaker","The Craven","The Red","Six-Finger"]],
        identifierPt: [["O Cinzento","Caolho","O Menor","O Astuto"],["Língua de Prata","O Exilado","Mãos Rápidas","O Destemido"],["O Ancião","O Encantador","O Banido","O Sábio"],["Fala com Árvores","O Covarde","O Vermelho","Seis Dedos"]],
        rivalClass: [["Fighter","Guerreiro"],["Priest","Sacerdote"],["Thief","Ladrão"],["Wizard","Mago"]],
        renown: [["Unknown","Desconhecida"],["Locally known","Conhecida localmente"],["Widely recognized","Amplamente reconhecida"],["Extremely famous","Extremamente famosa"]],
        rivalSecret: [["Betrayed an oath","Quebrou um juramento"],["False/stolen identities","Identidades falsas/roubadas"],["In debt to Thieves' Guild","Deve à Guilda dos Ladrões"],["Map to major treasure","Mapa para um grande tesouro"],["Suffering a curse","Sofre uma maldição"],["Has a powerful patron","Tem um patrono poderoso"]],
        partyFirst: [["The Savage","Selvagens"],["The Steel","de Aço"],["The Icy","Gelados"],["Hell's","Infernais"],["The Dread","Temíveis"],["The Marvelous","Maravilhosos"],["The Flaming","Flamejantes"],["The Lone","Solitários"],["The Noble","Nobres"],["The Mighty","Poderosos"],["The Iron","de Ferro"],["The Devil's","do Diabo"],["The Emerald","Esmeraldas"],["The Vigilant","Vigilantes"],["The Lightless","sem Luz"],["The Forest","da Floresta"],["Death's","da Morte"],["The Dark","Sombrios"],["The Thundering","Trovejante"],["The Divine","Divinos"]],
        partySecond: [["Wardens","Guardiões"],["Skulls","Crânios"],["Guardians","Protetores"],["Hammers","Martelos"],["Rangers","Patrulheiros"],["Explorers","Exploradores"],["Moon","Lua"],["Wolves","Lobos"],["Delvers","Exploradores"],["Dawn","Alvorada"],["Drakes","Dracos"],["Miscreants","Patifes"],["Scimitars","Cimitarras"],["Storm","Tempestade"],["Trackers","Rastreadores"],["Oath","Juramento"],["Sentinels","Sentinelas"],["Lions","Leões"],["Knights","Cavaleiros"],["Hunters","Caçadores"]],
        partyKnown: [["Defeating a dragon","Derrotar um dragão"],["Specializing in undead","Especializar-se em mortos-vivos"],["Zealous worship of a god","Adorar fervorosamente uma divindade"],["Slaying a two-headed ogre","Abater um ogro de duas cabeças"],["Going missing for a year","Desaparecer por um ano"],["Taking monster trophies","Colecionar troféus de monstros"],["Setting taverns on fire","Incendiar tavernas"],["Their signature clothing","Usar roupas inconfundíveis"],["Brashness and arrogance","Ser atrevidos e arrogantes"],["A disastrous expedition","Uma expedição desastrosa"],["Dabbling in evil magic","Praticar magia maligna"],["Their frenzied admirers","Ter admiradores frenéticos"],["Serving in a brutal war","Servir em uma guerra brutal"],["Large gambling debts","Ter grandes dívidas de jogo"],["Their pet lion","Ter um leão de estimação"],["Surviving the fall of Korint","Sobreviver à queda de Korint"],["Finding a legendary sword","Encontrar uma espada lendária"],["Spying on other crawlers","Espionar outros exploradores"],["Defeating a necromancer","Derrotar um necromante"],["Poaching treasure finds","Surrupiar tesouros encontrados"]],
        tactics: [
            [["Always negotiate","Always negotiate"],["Scout and sneak","Scout and sneak"],["Ambush rivals","Emboscar rivais"]],
            [["Fight honorably","Lutar com honra"],["Follow rivals","Seguir rivais"],["Sacrifice NPCs","Sacrificar NPCs"]],
            [["Never use stealth","Nunca usar furtividade"],["Cache resources","Esconder recursos"],["Kill everything","Matar tudo"]],
            [["Loyal followers","Seguidores leais"],["Buy information","Comprar informações"],["Target the helpless","Atacar os indefesos"]]
        ]
    };
})();
