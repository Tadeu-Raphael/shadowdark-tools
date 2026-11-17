// Shadowdark RPG Bestiary Data
// Extracted from the Shadowdark RPG Rulebook (v4.6)
// All 238 monsters from the official bestiary
// English canon fields plus *_pt translations for pt-BR.

window.BESTIARY_DATA = {
    monsters: [
        {
                "name": "ABOLETH",
                "description": "Enormous, antediluvian catfish covered in slime and tentacles. They hate all intelligent beings.",
                "description_pt": "Enorme bagre antediluviano coberto de limo e tentáculos. Eles odeiam todos os seres inteligentes.",
                "ac": "16",
                "hp": 39,
                "hp_raw": "39",
                "atk": "2 tentacle (near) +5 (1d8 + curse) or 1 tail +5 (3d6)",
                "atk_pt": "2 tentáculos (near) +5 (1d8 + maldição) ou 1 cauda +5 (3d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 4,
                "d": -1,
                "c": 3,
                "i": 4,
                "w": 2,
                "ch": 2,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Curse. DC 15 CON or target gains a magical curse, turning into a deep one over 2d10 days.",
                        "pt": "Maldição. DC 15 CON ou o alvo ganha uma maldição mágica, transformando-se em uma maldição profunda ao longo de 2d10 dias."
                    },
                    {
                        "en": "Enslave. In place of attacks, one creature within far DC 15 WIS or aboleth controls for 1d4 rounds.",
                        "pt": "Escravizar. No lugar dos ataques, uma criatura dentro de far DC 15 WIS ou aboleth controla por 1d4 rodadas."
                    },
                    {
                        "en": "Telepathic. Read the thoughts of all creatures within far.",
                        "pt": "Telepata. Leia os pensamentos de todas as criaturas dentro de far."
                    }
                ]
        },
        {
                "name": "ACOLYTE",
                "description": "A religious trainee who knows basic rites and rituals.",
                "description_pt": "Um estagiário religioso que conhece ritos e rituais básicos.",
                "ac": "12",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 mace +1 (1d6) or 1 spell +2",
                "atk_pt": "1 maça +1 (1d6) ou 1 magia +2",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": -1,
                "c": 0,
                "i": -1,
                "w": 2,
                "ch": 0,
                "al": "L",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Healing Touch (WIS Spell). DC 11. Heal one creature within close for 1d4 HP.",
                        "pt": "Toque de Cura (Magia SAB). DC 11. Cure uma criatura dentro de close por 1d4 HP."
                    }
                ]
        },
        {
                "name": "ANGEL, DOMINI",
                "description": "Winged, flawless humans glowing with bronze sunlight.",
                "description_pt": "Humanos alados e perfeitos brilhando com a luz bronzeada do sol.",
                "ac": "17 (plate mail + shield)",
                "hp": 42,
                "hp_raw": "42",
                "atk": "3 bastard sword +7 (1d8) or 1 horn",
                "atk_pt": "3 espadas bastardas +7 (1d8) ou 1 chifre",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 4,
                "d": 1,
                "c": 2,
                "i": 3,
                "w": 4,
                "ch": 4,
                "al": "L",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Horn. All enemies in near DC 15 CHA or paralyzed 1d4 rounds.",
                        "pt": "Chifre. Todos os inimigos em near DC 15 CHA ou paralisados 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "ANGEL, PRINCIPI",
                "description": "Serene humans sculpted from alabaster. Golden orbs for eyes.",
                "description_pt": "Humanos serenos esculpidos em alabastro. Orbes douradas para os olhos.",
                "ac": "16 (+1 plate mail)",
                "hp": 53,
                "hp_raw": "53",
                "atk": "3 silvered bastard sword +9 (1d10)",
                "atk_pt": "3 espadas bastardas prateadas +9 (1d10)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 2,
                "c": 4,
                "i": 4,
                "w": 4,
                "ch": 4,
                "al": "L",
                "lv": 11,
                "lv_raw": "11",
                "abilities": [
                    {
                        "en": "Moonlight Aura. Hostile spells targeting the principi are DC 15.",
                        "pt": "Aura de Luar. Magias hostis direcionados aos principi são DC 15."
                    },
                    {
                        "en": "Truesight. Can see all invisible creatures and objects.",
                        "pt": "Visão Verdadeira. Pode ver todas as criaturas e objetos invisíveis."
                    }
                ]
        },
        {
                "name": "ANGEL, SERAPH",
                "description": "Beautiful, luminous humanoids with white-feathered wings.",
                "description_pt": "Humanóides lindos e luminosos com asas de penas brancas.",
                "ac": "14 (chainmail)",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 longsword +3 (1d8)",
                "atk_pt": "2 espada longa +3 (1d8)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 3,
                "d": 1,
                "c": 1,
                "i": 2,
                "w": 3,
                "ch": 3,
                "al": "L",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Bless. 3/day, touch one target to give it a luck token.",
                        "pt": "Bênção. 3/dia, toque em um alvo para dar-lhe uma ficha de sorte."
                    }
                ]
        },
        {
                "name": "ANIMATED ARMOR",
                "description": "An old suit of armor magically animated by a vengeful spirit.",
                "description_pt": "Uma velha armadura magicamente animada por um espírito vingativo.",
                "ac": "15",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 longsword +3 (1d8)",
                "atk_pt": "1 espada longa +3 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": -1,
                "c": 2,
                "i": -1,
                "w": 1,
                "ch": 0,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Statue. When standing still, looks exactly like a suit of armor.",
                        "pt": "Estátua. Quando parado, parece exatamente uma armadura."
                    }
                ]
        },
        {
                "name": "ANKHEG",
                "description": "Horse-sized, rust-brown insects. They burrow vast, underground warrens into the bedrock.",
                "description_pt": "Insetos marrom-ferrugem do tamanho de um cavalo. Eles burrow vastos labirintos subterrâneos no leito rochoso.",
                "ac": "14",
                "hp": 14,
                "hp_raw": "14",
                "atk": "1 bite +4 (1d6) or 1 acid spray (near) +4 (2d6)",
                "atk_pt": "1 mordida +4 (1d6) ou 1 spray ácido (near) +4 (2d6)",
                "mv": "near (burrow)",
                "mv_pt": "near (burrow)",
                "s": 2,
                "d": 2,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "APE",
                "description": "Hooting, omnivorous apes that live in trees.",
                "description_pt": "Macacos onívoros e piadores que vivem nas árvores.",
                "ac": "12",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 fist +2 (1d6) or 1 rock (far) +2 (1d4)",
                "atk_pt": "1 punho +2 (1d6) ou 1 pedra (far) +2 (1d4)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": 2,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "APE, SNOW",
                "description": "White-haired, carnivorous gorillas that stalk the high mountains and live in caves.",
                "description_pt": "Gorilas carnívoros de cabelos brancos que perseguem as altas montanhas e vivem em cavernas.",
                "ac": "13",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 fist +4 (1d6) or 1 rock (far) +4 (2d6)",
                "atk_pt": "2 punhos +4 (1d6) ou 1 pedra (far) +4 (2d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 1,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Thick Fur. Cold immune.",
                        "pt": "Pelo Espesso. Imune ao frio."
                    }
                ]
        },
        {
                "name": "APPRENTICE",
                "description": "A cloaked magician with a thin, freshly bound spellbook.",
                "description_pt": "Um mágico encapuzado com um livro de feitiços fino e recém-encadernado.",
                "ac": "11",
                "hp": 3,
                "hp_raw": "3",
                "atk": "1 dagger (close/ near) +1 (1d4) or 1 spell +2",
                "atk_pt": "1 adaga (close/ near) +1 (1d4) ou 1 magia +2",
                "mv": "near",
                "mv_pt": "near",
                "s": -1,
                "d": 1,
                "c": -1,
                "i": 2,
                "w": 0,
                "ch": 0,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Beguile (INT Spell). DC 11.",
                        "pt": "Iludir (Magia INT). DC 11."
                    },
                    {
                        "en": "Focus. One target in near of LV 2 or less is stupefied for the duration.",
                        "pt": "Foco. Um alvo em near de LV 2 ou menos fica estupefato durante a duração."
                    },
                    {
                        "en": "Magic Bolt (INT Spell). DC 11. 1d4 damage to one target within far.",
                        "pt": "Raio Mágico (Magia INT). DC 11. 1d4 de dano a um alvo dentro de far."
                    }
                ]
        },
        {
                "name": "ARCHANGEL",
                "description": "A radiant being with a crown of fire, snowy wings, golden armor, and a blazing greatsword.",
                "description_pt": "Um ser radiante com uma coroa de fogo, asas nevadas, armadura dourada e uma espada larga em chamas.",
                "ac": "18 (+3 plate mail)",
                "hp": 76,
                "hp_raw": "76",
                "atk": "3 flaming greatsword +10 (2d12)",
                "atk_pt": "3 espada larga flamejante +10 (2d12)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 5,
                "d": 2,
                "c": 4,
                "i": 4,
                "w": 5,
                "ch": 5,
                "al": "L",
                "lv": 16,
                "lv_raw": "16",
                "abilities": [
                    {
                        "en": "Command. DC 18 CHA to resist an archangel's command. Crown of Fire. Hostile spells targeting the archangel are extreme (DC 18) to cast.",
                        "pt": "Comando. DC 18 CHA para resistir ao comando de um arcanjo. Coroa de Fogo. Magias hostis direcionados ao arcanjo são extremos (DC 18) de serem lançados."
                    }
                ]
        },
        {
                "name": "ARCHDEVIL",
                "description": "A stunningly beautiful, horned human with burning, red eyes and a halo of seven black stars. Two stitched-up gashes weep blood from its shoulder blades.",
                "description_pt": "Um humano belíssimo, com chifres, olhos vermelhos ardentes e um halo de sete estrelas negras. Dois cortes costurados escorrem sangue de suas omoplatas.",
                "ac": "19",
                "hp": 76,
                "hp_raw": "76",
                "atk": "4 iron scepter +10 (3d10) or 1 soulbind",
                "atk_pt": "4 cetros de ferro +10 (3d10) ou 1 vínculo de alma",
                "mv": "far (teleport)",
                "mv_pt": "far (teleport)",
                "s": 5,
                "d": 4,
                "c": 4,
                "i": 5,
                "w": 4,
                "ch": 7,
                "al": "C",
                "lv": 16,
                "lv_raw": "16",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune. Only damaged by magical sources. Crown of Darkness. All hostile spells are reflected at caster with a spellcasting check less than 20.",
                        "pt": "Impermeável. Imune ao fogo. Danificado apenas por fontes mágicas. Coroa das Trevas. Todas as magias hostis são refletidas no lançador com um teste de conjuração menor que 20."
                    },
                    {
                        "en": "Soulbind. All targets within near DC 20 CHA or fall under control of archdevil for 1d4 rounds. DC 20 CHA on turn to end the effect.",
                        "pt": "Vínculo de Alma. Todos os alvos dentro de near DC 20 CHA ou ficarão sob o controle do arquidiabo por 1d4 rodadas. DC 20 CHA no turno para encerrar o efeito."
                    }
                ]
        },
        {
                "name": "ARCHMAGE",
                "description": "A wizened magic-user crackling with arcane power.",
                "description_pt": "Um usuário de magia enrugado crepitando com poder arcano.",
                "ac": "12",
                "hp": 44,
                "hp_raw": "44",
                "atk": "2 spell +7",
                "atk_pt": "2 feitiço +7",
                "mv": "near",
                "mv_pt": "near",
                "s": -1,
                "d": 2,
                "c": -1,
                "i": 4,
                "w": 2,
                "ch": 1,
                "al": "L",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Death Bolt (INT Spell). DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP.",
                        "pt": "Raio da Morte (Magia INT). DC 15. Um alvo de LV 9 ou menos dentro de near DC 15 CON ou vá para 0 HP."
                    },
                    {
                        "en": "Enervate (INT Spell). DC 14.",
                        "pt": "Enervar (Magia INT). DC 14."
                    },
                    {
                        "en": "Focus. One target within near is stupefied for the duration.",
                        "pt": "Foco. Um alvo dentro de near fica estupefato enquanto durar."
                    },
                    {
                        "en": "Fireblast (INT Spell). DC 14. 4d6 damage to all within a near- sized cube within far.",
                        "pt": "Rajada de Fogo (Magia INT). DC 14. 4d6 de dano a todos dentro de um cubo de near dentro de far."
                    },
                    {
                        "en": "Float (INT Spell).",
                        "pt": "Flutuar (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 14. Fly double near for 5 rounds.",
                        "pt": "Próprio. DC 14. Voe double near por 5 rodadas."
                    },
                    {
                        "en": "Mithralskin (INT Spell).",
                        "pt": "Pele de Mithral (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 14. AC becomes 18 for 5 rounds.",
                        "pt": "Próprio. DC 14. AC torna-se 18 por 5 rodadas."
                    },
                    {
                        "en": "Void Step (INT Spell). Self and up to 4 willing targets. DC 15. Teleport up to 100 miles.",
                        "pt": "Passo do Vazio (Magia INT). Próprio e até 4 alvos voluntários. DC 15. Teletransporte até 100 milhas."
                    }
                ]
        },
        {
                "name": "ASSASSIN",
                "description": "A black-cloaked, skulking killer.",
                "description_pt": "Um assassino escondido e encapuzado de preto.",
                "ac": "15 (leather)",
                "hp": 38,
                "hp_raw": "38",
                "atk": "2 poisoned dagger (close/near) +6 (2d4)",
                "atk_pt": "2 adagas envenenadas (close/near) +6 (2d4)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": 4,
                "c": 2,
                "i": 2,
                "w": 3,
                "ch": 3,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Execute. Deals x3 damage against surprised targets.",
                        "pt": "Executar. Causa x3 de dano contra alvos surpresos."
                    }
                ]
        },
        {
                "name": "AZER",
                "description": "Dwarves with bronze, metallic skin and flames in place of hair. Gifted blacksmiths.",
                "description_pt": "Anões com bronze, pele metálica e chamas no lugar dos cabelos. Ferreiros talentosos.",
                "ac": "15",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 flaming warhammer +3 (1d10, ignites flammables) or 1 crossbow (far) +0 (1d6)",
                "atk_pt": "2 martelos de guerra flamejantes +3 (1d10, acende inflamáveis) ou 1 besta (far) +0 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 2,
                "i": 0,
                "w": 0,
                "ch": 0,
                "al": "L",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune.",
                        "pt": "Impermeável. Imune ao fogo."
                    }
                ]
        },
        {
                "name": "BADGER",
                "description": "Fierce, clawed burrowers with black-and-white face stripes.",
                "description_pt": "Escavadores ferozes com garras e listras pretas e brancas no rosto.",
                "ac": "11",
                "hp": 5,
                "hp_raw": "5",
                "atk": "2 claw +2 (1d4)",
                "atk_pt": "2 garras +2 (1d4)",
                "mv": "near (burrow)",
                "mv_pt": "near (burrow)",
                "s": 2,
                "d": 0,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds).",
                        "pt": "Fúria. 1/dia, imune a verificações de moral, +1d4 de dano (3 rodadas)."
                    }
                ]
        },
        {
                "name": "BANDIT",
                "description": "Hard-bitten rogue in tattered leathers and a hooded cloak.",
                "description_pt": "Ladino durão em couro esfarrapado e uma capa com capuz.",
                "ac": "13 (leather + shield)",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 club +1 (1d4) or 1 shortbow (far) +0 (1d4)",
                "atk_pt": "1 taco +1 (1d4) ou 1 arco curto (far) +0 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 0,
                "c": 0,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Ambush. Deal an extra die of damage when undetected.",
                        "pt": "Emboscada. Cause um dado extra de dano quando não for detectado."
                    }
                ]
        },
        {
                "name": "BASILISK",
                "description": "Massive, muscled lizards with six legs and gray, tough hide.",
                "description_pt": "Lagartos enormes e musculosos com seis patas e pele cinzenta e resistente.",
                "ac": "14",
                "hp": 25,
                "hp_raw": "25",
                "atk": "2 bite +4 (2d6 + petrify)",
                "atk_pt": "2 mordidas +4 (2d6 + petrificar)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 1,
                "c": 3,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Petrify. Any creature that touches the basilisk or meets its gaze, DC 15 CON or petrified.",
                        "pt": "Petrificar. Qualquer criatura que toque o basilisco ou encontre seu olhar, DC 15 CON ou petrificada."
                    }
                ]
        },
        {
                "name": "BAT, GIANT",
                "description": "Leathery, eagle-sized mammal with a taste for flesh.",
                "description_pt": "Mamífero coriáceo do tamanho de uma águia com gosto por carne.",
                "ac": "12",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 bite +2 (1d6)",
                "atk_pt": "1 mordida +2 (1d6)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -1,
                "d": 2,
                "c": 0,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "BAT, SWARM",
                "description": "A whirling cloud of screeching, bloodthirsty bats.",
                "description_pt": "Uma nuvem rodopiante de morcegos barulhentos e sedentos de sangue.",
                "ac": "12",
                "hp": 18,
                "hp_raw": "18",
                "atk": "3 bite +2 (1d6)",
                "atk_pt": "3 mordidas +2 (1d6)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -3,
                "d": 2,
                "c": 0,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                ]
        },
        {
                "name": "BEAR, BROWN",
                "description": "A hulking, swaying brute with claws as long as a finger.",
                "description_pt": "Um bruto corpulento e oscilante com garras do tamanho de um dedo.",
                "ac": "13",
                "hp": 25,
                "hp_raw": "25",
                "atk": "2 claw +4 (1d8)",
                "atk_pt": "2 garras +4 (1d8)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Crush. Deals an extra die of damage if it hits the same target with both claws.",
                        "pt": "Esmagar. Causa um dado extra de dano se atingir o mesmo alvo com ambas as garras."
                    }
                ]
        },
        {
                "name": "BEAR, POLAR",
                "description": "A mighty, white bear that thrives in arctic environments.",
                "description_pt": "Um urso branco poderoso que prospera em ambientes árticos.",
                "ac": "13",
                "hp": 34,
                "hp_raw": "34",
                "atk": "2 claw +6 (2d6)",
                "atk_pt": "2 garras +6 (2d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Crush. Deals an extra die of damage if it hits the same target with both claws.",
                        "pt": "Esmagar. Causa um dado extra de dano se atingir o mesmo alvo com ambas as garras."
                    },
                    {
                        "en": "Thick Fur. Cold immune.",
                        "pt": "Pelo Espesso. Imune ao frio."
                    }
                ]
        },
        {
                "name": "BEASTMAN",
                "description": "A cave hominid with scraggly fur and a stone-tipped spear.",
                "description_pt": "Um hominídeo das cavernas com pêlo desgrenhado e uma lança com ponta de pedra.",
                "ac": "12 (leather)",
                "hp": 5,
                "hp_raw": "5",
                "atk": "1 spear (close/near) +2 (1d6 + 1)",
                "atk_pt": "1 lança (close/near) +2 (1d6 + 1)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -1,
                "al": "C",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Brutal. +1 damage with melee weapons (included).",
                        "pt": "Brutal. +1 de dano com armas brancas (incluídas)."
                    }
                ]
        },
        {
                "name": "BERSERKER",
                "description": "Howling, battleraging warriors.",
                "description_pt": "Guerreiros uivantes e furiosos.",
                "ac": "12 (leather)",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 greataxe +2 (1d10) or 1 spear (close/near) +2 (1d6)",
                "atk_pt": "1 machado grande +2 (1d10) ou 1 lança (close/near) +2 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": 0,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds).",
                        "pt": "Fúria. 1/dia, imune a verificações de moral, +1d4 de dano (3 rodadas)."
                    }
                ]
        },
        {
                "name": "BLACK PUDDING",
                "description": "A black, ice-cold mass of sludge.",
                "description_pt": "Uma massa negra e gelada de lama.",
                "ac": "9",
                "hp": 30,
                "hp_raw": "30",
                "atk": "3 tentacle +4 (2d6)",
                "atk_pt": "3 tentáculos +4 (2d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": -1,
                "c": 3,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by fire.",
                        "pt": "Impermeável. Apenas danificado pelo fogo."
                    },
                    {
                        "en": "Corrosive. Wood or metal that touches the ooze dissolves on a d6 roll of 1-3.",
                        "pt": "Corrosivo. Madeira ou metal que toca a gosma se dissolve em uma jogada de d6 de 1-3."
                    }
                ]
        },
        {
                "name": "BOAR",
                "description": "Ornery wild pig with bristly, russet hair and yellowed tusks.",
                "description_pt": "Porco selvagem teimoso, com cabelos ruivos e eriçados e presas amareladas.",
                "ac": "12",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 tusk +3 (1d6)",
                "atk_pt": "2 presas +3 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Gore. Deals an extra die of damage if it hits the same target with both tusks.",
                        "pt": "Chifrada. Causa um dado extra de dano se atingir o mesmo alvo com ambas as presas."
                    }
                ]
        },
        {
                "name": "BRACHIOSAURUS",
                "description": "Colossal, long-necked tree grazers. Slow and peaceful.",
                "description_pt": "Pastadores de árvores colossais e de pescoço comprido. Lento e pacífico.",
                "ac": "13",
                "hp": 57,
                "hp_raw": "57",
                "atk": "3 stomp +7 (2d10)",
                "atk_pt": "3 pisadas +7 (2d10)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 6,
                "d": -1,
                "c": 3,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 12,
                "lv_raw": "12",
                "abilities": [
                ]
        },
        {
                "name": "BRAIN EATER",
                "description": "Purple, gaunt humanoids with squidlike heads and four face tentacles. They live in complex, alien societies underground and eat humanoid brains.",
                "description_pt": "Humanóides roxos e magros com cabeças de lula e quatro tentáculos faciais. Eles vivem em sociedades alienígenas complexas no subsolo e comem cérebros humanóides.",
                "ac": "14 (leather)",
                "hp": 36,
                "hp_raw": "36",
                "atk": "4 tentacle +5 (1d8 + latch) or 1 mind blast or 1 mind control",
                "atk_pt": "4 tentáculos +5 (1d8 + trava) ou 1 explosão mental ou 1 controle mental",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 3,
                "c": 0,
                "i": 4,
                "w": 2,
                "ch": 4,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Hear Thoughts. Can hear the surface thoughts of all intelligent creatures within near.",
                        "pt": "Ouvir Pensamentos. Pode ouvir os pensamentos superficiais de todas as criaturas inteligentes dentro de near."
                    },
                    {
                        "en": "Latch. Tentacles attach to hit targets, automatically hitting the next round (DC 12 STR on turn to remove 1d4 tentacles). If all four remain latched onto the same humanoid target for 1 round, the target's brain is ripped out and devoured.",
                        "pt": "Prender. Os tentáculos são anexados aos alvos atingidos, atingindo automaticamente a próxima rodada (DC 12 STR no turno para remover 1d4 tentáculos). Se todos os quatro permanecerem presos no mesmo alvo humanóide por 1 rodada, o cérebro do alvo é arrancado e devorado."
                    },
                    {
                        "en": "Mind Blast. Fills a near-sized cube extending from brain eater. DC 15 INT or 3d6 damage and paralyzed 1d4 rounds.",
                        "pt": "Explosão Mental. Preenche um cubo de tamanho near que se estende do comedor de cérebro. DC 15 INT ou 3d6 dano e paralisação 1d4 rodadas."
                    },
                    {
                        "en": "Mind Control. One target in near DC 15 CHA or brain eater controls for 1d4 rounds.",
                        "pt": "Controle Mental. Um alvo em near DC 15 CHA ou controles devoradores de cérebro por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "BUGBEAR",
                "description": "Brutish, bat-eared goblinoids covered in brown fur.",
                "description_pt": "Goblinóides brutais com orelhas de morcego e cobertos de pelos marrons.",
                "ac": "13 (leather + shield)",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 spiked mace +3 (1d6)",
                "atk_pt": "2 maças com pontas +3 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 1,
                "i": -1,
                "w": 0,
                "ch": -2,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Stealthy. ADV on checks to sneak and hide.",
                        "pt": "Furtivo. ADV em cheques para se esgueirar e se esconder."
                    }
                ]
        },
        {
                "name": "BULETTE",
                "description": "A hulking, shark-sized lizard with a steely, arrow-shaped carapace and a massive gullet.",
                "description_pt": "Um lagarto enorme, do tamanho de um tubarão, com uma carapaça de aço em forma de flecha e uma garganta enorme.",
                "ac": "17",
                "hp": 40,
                "hp_raw": "40",
                "atk": "3 bite +5 (2d6) or 1 leap",
                "atk_pt": "3 mordidas +5 (2d6) ou 1 salto",
                "mv": "near (burrow)",
                "mv_pt": "near (burrow)",
                "s": 5,
                "d": 1,
                "c": 4,
                "i": -3,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Leap. Jump up to near in height and double near in distance, then make 2 bite attacks.",
                        "pt": "Salto. Salte até near de altura e double near de distância e, em seguida, faça 2 ataques de mordida."
                    }
                ]
        },
        {
                "name": "CAMEL",
                "description": "Ornery, tan-furred desert beasts.",
                "description_pt": "Bestas teimosas e de pelo bronzeado do deserto.",
                "ac": "10",
                "hp": 12,
                "hp_raw": "12",
                "atk": "1 hoof +3 (1d6) or 1 spit (near) +0 (1d4)",
                "atk_pt": "1 casco +3 (1d6) ou 1 espeto (near) +0 (1d4)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 0,
                "c": 3,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "CAVE BRUTE",
                "description": "A hulking, insectoid beast with long mandibles, four eyes, and thick arms covered in bristles.",
                "description_pt": "Uma fera corpulenta e insetóide com mandíbulas longas, quatro olhos e braços grossos cobertos de cerdas.",
                "ac": "14",
                "hp": 28,
                "hp_raw": "28",
                "atk": "2 claw +5 (1d8) and 1 mandible +5 (1d10)",
                "atk_pt": "2 garras +5 (1d8) e 1 mandíbula +5 (1d10)",
                "mv": "near (burrow)",
                "mv_pt": "near (burrow)",
                "s": 4,
                "d": 1,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Bewilder. Creatures within near that see the cave brute's eyes, DC 12 CHA at start of their turn or dazed and no action.",
                        "pt": "Atordoar. Criaturas dentro de near que veem os olhos do bruto da caverna, DC 12 CHA no início do turno ou atordoadas e sem ação."
                    }
                ]
        },
        {
                "name": "CAVE CREEPER",
                "description": "Chittering, green centipedes the size of horses. Their grasping tentacles are coated in a paralytic venom.",
                "description_pt": "Centopéias verdes e vibrantes do tamanho de cavalos. Seus tentáculos agarradores estão revestidos de um veneno paralisante.",
                "ac": "12",
                "hp": 18,
                "hp_raw": "18",
                "atk": "1 bite +3 (1d6) and 1 tentacles +3 (1d8 + toxin)",
                "atk_pt": "1 mordida +3 (1d6) e 1 tentáculos +3 (1d8 + toxina)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": 2,
                "c": 0,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Toxin. DC 12 CON or paralyzed 1d4 rounds.",
                        "pt": "Toxina. DC 12 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "CENTAUR",
                "description": "Herd-dwelling beings with the upper body of a human and lower body of a horse.",
                "description_pt": "Seres que vivem em rebanhos com a parte superior do corpo de um humano e a parte inferior de um cavalo.",
                "ac": "12 (leather)",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 spear (close/near) +2 (1d6) or 1 longbow (far) +1 (1d8)",
                "atk_pt": "2 lanças (close/near) +2 (1d6) ou 1 arco longo (far) +1 (1d8)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": 0,
                "w": 2,
                "ch": 1,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "CENTIPEDE, GIANT",
                "description": "Blood-red, feathery centipedes the size of a human arm. Their bite injects a burning poison that cramps muscles.",
                "description_pt": "Centopeias emplumadas, vermelho-sangue, do tamanho de um braço humano. Sua mordida injeta um veneno ardente que causa cãibras nos músculos.",
                "ac": "11",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 bite +1 (1d4 + poison)",
                "atk_pt": "1 mordida +1 (1d4 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": -3,
                "d": 1,
                "c": 0,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Poison. DC 12 CON or paralyzed 1d4 rounds.",
                        "pt": "Veneno. DC 12 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "CENTIPEDE, SWARM",
                "description": "A crawling mass of weaving, sinuous centipedes.",
                "description_pt": "Uma massa rastejante de centopéias sinuosas e onduladas.",
                "ac": "11",
                "hp": 18,
                "hp_raw": "18",
                "atk": "3 bite +1 (1d4 + poison)",
                "atk_pt": "3 mordidas +1 (1d4 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": -3,
                "d": 1,
                "c": 0,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Poison. DC 12 CON or paralyzed 1d4 rounds.",
                        "pt": "Veneno. DC 12 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "CHIMERA",
                "description": "A monstrous beast with a half-goat, half-lion body, wide dragon wings, and the heads of a goat, lion, and dragon.",
                "description_pt": "Uma fera monstruosa com corpo meio bode, meio leão, largas asas de dragão e cabeças de cabra, leão e dragão.",
                "ac": "16",
                "hp": 49,
                "hp_raw": "49",
                "atk": "4 rend +7 (2d8) and 1 fire breath",
                "atk_pt": "4 rend +7 (2d8) e 1 sopro de fogo",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 5,
                "d": 4,
                "c": 4,
                "i": -3,
                "w": 2,
                "ch": -1,
                "al": "C",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Fire Breath. Fills a near-sized cube extending from chimera. DC 15 DEX or 4d6 damage.",
                        "pt": "Sopro de Fogo. Preenche um cubo de tamanho near que se estende da quimera. DC 15 DEX ou 4d6 danos."
                    }
                ]
        },
        {
                "name": "CHUUL",
                "description": "Brown, horse-sized lobster bugs with tentacles and pincers.",
                "description_pt": "Insetos lagosta marrons, do tamanho de um cavalo, com tentáculos e pinças.",
                "ac": "15",
                "hp": 25,
                "hp_raw": "25",
                "atk": "2 pincer +4 (1d8 + grab)",
                "atk_pt": "2 pinças +4 (1d8 + agarrar)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 3,
                "d": -1,
                "c": 3,
                "i": -1,
                "w": 1,
                "ch": -2,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Grab. DC 15 STR or held in pincer. DC 15 STR on turn to break free.",
                        "pt": "Agarrar. DC 15 STR ou segurado em pinça. DC 15 STR por sua vez para se libertar."
                    }
                ]
        },
        {
                "name": "CLOAKER",
                "description": "A midnight blue manta ray with a bony tail and crescent-shaped maw above its belly. It swoops through deep, lightless caverns.",
                "description_pt": "Uma arraia manta azul meia-noite com cauda ossuda e bocarra em forma de meia-lua acima da barriga. Ele mergulha em cavernas profundas e sem luz.",
                "ac": "13",
                "hp": 28,
                "hp_raw": "28",
                "atk": "3 lash +4 (1d8) or 1 screech",
                "atk_pt": "3 chicotadas +4 (1d8) ou 1 guincho",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 2,
                "d": 3,
                "c": 1,
                "i": 1,
                "w": 1,
                "ch": 0,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Phantoms. 1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits cloaker or illusions.",
                        "pt": "Fantasmas. 1/dia, no lugar dos ataques. Crie 3 duplicatas ilusórias que desaparecem quando atingidas. Determine aleatoriamente se um ataque atinge o manto ou as ilusões."
                    },
                    {
                        "en": "Screech. Enemies within double near DC 15 WIS or DISADV on attacks and checks 1d4 rounds.",
                        "pt": "Guincho. Inimigos dentro de double near DC 15 WIS ou DISADV em ataques e verificações 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "COCKATRICE",
                "description": "A molting, lizard-chicken hybrid with a crimson, razorlike crest.",
                "description_pt": "Um híbrido de galinha-lagarto em muda com uma crista vermelha em forma de navalha.",
                "ac": "11",
                "hp": 14,
                "hp_raw": "14",
                "atk": "1 bite +1 (1d4 + petrify)",
                "atk_pt": "1 mordida +1 (1d4 + petrificar)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -2,
                "d": 1,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Petrify. DC 12 CON or petrified.",
                        "pt": "Petrificar. DC 12 CON ou petrificado."
                    }
                ]
        },
        {
                "name": "COUATL",
                "description": "A human-sized snake with scales made of jewels and a corona of iridescent feathers.",
                "description_pt": "Uma cobra de tamanho humano com escamas feitas de joias e uma coroa de penas iridescentes.",
                "ac": "16",
                "hp": 42,
                "hp_raw": "42",
                "atk": "3 bite +6 (2d6 + poison)",
                "atk_pt": "3 mordida +6 (2d6 + veneno)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 2,
                "d": 3,
                "c": 2,
                "i": 4,
                "w": 4,
                "ch": 5,
                "al": "L",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Change Shape. In place of attacks, transform into any similarly-sized creature.",
                        "pt": "Mudar de Forma. No lugar dos ataques, transforme-se em qualquer criatura de tamanho semelhante."
                    },
                    {
                        "en": "Poison. DC 15 CON or fall into natural, deep sleep for 1d8 hours.",
                        "pt": "Veneno. DC 15 CON ou cair em sono natural e profundo por 1d8 horas."
                    },
                    {
                        "en": "Restore. In place of attacks, touch one creature to remove a curse, affliction, or heal 3d8 HP.",
                        "pt": "Restaurar. No lugar dos ataques, toque em uma criatura para remover uma maldição, aflição ou curar 3d8 HP."
                    }
                ]
        },
        {
                "name": "CRAB, GIANT",
                "description": "A wagon-sized, armored crab with two crushing pincers.",
                "description_pt": "Um caranguejo blindado do tamanho de uma carroça com duas pinças esmagadoras.",
                "ac": "15",
                "hp": 24,
                "hp_raw": "24",
                "atk": "2 pincer +4 (1d8 + crush)",
                "atk_pt": "2 pinças +4 (1d8 + esmagamento)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 3,
                "d": 0,
                "c": 2,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Crush. DC 15 STR or target takes 1d8 damage.",
                        "pt": "Esmagar. DC 15 STR ou o alvo sofre 1d8 de dano."
                    }
                ]
        },
        {
                "name": "CROCODILE",
                "description": "Fat, scaly reptiles with stumpy legs and long, thrashing tails.",
                "description_pt": "Répteis gordos e escamosos com pernas atarracadas e caudas longas e agitadas.",
                "ac": "14",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 bite +3 (1d8)",
                "atk_pt": "2 mordidas +3 (1d8)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                ]
        },
        {
                "name": "CULTIST",
                "description": "A cloaked, wild-eyed zealot chanting the guttural prayers of a dark god.",
                "description_pt": "Um fanático encapuzado e de olhos arregalados cantando as orações guturais de um deus das trevas.",
                "ac": "14 (chainmail + shield)",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 longsword +1 (1d8) or 1 spell +2",
                "atk_pt": "1 espada longa +1 (1d8) ou 1 magia +2",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": -1,
                "c": 0,
                "i": -1,
                "w": 2,
                "ch": 0,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Fearless. Immune to morale checks.",
                        "pt": "Destemido. Imune a verificações de moral."
                    },
                    {
                        "en": "Deathtouch (WIS Spell). DC 12. 2d4 damage to one creature within close.",
                        "pt": "Toque da Morte (Magia SAB). DC 12. 2d4 de dano a uma criatura dentro de close."
                    }
                ]
        },
        {
                "name": "CYCLOPS",
                "description": "Reclusive, one-eyed giants towering ' high. They live simply on remote farmlands.",
                "description_pt": "Gigantes reclusos e de um olho só, elevando-se muito alto. Eles vivem simplesmente em terras agrícolas remotas.",
                "ac": "11 (leather)",
                "hp": 38,
                "hp_raw": "38",
                "atk": "2 greatclub +7 (2d8) or 1 rock (far) +5 (1d12)",
                "atk_pt": "2 grandes clubes +7 (2d8) ou 1 pedra (far) +5 (1d12)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 5,
                "d": 0,
                "c": 2,
                "i": -1,
                "w": -2,
                "ch": 0,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                ]
        },
        {
                "name": "DARKMANTLE",
                "description": "A floating, black octopus with rows of red eyes and a webbed skirt of tentacles.",
                "description_pt": "Um polvo preto flutuante com fileiras de olhos vermelhos e uma saia teia de tentáculos.",
                "ac": "13",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 bite +3 (1d4) or 1 darkness",
                "atk_pt": "1 mordida +3 (1d4) ou 1 escuridão",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -2,
                "d": 3,
                "c": 0,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Darkness. Extinguish all light sources in near.",
                        "pt": "Escuridão. Apague todas as fontes de luz em near."
                    }
                ]
        },
        {
                "name": "DEEP ONE",
                "description": "Cultish, amphibious fish-people with bulbous eyes. They lurk in deep water and sunless caverns.",
                "description_pt": "Pessoas-peixes anfíbias e cultas com olhos bulbosos. Eles se escondem em águas profundas e em cavernas sem sol.",
                "ac": "13",
                "hp": 10,
                "hp_raw": "10",
                "atk": "2 spear (close/ near) +2 (1d6)",
                "atk_pt": "2 lança (close/ near) +2 (1d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Sunblind. Blinded in bright light.",
                        "pt": "Cego pelo Sol. Cego sob luz brilhante."
                    }
                ]
        },
        {
                "name": "DEMON, BALOR",
                "description": "Colossal, horned bat-beasts wreathed in the flames of hell itself. Their mighty swords and cracking whips of fire can slice through stone.",
                "description_pt": "Bestas morcegos colossais com chifres envoltas nas chamas do próprio inferno. Suas poderosas espadas e chicotes de fogo podem cortar pedras.",
                "ac": "19",
                "hp": 77,
                "hp_raw": "77",
                "atk": "3 greatsword +10 (2d12 + hellfire) and 1 fire whip (near) +10 (2d6 + grab)",
                "atk_pt": "3 espadas largas +10 (2d12 + fogo do inferno) e 1 chicote de fogo (near) +10 (2d6 + agarrar)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 6,
                "d": 2,
                "c": 5,
                "i": 4,
                "w": 3,
                "ch": 4,
                "al": "C",
                "lv": 16,
                "lv_raw": "16",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune. Only damaged by magical sources.",
                        "pt": "Impermeável. Imune ao fogo. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Grab. DC 18 STR or target bound in whip. 2d6 damage per round held, DC 18 STR on turn to break free. In place of fire whip attack, balor can fling a grabbed target double near on its turn.",
                        "pt": "Agarrar. DC 18 STR ou alvo amarrado em chicote. 2d6 de dano por rodada realizada, DC 18 STR por turno para se libertar. No lugar do ataque do chicote de fogo, Balor pode arremessar um alvo agarrado double near em seu turno."
                    },
                    {
                        "en": "Hellfire. DC 18 DEX or 2d8 damage per round until flames extinguished.",
                        "pt": "Fogo do Inferno. DC 18 DEX ou 2d8 de dano por rodada até que as chamas se apaguem."
                    }
                ]
        },
        {
                "name": "DEMON, DRETCH",
                "description": "Green, pig-faced demons with thick claws and an oily stench.",
                "description_pt": "Demônios verdes com cara de porco, garras grossas e um fedor oleoso.",
                "ac": "12",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 claw +2 (1d6) or 1 gas",
                "atk_pt": "1 garra +2 (1d6) ou 1 gás",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 0,
                "c": 2,
                "i": -2,
                "w": -1,
                "ch": -3,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Gas. All in near DC 12 CON or blinded for 1d4 rounds.",
                        "pt": "Gás. All in near DC 12 CON ou cego por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "DEMON, GLABREZU",
                "description": "Horse-headed, fanged creatures who walk upright and have four arms; two shriveled, and two ending in hulking pincers.",
                "description_pt": "Criaturas com cabeça de cavalo e presas que andam eretas e têm quatro braços; dois enrugados e dois terminando em pinças pesadas.",
                "ac": "15",
                "hp": 40,
                "hp_raw": "40",
                "atk": "2 pincer +7 (2d8 + crush)",
                "atk_pt": "2 pinças +7 (2d8 + esmagamento)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 1,
                "c": 4,
                "i": 3,
                "w": 2,
                "ch": 2,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Crush. DC 15 STR or target takes 2d8 damage.",
                        "pt": "Esmagar. DC 15 STR ou o alvo sofre 2d8 de dano."
                    }
                ]
        },
        {
                "name": "DEMON, MARILITH",
                "description": "Hissing, armored women with six limbs and the lower bodies of giant snakes. Six whirling blades flash in their hands.",
                "description_pt": "Mulheres sibilantes com armaduras com seis membros e a parte inferior do corpo de cobras gigantes. Seis lâminas giratórias brilham em suas mãos.",
                "ac": "17 (plate mail)",
                "hp": 43,
                "hp_raw": "43",
                "atk": "6 longsword +7 (1d8)",
                "atk_pt": "6 espada longa +7 (1d8)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 5,
                "d": 4,
                "c": 3,
                "i": 3,
                "w": 3,
                "ch": 4,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Parry. Trade 2 longsword attacks next round to deflect a melee attack that would hit.",
                        "pt": "Aparar. Troque 2 ataques de espada longa na próxima rodada para desviar um ataque corpo a corpo que acertaria."
                    }
                ]
        },
        {
                "name": "DEMON, VROCK",
                "description": "Wagon-sized, filthy vultures with four limbs, midnight-blue skin, and a rash of mangy feathers.",
                "description_pt": "Abutres imundos, do tamanho de carroças, com quatro membros, pele azul meia-noite e uma erupção de penas sarnentas.",
                "ac": "14",
                "hp": 24,
                "hp_raw": "24",
                "atk": "2 talons +4 (1d8) or 1 screech",
                "atk_pt": "2 garras +4 (1d8) ou 1 guincho",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 2,
                "d": 2,
                "c": 2,
                "i": -1,
                "w": 1,
                "ch": 0,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Carrion Mist. Each time vrock is hit, 3:6 chance of carrion mist in near-sized cube centered on vrock. All enemies DC 15 CON or violent vomiting 1d4 rounds.",
                        "pt": "Névoa de Carniça. Cada vez que o vrock é atingido, há 3:6 de chance de névoa de carniça em um cubo de tamanho near centralizado no vrock. Todos os inimigos DC 15 CON ou vômito violento 1d4 rodadas."
                    },
                    {
                        "en": "Screech. All enemies in double near DC 12 WIS or DISADV on checks and attacks for 1d4 rounds.",
                        "pt": "Guincho. Todos os inimigos em double near DC 12 WIS ou DISADV em verificações e ataques por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "DEVIL, BARBED",
                "description": "Lanky, green-mottled fiends bristling with hooked spines.",
                "description_pt": "Demônios esguios e manchados de verde, cheios de espinhos em forma de gancho.",
                "ac": "13",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 spine (near) +3 (1d6 + barb) or 1 fire blast (far) +3 (1d8)",
                "atk_pt": "2 espinhos (near) +3 (1d6 + farpa) ou 1 explosão de fogo (far) +3 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 3,
                "c": 1,
                "i": 1,
                "w": 1,
                "ch": 1,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Barb. Each spine sticks, dealing 1d4 damage each round. DC 12 STR check on turn to remove.",
                        "pt": "Farpa. Cada espinha gruda, causando 1d4 de dano a cada rodada. DC 12 STR verifique no turno para remover."
                    }
                ]
        },
        {
                "name": "DEVIL, CUBI",
                "description": "Entrancing humanoids with bat wings and devilish charm.",
                "description_pt": "Humanóides fascinantes com asas de morcego e charme diabólico.",
                "ac": "14",
                "hp": 29,
                "hp_raw": "29",
                "atk": "1 kiss +4 (1d6 + drain) or 1 charm",
                "atk_pt": "1 beijo +4 (1d6 + dreno) ou 1 amuleto",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 2,
                "d": 4,
                "c": 2,
                "i": 3,
                "w": 2,
                "ch": 5,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Change Shape. In place of attacks, transform into any similarly-sized humanoid.",
                        "pt": "Mudar de Forma. No lugar dos ataques, transforme-se em qualquer humanóide de tamanho semelhante."
                    },
                    {
                        "en": "Charm. One humanoid in near DC 15 CHA or bewitched by cubi for 1d6 hours.",
                        "pt": "Enfeitiçar. Um humanóide em near DC 15 CHA ou enfeitiçado por cubi por 1d6 horas."
                    },
                    {
                        "en": "Drain. The target takes 1d6 WIS damage. A target reduced to 0 WIS this way swears its soul to an archdevil.",
                        "pt": "Drenar. O alvo sofre 1d6 WIS de dano. Um alvo reduzido a 0 WIS desta forma jura sua alma a um arquidiabo."
                    }
                ]
        },
        {
                "name": "DEVIL, ERINYES",
                "description": "Raven-winged, resplendent beings in polished, black armor and helms with curved horns.",
                "description_pt": "Seres resplandecentes com asas de corvo em armadura preta polida e elmos com chifres curvos.",
                "ac": "17 (+1 plate mail)",
                "hp": 43,
                "hp_raw": "43",
                "atk": "3 greatsword +8 (1d12) or 2 longbow (far) +8 (1d8 + poison)",
                "atk_pt": "3 espadas grandes +8 (1d12) ou 2 arcos longos (far) +8 (1d8 + veneno)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 4,
                "c": 3,
                "i": 4,
                "w": 4,
                "ch": 5,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or target's eyes go jet black and it turns on its allies for 1d4 rounds. DC 15 WIS on turn to end effect.",
                        "pt": "Veneno. DC 15 CON ou os olhos do alvo ficam pretos e ele se volta contra seus aliados por 1d4 rodadas. DC 15 WIS no turno para finalizar o efeito."
                    }
                ]
        },
        {
                "name": "DEVIL, HORNED",
                "description": "Iron-scaled hellions as big as ogres with weighty ram horns, lashing tails, and leathery wings. They are opportunistic and craven in battle.",
                "description_pt": "Endiabrados com escamas de ferro, grandes como ogros, com pesados chifres de carneiro, caudas açoitadoras e asas de couro. Eles são oportunistas e covardes na batalha.",
                "ac": "16",
                "hp": 35,
                "hp_raw": "35",
                "atk": "2 burning trident (near) +7 (2d6) or 1 fire blast (far) +4 (2d8)",
                "atk_pt": "2 tridentes ardentes (near) +7 (2d6) ou 1 explosão de fogo (far) +4 (2d8)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 5,
                "d": 2,
                "c": 4,
                "i": 2,
                "w": 1,
                "ch": 2,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Iron Hide. Half damage from non-magical weapons.",
                        "pt": "Pele de Ferro. Metade do dano causado por armas não mágicas."
                    }
                ]
        },
        {
                "name": "DEVIL, IMP",
                "description": "Cat-sized, red devils with oversized wings and tail, tiny horns, and cowardly demeanors.",
                "description_pt": "Diabos vermelhos do tamanho de um gato, com asas e cauda enormes, chifres minúsculos e comportamentos covardes.",
                "ac": "13",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 stinger +3 (1d4 + poison)",
                "atk_pt": "1 ferrão +3 (1d4 + veneno)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -2,
                "d": 3,
                "c": 0,
                "i": 1,
                "w": 0,
                "ch": 2,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune.",
                        "pt": "Impermeável. Imune ao fogo."
                    },
                    {
                        "en": "Contract. Can grant mighty boons and patronage on behalf of an archdevil in exchange for a sworn soul. ADV on related Charisma checks.",
                        "pt": "Contrato. Pode conceder benefícios poderosos e patrocínio em nome de um arquidiabo em troca de uma alma juramentada. ADV em testes de Carisma relacionados."
                    },
                    {
                        "en": "Poison. DC 12 CON or fitful sleep for 1d4 hours.",
                        "pt": "Veneno. DC 12 CON ou sono agitado por 1d4 horas."
                    }
                ]
        },
        {
                "name": "DJINNI",
                "description": "Azure-blue, jovial humanoids made of air and roiling wind. Infused with potent magic.",
                "description_pt": "Humanóides joviais azul-celeste feitos de ar e vento turbulento. Infundido com magia potente.",
                "ac": "14",
                "hp": 48,
                "hp_raw": "48",
                "atk": "3 scimitar +7 (1d12) or 1 whirlwind",
                "atk_pt": "3 cimitarras +7 (1d12) ou 1 redemoinho",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 4,
                "c": 3,
                "i": 4,
                "w": 3,
                "ch": 3,
                "al": "N",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Whirlwind. Transform into a lashing tornado. All enemies within near DC 18 DEX or thrown 2d100 feet in a random direction.",
                        "pt": "Vendaval. Transforme-se em um tornado violento. Todos os inimigos dentro de near DC 18 DEX ou arremessados 2d100 pés em uma direção aleatória."
                    },
                    {
                        "en": "Wish. Cast wish once a week for a mortal, no spellcasting check.",
                        "pt": "Desejo. Conjure desejo uma vez por semana para um mortal, sem teste de conjuração."
                    }
                ]
        },
        {
                "name": "DOPPELGANGER",
                "description": "Gray, featureless humanoids that delight in sowing chaos.",
                "description_pt": "Humanóides cinzentos e inexpressivos que se deleitam em semear o caos.",
                "ac": "12",
                "hp": 20,
                "hp_raw": "20",
                "atk": "1 dagger (close/near) +2 (1d4)",
                "atk_pt": "1 adaga (close/near) +2 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 2,
                "c": 2,
                "i": 1,
                "w": 0,
                "ch": 4,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Change Shape. In place of attacks, transform into any similarly-sized humanoid.",
                        "pt": "Mudar de Forma. No lugar dos ataques, transforme-se em qualquer humanóide de tamanho semelhante."
                    },
                    {
                        "en": "Telepathy. Can secretly hear the surface thoughts of all humanoids within near.",
                        "pt": "Telepatia. Pode ouvir secretamente os pensamentos superficiais de todos os humanóides dentro de near."
                    }
                ]
        },
        {
                "name": "DRAGON, DESERT",
                "description": "The smell of ozone precedes this desert-dwelling dragon. Its dazzling scales of brass and lapis lazuli shimmer in the baking heat.",
                "description_pt": "O cheiro de ozônio precede este dragão que vive no deserto. Suas deslumbrantes escamas de latão e lápis-lazúli brilham no calor escaldante.",
                "ac": "17",
                "hp": 61,
                "hp_raw": "61",
                "atk": "3 rend +9 (2d10) or 1 lightning breath",
                "atk_pt": "3 rendimentos +9 (2d10) ou 1 sopro relâmpago",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 5,
                "d": 3,
                "c": 3,
                "i": 4,
                "w": 5,
                "ch": 5,
                "al": "L",
                "lv": 13,
                "lv_raw": "13",
                "abilities": [
                    {
                        "en": "Stormblood. Electricity immune.",
                        "pt": "Sangue de Tempestade. Eletricidade imune."
                    },
                    {
                        "en": "Lightning Breath. A straight line (5' wide) extending double near from dragon. DC 15 DEX or 4d8 damage (DISADV on check if wearing metal armor).",
                        "pt": "Sopro de Raio. Uma linha reta (5' de largura) estendendo-se double near do dragão. DC 15 DEX ou 4d8 dano (DISADV na verificação se estiver usando armadura de metal)."
                    },
                    {
                        "en": "Mirage. 1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits dragon or illusions.",
                        "pt": "Miragem. 1/dia, no lugar dos ataques. Crie 3 duplicatas ilusórias que desaparecem quando atingidas. Determine aleatoriamente se um ataque atinge o dragão ou as ilusões."
                    }
                ]
        },
        {
                "name": "DRAGON, FIRE",
                "description": "Blood-red scales cover the hide of this mighty, volcanic wyrm. Leaping flames glow at the back of its throat.",
                "description_pt": "Escamas vermelho-sangue cobrem a pele deste poderoso ancião vulcânico. Chamas saltitantes brilham no fundo de sua garganta.",
                "ac": "18",
                "hp": 80,
                "hp_raw": "80",
                "atk": "4 rend +11 (2d12) or 1 fire breath",
                "atk_pt": "4 rend +11 (2d12) ou 1 sopro de fogo",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 6,
                "d": 5,
                "c": 4,
                "i": 4,
                "w": 4,
                "ch": 5,
                "al": "C",
                "lv": 17,
                "lv_raw": "17",
                "abilities": [
                    {
                        "en": "Fireblood. Fire immune.",
                        "pt": "Sangue de Fogo. Imune ao fogo."
                    },
                    {
                        "en": "Fire Breath. Fills a double near- sized cube extending from dragon. DC 15 DEX or 6d10 damage.",
                        "pt": "Sopro de Fogo. Preenche um cubo de tamanho double near que se estende do dragão. DC 15 DEX ou 6d10 danos."
                    }
                ]
        },
        {
                "name": "DRAGON, FOREST",
                "description": "The smell of wet loam follows this dragon. Its jade scales bristle with barbed thorns.",
                "description_pt": "O cheiro de argila úmida segue este dragão. Suas escamas de jade estão repletas de espinhos farpados.",
                "ac": "16",
                "hp": 58,
                "hp_raw": "58",
                "atk": "3 rend +8 (2d8) or 1 poison breath",
                "atk_pt": "3 rend +8 (2d8) ou 1 hálito venenoso",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 3,
                "c": 4,
                "i": 3,
                "w": 3,
                "ch": 4,
                "al": "N",
                "lv": 12,
                "lv_raw": "12",
                "abilities": [
                    {
                        "en": "Animate Plants. 1/day, in place of attacks. Vines grab at all enemies within double near of dragon. DC 15 DEX or unable to move 1d4 rounds.",
                        "pt": "Animar Plantas. 1/dia, no lugar dos ataques. As vinhas agarram todos os inimigos dentro de double near do dragão. DC 15 DEX ou incapaz de se mover 1d4 rodadas."
                    },
                    {
                        "en": "Poison Breath. Fills a near-sized cube extending from dragon. DC 15 CON or 3d8 damage.",
                        "pt": "Sopro de Veneno. Preenche um cubo de tamanho near que se estende do dragão. DC 15 CON ou 3d8 danos."
                    }
                ]
        },
        {
                "name": "DRAGON, FROST",
                "description": "Prismatic ice lines the horns, spines, and wings of this pearly dragon. Clouds of steam hiss from its ice-rimed jaws.",
                "description_pt": "Gelo prismático reveste os chifres, espinhos e asas deste dragão perolado. Nuvens de vapor saem de suas mandíbulas cobertas de gelo.",
                "ac": "17",
                "hp": 68,
                "hp_raw": "68",
                "atk": "4 rend +9 (2d10) or 1 ice breath",
                "atk_pt": "4 rendimentos +9 (2d10) ou 1 sopro de gelo",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 3,
                "c": 5,
                "i": 3,
                "w": 4,
                "ch": 3,
                "al": "N",
                "lv": 14,
                "lv_raw": "14",
                "abilities": [
                    {
                        "en": "Frostblood. Cold immune.",
                        "pt": "Sangue de Gelo. Imune ao frio."
                    },
                    {
                        "en": "Ice Breath. Fills a double near- sized cube extending from dragon. DC 15 DEX or 4d8 damage and frozen for 1 round.",
                        "pt": "Sopro de Gelo. Preenche um cubo de tamanho double near que se estende do dragão. DC 15 DEX ou 4d8 de dano e congelado por 1 rodada."
                    }
                ]
        },
        {
                "name": "DRAGON, SEA",
                "description": "A warm sea breeze blows around this amphibious, gold- scaled wyrm. A beard of tendrils covers its snout, and a blue mane billows along its neck.",
                "description_pt": "Uma brisa morna do mar sopra ao redor deste ancião anfíbio com escamas douradas. Uma barba de gavinhas cobre seu focinho e uma juba azul ondula ao longo de seu pescoço.",
                "ac": "17",
                "hp": 76,
                "hp_raw": "76",
                "atk": "4 rend +10 (2d10) or 1 steam breath or 1 water spout",
                "atk_pt": "4 rend +10 (2d10) ou 1 respiração de vapor ou 1 jato de água",
                "mv": "double near (fly, swim)",
                "mv_pt": "double near (fly, swim)",
                "s": 5,
                "d": 6,
                "c": 4,
                "i": 4,
                "w": 5,
                "ch": 5,
                "al": "L",
                "lv": 16,
                "lv_raw": "16",
                "abilities": [
                    {
                        "en": "Steam Breath. Fills a double near-sized cube extending from dragon. DC 15 DEX or 4d12 damage.",
                        "pt": "Sopro de Vapor. Preenche um cubo de tamanho double near que se estende do dragão. DC 15 DEX ou 4d12 danos."
                    },
                    {
                        "en": "Water Spout. Fills a near-sized cube within far. DC 15 STR or creatures inside flung 2d100 feet in a random direction.",
                        "pt": "Jato de Água. Preenche um cubo de tamanho near dentro de far. DC 15 STR ou criaturas dentro dele arremessadas 2d100 pés em uma direção aleatória."
                    }
                ]
        },
        {
                "name": "DRAGON, SWAMP",
                "description": "This black, wingless beast slithers through dank swamps.",
                "description_pt": "Esta fera negra e sem asas desliza por pântanos úmidos.",
                "ac": "16",
                "hp": 58,
                "hp_raw": "58",
                "atk": "3 rend +8 (2d10) or 1 smog breath",
                "atk_pt": "3 rend +8 (2d10) ou 1 respiração de smog",
                "mv": "double near (burrow, swim)",
                "mv_pt": "double near (burrow, swim)",
                "s": 5,
                "d": 3,
                "c": 4,
                "i": 4,
                "w": 3,
                "ch": 3,
                "al": "C",
                "lv": 12,
                "lv_raw": "12",
                "abilities": [
                    {
                        "en": "Smog Breath. Fills a near-sized cube extending from dragon. DC 15 CON or 2d10 damage and blinded for 1 round.",
                        "pt": "Sopro de Fumaça. Preenche um cubo de tamanho near que se estende do dragão. DC 15 CON ou 2d10 de dano e cego por 1 rodada."
                    }
                ]
        },
        {
                "name": "DROW",
                "description": "A graceful, shadowy elf that pounces like a spider.",
                "description_pt": "Um elfo gracioso e sombrio que ataca como uma aranha.",
                "ac": "16 (mithral chainmail)",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 poison dart (near) +3 (1d4 + poison) or 1 longsword +1 (1d8)",
                "atk_pt": "1 dardo venenoso (near) +3 (1d4 + veneno) ou 1 espada longa +1 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 3,
                "c": 0,
                "i": 1,
                "w": 1,
                "ch": 1,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or sleep.",
                        "pt": "Veneno. DC 15 CON ou dormir."
                    },
                    {
                        "en": "Sunblind. Blinded in bright light.",
                        "pt": "Cego pelo Sol. Cego sob luz brilhante."
                    }
                ]
        },
        {
                "name": "DROW, DRIDER",
                "description": "A monstrosity with the body of a giant spider and torso of a drow.",
                "description_pt": "Uma monstruosidade com corpo de aranha gigante e torso de drow.",
                "ac": "16 (mithral chainmail)",
                "hp": 29,
                "hp_raw": "29",
                "atk": "3 longsword +3 (1d8) or 2 longbow (far) +3 (1d8 + poison)",
                "atk_pt": "3 espadas longas +3 (1d8) ou 2 arcos longos (far) +3 (1d8 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 3,
                "c": 2,
                "i": 2,
                "w": 2,
                "ch": 0,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or paralyzed 1d4 rounds.",
                        "pt": "Veneno. DC 15 CON ou paralisado 1d4 rodadas."
                    },
                    {
                        "en": "Sunblind. Blinded in bright light.",
                        "pt": "Cego pelo Sol. Cego sob luz brilhante."
                    }
                ]
        },
        {
                "name": "DROW, PRIESTESS",
                "description": "A statuesque female drow with a crown of metal spider webs and an imperious gaze.",
                "description_pt": "Uma drow feminina escultural com uma coroa de teias de aranha de metal e um olhar imperioso.",
                "ac": "16 (mithral chainmail)",
                "hp": 28,
                "hp_raw": "28",
                "atk": "3 snake whip (near) +4 (1d8 + poison) or 1 spell +4",
                "atk_pt": "3 chicote de cobra (near) +4 (1d8 + veneno) ou 1 magia +4",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 3,
                "c": 1,
                "i": 3,
                "w": 4,
                "ch": 3,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or paralyzed 1d4 rounds.",
                        "pt": "Veneno. DC 15 CON ou paralisado 1d4 rodadas."
                    },
                    {
                        "en": "Sunblind. Blinded in bright light.",
                        "pt": "Cego pelo Sol. Cego sob luz brilhante."
                    },
                    {
                        "en": "Snuff (WIS Spell). DC 12. Extinguish all light sources (even magical) within near.",
                        "pt": "Apagar (Magia SAB). DC 12. Extinga todas as fontes de luz (mesmo mágicas) dentro de near."
                    },
                    {
                        "en": "Summon Spiders (WIS Spell). DC 14. Summon 2d4 loyal giant spiders that appear within near. They stay for 5 rounds.",
                        "pt": "Invocar Aranhas (Magia SAB). DC 14. Convoque 2d4 aranhas gigantes leais que aparecem dentro de near. Eles ficam por 5 rodadas."
                    },
                    {
                        "en": "Web (WIS Spell). DC 13. A near- sized cube of webs within far immobilizes all inside it for 5 rounds. DC 15 STR on turn to break free.",
                        "pt": "Teia (Magia SAB). DC 13. Um cubo de teias de tamanho near dentro de far imobiliza tudo dentro dele por 5 rodadas. DC 15 STR por sua vez para se libertar."
                    }
                ]
        },
        {
                "name": "DRUID",
                "description": "A wizard of the wilds holding a knotted staff and wearing a mossy cloak of deep viridian.",
                "description_pt": "Um mago da selva segurando um cajado com nós e vestindo um manto musgoso de profundo viridiano.",
                "ac": "11",
                "hp": 31,
                "hp_raw": "31",
                "atk": "1 staff +0 (1d4) or 2 spell +5",
                "atk_pt": "1 cajado +0 (1d4) ou 2 feitiços +5",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 1,
                "c": 0,
                "i": 4,
                "w": 3,
                "ch": 0,
                "al": "N",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Barkskin (INT Spell).",
                        "pt": "Pele de casca de árvore (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 13. AC becomes 15 for 5 rounds.",
                        "pt": "Próprio. DC 13. AC torna-se 15 por 5 rodadas."
                    },
                    {
                        "en": "Conjure Flames (INT Spell). DC 12. One target in far takes 2d6 damage.",
                        "pt": "Conjurar Chamas (Magia INT). DC 12. Um alvo em far sofre 2d6 de dano."
                    },
                    {
                        "en": "Imbue (INT Spell).",
                        "pt": "Imbuir (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 13. Staff becomes a +3 magic weapon for 10 rounds.",
                        "pt": "Próprio. DC 13. O cajado se torna uma arma mágica +3 por 10 rodadas."
                    },
                    {
                        "en": "Summon Bear (INT Spell). DC 14. Summon a loyal brown bear that appears within near. It stays for 5 rounds.",
                        "pt": "Invocar Urso (Magia INT). DC 14. Evoque um urso pardo leal que apareça em near. Permanece por 5 rodadas."
                    },
                    {
                        "en": "Thunderclap (INT Spell). DC 13. Fills a near-sized cube extending from druid. Creatures within are thrown 2d20 feet in a random direction.",
                        "pt": "Trovão (Magia INT). DC 13. Preenche um cubo de tamanho near que se estende desde druida. As criaturas dentro dele são lançadas 2d20 pés em uma direção aleatória."
                    }
                ]
        },
        {
                "name": "DRYAD",
                "description": "A coy, emerald-skinned fey covered in leaves. It bonds with and protects a tree.",
                "description_pt": "Uma tímida fada de pele esmeralda coberta de folhas. Ele se liga e protege uma árvore.",
                "ac": "13",
                "hp": 19,
                "hp_raw": "19",
                "atk": "1 staff -1 (1d4) or 1 charm",
                "atk_pt": "1 cajado -1 (1d4) ou 1 amuleto",
                "mv": "near",
                "mv_pt": "near",
                "s": -1,
                "d": 2,
                "c": 1,
                "i": 1,
                "w": 3,
                "ch": 4,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Charm. Near, one creature, DC 14 CHA or friendship for 1d8 days.",
                        "pt": "Enfeitiçar. Perto, uma criatura, DC 14 CHA ou amizade por 1d8 dias."
                    },
                    {
                        "en": "Meld. Step inside bonded tree.",
                        "pt": "Fundir. Entre na árvore colada."
                    }
                ]
        },
        {
                "name": "DUERGAR",
                "description": "Gray-skinned, greedy dwarves with bald pates and white beards. They dwell in somber castles deep within the earth filled with stolen treasures and enslaved prisoners.",
                "description_pt": "Anões gananciosos, de pele cinzenta, carecas e barbas brancas. Eles moram em castelos sombrios nas profundezas da terra, cheios de tesouros roubados e prisioneiros escravizados.",
                "ac": "15 (chainmail + shield)",
                "hp": 12,
                "hp_raw": "12",
                "atk": "1 war pick +2 (1d6)",
                "atk_pt": "1 escolha de guerra +2 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 0,
                "c": 3,
                "i": 0,
                "w": -1,
                "ch": -1,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Enlarge. 1/day, +1d6 damage on melee attacks and ADV on STR checks for 3 rounds.",
                        "pt": "Aumentar. 1/dia, +1d6 de dano em ataques corpo a corpo e ADV em STR verificações por 3 rodadas."
                    },
                    {
                        "en": "Invisibility. 1/day, turn invisible for 3 rounds. Ends if duergar attacks.",
                        "pt": "Invisibilidade. 1/dia, fica invisível por 3 rodadas. Termina se o duergar atacar."
                    },
                    {
                        "en": "Sunblind. Blinded in bright light.",
                        "pt": "Cego pelo Sol. Cego sob luz brilhante."
                    }
                ]
        },
        {
                "name": "DUNG BEETLE, GIANT",
                "description": "A trundling, barrel-sized beetle with a T-shaped horn.",
                "description_pt": "Um besouro do tamanho de um barril com um chifre em forma de T.",
                "ac": "13",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 horn +1 (1d4 + knock)",
                "atk_pt": "1 buzina +1 (1d4 + batida)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": -1,
                "c": 1,
                "i": -3,
                "w": -1,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Knock. DC 9 STR or pushed a close distance and fall down.",
                        "pt": "Bater. DC 9 STR ou empurrou close distância e caiu."
                    }
                ]
        },
        {
                "name": "EFREETI",
                "description": "Blood-red, towering humanoids formed of lava and ash. Short, black horns and snarling grins.",
                "description_pt": "Humanóides imponentes, vermelho-sangue, formados de lava e cinzas. Chifres curtos e pretos e sorrisos rosnantes.",
                "ac": "15",
                "hp": 43,
                "hp_raw": "43",
                "atk": "3 scimitar +8 (2d10) or 2 fire bolt (far) +5 (2d6)",
                "atk_pt": "3 cimitarras +8 (2d10) ou 2 dardos de fogo (far) +5 (2d6)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 5,
                "d": 2,
                "c": 3,
                "i": 3,
                "w": 2,
                "ch": 3,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources. Fire immune. Wall of Flame. 1/day, 20' high curtain of fire, double near length. Touching it deals 4d8 damage. Lasts 2d4 rounds.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas. Imune ao fogo. Muralha de Chamas. 1/dia, cortina de fogo de 20 pés de altura, double near comprimento. Tocá-lo causa 4d8 de dano. Dura 2d4 rodadas."
                    },
                    {
                        "en": "Wish. Cast wish once a week for a mortal, no spellcasting check.",
                        "pt": "Desejo. Conjure desejo uma vez por semana para um mortal, sem teste de conjuração."
                    }
                ]
        },
        {
                "name": "ELEMENTAL, AIR",
                "description": "A howling tornado of wind.",
                "description_pt": "Um tornado de vento uivante.",
                "ac": "16",
                "hp": 29,
                "hp_raw": "29/42",
                "atk": "3 slam +7 (2d6/3d6) or 1 whirlwind",
                "atk_pt": "3 batidas +7 (2d6/3d6) ou 1 redemoinho",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 3,
                "d": 5,
                "c": 2,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 6,
                "lv_raw": "6/9",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Whirlwind. All within close DC 15 DEX or flung 2d20 feet in random direction.",
                        "pt": "Vendaval. Tudo dentro de close DC 15 DEX ou arremessado 2d20 pés em direção aleatória."
                    }
                ]
        },
        {
                "name": "ELEMENTAL, EARTH",
                "description": "A thundering pillar of earth.",
                "description_pt": "Um pilar trovejante da terra.",
                "ac": "17",
                "hp": 31,
                "hp_raw": "31/44",
                "atk": "3 slam +7 (2d8/3d8) or 1 avalanche",
                "atk_pt": "3 batidas +7 (2d8/3d8) ou 1 avalanche",
                "mv": "near (burrow)",
                "mv_pt": "near (burrow)",
                "s": 5,
                "d": 0,
                "c": 4,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 6,
                "lv_raw": "6/9",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Avalanche. All within close DC 15 STR or entombed for 1d4 rounds under mounds of earth.",
                        "pt": "Avalanche. Todos dentro de close DC 15 STR ou sepultados por 1d4 rodadas sob montes de terra."
                    }
                ]
        },
        {
                "name": "ELEMENTAL, FIRE",
                "description": "A roaring column of flames.",
                "description_pt": "Uma coluna de chamas rugindo.",
                "ac": "15",
                "hp": 30,
                "hp_raw": "30/43",
                "atk": "3 slam +6 (2d10/3d10) or 1 inferno",
                "atk_pt": "3 batidas +6 (2d10/3d10) ou 1 inferno",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 4,
                "d": 3,
                "c": 3,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 6,
                "lv_raw": "6/9",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources. Fire immune.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas. Imune ao fogo."
                    },
                    {
                        "en": "Inferno. All within near DC 15 DEX or 3d8 damage.",
                        "pt": "Inferno. Tudo dentro de near DC 15 DEX ou 3d8 de dano."
                    }
                ]
        },
        {
                "name": "ELEMENTAL, WATER",
                "description": "A crashing vortex of water.",
                "description_pt": "Um vórtice de água em queda.",
                "ac": "15",
                "hp": 29,
                "hp_raw": "29/42",
                "atk": "3 slam +6 (2d6/3d6) or 1 whirlpool",
                "atk_pt": "3 batidas +6 (2d6/3d6) ou 1 hidromassagem",
                "mv": "double near (swim)",
                "mv_pt": "double near (swim)",
                "s": 4,
                "d": 2,
                "c": 2,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 6,
                "lv_raw": "6/9",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Whirlpool. All within close DC 15 STR or immobilized inside water elemental (treat as underwater). DC 15 STR on turn to escape. Elementals are semi-humanoid beings of pure energy that speak rudimentary Primordial. Earth and air are anathema to each other, as are fire and water. Lesser elementals are LV 6 and their slam deals 2 dice of damage. Greater elementals are LV 9 and their slam deals 3 dice of damage.",
                        "pt": "Redemoinho. Todos dentro de close DC 15 STR ou imobilizados dentro do elemental da água (tratar como subaquático). DC 15 STR por sua vez para escapar. Elementais são seres semi-humanóides de energia pura que falam Primordial rudimentar. A terra e o ar são anátemas um para o outro, assim como o fogo e a água. Elementais menores são LV 6 e seu golpe causa 2 dados de dano. Elementais maiores são LV 9 e seu golpe causa 3 dados de dano."
                    }
                ]
        },
        {
                "name": "ELEPHANT",
                "description": "Mighty mammals with tough hide, flappy ears, and a trunk.",
                "description_pt": "Mamíferos poderosos com pele dura, orelhas abanadas e tromba.",
                "ac": "14",
                "hp": 34,
                "hp_raw": "34",
                "atk": "2 tusks +6 (1d8)",
                "atk_pt": "2 presas +6 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 5,
                "d": 0,
                "c": 3,
                "i": -2,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Charge. Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage.",
                        "pt": "Investida. Mova-se para double near em linha reta e faça 1 ataque de presas. Se atingido, x3 de dano."
                    }
                ]
        },
        {
                "name": "ELF",
                "description": "Ethereal, ageless fey-people infused with ancient magic.",
                "description_pt": "Pessoas feéricas etéreas e eternas, infundidas com magia antiga.",
                "ac": "13",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 longbow (far) +3 (1d8) or 1 longsword +1 (1d8)",
                "atk_pt": "1 arco longo (far) +3 (1d8) ou 1 espada longa +1 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 3,
                "c": 0,
                "i": 1,
                "w": 1,
                "ch": 1,
                "al": "L",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Feyblood. ADV on DEX checks while in the natural wilds.",
                        "pt": "Sangue Feérico. ADV em DEX verificações enquanto estiver na natureza."
                    }
                ]
        },
        {
                "name": "ETTERCAP",
                "description": "Bipedal, eight-eyed spiderfolk with spindly legs and purple fur.",
                "description_pt": "Povo-aranha bípede, de oito olhos, pernas finas e pêlo roxo.",
                "ac": "12",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 bite +2 (1d6) or 1 poison web (near) +2",
                "atk_pt": "2 mordidas +2 (1d6) ou 1 teia venenosa (near) +2",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 0,
                "d": 2,
                "c": 1,
                "i": 0,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Poison Web. One target stuck in place and 1d4 damage/round. DC 12 DEX on turn to escape.",
                        "pt": "Teia Venenosa. Um alvo preso no lugar e 1d4 de dano/rodada. DC 12 DEX por sua vez para escapar."
                    }
                ]
        },
        {
                "name": "FAIRY",
                "description": "Miniature fey folk with fluttering moth or butterfly wings.",
                "description_pt": "Povo feérico em miniatura com asas esvoaçantes de mariposa ou borboleta.",
                "ac": "13",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 needle +3 (1 + poison)",
                "atk_pt": "1 agulha +3 (1 + veneno)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -2,
                "d": 3,
                "c": 0,
                "i": 1,
                "w": 0,
                "ch": 1,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Poison. DC 12 CON or fall into deep sleep for 1d4 hours.",
                        "pt": "Veneno. DC 12 CON ou cair em sono profundo por 1d4 horas."
                    }
                ]
        },
        {
                "name": "FROG, GIANT",
                "description": "Human-sized frogs with warty skin and long, sticky tongues.",
                "description_pt": "Sapos de tamanho humano com pele verrucosa e línguas longas e pegajosas.",
                "ac": "12",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 tongue and 1 bite +2 (1d6)",
                "atk_pt": "1 língua e 1 mordida +2 (1d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 2,
                "d": 2,
                "c": 1,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Tongue. 1 creature in near DC 12 DEX or pulled to close range.",
                        "pt": "Língua. 1 criatura em near DC 12 DEX ou puxada para close alcance."
                    }
                ]
        },
        {
                "name": "GARGOYLE",
                "description": "Leering, winged fiends that look like stone statues. They can hold perfectly still for long stretches of time.",
                "description_pt": "Demônios alados e maliciosos que parecem estátuas de pedra. Eles podem ficar perfeitamente imóveis por longos períodos de tempo.",
                "ac": "16",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 claw +3 (1d6)",
                "atk_pt": "2 garras +3 (1d6)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": 0,
                "w": 1,
                "ch": -1,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas."
                    }
                ]
        },
        {
                "name": "GELATINOUS CUBE",
                "description": "A translucent cube of slime that silently mows through tunnels.",
                "description_pt": "Um cubo translúcido de limo que corta silenciosamente os túneis.",
                "ac": "11",
                "hp": 24,
                "hp_raw": "24",
                "atk": "1 touch +4 (1d8 + toxin + engulf)",
                "atk_pt": "1 toque +4 (1d8 + toxina + engolir)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": -4,
                "w": 1,
                "ch": -4,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Engulf. DC 12 STR or trapped inside cube. Touch attack auto- hits engulfed targets each round. DC 12 STR on turn to escape. Fail checks if paralyzed.",
                        "pt": "Engolir. DC 12 STR ou preso dentro do cubo. O ataque de toque atinge automaticamente os alvos engolfados a cada rodada. DC 12 STR por sua vez para escapar. Falhar nas verificações se estiver paralisado."
                    },
                    {
                        "en": "Rubbery. Half damage from stabbing weapons.",
                        "pt": "Borrachudo. Metade do dano causado por armas cortantes."
                    },
                    {
                        "en": "Toxin. DC 15 CON or paralyzed 1d4 rounds.",
                        "pt": "Toxina. DC 15 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "GHAST",
                "description": "Greater ghouls who retain the intelligence they had in life.",
                "description_pt": "Carniçais maiores que mantêm a inteligência que tiveram em vida.",
                "ac": "11",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 claw +4 (1d8 + paralyze)",
                "atk_pt": "2 garras +4 (1d8 + paralisar)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": 0,
                "w": 0,
                "ch": 2,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Undead. Immune to morale checks.",
                        "pt": "Morto-Vivo. Imune a verificações de moral."
                    },
                    {
                        "en": "Carrion Stench. Living creatures DC 12 CON the first time within near or DISADV on attacks and spellcasting for 5 rounds.",
                        "pt": "Fedor de Carniça. Criaturas vivas DC 12 CON pela primeira vez dentro de near ou DISADV em ataques e lançamento de feitiços por 5 rodadas."
                    },
                    {
                        "en": "Paralyze. DC 12 CON or paralyzed 1d4 rounds.",
                        "pt": "Paralisar. DC 12 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "GHOST",
                "description": "A wavering spirit with a face contorted in rage or sadness.",
                "description_pt": "Um espírito vacilante com um rosto contorcido de raiva ou tristeza.",
                "ac": "13",
                "hp": 27,
                "hp_raw": "27",
                "atk": "2 death touch +5 (1d8 + life drain) or 1 possess",
                "atk_pt": "2 toques mortais +5 (1d8 + drenagem de vida) ou 1 posse",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -2,
                "d": 3,
                "c": 0,
                "i": 0,
                "w": 0,
                "ch": 4,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.",
                        "pt": "Morto-Vivo Maior. Imune a verificações de moral. Danificado apenas por prata ou fontes mágicas."
                    },
                    {
                        "en": "Incorporeal. In place of attacks, become corporeal or incorporeal.",
                        "pt": "Incorpóreo. No lugar dos ataques, torne-se corpóreo ou incorpóreo."
                    },
                    {
                        "en": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON.",
                        "pt": "Drenar Vida. 1d4 CON dano. Morte se reduzida a 0 CON."
                    },
                    {
                        "en": "Possess. Must be corporeal. One target, close range. Contested CHA check. If ghost wins, it inhabits target's body and controls it for 2d4 rounds.",
                        "pt": "Possuir. Deve ser corpóreo. Um alvo, close alcance. Contestado CHA cheque. Se o fantasma vencer, ele habitará o corpo do alvo e o controlará por 2d4 rodadas."
                    }
                ]
        },
        {
                "name": "GHOUL",
                "description": "Gray-skinned, slavering undead with whipping tongues and flat, reptilian faces.",
                "description_pt": "Mortos-vivos de pele cinzenta e salivantes, com línguas chicoteadoras e rostos chatos e reptilianos.",
                "ac": "11",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 claw +2 (1d6 + paralyze)",
                "atk_pt": "1 garra +2 (1d6 + paralisar)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 2,
                "i": -3,
                "w": -1,
                "ch": 0,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Undead. Immune to morale checks.",
                        "pt": "Morto-Vivo. Imune a verificações de moral."
                    },
                    {
                        "en": "Paralyze. DC 12 CON or paralyzed 1d4 rounds.",
                        "pt": "Paralisar. DC 12 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "GIANT, CLOUD",
                "description": "Pale, angular giants with blue-gray hair, light eyes, and silk robes. They do not allow outsiders into their enclaves.",
                "description_pt": "Gigantes pálidos e angulosos com cabelos azul-acinzentados, olhos claros e mantos de seda. Eles não permitem que estranhos entrem em seus enclaves.",
                "ac": "15 (leather)",
                "hp": 48,
                "hp_raw": "48",
                "atk": "3 morningstar +9 (2d10)",
                "atk_pt": "3 estrela da manhã +9 (2d10)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 5,
                "d": 4,
                "c": 3,
                "i": 3,
                "w": 3,
                "ch": 3,
                "al": "N",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Alert. ADV on checks to detect sneaking or hiding creatures.",
                        "pt": "Alerta. ADV em testes para detectar criaturas furtivas ou escondidas."
                    }
                ]
        },
        {
                "name": "GIANT, FIRE",
                "description": "Bulky, muscled giants with coppery skin and red hair. Heavily armored in iron plate mail studded with bronze rivets.",
                "description_pt": "Gigantes volumosos e musculosos, com pele acobreada e cabelos ruivos. Fortemente blindado em cota de malha de ferro cravejada com rebites de bronze.",
                "ac": "15 (plate mail)",
                "hp": 44,
                "hp_raw": "44",
                "atk": "3 greatsword +9 (2d12)",
                "atk_pt": "3 espada larga +9 (2d12)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 6,
                "d": 0,
                "c": 4,
                "i": 1,
                "w": 2,
                "ch": 1,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Fireblood. Fire immune.",
                        "pt": "Sangue de Fogo. Imune ao fogo."
                    }
                ]
        },
        {
                "name": "GIANT, FROST",
                "description": "Blue-skinned warriors with broad shoulders and braided hair. They sound war horns during their frequent raids to pillage nearby settlements.",
                "description_pt": "Guerreiros de pele azul, ombros largos e cabelos trançados. Eles tocam buzinas de guerra durante seus frequentes ataques para saquear assentamentos próximos.",
                "ac": "14 (chainmail)",
                "hp": 44,
                "hp_raw": "44",
                "atk": "3 greataxe +8 (2d10)",
                "atk_pt": "3 machado grande +8 (2d10)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 5,
                "d": 1,
                "c": 4,
                "i": 2,
                "w": 3,
                "ch": 2,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Frostblood. Cold immune.",
                        "pt": "Sangue de Gelo. Imune ao frio."
                    }
                ]
        },
        {
                "name": "GIANT, GOAT",
                "description": "Highland-dwelling, barbaric giants with goatlike legs, horns, and horizontal pupils.",
                "description_pt": "Gigantes bárbaros que vivem nas terras altas, com pernas de cabra, chifres e pupilas horizontais.",
                "ac": "12 (leather)",
                "hp": 39,
                "hp_raw": "39",
                "atk": "2 greatclub +7 (2d8) or 1 boulder (far) +7 (2d10)",
                "atk_pt": "2 grandes tacos +7 (2d8) ou 1 pedra (far) +7 (2d10)",
                "mv": "double near (climb)",
                "mv_pt": "double near (climb)",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                ]
        },
        {
                "name": "GIANT, HILL",
                "description": "Fleshy hulks with leathery skin and broad, sloping foreheads. Cruel, boorish, and dim-witted.",
                "description_pt": "Corpulentos carnudos com pele coriácea e testa larga e inclinada. Cruel, grosseiro e estúpido.",
                "ac": "11 (leather)",
                "hp": 34,
                "hp_raw": "34",
                "atk": "2 greatclub +6 (2d8) or 1 boulder (far) +6 (2d10)",
                "atk_pt": "2 grandes tacos +6 (2d8) ou 1 pedra (far) +6 (2d10)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 4,
                "d": 0,
                "c": 3,
                "i": -2,
                "w": -2,
                "ch": -2,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                ]
        },
        {
                "name": "GIANT, STONE",
                "description": "Lean, sinewy giants with stony skin and deep-set eyes. They are quiet and poised, often sitting motionless for days at a time.",
                "description_pt": "Gigantes magros e musculosos, com pele dura e olhos profundos. Eles são quietos e equilibrados, muitas vezes sentados imóveis por dias seguidos.",
                "ac": "17",
                "hp": 40,
                "hp_raw": "40",
                "atk": "2 greatclub +7 (2d8) or 1 boulder (far) +7 (2d10)",
                "atk_pt": "2 grandes tacos +7 (2d8) ou 1 pedra (far) +7 (2d10)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 4,
                "d": 2,
                "c": 4,
                "i": 1,
                "w": 1,
                "ch": -1,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Stone Hide. Half damage from stabbing and cutting weapons.",
                        "pt": "Pele de Pedra. Metade do dano causado por armas cortantes e cortantes."
                    }
                ]
        },
        {
                "name": "GIANT, STORM",
                "description": "Regal titans with sea-green skin, flowing white hair, and thundering voices. They breathe water as easily as air.",
                "description_pt": "Titãs reais com pele verde-mar, cabelos brancos esvoaçantes e vozes trovejantes. Eles respiram água tão facilmente quanto o ar.",
                "ac": "15 (mithral chainmail)",
                "hp": 58,
                "hp_raw": "58",
                "atk": "3 greatsword +10 (2d12) or 1 lightning bolt",
                "atk_pt": "3 espadas largas +10 (2d12) ou 1 raio",
                "mv": "double near (swim)",
                "mv_pt": "double near (swim)",
                "s": 6,
                "d": 2,
                "c": 4,
                "i": 3,
                "w": 4,
                "ch": 4,
                "al": "L",
                "lv": 12,
                "lv_raw": "12",
                "abilities": [
                    {
                        "en": "Stormblood. Electricity immune.",
                        "pt": "Sangue de Tempestade. Eletricidade imune."
                    },
                    {
                        "en": "Lightning Bolt. 3/day, 5' wide line extending far from giant. All creatures in line DC 15 DEX or 5d10 damage. DISADV on check if in water.",
                        "pt": "Raio. 3/dia, linha de 5' de largura estendendo-se far do gigante. Todas as criaturas na linha DC 15 DEX ou 5d10 de dano. DISADV verifique se está na água."
                    }
                ]
        },
        {
                "name": "GIBBERING MOUTHER",
                "description": "Crawling masses of slime with dozens of screeching, lipless mouths and wet eyeballs.",
                "description_pt": "Massas rastejantes de lodo com dezenas de bocas estridentes e sem lábios e globos oculares molhados.",
                "ac": "8",
                "hp": 21,
                "hp_raw": "21",
                "atk": "2 bite +3 (1d8 + latch)",
                "atk_pt": "2 mordidas +3 (1d8 + trava)",
                "mv": "near (climb, swim)",
                "mv_pt": "near (climb, swim)",
                "s": 2,
                "d": -2,
                "c": 3,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Gibbering. Creatures within near DC 12 WIS on turn or take a random action (d8): 1-3. do nothing, 4-5. move in random direction, 6-7. attack nearest creature, 8. flee.",
                        "pt": "Balbuciante. Criaturas dentro de near DC 12 WIS no turno ou realizam uma ação aleatória (d8): 1-3. não faça nada, 4-5. mova-se em direção aleatória, 6-7. atacar a criatura mais próxima, 8. fugir."
                    },
                    {
                        "en": "Latch. Attach to bitten target; bites auto-hit next round. DC 12 STR on turn to tear off.",
                        "pt": "Prender. Anexe ao alvo mordido; morde o acerto automático na próxima rodada. DC 12 STR por sua vez para arrancar."
                    }
                ]
        },
        {
                "name": "GLADIATOR",
                "description": "Veteran warriors seasoned in arena fights to the death.",
                "description_pt": "Guerreiros veteranos experientes em lutas de arena até a morte.",
                "ac": "16 (chainmail + shield)",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 longsword +3 (1d8) or 1 spear (close/near) +3 (1d6)",
                "atk_pt": "2 espadas longas +3 (1d8) ou 1 lança (close/near) +3 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 2,
                "i": 0,
                "w": 0,
                "ch": 1,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "GNOLL",
                "description": "Barbaric, opportunistic hyena- folk who range in large packs.",
                "description_pt": "Hienas bárbaras e oportunistas - povo que vive em grandes matilhas.",
                "ac": "12 (leather)",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 spear (close/near) +1 (1d6) or 1 longbow (far) +1 (1d8)",
                "atk_pt": "1 lança (close/near) +1 (1d6) ou 1 arco longo (far) +1 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 1,
                "c": 1,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds).",
                        "pt": "Fúria. 1/dia, imune a verificações de moral, +1d4 de dano (3 rodadas)."
                    }
                ]
        },
        {
                "name": "GNOME, DEEP",
                "description": "Gray-skinned, white-haired fey the size of halflings. They hunt for gems and rare cave flora.",
                "description_pt": "Fadas de pele cinza e cabelos brancos, do tamanho de halflings. Eles caçam joias e flora rara das cavernas.",
                "ac": "14 (leather + shield)",
                "hp": 14,
                "hp_raw": "14",
                "atk": "1 pick +3 (1d6) or 1 dart (near) +2 (1d4)",
                "atk_pt": "1 escolha +3 (1d6) ou 1 dardo (near) +2 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": 1,
                "w": 1,
                "ch": 1,
                "al": "L",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Stone Meld. 2/day, underground only. Turn invisible for 3 rounds.",
                        "pt": "Fusão com Pedra. 2/dia, apenas subterrâneo. Fica invisível por 3 rodadas."
                    }
                ]
        },
        {
                "name": "GOBLIN",
                "description": "A short, hairless humanoid with green skin and pointy ears.",
                "description_pt": "Um humanóide baixo e sem pêlos, com pele verde e orelhas pontudas.",
                "ac": "11",
                "hp": 5,
                "hp_raw": "5",
                "atk": "1 club +0 (1d4) or 1 shortbow (far) +1 (1d4)",
                "atk_pt": "1 taco +0 (1d4) ou 1 arco curto (far) +1 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 1,
                "c": 1,
                "i": -1,
                "w": -1,
                "ch": -2,
                "al": "C",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Keen Senses. Can't be surprised.",
                        "pt": "Sentidos Aguçados. Não posso ficar surpreso."
                    }
                ]
        },
        {
                "name": "GOBLIN, BOSS",
                "description": "A scarred goblin with knotted muscles and a crown of iron.",
                "description_pt": "Um goblin com cicatrizes, músculos nodosos e uma coroa de ferro.",
                "ac": "14 (chainmail)",
                "hp": 20,
                "hp_raw": "20",
                "atk": "1 spear (close/near) +3 (1d6)",
                "atk_pt": "1 lança (close/near) +3 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 2,
                "i": -1,
                "w": 0,
                "ch": 1,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Keen Senses. Can't be surprised.",
                        "pt": "Sentidos Aguçados. Não posso ficar surpreso."
                    }
                ]
        },
        {
                "name": "GOBLIN, SHAMAN",
                "description": "A swaying, chanting goblin wearing necklaces of teeth and a robe of musty rat pelts.",
                "description_pt": "Um goblin balançando e cantando usando colares de dentes e um manto de peles de rato mofadas.",
                "ac": "12 (leather)",
                "hp": 19,
                "hp_raw": "19",
                "atk": "1 staff +0 (1d4) or 1 spell +3",
                "atk_pt": "1 cajado +0 (1d4) ou 1 magia +3",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 1,
                "c": 1,
                "i": 0,
                "w": 2,
                "ch": 1,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Keen Senses. Can't be surprised.",
                        "pt": "Sentidos Aguçados. Não posso ficar surpreso."
                    },
                    {
                        "en": "Bug Brain (WIS Spell). DC 13. Near range, one target. Target's INT drops to 1 for 1d4 rounds.",
                        "pt": "Mente de Inseto (Magia SAB). DC 13. Perto do alcance, um alvo. O INT do alvo cai para 1 por 1d4 rodadas."
                    },
                    {
                        "en": "Skitter (WIS Spell). DC 12.",
                        "pt": "Escabujar (Magia SAB). DC 12."
                    },
                    {
                        "en": "Self. Climb like a spider for 5 rounds.",
                        "pt": "Próprio. Suba como uma aranha por 5 rodadas."
                    },
                    {
                        "en": "Stink Bomb (WIS Spell). DC 12. One target within far 2d4 damage and DC 12 CON or DISADV on next check/attack.",
                        "pt": "Bomba de Fedor (Magia SAB). DC 12. Um alvo dentro de far 2d4 de dano e DC 12 CON ou DISADV na próxima verificação/ataque."
                    }
                ]
        },
        {
                "name": "GOLEM, CLAY",
                "description": "A towering, faceless humanoid shaped from glistening clay.",
                "description_pt": "Um humanóide imponente e sem rosto, moldado em argila brilhante.",
                "ac": "14",
                "hp": 40,
                "hp_raw": "40",
                "atk": "3 slam +6 (1d8)",
                "atk_pt": "3 batidas +6 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 0,
                "c": 4,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Golem. Immune to damage from fire, cold, electricity, or non-magical sources. Healed by acid.",
                        "pt": "Golem. Imune a danos causados por fogo, frio, eletricidade ou fontes não mágicas. Curado por ácido."
                    },
                    {
                        "en": "Curse. Slam damage can only be healed by level 5+ priest.",
                        "pt": "Maldição. O dano de impacto só pode ser curado por sacerdotes de nível 5+."
                    }
                ]
        },
        {
                "name": "GOLEM, FLESH",
                "description": "A ghastly monstrosity made of sewn-together corpses.",
                "description_pt": "Uma monstruosidade horrível feita de cadáveres costurados.",
                "ac": "9",
                "hp": 35,
                "hp_raw": "35",
                "atk": "3 slam +6 (1d8)",
                "atk_pt": "3 batidas +6 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 4,
                "i": -1,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Golem. Immune to damage from fire, cold, or non-magical sources. Healed by electricity.",
                        "pt": "Golem. Imune a danos causados por fogo, frio ou fontes não mágicas. Curado por eletricidade."
                    },
                    {
                        "en": "Berserk. When at or below 20 HP, +1 slam attack and slams deal double damage.",
                        "pt": "Fúria. Quando igual ou inferior a 20 HP, +1 ataque de impacto e golpes causam dano double."
                    }
                ]
        },
        {
                "name": "GOLEM, IRON",
                "description": "A bulky iron suit that squeals and sparks with each step.",
                "description_pt": "Um volumoso traje de ferro que range e solta faíscas a cada passo.",
                "ac": "19",
                "hp": 49,
                "hp_raw": "49",
                "atk": "3 slam +8 (2d8) or 1 poison breath",
                "atk_pt": "3 batidas +8 (2d8) ou 1 sopro venenoso",
                "mv": "near",
                "mv_pt": "near",
                "s": 5,
                "d": -1,
                "c": 4,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "N",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Golem. Immune to damage from cold or non-magical sources. Healed by fire.",
                        "pt": "Golem. Imune a danos causados por fontes frias ou não-mágicas. Curado pelo fogo."
                    },
                    {
                        "en": "Poison Breath. All within near, DC 15 CON or 8d6 damage.",
                        "pt": "Sopro de Veneno. Tudo dentro de near, DC 15 CON ou 8d6 de dano."
                    }
                ]
        },
        {
                "name": "GOLEM, STONE",
                "description": "A wide-limbed, lumbering statue that shakes the ground.",
                "description_pt": "Uma estátua pesada e de membros largos que sacode o chão.",
                "ac": "18",
                "hp": 40,
                "hp_raw": "40",
                "atk": "3 slam +6 (1d10) and 1 slow",
                "atk_pt": "3 batidas +6 (1d10) e 1 lenta",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 4,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Golem. Immune to damage from fire, cold, electricity, or non-magical sources.",
                        "pt": "Golem. Imune a danos causados por fogo, frio, eletricidade ou fontes não mágicas."
                    },
                    {
                        "en": "Slow. Far range, one target. DC 15 CON or speed halved 1d4 rds.",
                        "pt": "Lento. Longe alcance, um alvo. DC 15 CON ou velocidade reduzida pela metade 1d4 rds."
                    }
                ]
        },
        {
                "name": "GORGON",
                "description": "A snorting bull made entirely of iron plating. A cloud of green fog billows from its nostrils.",
                "description_pt": "Um touro bufante feito inteiramente de chapa de ferro. Uma nuvem de névoa verde sai de suas narinas.",
                "ac": "18",
                "hp": 33,
                "hp_raw": "33",
                "atk": "2 gore +6 (2d8) or 1 charge or 1 petrifying breath",
                "atk_pt": "2 gore +6 (2d8) ou 1 carga ou 1 sopro petrificante",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 4,
                "d": 0,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Charge. Move up to double near in straight line and make 1 gore attack. If hit, x3 damage.",
                        "pt": "Investida. Mova-se para double near em linha reta e faça 1 ataque sangrento. Se atingido, x3 de dano."
                    },
                    {
                        "en": "Petrifying Breath. Fills a near- sized cube extending from gorgon. DC 15 CON or petrified (gorgons immune).",
                        "pt": "Sopro Petrificante. Preenche um cubo de tamanho near que se estende da górgona. DC 15 CON ou petrificado (górgonas imunes)."
                    }
                ]
        },
        {
                "name": "GORILLA",
                "description": "Mighty, jungle-dwelling apes.",
                "description_pt": "Macacos poderosos que vivem na selva.",
                "ac": "12",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 rend +5 (2d6)",
                "atk_pt": "2 rendas +5 (2d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 2,
                "c": 2,
                "i": -1,
                "w": 1,
                "ch": -1,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                ]
        },
        {
                "name": "GRAY OOZE",
                "description": "Slick puddles the color of stone.",
                "description_pt": "Poças escorregadias da cor de pedra.",
                "ac": "11",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 tentacle +2 (1d6)",
                "atk_pt": "1 tentáculo +2 (1d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 1,
                "d": 1,
                "c": 0,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Impervious. Immune to damage from acid, cold, or fire.",
                        "pt": "Impermeável. Imune a danos causados por ácido, frio ou fogo."
                    },
                    {
                        "en": "Corrosive. Nonmagical metal that touches the ooze dissolves on a d6 roll of 1-3.",
                        "pt": "Corrosivo. O metal não-mágico que toca a lama se dissolve em uma jogada de d6 de 1-3."
                    }
                ]
        },
        {
                "name": "GRICK",
                "description": "A huge worm with four suckered tentacles and a snapping beak.",
                "description_pt": "Um verme enorme com quatro tentáculos em forma de ventosa e um bico cortante.",
                "ac": "14",
                "hp": 19,
                "hp_raw": "19",
                "atk": "1 beak +3 (1d8) and 1 tentacle +3 (1d6 + grab)",
                "atk_pt": "1 bico +3 (1d8) e 1 tentáculo +3 (1d6 + agarrar)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 2,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Camouflage. Hard to see in cave terrain or rocks.",
                        "pt": "Camuflagem. Difícil de ver em terrenos de cavernas ou rochas."
                    },
                    {
                        "en": "Grab. Target is immobilized. DC 15 Strength check on turn to break free.",
                        "pt": "Agarrar. O alvo está imobilizado. DC 15 Teste de força no turno para se libertar."
                    }
                ]
        },
        {
                "name": "GRIFFON",
                "description": "Winged hunters with the head of an eagle and body of a lion. Their favored food is horses.",
                "description_pt": "Caçadores alados com cabeça de águia e corpo de leão. Sua comida preferida são cavalos.",
                "ac": "12",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 rend +4 (1d10)",
                "atk_pt": "2 rendas +4 (1d10)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 2,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -1,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                ]
        },
        {
                "name": "GRIMLOW",
                "description": "A tall, oval-shaped mammal. A giant, half-moon maw hides on its belly beneath its gray fur.",
                "description_pt": "Um mamífero alto e de formato oval. Uma boca gigante em forma de meia-lua se esconde em sua barriga sob seu pelo cinza.",
                "ac": "12",
                "hp": 43,
                "hp_raw": "43",
                "atk": "1 grab and 3 bite +6 (2d8)",
                "atk_pt": "1 agarrar e 3 mordidas +6 (2d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 2,
                "c": 3,
                "i": -3,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Grab. One target in near DC 15 STR or wrapped in grimlow's tongue and pulled into its mouth. Bite attacks automatically hit the target. Can only grab 1 target at a time. DC 15 STR on turn to break free.",
                        "pt": "Agarrar. Um alvo em near DC 15 STR ou envolto na língua de Grimlow e puxado para dentro de sua boca. Os ataques de mordida atingem automaticamente o alvo. Só pode pegar 1 alvo por vez. DC 15 STR por sua vez para se libertar."
                    }
                ]
        },
        {
                "name": "GUARD",
                "description": "A sentry equipped with sturdy weapons and armor.",
                "description_pt": "Uma sentinela equipada com armas e armaduras resistentes.",
                "ac": "15 (chainmail + shield)",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 spear (close/near) +1 (1d6) or 1 longsword +1 (1d8)",
                "atk_pt": "1 lança (close/near) +1 (1d6) ou 1 espada longa +1 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 0,
                "c": 0,
                "i": 0,
                "w": 1,
                "ch": 0,
                "al": "L",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                ]
        },
        {
                "name": "HAG, NIGHT",
                "description": "A purple-skinned, stooped woman with stringy, white hair and a mouth full of iron teeth.",
                "description_pt": "Uma mulher curvada, de pele roxa, cabelos brancos e pegajosos e uma boca cheia de dentes de ferro.",
                "ac": "14",
                "hp": 37,
                "hp_raw": "37",
                "atk": "2 bite +6 (1d10) and 1 blind",
                "atk_pt": "2 mordidas +6 (1d10) e 1 cego",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 2,
                "c": 1,
                "i": 2,
                "w": 3,
                "ch": 3,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Blind. One target within near DC 15 CHA or blinded for 1d4 days.",
                        "pt": "Cegar. Um alvo dentro de near DC 15 CHA ou cego por 1d4 dias."
                    },
                    {
                        "en": "Shapechange. Instantly change to look like any other humanoid.",
                        "pt": "Mudança de Forma. Mude instantaneamente para se parecer com qualquer outro humanóide."
                    }
                ]
        },
        {
                "name": "HAG, SEA",
                "description": "A green, sunken-faced woman. Seaweed hair and oozing flesh.",
                "description_pt": "Uma mulher verde e de rosto encovado. Cabelos de algas marinhas e carne escorrendo.",
                "ac": "15",
                "hp": 28,
                "hp_raw": "28",
                "atk": "2 claw +4 (1d8)",
                "atk_pt": "2 garras +4 (1d8)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 2,
                "d": 3,
                "c": 1,
                "i": 1,
                "w": 2,
                "ch": 2,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Shapechange. Instantly change to look like any other humanoid.",
                        "pt": "Mudança de Forma. Mude instantaneamente para se parecer com qualquer outro humanóide."
                    },
                    {
                        "en": "Terrify. A creature who first sees her true form DC 15 CHA or DISADV on attacks 1d4 rounds.",
                        "pt": "Aterrorizar. Uma criatura que vê pela primeira vez sua verdadeira forma DC 15 CHA ou DISADV em ataques 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "HAG, WEALD",
                "description": "Eyes dark as moonless nights, skin made of rotting wood, hair of tangled roots and vines.",
                "description_pt": "Olhos escuros como noites sem lua, pele feita de madeira podre, cabelos feitos de raízes e cipós emaranhados.",
                "ac": "14",
                "hp": 28,
                "hp_raw": "28",
                "atk": "2 claw +4 (1d8) or 1 drink pain",
                "atk_pt": "2 garras +4 (1d8) ou 1 bebida para dor",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 2,
                "c": 1,
                "i": 1,
                "w": 2,
                "ch": 3,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Drink Pain. Near range. DC 12 CHA to deal 2d4 damage to a creature; regain that many HP.",
                        "pt": "Beber Dor. Perto do alcance. DC 12 CHA para causar 2d4 de dano a uma criatura; recuperar tantos HP."
                    },
                    {
                        "en": "Shapechange. Instantly change to look like any other humanoid.",
                        "pt": "Mudança de Forma. Mude instantaneamente para se parecer com qualquer outro humanóide."
                    }
                ]
        },
        {
                "name": "HARPY",
                "description": "Horrific, winged women with vulture-like lower bodies. They keen a hypnotic song.",
                "description_pt": "Mulheres horríveis e aladas com a parte inferior do corpo semelhante à de um abutre. Eles gostam de uma música hipnótica.",
                "ac": "13",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 claw +3 (1d6) or 1 song",
                "atk_pt": "2 garras +3 (1d6) ou 1 música",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 1,
                "d": 3,
                "c": 1,
                "i": 0,
                "w": 0,
                "ch": 1,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Song. Enemies who can hear within double near DC 12 CHA or dazed and drawn to harpy for 1d4 rounds. Immune for 1 day if passed check.",
                        "pt": "Canção. Inimigos que podem ouvir dentro de double near DC 12 CHA ou atordoados e atraídos pela harpia por 1d4 rodadas. Imune por 1 dia se passar no teste."
                    }
                ]
        },
        {
                "name": "HELL HOUND",
                "description": "Black wolfhounds with red eyes and jaws dripping with flames.",
                "description_pt": "Wolfhounds pretos com olhos vermelhos e mandíbulas pingando chamas.",
                "ac": "13",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 bite +4 (1d8) or 1 fire breath",
                "atk_pt": "2 mordidas +4 (1d8) ou 1 sopro de fogo",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune.",
                        "pt": "Impermeável. Imune ao fogo."
                    },
                    {
                        "en": "Fire Breath. Fills a near-sized cube extending from hell hound. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds.",
                        "pt": "Sopro de Fogo. Preenche um cubo de tamanho near que se estende do cão infernal. DC 15 DEX ou 3d8 danos. Não é possível usar novamente por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "HIPPOGRIFF",
                "description": "Fierce, winged creatures with the lower body of a horse and upper body of a giant eagle.",
                "description_pt": "Criaturas ferozes e aladas com a parte inferior do corpo de um cavalo e a parte superior do corpo de uma águia gigante.",
                "ac": "13",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 rend +3 (1d8)",
                "atk_pt": "2 rendas +3 (1d8)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 3,
                "d": 3,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "HIPPOPOTAMUS",
                "description": "Ornery river-beasts as large as cows with round, purple bodies and bulbous snouts.",
                "description_pt": "Bestas de rio teimosas, grandes como vacas, com corpos redondos e roxos e focinhos bulbosos.",
                "ac": "12",
                "hp": 24,
                "hp_raw": "24",
                "atk": "2 bite +4 (1d10)",
                "atk_pt": "2 mordidas +4 (1d10)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 4,
                "d": 0,
                "c": 2,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Stumpy. ADV on STR checks to grab or drag other creatures.",
                        "pt": "Caneludo. ADV em STR testes para agarrar ou arrastar outras criaturas."
                    }
                ]
        },
        {
                "name": "HOBGOBLIN",
                "description": "A sturdy, tall goblin with russet skin. Militant and strategic.",
                "description_pt": "Um goblin alto e robusto com pele avermelhada. Militante e estratégico.",
                "ac": "15 (chainmail + shield)",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 longsword +3 (1d8) or 1 longbow (far) +0 (1d8)",
                "atk_pt": "1 espada longa +3 (1d8) ou 1 arco longo (far) +0 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 1,
                "i": 2,
                "w": 1,
                "ch": 1,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Phalanx. +1 to attacks and AC when in close range of an allied hobgoblin.",
                        "pt": "Falange. +1 para ataques e AC quando estiver no alcance close de um hobgoblin aliado."
                    }
                ]
        },
        {
                "name": "HORSE",
                "description": "Powerful, swift herd animals that roam open plains.",
                "description_pt": "Animais de rebanho poderosos e rápidos que vagam por planícies abertas.",
                "ac": "11",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 hooves +3 (1d6)",
                "atk_pt": "1 cascos +3 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "HYDRA",
                "description": "A towering, amphibious reptile with a bouquet of snake heads writhing on long necks.",
                "description_pt": "Um imponente réptil anfíbio com um buquê de cabeças de cobra se contorcendo em longos pescoços.",
                "ac": "15",
                "hp": 0,
                "hp_raw": "*",
                "atk": "1 bite (near) +6 (1d8)",
                "atk_pt": "1 mordida (near) +6 (1d8)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 5,
                "d": 1,
                "c": 2,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 0,
                "lv_raw": "*",
                "abilities": [
                    {
                        "en": "Heads. Choose how many heads the hydra has. Each is LV 2, AC 15, HP 11, and can make 1 bite attack. A killed head sprouts into two new heads at the start of the hydra's turn unless cauterized beforehand. The hydra's LV is all the heads combined.",
                        "pt": "Cabeças. Escolha quantas cabeças a hidra possui. Cada um tem LV 2, AC 15, HP 11 e pode fazer 1 ataque de mordida. Uma cabeça morta se transforma em duas novas cabeças no início do turno da hidra, a menos que seja cauterizada previamente. O LV da hidra são todas as cabeças combinadas."
                    }
                ]
        },
        {
                "name": "INVISIBLE STALKER",
                "description": "Intelligent creatures made of flowing air. Often bound to the bidding of evil sorcerers for their peerless tracking ability.",
                "description_pt": "Criaturas inteligentes feitas de ar corrente. Freqüentemente vinculados às ordens de feiticeiros malvados por sua incomparável capacidade de rastreamento.",
                "ac": "13",
                "hp": 29,
                "hp_raw": "29",
                "atk": "3 pummel +4 (1d6)",
                "atk_pt": "3 golpes +4 (1d6)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 2,
                "d": 3,
                "c": 2,
                "i": 2,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Bound. A secret, mundane contingency (such as the touch of a feather) ends the invisible stalker's magical servitude.",
                        "pt": "Preso. Uma contingência secreta e mundana (como o toque de uma pena) acaba com a servidão mágica do perseguidor invisível."
                    },
                    {
                        "en": "Invisible. Naturally invisible.",
                        "pt": "Invisível. Naturalmente invisível."
                    },
                    {
                        "en": "Tracking. Can always sense the direction of its chosen quarry.",
                        "pt": "Rastreamento. Sempre consegue sentir a direção da presa escolhida."
                    }
                ]
        },
        {
                "name": "JELLYFISH",
                "description": "Hand-sized, purple sea jellies with stinging tentacles.",
                "description_pt": "Geléias marinhas roxas do tamanho de uma mão com tentáculos picantes.",
                "ac": "11",
                "hp": 1,
                "hp_raw": "1",
                "atk": "1 sting +1 (1 + toxin)",
                "atk_pt": "1 picada +1 (1 + toxina)",
                "mv": "close (swim)",
                "mv_pt": "close (swim)",
                "s": -4,
                "d": 1,
                "c": 0,
                "i": -4,
                "w": 1,
                "ch": -4,
                "al": "N",
                "lv": 0,
                "lv_raw": "0",
                "abilities": [
                    {
                        "en": "Toxin. DC 9 CON or paralyzed 1d4 rounds.",
                        "pt": "Toxina. DC 9 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "KNIGHT",
                "description": "A warrior in shining plate mail and the surcoat of a knightly order.",
                "description_pt": "Um guerreiro com uma cota de malha brilhante e a túnica de uma ordem de cavaleiro.",
                "ac": "17 (plate mail + shield)",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 bastard sword +3 (1d8)",
                "atk_pt": "2 espada bastarda +3 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 1,
                "i": 0,
                "w": 0,
                "ch": 1,
                "al": "L",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Oath. 3/day, ADV on a roll made in service of knight's order.",
                        "pt": "Juramento. 3/dia, ADV em um lançamento feito a serviço da ordem do cavaleiro."
                    }
                ]
        },
        {
                "name": "KOBOLD",
                "description": "Puny, scaled coyote-lizards that dwell underground.",
                "description_pt": "Lagartos-coiotes insignificantes e escamosos que vivem no subsolo.",
                "ac": "13 (leather)",
                "hp": 1,
                "hp_raw": "1",
                "atk": "1 spear (close/near) +0 (1d6)",
                "atk_pt": "1 lança (close/near) +0 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": -2,
                "d": 2,
                "c": 0,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 0,
                "lv_raw": "0",
                "abilities": [
                    {
                        "en": "Dodge. 1/day, an attack that would hit misses instead.",
                        "pt": "Esquiva. 1/dia, um ataque que acertaria em vez disso."
                    }
                ]
        },
        {
                "name": "KOBOLD, SORCERER",
                "description": "A scaly dog-lizard painted with colorful stripes and rattling a hefty leg bone strung with beads and feathers.",
                "description_pt": "Um cão-lagarto escamoso pintado com listras coloridas e sacudindo um forte osso de perna amarrado com miçangas e penas.",
                "ac": "13 (leather)",
                "hp": 13,
                "hp_raw": "13",
                "atk": "1 club +1 (1d4) or 1 spell +2",
                "atk_pt": "1 clava +1 (1d4) ou 1 magia +2",
                "mv": "near",
                "mv_pt": "near",
                "s": -2,
                "d": 2,
                "c": 0,
                "i": -1,
                "w": 1,
                "ch": 2,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Dodge. 1/day, an attack that would hit misses instead.",
                        "pt": "Esquiva. 1/dia, um ataque que acertaria em vez disso."
                    },
                    {
                        "en": "Scorpion Sting (CHA Spell). DC 11. Near range, one target. 1d6 damage and target has DISADV on next attack roll or check.",
                        "pt": "Ferrão de Escorpião (Magia CAR). DC 11. Perto do alcance, um alvo. 1d6 de dano e o alvo tem DISADV na próxima jogada de ataque ou teste."
                    },
                    {
                        "en": "Spider Swarm (CHA Spell). DC 12. A spider swarm appears within near. Stays 1d4 rounds. Follows sorcerer's commands.",
                        "pt": "Enxame de Aranhas (Magia CAR). DC 12. Um enxame de aranhas aparece em near. Fica 1d4 rodadas. Segue os comandos do feiticeiro."
                    }
                ]
        },
        {
                "name": "KRAKEN",
                "description": "Primordial, tentacled leviathans the size of war galleons. They live in the lightless depths of the deep ocean.",
                "description_pt": "Leviatãs primordiais com tentáculos do tamanho de galeões de guerra. Eles vivem nas profundezas escuras do oceano profundo.",
                "ac": "18",
                "hp": 80,
                "hp_raw": "80",
                "atk": "4 tentacle (near) +9 (2d12) or 1 storm or 1d4 lightning bolt",
                "atk_pt": "4 tentáculos (near) +9 (2d12) ou 1 tempestade ou 1d4 relâmpago",
                "mv": "double near (swim)",
                "mv_pt": "double near (swim)",
                "s": 6,
                "d": 3,
                "c": 4,
                "i": 4,
                "w": 3,
                "ch": 4,
                "al": "C",
                "lv": 17,
                "lv_raw": "17",
                "abilities": [
                    {
                        "en": "Impervious. Electricity immune.",
                        "pt": "Impermeável. Eletricidade imune."
                    },
                    {
                        "en": "Crush. Tentacle attacks deal double damage against objects.",
                        "pt": "Esmagar. Ataques de tentáculos causam dano double contra objetos."
                    },
                    {
                        "en": "Lightning Bolt. Straight line (5' wide) extending far from kraken. DC 15 DEX or 6d6 damage.",
                        "pt": "Raio. Linha reta (5' de largura) estendendo-se far do kraken. DC 15 DEX ou 6d6 danos."
                    },
                    {
                        "en": "Storm. Seas become violently turbulent in 1 mile radius around kraken. Lasts 2d4 rounds. Seaborne vessels have a 1:6 chance of capsizing each round.",
                        "pt": "Tempestade. Os mares tornam-se violentamente turbulentos num raio de 1 milha ao redor do Kraken. Dura 2d4 rodadas. As embarcações marítimas têm uma chance de 1:6 de virar a cada rodada."
                    }
                ]
        },
        {
                "name": "LEECH, GIANT",
                "description": "A glossy black, blood-drinking slug as large as a cat.",
                "description_pt": "Uma lesma preta brilhante, bebedora de sangue, do tamanho de um gato.",
                "ac": "9",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 bite +1 (1d4 + attach)",
                "atk_pt": "1 mordida +1 (1d4 + anexar)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 1,
                "d": -1,
                "c": 1,
                "i": -3,
                "w": -1,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Attach. Attach to target; bite auto-hits next round. DC 12 STR on turn to tear off.",
                        "pt": "Aderir. Anexe ao alvo; morder os acertos automáticos na próxima rodada. DC 12 STR por sua vez para arrancar."
                    }
                ]
        },
        {
                "name": "LEPRECHAUN",
                "description": "Impish fey who favor green garb and love fooling \"tall folk\" with promises of gold.",
                "description_pt": "Fadas travessas que preferem trajes verdes e adoram enganar “gente alta” com promessas de ouro.",
                "ac": "13",
                "hp": 19,
                "hp_raw": "19",
                "atk": "1 spell +4",
                "atk_pt": "1 magia +4",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 3,
                "c": 1,
                "i": 2,
                "w": 1,
                "ch": 3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Alert. Cannot be surprised.",
                        "pt": "Alerta. Não posso ficar surpreso."
                    },
                    {
                        "en": "Slippery. Hostile spells targeting the leprechaun are DC 15 to cast. Fool's Gold (CHA Spell). DC 12.",
                        "pt": "Escorregadio. Magias hostis direcionados ao duende têm DC 15 para serem lançados. Ouro do Tolo (CHA Feitiço). DC 12."
                    },
                    {
                        "en": "Close. One small object or small group of similar objects. Turn objects into silver or gold pieces. Lasts 1 day.",
                        "pt": "Fechar. Um pequeno objeto ou pequeno grupo de objetos semelhantes. Transforme objetos em peças de prata ou ouro. Dura 1 dia."
                    },
                    {
                        "en": "Illusion (CHA Spell). DC 11. Create a convincing visual and/ or auditory illusion within near. Lasts until dismissed.",
                        "pt": "Ilusão (Magia CAR). DC 11. Crie uma ilusão visual e/ou auditiva convincente em near. Dura até ser dispensado."
                    },
                    {
                        "en": "Invisibility (CHA Spell). DC 12.",
                        "pt": "Invisibilidade (Magia CAR). DC 12."
                    },
                    {
                        "en": "Self. Become invisible for 2d4 rounds.",
                        "pt": "Próprio. Torne-se invisível por 2d4 rodadas."
                    }
                ]
        },
        {
                "name": "LICH",
                "description": "A wizard who has completed a necromantic ritual to become a mighty, undead sorcerer. Its withered body is draped in moldering, silk robes, and red marshlights burn in its eyes.",
                "description_pt": "Um mago que completou um ritual necromântico para se tornar um poderoso feiticeiro morto-vivo. Seu corpo murcho está envolto em vestes de seda mofadas e luzes vermelhas do pântano queimam em seus olhos.",
                "ac": "16",
                "hp": 62,
                "hp_raw": "62",
                "atk": "2 touch +6 (2d8 + paralysis) and 2 spell +7",
                "atk_pt": "2 toques +6 (2d8 + paralisia) e 2 feitiços +7",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 1,
                "c": 4,
                "i": 4,
                "w": 3,
                "ch": 3,
                "al": "C",
                "lv": 13,
                "lv_raw": "13",
                "abilities": [
                    {
                        "en": "Supreme Undead. Immune to morale checks. Only damaged by magical sources.",
                        "pt": "Morto-Vivo Supremo. Imune a verificações de moral. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Phylactery. Can't be killed while spirit vessel (an object) is intact.",
                        "pt": "Filactério. Não pode ser morto enquanto o recipiente espiritual (um objeto) estiver intacto."
                    },
                    {
                        "en": "Paralysis. DC 15 CON or paralyzed 1d4 rounds.",
                        "pt": "Paralisia. DC 15 CON ou paralisado 1d4 rodadas."
                    },
                    {
                        "en": "Flight (INT Spell).",
                        "pt": "Voo (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 13. Fly double near for 5 rounds.",
                        "pt": "Próprio. DC 13. Voe double near por 5 rodadas."
                    },
                    {
                        "en": "Null (INT Spell).",
                        "pt": "Nulo (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 14. Hostile spells targeting lich are DC 18 to cast. Lasts 1d4 rounds.",
                        "pt": "Próprio. DC 14. Magias hostis direcionados ao lich são DC 18 para serem lançados. Dura 1d4 rodadas."
                    },
                    {
                        "en": "Shadow Leap (INT Spell).",
                        "pt": "Salto Sombrio (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 14. Teleport up to 100 miles. Sigil of Doom (INT Spell). DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP.",
                        "pt": "Próprio. DC 14. Teletransporte até 100 milhas. Sigilo da Perdição (INT Feitiço). DC 15. Um alvo de LV 9 ou menos dentro de near DC 15 CON ou vá para 0 HP."
                    },
                    {
                        "en": "Wither (INT Spell). DC 14. 4d8 damage to enemies within a near-sized cube centered on lich.",
                        "pt": "Murchar (Magia INT). DC 14. 4d8 de dano aos inimigos dentro de um cubo de near centrado no lich."
                    }
                ]
        },
        {
                "name": "LION",
                "description": "Tawny great cats that hunt in open plains. Males have manes.",
                "description_pt": "Grandes felinos fulvos que caçam em planícies abertas. Os machos têm crinas.",
                "ac": "12",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 rend +4 (1d8)",
                "atk_pt": "2 rendas +4 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 2,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "LIZARDFOLK",
                "description": "Crocodilian humanoids with scaly faces, claws, and tails. They dwell in swamps and rivers.",
                "description_pt": "Humanóides crocodilianos com rostos escamosos, garras e caudas. Eles moram em pântanos e rios.",
                "ac": "14 (leather + shield)",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 spear (close/near) +2 (1d6)",
                "atk_pt": "1 lança (close/near) +2 (1d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 1,
                "d": 1,
                "c": 2,
                "i": -1,
                "w": 1,
                "ch": -2,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "MAGE",
                "description": "Trained wizards who are often members of a sorcerous order.",
                "description_pt": "Bruxos treinados que geralmente são membros de uma ordem bruxa.",
                "ac": "11",
                "hp": 27,
                "hp_raw": "27",
                "atk": "1 spell +5",
                "atk_pt": "1 magia +5",
                "mv": "near",
                "mv_pt": "near",
                "s": -1,
                "d": 1,
                "c": 0,
                "i": 3,
                "w": 1,
                "ch": 0,
                "al": "L",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Arcane Armor (INT Spell).",
                        "pt": "Armadura Arcana (INT Feitiço)."
                    },
                    {
                        "en": "Self. DC 12. AC 16 for 2d4 rounds.",
                        "pt": "Próprio. DC 12. AC 16 para 2d4 rodadas."
                    },
                    {
                        "en": "Blast (INT Spell). DC 12. Far, one target. 2d6 damage.",
                        "pt": "Explosão (Magia INT). DC 12. Longe, um alvo. 2d6 dano."
                    },
                    {
                        "en": "Cancel (INT Spell). DC 13. End one spell affecting a target within near.",
                        "pt": "Cancelar (Magia INT). DC 13. Encerre um feitiço que afeta um alvo dentro de near."
                    },
                    {
                        "en": "Levitate (INT Spell). DC 12.",
                        "pt": "Levitar (Magia INT). DC 12."
                    },
                    {
                        "en": "Close.",
                        "pt": "Fechar."
                    },
                    {
                        "en": "Focus. Hover near for duration, vertical movement only.",
                        "pt": "Foco. Passe o mouse near durante a duração, apenas movimento vertical."
                    },
                    {
                        "en": "Snare (INT Spell). DC 13.",
                        "pt": "Armadilha (Magia INT). DC 13."
                    },
                    {
                        "en": "Focus. One humanoid target within near paralyzed for duration.",
                        "pt": "Foco. Um alvo humanóide dentro de near fica paralisado por toda a duração."
                    }
                ]
        },
        {
                "name": "MAMMOTH",
                "description": "Massive, shaggy elephants with tusks that reach the ground.",
                "description_pt": "Elefantes enormes e peludos com presas que chegam ao chão.",
                "ac": "15",
                "hp": 44,
                "hp_raw": "44",
                "atk": "2 tusks +7 (1d12)",
                "atk_pt": "2 presas +7 (1d12)",
                "mv": "near",
                "mv_pt": "near",
                "s": 5,
                "d": 0,
                "c": 4,
                "i": -2,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Thick Fur. Cold immune.",
                        "pt": "Pelo Espesso. Imune ao frio."
                    },
                    {
                        "en": "Charge. Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage.",
                        "pt": "Investida. Mova-se para double near em linha reta e faça 1 ataque de presas. Se atingido, x3 de dano."
                    }
                ]
        },
        {
                "name": "MANTA RAY, GIANT",
                "description": "Swooping manta rays as large as longboats. Gentle and intelligent enough to be trained.",
                "description_pt": "Arraias manta tão grandes quanto escaleres. Gentil e inteligente o suficiente para ser treinado.",
                "ac": "13",
                "hp": 37,
                "hp_raw": "37",
                "atk": "2 sting +5 (1d12 + poison)",
                "atk_pt": "2 picadas +5 (1d12 + veneno)",
                "mv": "double near (swim)",
                "mv_pt": "double near (swim)",
                "s": 3,
                "d": 3,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or drop to 0 hit points in 1d4 rounds.",
                        "pt": "Veneno. DC 15 CON ou cair para 0 pontos de vida em 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "MANTICORE",
                "description": "Human-faced lions with bat wings and cruelly spiked tails. They speak halting Thanian and love devouring human flesh.",
                "description_pt": "Leões com rosto humano, asas de morcego e caudas cruelmente pontiagudas. Eles falam Thanian hesitante e adoram devorar carne humana.",
                "ac": "14",
                "hp": 29,
                "hp_raw": "29",
                "atk": "2 rend +6 (2d6) or 2 tail spike (far) +4 (1d8)",
                "atk_pt": "2 rend +6 (2d6) ou 2 pontas de cauda (far) +4 (1d8)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 2,
                "c": 2,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Spikes. Manticores have 4d6 tail spikes. They regrow each day.",
                        "pt": "Espigões. Manticoras têm 4d6 pontas de cauda. Eles voltam a crescer a cada dia."
                    }
                ]
        },
        {
                "name": "MASTIFF",
                "description": "Muscled guard dogs with fierce loyalty to their pack or owners.",
                "description_pt": "Cães de guarda musculosos com lealdade feroz à matilha ou aos donos.",
                "ac": "11",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 bite +1 (1d6)",
                "atk_pt": "1 mordida +1 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 1,
                "c": 0,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                ]
        },
        {
                "name": "MEDUSA",
                "description": "Immortal women with coiling snakes for hair and scaled skin.",
                "description_pt": "Mulheres imortais com cobras enroladas no lugar do cabelo e pele escamada.",
                "ac": "14",
                "hp": 38,
                "hp_raw": "38",
                "atk": "1 snake bite +6 (1d6 + poison)",
                "atk_pt": "1 picada de cobra +6 (1d6 + veneno)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 2,
                "i": 2,
                "w": 3,
                "ch": 4,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Godborn. Hostile spells targeting the medusa are DC 15 to cast.",
                        "pt": "Nascido de Deus. Magias hostis direcionados à medusa são DC 15 para serem lançados."
                    },
                    {
                        "en": "Petrify. Any creature (including medusa) who looks directly at medusa, DC 15 CON or petrified.",
                        "pt": "Petrificar. Qualquer criatura (incluindo medusa) que olhe diretamente para a medusa, DC 15 CON ou petrificada."
                    },
                    {
                        "en": "Poison. DC 15 CON or go to 0 HP.",
                        "pt": "Veneno. DC 15 CON ou vá para 0 HP."
                    }
                ]
        },
        {
                "name": "MERFOLK",
                "description": "Ocean dwellers with human upper bodies and long fish tails.",
                "description_pt": "Habitantes do oceano com parte superior do corpo humano e longas caudas de peixe.",
                "ac": "11",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 spear (close/ near) +2 (1d6)",
                "atk_pt": "1 lança (close/ near) +2 (1d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 1,
                "d": 1,
                "c": 0,
                "i": 0,
                "w": 1,
                "ch": 1,
                "al": "L",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "MIMIC",
                "description": "Beasts that look like objects.",
                "description_pt": "Bestas que parecem objetos.",
                "ac": "12",
                "hp": 23,
                "hp_raw": "23",
                "atk": "2 bite +5 (1d8 + stick)",
                "atk_pt": "2 mordidas +5 (1d8 + bastão)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 0,
                "c": 1,
                "i": -2,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Stick. DC 15 STR or adhere to target; auto-hit with bite. DC 15 STR on turn to remove.",
                        "pt": "Grudar. DC 15 STR ou aderir à meta; golpe automático com mordida. DC 15 STR por sua vez para remover."
                    }
                ]
        },
        {
                "name": "MINOTAUR",
                "description": "Ferocious bull-men with hooves and curved horns. They live in mazelike tunnels.",
                "description_pt": "Homens-touro ferozes com cascos e chifres curvos. Eles vivem em túneis labirínticos.",
                "ac": "14 (chainmail)",
                "hp": 34,
                "hp_raw": "34",
                "atk": "2 greataxe +6 (1d10) and 1 horns +6 (1d12)",
                "atk_pt": "2 machados grandes +6 (1d10) e 1 chifre +6 (1d12)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": 1,
                "w": 2,
                "ch": 1,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Charge. In place of attacks, move up to double near in a straight line and make 1 horn attack. If hit, x2 damage.",
                        "pt": "Investida. No lugar dos ataques, mova-se para double near em linha reta e faça 1 ataque de chifre. Se atingido, x2 de dano."
                    }
                ]
        },
        {
                "name": "MOOSE",
                "description": "A towering, brown-haired grazer with weighty, flat antlers.",
                "description_pt": "Um herbívoro imponente, de cabelos castanhos e chifres achatados e pesados.",
                "ac": "11",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 antler +3 (1d6)",
                "atk_pt": "2 chifres +3 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 0,
                "c": 1,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "A skinless mummy-lich wearing a crown set with nine bright gems. Once the head of the ancient, wizardly order of Gehemna, Mordanticus now lives in secret within the sanctum of Gehemna's reigning archmage. He has served as an advisor and historian for centuries, but an enduring enchantment prevents him from speaking of two topics: his origins, and The Ten-Eyed Oracle.",
                        "pt": "Uma múmia-lich sem pele usando uma coroa incrustada com nove gemas brilhantes. Outrora o chefe da antiga ordem mágica de Gehemna, Mordanticus agora vive em segredo no santuário do arquimago reinante de Gehemna. Ele serviu como conselheiro e historiador durante séculos, mas um encantamento duradouro o impede de falar de dois tópicos: suas origens e O Oráculo dos Dez Olhos."
                    }
                ]
        },
        {
                "name": "MORDANTICUS THE FLAYED",
                "description": "\"Long have I held the weighty secrets of Gehemna, an age-old litany inscribed upon my weary soul.\" -Mordanticus the Flayed",
                "description_pt": "\"Há muito tempo guardo os segredos importantes da Gehemna, uma antiga litania inscrita em minha alma cansada.\" -Mordanticus, o Esfolado",
                "ac": "17",
                "hp": 89,
                "hp_raw": "89",
                "atk": "1 rot touch +8 (1d10 + necrosis) and 3 spell +8",
                "atk_pt": "1 toque de podridão +8 (1d10 + necrose) e 3 feitiços +8",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": 4,
                "c": 4,
                "i": 5,
                "w": 4,
                "ch": 5,
                "al": "N",
                "lv": 19,
                "lv_raw": "19",
                "abilities": [
                    {
                        "en": "Legendary Undead. Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Mordanticus are DC 18 to cast.",
                        "pt": "Morto-Vivo Lendário. Imune a verificações de moral. Danificado apenas por fontes mágicas. Magias hostis direcionados a Mordanticus têm DC 18 para serem lançados."
                    },
                    {
                        "en": "Crown of Gehemna. 3/day, cause a spell being cast within far to fail.",
                        "pt": "Coroa de Gehemna. 3/dia, faz com que um feitiço lançado dentro de far falhe."
                    },
                    {
                        "en": "Necrosis. DC 15 CON or go to 0 HP. Healing spells are DC 15 to cast on target while at 0 HP due to this effect.",
                        "pt": "Necrose. DC 15 CON ou vá para 0 HP. Os feitiços de cura são DC 15 para serem lançados no alvo enquanto estiver em 0 HP devido a este efeito."
                    },
                    {
                        "en": "Phylactery. Cannot be killed while spirit vessel (a diamond) is intact.",
                        "pt": "Filactério. Não pode ser morto enquanto o recipiente espiritual (um diamante) estiver intacto."
                    },
                    {
                        "en": "Absorb (INT Spell). DC 13. Near, one target. Target loses the ability to cast one random spell until completed long rest.",
                        "pt": "Absorver (Magia INT). DC 13. Perto, um alvo. O alvo perde a capacidade de lançar um feitiço aleatório até completar um descanso longo."
                    }
                ]
        },
        {
                "name": "MUMMY",
                "description": "A desiccated, linen-wrapped zombie. It was created with an intricate embalming ritual used only upon the most worthy warriors or rulers.",
                "description_pt": "Um zumbi desidratado e envolto em linho. Foi criado com um intrincado ritual de embalsamamento usado apenas pelos guerreiros ou governantes mais dignos.",
                "ac": "13",
                "hp": 47,
                "hp_raw": "47",
                "atk": "3 rot touch +8 (1d10 + necrosis)",
                "atk_pt": "3 toque de podridão +8 (1d10 + necrose)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 2,
                "i": 3,
                "w": 2,
                "ch": 3,
                "al": "C",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Supreme Undead. Immune to morale checks. Only damaged by magical sources.",
                        "pt": "Morto-Vivo Supremo. Imune a verificações de moral. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Desiccated. Can be damaged by fire. Takes x2 damage from it.",
                        "pt": "Dessecado. Pode ser danificado pelo fogo. Recebe x2 de dano dele."
                    },
                    {
                        "en": "Necrosis. DC 15 CON or drop to 0 HP. Healing spells are DC 15 to cast on target while at 0 HP due to this effect.",
                        "pt": "Necrose. DC 15 CON ou cair para 0 HP. Os feitiços de cura são DC 15 para serem lançados no alvo enquanto estiver em 0 HP devido a este efeito."
                    }
                ]
        },
        {
                "name": "MUSHROOMFOLK",
                "description": "Lumbering humanoids with spongy, elongated bodies and toadstools on their heads.",
                "description_pt": "Humanóides pesados com corpos alongados e esponjosos e cogumelos na cabeça.",
                "ac": "13",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 slam +2 (1d6)",
                "atk_pt": "2 batidas +2 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": -1,
                "c": 2,
                "i": 0,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Sunblind. Blinded in bright light.",
                        "pt": "Cego pelo Sol. Cego sob luz brilhante."
                    },
                    {
                        "en": "Telepathic. Speak mentally with creatures within double near.",
                        "pt": "Telepata. Fale mentalmente com criaturas dentro de double near."
                    }
                ]
        },
        {
                "name": "NAGA",
                "description": "Magic-wielding cobras towering ten feet high. Once a dominant species, they are now rare and reclusive, bitter to the last.",
                "description_pt": "Cobras com poderes mágicos com três metros de altura. Outrora uma espécie dominante, agora são raros e reclusos, amargos até ao fim.",
                "ac": "16",
                "hp": 43,
                "hp_raw": "43",
                "atk": "2 bite +7 (2d6 + poison) and 1 spell +7",
                "atk_pt": "2 mordidas +7 (2d6 + veneno) e 1 magia +7",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": 2,
                "w": 2,
                "ch": 4,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or paralyzed 1d4 rounds.",
                        "pt": "Veneno. DC 15 CON ou paralisado 1d4 rodadas."
                    },
                    {
                        "en": "Agony (CHA Spell). DC 14. One target in near takes 3d8 damage.",
                        "pt": "Agonia (Magia CAR). DC 14. Um alvo em near sofre 3d8 de dano."
                    },
                    {
                        "en": "Hypnotize (CHA Spell). DC 13.",
                        "pt": "Hipnotizar (Magia CAR). DC 13."
                    },
                    {
                        "en": "Focus. One target in near range who can see naga is helplessly stupefied for duration.",
                        "pt": "Foco. Um alvo no alcance near que possa ver nagas fica indefeso e estupefato por um período."
                    },
                    {
                        "en": "Whispers (CHA Spell). DC 12. Hostile spells cast on one target in near are DC 9 for 1d4 rounds.",
                        "pt": "Sussurros (Magia CAR). DC 12. Magias hostis lançados em um alvo em near são DC 9 por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "NAGA, BONE",
                "description": "Mindless, skeletal husks of nagas reanimated by sorcery.",
                "description_pt": "Cascas esqueléticas e estúpidas de nagas reanimadas por feitiçaria.",
                "ac": "13",
                "hp": 31,
                "hp_raw": "31",
                "atk": "2 bite +5 (2d6)",
                "atk_pt": "2 mordidas +5 (2d6)",
                "mv": "near (burrow, climb)",
                "mv_pt": "near (burrow, climb)",
                "s": 3,
                "d": 2,
                "c": 4,
                "i": -3,
                "w": 0,
                "ch": 4,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.",
                        "pt": "Morto-Vivo Maior. Imune a verificações de moral. Danificado apenas por prata ou fontes mágicas."
                    }
                ]
        },
        {
                "name": "NIGHTMARE",
                "description": "Black warhorses with flaming manes, hooves, and eyes.",
                "description_pt": "Cavalos de guerra negros com crinas, cascos e olhos flamejantes.",
                "ac": "13",
                "hp": 29,
                "hp_raw": "29",
                "atk": "2 hooves +5 (1d8)",
                "atk_pt": "2 cascos +5 (1d8)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 3,
                "d": 3,
                "c": 2,
                "i": -1,
                "w": 1,
                "ch": -2,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Impervious. Nightmare and its rider immune to fire. A pale, angular woman in translucent plate mail fashioned from giant scorpion chitin. Obe-Ixx, daughter of Azarumme, rose up from the prehistoric barbarian tribes of Tal-Yool to conquer all in her path. One day, she stood at the steps of an obsidian ziggurat deep within the trackless jungle. Forty nights later, Obe-Ixx emerged as the ur-vampire, bloodlust made flesh. Her dynasty would rise and fall again and again over the coming millennia.",
                        "pt": "Impermeável. Nightmare e seu cavaleiro são imunes ao fogo. Uma mulher pálida e angulosa usando uma cota de malha translúcida feita de quitina de escorpião gigante. Obe-Ixx, filha de Azarumme, surgiu das tribos bárbaras pré-históricas de Tal-Yool para conquistar tudo em seu caminho. Um dia, ela estava nos degraus de um zigurate de obsidiana nas profundezas da selva sem trilhas. Quarenta noites depois, Obe-Ixx emergiu como o seu-vampiro, sede de sangue feito carne. Sua dinastia subiria e cairia repetidas vezes ao longo dos milênios seguintes."
                    }
                ]
        },
        {
                "name": "OBE-IXX OF AZARUMME",
                "description": "\"By this blade, the empire of Azarumme shall rise again!\" -Obe-Ixx of Azarumme",
                "description_pt": "\"Por esta lâmina, o império de Azarumme se erguerá novamente!\" -Obe-Ixx de Azarumme",
                "ac": "18 (+3 plate mail)",
                "hp": 76,
                "hp_raw": "76",
                "atk": "4 greatsword (near) +11 (1d12 + 2 + Moonbite properties) and 1 bite +9 (1d8 + blood drain) and 1 charm",
                "atk_pt": "4 espadas grandes (near) +11 (1d12 + 2 + propriedades Moonbite) e 1 mordida +9 (1d8 + drenagem de sangue) e 1 amuleto",
                "mv": "near (climb, fly)",
                "mv_pt": "near (climb, fly)",
                "s": 5,
                "d": 3,
                "c": 4,
                "i": 3,
                "w": 4,
                "ch": 5,
                "al": "C",
                "lv": 16,
                "lv_raw": "16",
                "abilities": [
                    {
                        "en": "Legendary Undead. Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Obe-Ixx are DC 18 to cast.",
                        "pt": "Morto-Vivo Lendário. Imune a verificações de moral. Danificado apenas por fontes mágicas. Magias hostis direcionados a Obe-Ixx têm DC 18 para serem lançados."
                    },
                    {
                        "en": "Blood Drain. Obe-Ixx heals 2d8 HP, target permanently loses 1d6 CON. At 0 CON, target dies and rises as a loyal vampire or vampire spawn (Obe-Ixx chooses).",
                        "pt": "Drenar Sangue. Obe-Ixx cura 2d8 HP, o alvo perde permanentemente 1d6 CON. Em 0 CON, o alvo morre e ressuscita como um vampiro leal ou cria de vampiro (Obe-Ixx escolhe)."
                    },
                    {
                        "en": "Charm. DC 18 CHA or target is charmed for 1d4 rounds.",
                        "pt": "Enfeitiçar. DC 18 CHA ou o alvo fica encantado por 1d4 rodadas."
                    },
                    {
                        "en": "Moonbite. On a natural attack roll of 18+, the greatsword deals an extra 2d6 damage.",
                        "pt": "Mordida Lunar. Em uma jogada de ataque natural de 18+, a espada grande causa 2d6 de dano extra."
                    },
                    {
                        "en": "Regeneration. Regains 2d10 lost HP at the beginning of her turn.",
                        "pt": "Regeneração. Recupera 2d10 perdido HP no início de seu turno."
                    }
                ]
        },
        {
                "name": "OCHRE JELLY",
                "description": "An orange puddle of quivering slime.",
                "description_pt": "Uma poça laranja de lodo trêmulo.",
                "ac": "9",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 tentacle +3 (1d6)",
                "atk_pt": "2 tentáculos +3 (1d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": -1,
                "c": 2,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Split. If cut or chopped, split into two smaller oozes (divide remaining HP between both). Can split up to four times.",
                        "pt": "Dividir. Se cortado ou picado, divida em duas gosmas menores (divida o restante HP entre ambos). Pode dividir em até quatro vezes."
                    }
                ]
        },
        {
                "name": "OCTOPUS, GIANT",
                "description": "Octopi as large as sailing skiffs.",
                "description_pt": "Polvos do tamanho de barcos à vela.",
                "ac": "13",
                "hp": 23,
                "hp_raw": "23",
                "atk": "2 tentacle (near) +4 (1d8 + grab)",
                "atk_pt": "2 tentáculos (near) +4 (1d8 + agarrar)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 3,
                "d": 3,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Grab. DC 15 STR or immobilized. Tentacle auto-hits each round. DC 15 STR on turn to break free.",
                        "pt": "Agarrar. DC 15 STR ou imobilizado. O tentáculo atinge automaticamente a cada rodada. DC 15 STR por sua vez para se libertar."
                    },
                    {
                        "en": "Ink. In place of attacks, ink cloud blinds all in near for 1d4 rounds.",
                        "pt": "Tinta. No lugar dos ataques, a nuvem de tinta cega todos em near por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "OGRE",
                "description": "A massive, dim-witted brute with tusks and a heavy frame. Often lords over goblins or orcs.",
                "description_pt": "Um bruto enorme e estúpido, com presas e uma estrutura pesada. Muitas vezes domina goblins ou orcs.",
                "ac": "9",
                "hp": 30,
                "hp_raw": "30",
                "atk": "2 greatclub +6 (2d6)",
                "atk_pt": "2 grande clube +6 (2d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 3,
                "i": -2,
                "w": -2,
                "ch": -2,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                ]
        },
        {
                "name": "ONI",
                "description": "Cunning and sorcerous ogre- demons with shaggy white hair, blue skin, and yellow eyes.",
                "description_pt": "Ogro-demônios astutos e feiticeiros com cabelos brancos desgrenhados, pele azul e olhos amarelos.",
                "ac": "11",
                "hp": 33,
                "hp_raw": "33",
                "atk": "1 glaive (near) +6 (1d10) or 1 spell +5",
                "atk_pt": "1 glaive (near) +6 (1d10) ou 1 magia +5",
                "mv": "near",
                "mv_pt": "near",
                "s": 5,
                "d": 1,
                "c": 2,
                "i": 2,
                "w": 1,
                "ch": 3,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Shapeshift. In place of attacks, turn into any humanoid or back into original form.",
                        "pt": "Metamorfose. No lugar dos ataques, transforme-se em qualquer humanóide ou volte à forma original."
                    },
                    {
                        "en": "Fade (CHA Spell). DC 13.",
                        "pt": "Desvanecer (Magia CAR). DC 13."
                    },
                    {
                        "en": "Self. Become invisible for 1d4 rounds.",
                        "pt": "Próprio. Torne-se invisível por 1d4 rodadas."
                    },
                    {
                        "en": "Hellfrost (CHA Spell). DC 13. All within near-sized cube extending from oni 3d6 damage.",
                        "pt": "Gelo Infernal (Magia CAR). DC 13. Tudo dentro de um cubo de tamanho near estendendo-se de dano oni 3d6."
                    },
                    {
                        "en": "Mist (CHA Spell). DC 13.",
                        "pt": "Névoa (Magia CAR). DC 13."
                    },
                    {
                        "en": "Self. Turn into mist that can fly double near. Lasts 2d4 rounds.",
                        "pt": "Próprio. Transforme-se em névoa que pode fly double near. Dura 2d4 rodadas."
                    }
                ]
        },
        {
                "name": "ORC",
                "description": "A tusked, tall humanoid with gray skin and pointed ears.",
                "description_pt": "Um humanóide alto e com presas, pele cinza e orelhas pontudas.",
                "ac": "15 (chainmail + shield)",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 greataxe +2 (1d8)",
                "atk_pt": "1 machado grande +2 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 0,
                "c": 0,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds).",
                        "pt": "Fúria. 1/dia, imune a verificações de moral, +1d4 de dano (3 rodadas)."
                    }
                ]
        },
        {
                "name": "ORC, CHIEFTAIN",
                "description": "An imposing orc with scars crisscrossing its body.",
                "description_pt": "Um orc imponente com cicatrizes cruzando seu corpo.",
                "ac": "14 (chainmail)",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 greataxe +4 (1d10)",
                "atk_pt": "2 machados grandes +4 (1d10)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds).",
                        "pt": "Fúria. 1/dia, imune a verificações de moral, +1d4 de dano (3 rodadas)."
                    }
                ]
        },
        {
                "name": "OTYUGH",
                "description": "Stumpy, three-legged beasts with barbed tentacles and vast mouths. Drawn by rot and filth.",
                "description_pt": "Bestas atarracadas de três pernas com tentáculos farpados e bocas vastas. Atraído pela podridão e pela sujeira.",
                "ac": "13",
                "hp": 35,
                "hp_raw": "35",
                "atk": "2 tentacle +5 (1d8) and 1 bite +5 (1d10 + disease)",
                "atk_pt": "2 tentáculos +5 (1d8) e 1 mordida +5 (1d10 + doença)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 4,
                "i": -2,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Disease. DC 15 CON or infected. DC 15 CON each day or lose 1d6 HP (can't heal). Ends on success.",
                        "pt": "Doença. DC 15 CON ou infectado. DC 15 CON a cada dia ou perder 1d6 HP (não consigo curar). Termina com sucesso."
                    }
                ]
        },
        {
                "name": "OWLBEAR",
                "description": "Cantankerous bears with owl eyes, beaks, and feathers.",
                "description_pt": "Ursos rabugentos com olhos, bicos e penas de coruja.",
                "ac": "13",
                "hp": 30,
                "hp_raw": "30",
                "atk": "2 claw +5 (1d10)",
                "atk_pt": "2 garras +5 (1d10)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": -2,
                "w": 2,
                "ch": -3,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Crush. Deals an extra die of damage if it hits the same target with both claws.",
                        "pt": "Esmagar. Causa um dado extra de dano se atingir o mesmo alvo com ambas as garras."
                    }
                ]
        },
        {
                "name": "PANTHER",
                "description": "Supple large cats with blue- black fur. Stealthy hunters.",
                "description_pt": "Gatos grandes e flexíveis com pelo preto-azulado. Caçadores furtivos.",
                "ac": "14",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 rend +3 (1d6)",
                "atk_pt": "2 rendas +3 (1d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 4,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "PEASANT",
                "description": "A commoner in worn clothes.",
                "description_pt": "Um plebeu com roupas gastas.",
                "ac": "10",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 club +0 (1d4)",
                "atk_pt": "1 clube +0 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 0,
                "c": 0,
                "i": 0,
                "w": 0,
                "ch": 0,
                "al": "L",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                ]
        },
        {
                "name": "PEGASUS",
                "description": "Winged horses with noble bearings and pearly white coats.",
                "description_pt": "Cavalos alados com porte nobre e pelagem branca perolada.",
                "ac": "12",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 hooves +3 (1d6)",
                "atk_pt": "2 cascos +3 (1d6)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 3,
                "d": 2,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "PHOENIX",
                "description": "Huge, soaring eagles made of searing flames. Intelligent and imbued with immortal magic.",
                "description_pt": "Enormes águias voadoras feitas de chamas abrasadoras. Inteligente e imbuído de magia imortal.",
                "ac": "16",
                "hp": 60,
                "hp_raw": "60",
                "atk": "4 rend +8 (2d12)",
                "atk_pt": "4 renda +8 (2d12)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 3,
                "d": 4,
                "c": 2,
                "i": 3,
                "w": 3,
                "ch": 3,
                "al": "L",
                "lv": 13,
                "lv_raw": "13",
                "abilities": [
                    {
                        "en": "Impervious. Immune to fire. Only damaged by magical sources.",
                        "pt": "Impermeável. Imune ao fogo. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Explosion. Upon death, creatures within double near of phoenix DC 18 DEX or 10d6 damage.",
                        "pt": "Explosão. Após a morte, criaturas dentro de double near da fênix DC 18 DEX ou 10d6 de dano."
                    },
                    {
                        "en": "Heat Aura. Creatures within near of phoenix at start of turn DC 15 CON or 2d6 damage.",
                        "pt": "Aura de Calor. Criaturas a near da fênix no início do turno DC 15 CON ou 2d6 de dano."
                    },
                    {
                        "en": "Rebirth. A red-hot egg remains after death. Phoenix hatches from it in 1d4 days.",
                        "pt": "Renascimento. Um ovo em brasa permanece após a morte. A Fênix eclode em 1d4 dias."
                    }
                ]
        },
        {
                "name": "PIRANHA, SWARM",
                "description": "A school of flat, silvery fish with vicious fangs.",
                "description_pt": "Um cardume de peixes chatos e prateados com presas ferozes.",
                "ac": "12",
                "hp": 13,
                "hp_raw": "13",
                "atk": "2 bite +2 (1d6)",
                "atk_pt": "2 mordidas +2 (1d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": -2,
                "d": 2,
                "c": 0,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Savage. ADV on attacks against creatures below half their HP.",
                        "pt": "Selvagem. ADV em ataques contra criaturas com menos da metade de seu HP."
                    }
                ]
        },
        {
                "name": "PIRATE",
                "description": "Seafaring scoundrels who live to steal and hoard treasure.",
                "description_pt": "Canalhas marítimos que vivem para roubar e acumular tesouros.",
                "ac": "12 (leather)",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 cutlass +1 (1d6) or 1 dagger (close/ near) +1 (1d4)",
                "atk_pt": "1 cutelo +1 (1d6) ou 1 adaga (close/ near) +1 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 1,
                "c": 0,
                "i": 0,
                "w": 0,
                "ch": 0,
                "al": "C",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                ]
        },
        {
                "name": "PLESIOSAURUS",
                "description": "Aquatic reptiles as big as elephants. Flat flippers and narrow, toothy maws on long necks.",
                "description_pt": "Répteis aquáticos do tamanho de elefantes. Nadadeiras planas e mandíbulas estreitas e cheias de dentes em pescoços longos.",
                "ac": "13",
                "hp": 30,
                "hp_raw": "30",
                "atk": "2 bite +5 (2d8)",
                "atk_pt": "2 mordidas +5 (2d8)",
                "mv": "double near (swim)",
                "mv_pt": "double near (swim)",
                "s": 4,
                "d": 3,
                "c": 3,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                ]
        },
        {
                "name": "PRIEST",
                "description": "A respected member of a clergy who leads holy rituals and rites.",
                "description_pt": "Um membro respeitado do clero que lidera rituais e ritos sagrados.",
                "ac": "15 (chainmail + shield)",
                "hp": 23,
                "hp_raw": "23",
                "atk": "2 mace +3 (1d6) or 1 spell +3",
                "atk_pt": "2 maças +3 (1d6) ou 1 magia +3",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 0,
                "c": 1,
                "i": 0,
                "w": 2,
                "ch": 1,
                "al": "L",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Anoint (WIS Spell). DC 12.",
                        "pt": "Ungir (Magia SAB). DC 12."
                    },
                    {
                        "en": "Close. One weapon or armor becomes a magic +2 version for 10 rounds.",
                        "pt": "Fechar. Uma arma ou armadura se torna uma versão mágica +2 por 10 rodadas."
                    },
                    {
                        "en": "Healing Touch (WIS Spell). DC 11. Heal one creature within close for 2d4 HP.",
                        "pt": "Toque de Cura (Magia SAB). DC 11. Cure uma criatura dentro de close por 2d4 HP."
                    },
                    {
                        "en": "Holy Flame (WIS Spell). DC 13.",
                        "pt": "Chama Sagrada (Magia SAB). DC 13."
                    },
                    {
                        "en": "Self. Weapons ignite in magic flames and deal an additional 1d6 damage for 5 rounds.",
                        "pt": "Próprio. As armas acendem em chamas mágicas e causam 1d6 de dano adicional por 5 rodadas."
                    },
                    {
                        "en": "Rebuke (WIS Spell). DC 13.",
                        "pt": "Repreender (Magia SAB). DC 13."
                    },
                    {
                        "en": "Focus. Chaotic creatures cannot attack priest or come within near range for duration.",
                        "pt": "Foco. Criaturas caóticas não podem atacar sacerdotes ou ficar dentro do alcance de near durante a duração."
                    }
                ]
        },
        {
                "name": "PTERODACTYL",
                "description": "Long-beaked beasts with wide, triangular wings. Large enough to carry off a human.",
                "description_pt": "Bestas de bico longo com asas largas e triangulares. Grande o suficiente para carregar um humano.",
                "ac": "14",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 beak +4 (1d8 + grab)",
                "atk_pt": "2 bicos +4 (1d8 + agarrar)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 2,
                "d": 4,
                "c": 2,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Grab. DC 15 STR or held. DC 15 STR on turn to break free.",
                        "pt": "Agarrar. DC 15 STR ou retido. DC 15 STR por sua vez para se libertar."
                    }
                ]
        },
        {
                "name": "PURPLE WORM",
                "description": "A massive worm as tall as a castle keep. Has a rotating maw and is covered in purple chitin.",
                "description_pt": "Um verme enorme, tão alto quanto a fortaleza de um castelo. Tem uma boca rotativa e é coberta por quitina roxa.",
                "ac": "18",
                "hp": 57,
                "hp_raw": "57",
                "atk": "2 bite +9 (2d12 + swallow) and 1 sting +9 (1d10 + poison)",
                "atk_pt": "2 mordidas +9 (2d12 + engolir) e 1 picada +9 (1d10 + veneno)",
                "mv": "double near (burrow)",
                "mv_pt": "double near (burrow)",
                "s": 5,
                "d": 1,
                "c": 3,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 12,
                "lv_raw": "12",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or go to 0 HP.",
                        "pt": "Veneno. DC 15 CON ou vá para 0 HP."
                    },
                    {
                        "en": "Swallow. On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Worm regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet.",
                        "pt": "Engolir. Em uma jogada de ataque natural de 18-20, o alvo é engolido. Escuridão total por dentro e 2d10 de dano por rodada. O verme regurgita tudo o que foi engolido se causar pelo menos 20 de dano em uma rodada no interior de sua garganta."
                    }
                ]
        },
        {
                "name": "RAKSHASA",
                "description": "Demonic illusionists whose true form is of a humanlike great cat with backwards hands.",
                "description_pt": "Ilusionistas demoníacos cuja verdadeira forma é a de um grande gato humanoide com mãos invertidas.",
                "ac": "16",
                "hp": 39,
                "hp_raw": "39",
                "atk": "2 claw +6 (1d8)",
                "atk_pt": "2 garras +6 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 3,
                "c": 3,
                "i": 3,
                "w": 3,
                "ch": 4,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by magical sources. Immune to hostile spells of 3rd tier or lower.",
                        "pt": "Impermeável. Danificado apenas por fontes mágicas. Imune a feitiços hostis de 3º nível ou inferior."
                    },
                    {
                        "en": "Mesmerism. Can read the minds of all creatures within near. Can instantly take on the illusory appearance of any humanoid.",
                        "pt": "Mesmerismo. Pode ler as mentes de todas as criaturas dentro de near. Pode assumir instantaneamente a aparência ilusória de qualquer humanóide."
                    },
                    {
                        "en": "Weakness. A crossbow bolt under the effects of the holy weapon spell kills the rakshasa.",
                        "pt": "Fraqueza. Uma seta de besta sob o efeito do feitiço arma sagrada mata o rakshasa."
                    }
                ]
        },
        {
                "name": "RAT",
                "description": "Rangy, plague-carrying rodents that infest underground places.",
                "description_pt": "Roedores esguios e transmissores de peste que infestam locais subterrâneos.",
                "ac": "10",
                "hp": 1,
                "hp_raw": "1",
                "atk": "1 bite +0 (1 + disease)",
                "atk_pt": "1 mordida +0 (1 + doença)",
                "mv": "near",
                "mv_pt": "near",
                "s": -3,
                "d": 0,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 0,
                "lv_raw": "0",
                "abilities": [
                    {
                        "en": "Disease. DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON.",
                        "pt": "Doença. DC 9 CON ou 1d4 CON de dano (não pode curar enquanto estiver doente). Repita a verificação uma vez por dia; termina com sucesso. Morra às 0 CON."
                    }
                ]
        },
        {
                "name": "RAT, DIRE",
                "description": "Child-sized, savage rats bristling with bony face and spine ridges.",
                "description_pt": "Ratos selvagens do tamanho de uma criança, com rosto ossudo e cristas espinhais.",
                "ac": "12",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 bite +2 (1d6 + disease)",
                "atk_pt": "1 mordida +2 (1d6 + doença)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 2,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Disease. DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON.",
                        "pt": "Doença. DC 12 CON ou 1d4 CON de dano (não pode curar enquanto estiver doente). Repita a verificação uma vez por dia; termina com sucesso. Morra às 0 CON."
                    }
                ]
        },
        {
                "name": "RAT, GIANT",
                "description": "Cunning rats as large as cats. Mangy fur and wormlike tails.",
                "description_pt": "Ratos astutos do tamanho de gatos. Pêlo sarnento e caudas semelhantes a vermes.",
                "ac": "11",
                "hp": 5,
                "hp_raw": "5",
                "atk": "1 bite +1 (1d4 + disease)",
                "atk_pt": "1 mordida +1 (1d4 + doença)",
                "mv": "near",
                "mv_pt": "near",
                "s": -2,
                "d": 1,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Disease. DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON.",
                        "pt": "Doença. DC 12 CON ou 1d4 CON de dano (não pode curar enquanto estiver doente). Repita a verificação uma vez por dia; termina com sucesso. Morra às 0 CON."
                    }
                ]
        },
        {
                "name": "RAT, SWARM",
                "description": "A screeching tidal wave of clawing and biting rats.",
                "description_pt": "Uma onda estridente de ratos que arranham e mordem.",
                "ac": "10",
                "hp": 28,
                "hp_raw": "28",
                "atk": "4 bite +0 (1 + disease)",
                "atk_pt": "4 mordida +0 (1 + doença)",
                "mv": "near",
                "mv_pt": "near",
                "s": -3,
                "d": 0,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Disease. DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON. A pearl-white lion with feathered wings that stands twenty feet tall. Rathgamnon is Madeera the Covenant's mightiest servant; his blank eyes see far into the depths of time and space. He spends all eternity watching the whirl of the stars from the highest mountain in the realm of mortals, waiting for the celestial alignments that prophesy epochs of weal and woe, titanic changes to the balance of power in the cosmos, or threats to the laws of reality itself.",
                        "pt": "Doença. DC 9 CON ou 1d4 CON de dano (não pode curar enquanto estiver doente). Repita a verificação uma vez por dia; termina com sucesso. Morra às 0 CON. Um leão branco-pérola com asas emplumadas que mede seis metros de altura. Rathgamnon é o servo mais poderoso de Madeera, o Covenant; seus olhos vazios veem far nas profundezas do tempo e do espaço. Ele passa toda a eternidade observando o turbilhão das estrelas da montanha mais alta do reino dos mortais, esperando pelos alinhamentos celestiais que profetizam épocas de bem e de desgraça, mudanças titânicas no equilíbrio de poder no cosmos ou ameaças às leis da própria realidade."
                    }
                ]
        },
        {
                "name": "RATHGAMNON",
                "description": "\"The stars told me of your arrival here many eons ago, long before the first of your people walked the earth.\" -Rathgamnon",
                "description_pt": "\"As estrelas me contaram sobre sua chegada aqui há muitos eras, muito antes de o primeiro de seu povo caminhar pela terra.\" -Rathgamnon",
                "ac": "17",
                "hp": 89,
                "hp_raw": "89",
                "atk": "2 rend (near) +9 (2d10) and 2 spell +8",
                "atk_pt": "2 rendimentos (near) +9 (2d10) e 2 feitiços +8",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 5,
                "d": 3,
                "c": 4,
                "i": 5,
                "w": 6,
                "ch": 5,
                "al": "L",
                "lv": 19,
                "lv_raw": "19",
                "abilities": [
                    {
                        "en": "Legendary. Only damaged by magical sources. Hostile spells targeting Rathgamnon are DC 18 to cast.",
                        "pt": "Lendário. Danificado apenas por fontes mágicas. Magias hostis direcionados a Rathgamnon têm DC 18 para serem lançados."
                    },
                    {
                        "en": "Roar. In place of attacks, all creatures who can hear within far DC 18 CHA or be rendered blind and speechless for 1d4 days.",
                        "pt": "Rugido. No lugar dos ataques, todas as criaturas que puderem ouvir dentro de far DC 18 CHA ou ficarão cegas e sem fala por 1d4 dias."
                    },
                    {
                        "en": "Abjure (WIS Spell). DC 13. Self. End any hostile magical effects affecting Rathgamnon.",
                        "pt": "Abjurar (Magia SAB). DC 13. Próprio. Acabe com quaisquer efeitos mágicos hostis que afetem Rathgamnon."
                    },
                    {
                        "en": "Abolish (WIS Spell). DC 13. One target in far takes 5d8 damage.",
                        "pt": "Abolir (Magia SAB). DC 13. Um alvo em far sofre 5d8 de dano."
                    },
                    {
                        "en": "Foresight. Cannot be surprised.",
                        "pt": "Premonição. Não posso ficar surpreso."
                    }
                ]
        },
        {
                "name": "REAVER",
                "description": "A knight in blackened armor riddled with cruel barbs.",
                "description_pt": "Um cavaleiro com armadura enegrecida crivada de farpas cruéis.",
                "ac": "17 (plate mail + shield)",
                "hp": 28,
                "hp_raw": "28",
                "atk": "3 bastard sword +4 (1d8 + 2)",
                "atk_pt": "3 espada bastarda +4 (1d8 + 2)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 0,
                "c": 1,
                "i": 0,
                "w": 0,
                "ch": 2,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Bloodlust. +2 damage with melee weapons (included).",
                        "pt": "Sede de Sangue. +2 de dano com armas brancas (incluídas)."
                    }
                ]
        },
        {
                "name": "REMORHAZ",
                "description": "Massive, blue centipedes with neck hoods and red-hot spine spikes. Dwell in arctic climates.",
                "description_pt": "Enormes centopéias azuis com capuzes no pescoço e pontas em brasa na espinha. Habite em climas árticos.",
                "ac": "16",
                "hp": 47,
                "hp_raw": "47",
                "atk": "3 bite +7 (2d6 + swallow)",
                "atk_pt": "3 mordida +7 (2d6 + engolir)",
                "mv": "near (burrow)",
                "mv_pt": "near (burrow)",
                "s": 5,
                "d": 1,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 10,
                "lv_raw": "10",
                "abilities": [
                    {
                        "en": "Impervious. Immune to cold and fire.",
                        "pt": "Impermeável. Imune ao frio e ao fogo."
                    },
                    {
                        "en": "Melt. Non-magical metal objects that touch the remorhaz melt on a d6 roll of 1-3.",
                        "pt": "Derreter. Objetos de metal não mágicos que tocam o remorhaz derretem em uma jogada de d6 de 1-3."
                    },
                    {
                        "en": "Swallow. On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Remorhaz regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet.",
                        "pt": "Engolir. Em uma jogada de ataque natural de 18-20, o alvo é engolido. Escuridão total por dentro e 2d10 de dano por rodada. Remorhaz regurgita tudo o que foi engolido se sofrer pelo menos 20 de dano em uma rodada no interior de sua garganta."
                    }
                ]
        },
        {
                "name": "RHINOCEROS",
                "description": "Gray-skinned bulls with single nose horns. Dwell in grasslands.",
                "description_pt": "Touros de pele cinzenta com chifres de nariz único. Habite em pastagens.",
                "ac": "14",
                "hp": 25,
                "hp_raw": "25",
                "atk": "2 horn +4 (1d8)",
                "atk_pt": "2 buzinas +4 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 3,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Charge. Move up to double near in straight line and make 1 horn attack. If hit, x3 damage.",
                        "pt": "Investida. Mova-se para double near em linha reta e faça 1 ataque de chifre. Se atingido, x3 de dano."
                    }
                ]
        },
        {
                "name": "RIME WALKER",
                "description": "Human-shaped beings formed from black space ice. Their eyes are two flickering, white lights.",
                "description_pt": "Seres em forma humana formados a partir do gelo espacial negro. Seus olhos são duas luzes brancas tremeluzentes.",
                "ac": "16",
                "hp": 43,
                "hp_raw": "43",
                "atk": "4 claw +8 (1d12)",
                "atk_pt": "4 garras +8 (1d12)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 4,
                "d": 4,
                "c": 3,
                "i": 2,
                "w": 2,
                "ch": 2,
                "al": "C",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Impervious. Immune to cold.",
                        "pt": "Impermeável. Imune ao frio."
                    },
                    {
                        "en": "Ice Aura. Enemies within near of rime walker DC 12 CON at start of turn or lose action.",
                        "pt": "Aura de Gelo. Inimigos dentro de near do Rime Walker DC 12 CON no início do turno ou perdem a ação."
                    }
                ]
        },
        {
                "name": "ROC",
                "description": "Dragon-sized hawks that nest in remote mountains.",
                "description_pt": "Falcões do tamanho de dragões que fazem ninhos em montanhas remotas.",
                "ac": "15",
                "hp": 69,
                "hp_raw": "69",
                "atk": "4 rend +9 (2d10 + grab)",
                "atk_pt": "4 rend +9 (2d10 + agarrar)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 5,
                "d": 3,
                "c": 2,
                "i": -2,
                "w": 2,
                "ch": -2,
                "al": "N",
                "lv": 15,
                "lv_raw": "15",
                "abilities": [
                    {
                        "en": "Grab. DC 18 STR or target held. DC 18 STR on turn to break free.",
                        "pt": "Agarrar. DC 18 STR ou alvo retido. DC 18 STR por sua vez para se libertar."
                    }
                ]
        },
        {
                "name": "ROPER",
                "description": "Ravenous monstrosities that look like cave rocks when their single eye and maw are closed.",
                "description_pt": "Monstruosidades vorazes que parecem rochas de cavernas quando o único olho e a boca estão fechados.",
                "ac": "14",
                "hp": 31,
                "hp_raw": "31",
                "atk": "4 tendril (double near) +4 (1d6 + grab) and 1 bite +4 (2d8)",
                "atk_pt": "4 gavinhas (double near) +4 (1d6 + agarrar) e 1 mordida +4 (2d8)",
                "mv": "close (climb)",
                "mv_pt": "close (climb)",
                "s": 3,
                "d": -2,
                "c": 4,
                "i": -1,
                "w": 2,
                "ch": 1,
                "al": "N",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Impervious. Can only be damaged by magical sources.",
                        "pt": "Impermeável. Só pode ser danificado por fontes mágicas."
                    },
                    {
                        "en": "Grab. DC 15 STR or target trapped in tendril. Tendril auto- hits target next round. DC 15 STR on turn to break free.",
                        "pt": "Agarrar. DC 15 STR ou alvo preso na gavinha. Tendril atinge automaticamente o alvo na próxima rodada. DC 15 STR por sua vez para se libertar."
                    },
                    {
                        "en": "Pull. In place of a tendril attack, pull a grabbed target a near distance.",
                        "pt": "Puxar. No lugar de um ataque de gavinha, puxe um alvo agarrado a uma distância de near."
                    },
                    {
                        "en": "Tendrils. Four total.",
                        "pt": "Gavinhas. Quatro no total."
                    }
                ]
        },
        {
                "name": "ROT FLOWER",
                "description": "Carnivorous flowers as large as a human. They reek of carrion.",
                "description_pt": "Flores carnívoras do tamanho de um ser humano. Eles cheiram a carniça.",
                "ac": "9",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 bite +1 (1d4 + toxin)",
                "atk_pt": "1 mordida +1 (1d4 + toxina)",
                "mv": "none",
                "mv_pt": "none",
                "s": 1,
                "d": -3,
                "c": 1,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Toxin. DC 12 CON or unconscious for 1d4 rounds.",
                        "pt": "Toxina. DC 12 CON ou inconsciente por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "RUST MONSTER",
                "description": "A mud-brown insect as big as a wolf with two feathery antennae. Consumes metal.",
                "description_pt": "Um inseto marrom-lama do tamanho de um lobo com duas antenas emplumadas. Consome metal.",
                "ac": "13",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 claw +3 (1d6)",
                "atk_pt": "2 garras +3 (1d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": 3,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Corrosive. Metal that touches the rust monster is destroyed on a d6 roll of 1-3.",
                        "pt": "Corrosivo. O metal que toca o monstro enferrujado é destruído em uma jogada de 1-3 no d6."
                    }
                ]
        },
        {
                "name": "SAHUAGIN",
                "description": "Humanoids with sea-green skin, webbed limbs, and shark teeth. Vicious hunters.",
                "description_pt": "Humanóides com pele verde-mar, membros palmados e dentes de tubarão. Caçadores cruéis.",
                "ac": "14 (leather + shield)",
                "hp": 9,
                "hp_raw": "9",
                "atk": "2 trident (near) +1 (1d6)",
                "atk_pt": "2 tridente (near) +1 (1d6)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 1,
                "d": 1,
                "c": 0,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Half-Amphibious. Must be submerged in water every 4 hours or suffocates.",
                        "pt": "Semianfíbio. Deve ser submerso em água a cada 4 horas ou sufoca."
                    }
                ]
        },
        {
                "name": "SALAMANDER",
                "description": "Fire-colored lizardfolk with long tails. Flame-like frills run down their backs.",
                "description_pt": "Povo lagarto cor de fogo com caudas longas. Babados em forma de chamas percorrem suas costas.",
                "ac": "13",
                "hp": 24,
                "hp_raw": "24",
                "atk": "2 flaming spear (close/near) +4 (1d6, ignites flammables) or 1 iron longbow (far) +2 (1d8)",
                "atk_pt": "2 lanças flamejantes (close/near) +4 (1d6, acende inflamáveis) ou 1 arco longo de ferro (far) +2 (1d8)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 0,
                "c": 2,
                "i": -1,
                "w": 1,
                "ch": -1,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune.",
                        "pt": "Impermeável. Imune ao fogo."
                    },
                    {
                        "en": "Heat Aura. Creatures in close DC 12 CON on turn or 1d8 damage.",
                        "pt": "Aura de Calor. Criaturas em close DC 12 CON no turno ou 1d8 de dano."
                    }
                ]
        },
        {
                "name": "SCARAB, SWARM",
                "description": "A chittering cloud of iridescent, oval-shaped beetles.",
                "description_pt": "Uma nuvem vibrante de besouros iridescentes de formato oval.",
                "ac": "13",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 bite +3 (1d6)",
                "atk_pt": "2 mordidas +3 (1d6)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -1,
                "d": 3,
                "c": 1,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "SCARECROW",
                "description": "Ragged clothes and a painted burlap head stuffed with straw. Possessed by a malicious spirit.",
                "description_pt": "Roupas esfarrapadas e uma cabeça de estopa pintada e recheada de palha. Possuído por um espírito malicioso.",
                "ac": "12",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 claws +2 (1d6) or 1 scream",
                "atk_pt": "2 garras +2 (1d6) ou 1 grito",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": 2,
                "c": 2,
                "i": 0,
                "w": 0,
                "ch": 2,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Scream. Creatures who hear in double near DC 12 CHA or paralyzed for 1d4 rounds.",
                        "pt": "Grito. Criaturas que ouvem em double near DC 12 CHA ou ficam paralisadas por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "SCORPION",
                "description": "Desert-dwelling arachnids with pincers and curved tail stingers.",
                "description_pt": "Aracnídeos que vivem no deserto com pinças e ferrões de cauda curvados.",
                "ac": "11",
                "hp": 1,
                "hp_raw": "1",
                "atk": "1 sting +1 (1 + poison)",
                "atk_pt": "1 ferroada +1 (1 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": -4,
                "d": 1,
                "c": 0,
                "i": -4,
                "w": 0,
                "ch": -4,
                "al": "N",
                "lv": 0,
                "lv_raw": "0",
                "abilities": [
                    {
                        "en": "Poison. DC 9 CON or go to 0 HP.",
                        "pt": "Veneno. DC 9 CON ou vá para 0 HP."
                    }
                ]
        },
        {
                "name": "SCORPION, GIANT",
                "description": "Chitin-plated scorpions as big as camels.",
                "description_pt": "Escorpiões revestidos de quitina do tamanho de camelos.",
                "ac": "14",
                "hp": 13,
                "hp_raw": "13",
                "atk": "1 claw +2 (1d6 + grab) and 1 sting +2 (1d4 + poison)",
                "atk_pt": "1 garra +2 (1d6 + agarrar) e 1 picada +2 (1d4 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": 2,
                "c": 0,
                "i": -4,
                "w": 0,
                "ch": -4,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Grab. DC 12 STR or target held. DC 12 STR on turn to break free.",
                        "pt": "Agarrar. DC 12 STR ou alvo retido. DC 12 STR por sua vez para se libertar."
                    },
                    {
                        "en": "Poison. DC 12 CON or go to 0 HP.",
                        "pt": "Veneno. DC 12 CON ou vá para 0 HP."
                    }
                ]
        },
        {
                "name": "SHADOW",
                "description": "Flitting, sentient shadows in the vague shape of a human.",
                "description_pt": "Sombras esvoaçantes e sencientes na forma vaga de um humano.",
                "ac": "12",
                "hp": 15,
                "hp_raw": "15",
                "atk": "2 touch +2 (1d4 + drain)",
                "atk_pt": "2 toques +2 (1d4 + drenagem)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -4,
                "d": 2,
                "c": 2,
                "i": -2,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Drain. Target takes 1 STR damage. At 0 STR, target dies and becomes a shadow.",
                        "pt": "Drenar. O alvo sofre 1 STR de dano. Em 0 STR, o alvo morre e se torna uma sombra."
                    }
                ]
        },
        {
                "name": "SHAMBLING MOUND",
                "description": "Fetid piles of slimy vegetation animated to life by lightning.",
                "description_pt": "Pilhas fétidas de vegetação viscosa, animadas por raios.",
                "ac": "14",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 slam +3 (1d6 + engulf)",
                "atk_pt": "2 batidas +3 (1d6 + engolir)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": -2,
                "c": 2,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Impervious. Fire immune. Healed by electricity.",
                        "pt": "Impermeável. Imune ao fogo. Curado por eletricidade."
                    },
                    {
                        "en": "Engulf. If a target is hit by both slams in same round, it is pulled into shambling mound's body and suffocates in 2d4 rounds. DC 15 STR on turn to escape.",
                        "pt": "Engolir. Se um alvo for atingido por ambos os golpes na mesma rodada, ele será puxado para o corpo do monte cambaleante e sufocado em 2d4 rodadas. DC 15 STR por sua vez para escapar."
                    }
                ]
        },
        {
                "name": "SHARK",
                "description": "Bloodthirsty apex predators of the sea. Gray, torpedo-like body.",
                "description_pt": "Predadores do mar sedentos de sangue. Corpo cinza em forma de torpedo.",
                "ac": "11",
                "hp": 15,
                "hp_raw": "15",
                "atk": "1 bite +3 (1d10)",
                "atk_pt": "1 mordida +3 (1d10)",
                "mv": "near (swim)",
                "mv_pt": "near (swim)",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "SHARK, MEGALODON",
                "description": "Primordial sharks the size of whales. Savage hunters.",
                "description_pt": "Tubarões primordiais do tamanho de baleias. Caçadores selvagens.",
                "ac": "13",
                "hp": 38,
                "hp_raw": "38",
                "atk": "3 bite +7 (2d8)",
                "atk_pt": "3 mordidas +7 (2d8)",
                "mv": "double near (swim)",
                "mv_pt": "double near (swim)",
                "s": 5,
                "d": 1,
                "c": 2,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Fearless. Immune to morale checks.",
                        "pt": "Destemido. Imune a verificações de moral."
                    }
                ]
        },
        {
                "name": "SIREN",
                "description": "Baleful fey with dove wings and iridescent fish scales. Their singing entrances listeners.",
                "description_pt": "Fadas sinistras com asas de pomba e escamas de peixe iridescentes. Seu canto encanta os ouvintes.",
                "ac": "12",
                "hp": 18,
                "hp_raw": "18",
                "atk": "2 claw +2 (1d6) or 1 song",
                "atk_pt": "2 garras +2 (1d6) ou 1 música",
                "mv": "near (swim, fly)",
                "mv_pt": "near (swim, fly)",
                "s": 0,
                "d": 2,
                "c": 0,
                "i": 2,
                "w": 2,
                "ch": 4,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Song. Enemies who can hear within double near DC 15 CHA or paralyzed 1d4 rounds. Immune for 1 day if passed check.",
                        "pt": "Canção. Inimigos que podem ouvir dentro de double near DC 15 CHA ou paralisados 1d4 rodadas. Imune por 1 dia se passar no teste."
                    }
                ]
        },
        {
                "name": "SKELETON",
                "description": "A bleach-boned skeleton with red pinpoints of light in its eyes.",
                "description_pt": "Um esqueleto de ossos brancos com pontos vermelhos de luz nos olhos.",
                "ac": "13 (chainmail)",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 shortsword +1 (1d6) or 1 shortbow (far) +0 (1d4)",
                "atk_pt": "1 espada curta +1 (1d6) ou 1 arco curto (far) +0 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 0,
                "c": 2,
                "i": -2,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Undead. Immune to morale checks.",
                        "pt": "Morto-Vivo. Imune a verificações de moral."
                    }
                ]
        },
        {
                "name": "SMILODON",
                "description": "Prehistoric tigers with long canine fangs. They hunt in grasslands and ice fields.",
                "description_pt": "Tigres pré-históricos com longas presas caninas. Eles caçam em pastagens e campos de gelo.",
                "ac": "12",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 bite +3 (1d6)",
                "atk_pt": "2 mordidas +3 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 2,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "SNAKE, COBRA",
                "description": "A weaving serpent with a neck hood and lethal venom.",
                "description_pt": "Uma serpente tecida com capuz no pescoço e veneno letal.",
                "ac": "12",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 bite +2 (1 + poison)",
                "atk_pt": "1 mordida +2 (1 + veneno)",
                "mv": "near",
                "mv_pt": "near",
                "s": -3,
                "d": 2,
                "c": 0,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Poison. DC 18 CON or go to 0 HP with a death timer of 1.",
                        "pt": "Veneno. DC 18 CON ou vá para 0 HP com um cronômetro de morte de 1."
                    }
                ]
        },
        {
                "name": "SNAKE, GIANT",
                "description": "An enormous, mottled serpent that can swallow a cow whole.",
                "description_pt": "Uma serpente enorme e manchada que pode engolir uma vaca inteira.",
                "ac": "12",
                "hp": 23,
                "hp_raw": "23",
                "atk": "2 bite +4 (1d6) and 1 constrict (near)",
                "atk_pt": "2 mordidas +4 (1d6) e 1 constrição (near)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 2,
                "c": 1,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "N",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Constrict. Contested STR to hold target immobile for one round.",
                        "pt": "Constringir. Disputado STR para manter o alvo imóvel por uma rodada."
                    }
                ]
        },
        {
                "name": "SNAKE, SWARM",
                "description": "A roiling wave of snakes darting and flowing across the ground.",
                "description_pt": "Uma onda turbulenta de cobras correndo e fluindo pelo chão.",
                "ac": "12",
                "hp": 19,
                "hp_raw": "19",
                "atk": "3 bite +2 (1d4 + poison)",
                "atk_pt": "3 mordida +2 (1d4 + veneno)",
                "mv": "near",
                "mv_pt": "near",
                "s": -3,
                "d": 2,
                "c": 1,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Poison. DC 12 CON or go to 0 HP in 1d4 rounds.",
                        "pt": "Veneno. DC 12 CON ou vá para 0 HP em 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "SOLDIER",
                "description": "An armed footsoldier trained in the ways of battlefield combat.",
                "description_pt": "Um soldado armado treinado nos métodos de combate no campo de batalha.",
                "ac": "15 (chainmail + shield)",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 longsword +2 (1d8) or 1 crossbow (far) +1 (1d6)",
                "atk_pt": "1 espada longa +2 (1d8) ou 1 besta (far) +1 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 0,
                "c": 1,
                "i": 0,
                "w": 0,
                "ch": 0,
                "al": "L",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "SPHINX",
                "description": "A winged, leonine oracle who can see into time and space and often speaks in riddles. Lives in isolated mountains.",
                "description_pt": "Um oráculo leonino alado que pode ver o tempo e o espaço e muitas vezes fala por meio de enigmas. Vive em montanhas isoladas.",
                "ac": "16",
                "hp": 42,
                "hp_raw": "42",
                "atk": "3 claw +7 (1d10) or 2 spell +5",
                "atk_pt": "3 garras +7 (1d10) ou 2 feitiços +5",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 1,
                "c": 2,
                "i": 4,
                "w": 4,
                "ch": 3,
                "al": "L",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                    {
                        "en": "Roar. In place of attacks, all creatures who can hear within far DC 18 CHA or paralyzed 1d4 rounds.",
                        "pt": "Rugido. No lugar dos ataques, todas as criaturas que podem ouvir dentro de far DC 18 CHA ou paralisadas 1d4 rodadas."
                    },
                    {
                        "en": "Gate (WIS Spell). DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed.",
                        "pt": "Portal (Magia SAB). DC 14. Abra um portal em um ponto dentro de near para outro local em qualquer plano. Dura 1d6 rodadas ou até ser dispensado."
                    },
                    {
                        "en": "Omens (WIS Spell). DC 12.",
                        "pt": "Presságios (Magia SAB). DC 12."
                    },
                    {
                        "en": "Self. ADV on all actions for 1d4 rounds.",
                        "pt": "Próprio. ADV em todas as ações por 1d4 rodadas."
                    },
                    {
                        "en": "Riddle (WIS Spell). DC 12. One target in far DC 15 INT or stupefied 1d4 rounds.",
                        "pt": "Enigma (Magia SAB). DC 12. Um alvo em far DC 15 INT ou estupefato 1d4 rodadas."
                    },
                    {
                        "en": "Time Bend (WIS Spell). DC 14. One target in near frozen in time for 1d4 rounds.",
                        "pt": "Dobra do Tempo (Magia SAB). DC 14. Um alvo em near congelado no tempo por 1d4 rodadas."
                    },
                    {
                        "en": "Unmake (WIS Spell). DC 13. One target in far takes 3d8 damage.",
                        "pt": "Desfazer (Magia SAB). DC 13. Um alvo em far sofre 3d8 de dano."
                    }
                ]
        },
        {
                "name": "SPIDER",
                "description": "Silent, web-weaving arachnids with a flesh-dissolving venom.",
                "description_pt": "Aracnídeos silenciosos, tecedores de teias e com um veneno que dissolve a carne.",
                "ac": "11",
                "hp": 1,
                "hp_raw": "1",
                "atk": "2 bite +1 (1 + poison)",
                "atk_pt": "2 mordidas +1 (1 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": -4,
                "d": 1,
                "c": 0,
                "i": -4,
                "w": 0,
                "ch": -4,
                "al": "N",
                "lv": 0,
                "lv_raw": "0",
                "abilities": [
                    {
                        "en": "Poison. DC 9 CON or take 1d4 damage.",
                        "pt": "Veneno. DC 9 CON ou receba 1d4 de dano."
                    }
                ]
        },
        {
                "name": "SPIDER, GIANT",
                "description": "Bulbous abdomen and eight, spindly legs. Dwells high in trees or caves and ambushes prey, capturing them to eat later.",
                "description_pt": "Abdômen bulboso e oito pernas finas. Habita no alto de árvores ou cavernas e embosca as presas, capturando-as para comer mais tarde.",
                "ac": "13",
                "hp": 13,
                "hp_raw": "13",
                "atk": "1 bite +3 (1d4 + poison)",
                "atk_pt": "1 mordida +3 (1d4 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 2,
                "d": 3,
                "c": 0,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Poison. DC 12 CON or paralyzed 1d4 hours.",
                        "pt": "Veneno. DC 12 CON ou paralisado 1d4 horas."
                    }
                ]
        },
        {
                "name": "SPIDER, SWARM",
                "description": "A scurrying carpet of spiders.",
                "description_pt": "Um tapete de aranhas correndo.",
                "ac": "13",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 bite +3 (1d4 + poison)",
                "atk_pt": "1 mordida +3 (1d4 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": -1,
                "d": 3,
                "c": 0,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Poison. DC 12 CON or paralyzed 1d4 rounds.",
                        "pt": "Veneno. DC 12 CON ou paralisado 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "STINGBAT",
                "description": "Darting, orange insect-bat with four wings and needlelike beak.",
                "description_pt": "Morcego inseto laranja com quatro asas e bico em forma de agulha.",
                "ac": "12",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 beak +2 (1d4 + blood drain)",
                "atk_pt": "1 bico +2 (1d4 + drenagem de sangue)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -2,
                "d": 2,
                "c": 0,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Blood Drain. Attach to bitten target; auto-hit the next round. DC 9 STR on turn to remove.",
                        "pt": "Drenar Sangue. Anexe ao alvo mordido; acertar automaticamente a próxima rodada. DC 9 STR por sua vez para remover."
                    }
                ]
        },
        {
                "name": "STRANGLER",
                "description": "A gray-skinned, gaunt creature with four ropy limbs tipped in sucker-lined claws.",
                "description_pt": "Uma criatura esquelética, de pele cinza, com quatro membros fibrosos e garras forradas de ventosas.",
                "ac": "12",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 claws +2 (1d6)",
                "atk_pt": "2 garras +2 (1d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": -2,
                "d": 2,
                "c": 1,
                "i": -2,
                "w": 0,
                "ch": -2,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Stealthy. ADV on DEX checks to sneak and hide.",
                        "pt": "Furtivo. ADV em DEX verificações para se esgueirar e se esconder."
                    },
                    {
                        "en": "Strangle. Deals x2 damage against surprised creatures. A floating mass of rubbery skin crusted with barnacles. Its ten eyestalks writhe like snakes, and a deep, circular scar mars its central body, blinding what was once a large eye above a lipless maw. The Ten-Eyed Oracle stalks the Shadowdark, burbling mad prophesies and somehow moving freely between the lightless fathoms of the earth. The keepers of the deep lore suspect The Ten-Eyed Oracle was once a benevolent ally of mankind, but an unknown calamity drove it to insanity and reckless hatred.",
                        "pt": "Estrangular. Causa x2 de dano contra criaturas surpresas. Uma massa flutuante de pele de borracha com crosta de cracas. Seus dez pedúnculos oculares se contorcem como cobras, e uma cicatriz profunda e circular marca seu corpo central, cegando o que antes era um grande olho acima de uma mandíbula sem lábios. O Oráculo de Dez Olhos persegue a Sombra Negra, balbuciando profecias malucas e de alguma forma movendo-se livremente entre as profundezas escuras da terra. Os guardiões da tradição profunda suspeitam que o Oráculo de Dez Olhos já foi um aliado benevolente da humanidade, mas uma calamidade desconhecida levou-o à insanidade e ao ódio imprudente."
                    }
                ]
        },
        {
                "name": "THE TARRASQUE",
                "description": "“RRRRRRAAAAAAAAAAAAAAAAGHHHHHH!\" -The Tarrasque A colossal, four-legged reptile with crocodilian jaws, amber scales, and a diamond-hard, spiked carapace. It towers overhead like a mountain, able to swallow entire villages in one gulp. The tarrasque hibernates deep in the earth or at the bottom of the sea for centuries, only awakening long enough to fill its vast belly in an indiscriminate rampage of terror and destruction. There is only one tarrasque, and it is the most dreaded creature to walk the earth.",
                "description_pt": "“RRRRRRAAAAAAAAAAAAAAAAGHHHHHH!” -O Tarrasque Um réptil colossal de quatro patas com mandíbulas de crocodiliano, escamas âmbar e uma carapaça pontiaguda dura como um diamante. Ele se eleva como uma montanha, capaz de engolir aldeias inteiras de uma só vez. O tarrasque hiberna nas profundezas da terra ou no fundo do mar durante séculos, apenas despertando o tempo suficiente para encher a sua vasta barriga numa fúria indiscriminada de terror e destruição. Existe apenas um tarrasque, e é a criatura mais temida que já existiu na terra.",
                "ac": "22",
                "hp": 140,
                "hp_raw": "140",
                "atk": "4 thrash (near) +13 (3d10 + sever) and 1 bite (near) +13 (5d10 + sever + swallow)",
                "atk_pt": "4 surras (near) +13 (3d10 + cortar) e 1 mordida (near) +13 (5d10 + cortar + engolir)",
                "mv": "triple near (burrow, swim)",
                "mv_pt": "triple near (burrow, swim)",
                "s": 7,
                "d": 2,
                "c": 5,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 30,
                "lv_raw": "30",
                "abilities": [
                    {
                        "en": "Legendary. Only damaged by magical sources. Hostile spells targeting the tarrasque are DC 18 to cast.",
                        "pt": "Lendário. Danificado apenas por fontes mágicas. Magias hostis direcionados ao tarrasque têm DC 18 para serem lançados."
                    },
                    {
                        "en": "Deep Dweller. Immune to harm from fire and cold.",
                        "pt": "Habitante das Profundezas. Imune aos danos do fogo e do frio."
                    },
                    {
                        "en": "Amphibious.",
                        "pt": "Anfíbio."
                    },
                    {
                        "en": "Permanent Death. Cannot be permanently killed unless a wish spell is cast on it while it is at 0 HP.",
                        "pt": "Morte Permanente. Não pode ser morto permanentemente, a menos que um feitiço de desejo seja lançado nele enquanto estiver em 0 HP."
                    },
                    {
                        "en": "Rampage. In place of attacks, move far in a straight line and make one bite attack. On a hit, triple damage.",
                        "pt": "Fúria Descontrolada. No lugar dos ataques, mova-se far em linha reta e faça um ataque de mordida. Com um acerto, dano triplo."
                    },
                    {
                        "en": "Reflective Carapace. Immune to rays, blasts, or bolts of energy. 1:6 chance these are reflected back at their originator.",
                        "pt": "Carapaça Reflexiva. Imune a raios, explosões ou raios de energia. 1:6 de chance de que eles sejam refletidos de volta ao seu originador."
                    },
                    {
                        "en": "Regeneration. Regains 4d10 lost HP at the beginning of its turn.",
                        "pt": "Regeneração. Recupera 4d10 de HP perdido no início de seu turno."
                    },
                    {
                        "en": "Sever. On a natural attack roll of 18+, the attack also severs a random limb. 1d6: 1. Head, 2-4. Arm, 5-6. Leg.",
                        "pt": "Cortar. Em uma jogada de ataque natural de 18+, o ataque também corta um membro aleatório. 1d6: 1. Cabeça, 2-4. Braço, 5-6. Perna."
                    },
                    {
                        "en": "Swallow. DC 18 STR or swallowed whole. Total darkness inside and 4d10 damage per round. Tarrasque regurgitates all swallowed if dealt at least 30 damage in one round to the inside of its gullet.",
                        "pt": "Engolir. DC 18 FOR ou engolido inteiro. Escuridão total por dentro e 4d10 de dano por rodada. O Tarrasque regurgita tudo o que foi engolido se sofrer pelo menos 30 de dano em uma rodada no interior de sua goela."
                    }
                ]
        },
        {
                "name": "THE TEN-EYED ORACLE",
                "description": "“The moon runs red into the sea, and the whispers of the watchers in darkness proclaim: Your time has come!\" -The Ten-Eyed Oracle A floating mass of rubbery skin crusted with barnacles. Its ten eyestalks writhe like snakes, and a deep, circular scar mars its central body, blinding what was once a large eye above a lipless maw. The Ten-Eyed Oracle stalks the Shadowdark, burbling mad prophesies and somehow moving freely between the lightless fathoms of the earth. The keepers of the deep lore suspect The Ten-Eyed Oracle was once a benevolent ally of mankind, but an unknown calamity drove it to insanity and reckless hatred.",
                "description_pt": "“A lua corre vermelha para o mar, e os sussurros dos observadores na escuridão proclamam: Sua hora chegou!” -O Oráculo de Dez Olhos Uma massa flutuante de pele de borracha com crosta de cracas. Seus dez pedúnculos oculares se contorcem como cobras, e uma cicatriz profunda e circular marca seu corpo central, cegando o que antes era um grande olho acima de uma mandíbula sem lábios. O Oráculo de Dez Olhos persegue a Sombra Negra, balbuciando profecias malucas e de alguma forma movendo-se livremente entre as profundezas escuras da terra. Os guardiões da tradição profunda suspeitam que o Oráculo de Dez Olhos já foi um aliado benevolente da humanidade, mas uma calamidade desconhecida levou-o à insanidade e ao ódio imprudente.",
                "ac": "17",
                "hp": 85,
                "hp_raw": "85",
                "atk": "2d4 eyestalk ray",
                "atk_pt": "2d4 raio ocular",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 4,
                "d": 5,
                "c": 4,
                "i": 5,
                "w": 4,
                "ch": 4,
                "al": "C",
                "lv": 18,
                "lv_raw": "18",
                "abilities": [
                    {
                        "en": "Legendary. Only damaged by magical sources. Hostile spells targeting The Ten-Eyed Oracle are DC 18 to cast.",
                        "pt": "Lendário. Danificado apenas por fontes mágicas. Magias hostis direcionados ao Oráculo de Dez Olhos têm DC 18 para serem lançados."
                    },
                    {
                        "en": "Eyestalk Ray. Each ray can shoot once per round and target one creature or an object up to 1,000 pounds (up to four on same target).",
                        "pt": "Raio Ocular. Cada raio pode disparar uma vez por rodada e atingir uma criatura ou um objeto de até 1.000 libras (até quatro no mesmo alvo)."
                    },
                    {
                        "en": "1. Charm. DC 15 CHA or become ally for 1d4 rounds.",
                        "pt": "1. Enfeitiçar. DC 15 CAR ou torne-se aliado por 1d4 rodadas."
                    },
                    {
                        "en": "2. Hold. DC 15 STR or paralyzed 1d4 rounds.",
                        "pt": "2. Imobilizar. DC 15 FOR ou paralisado por 1d4 rodadas."
                    },
                    {
                        "en": "3. Sleep. DC 15 WIS or asleep 1d4 rounds.",
                        "pt": "3. Sono. DC 15 SAB ou adormecido por 1d4 rodadas."
                    },
                    {
                        "en": "4. Polymorph. DC 15 INT or turned into vermin for 1d4 rounds.",
                        "pt": "4. Polimorfar. DC 15 INT ou transformado em verme por 1d4 rodadas."
                    },
                    {
                        "en": "5. Cancel. DC 15 DEX or all magical effects on target end.",
                        "pt": "5. Cancelar. DC 15 DES ou todos os efeitos mágicos no alvo terminam."
                    },
                    {
                        "en": "6. Confusion. DC 15 WIS or attack a random ally within near.",
                        "pt": "6. Confusão. DC 15 SAB ou ataque um aliado aleatório dentro de near."
                    },
                    {
                        "en": "7. Telekinesis. DC 15 STR or hover target up to double near.",
                        "pt": "7. Telecinese. DC 15 FOR ou alvo flutua até o dobro de near."
                    },
                    {
                        "en": "8. Disintegrate. DC 15 DEX or 5d8 damage (object destroyed).",
                        "pt": "8. Desintegrar. DC 15 DES ou 5d8 de dano (objeto destruído)."
                    },
                    {
                        "en": "9. Petrify. DC 15 CON or petrified.",
                        "pt": "9. Petrificar. DC 15 CON ou petrificado."
                    },
                    {
                        "en": "10. Death. DC 15 CON or drop to 0 HP with a death timer of 1.",
                        "pt": "10. Morte. DC 15 CON ou cai para 0 HP com um contador de morte de 1."
                    }
                ]
        },
        {
                "name": "THE WANDERING MERCHANT",
                "description": "“Fancy meeting you here, at the bottom of a pit trap! I just so happen to have this lovely rope for sale...\" -The Wandering Merchant A cheerful merchant who appears to be a hale, middle-aged human man with a handlebar mustache. He wears a white shirt, breeches, and leather apron, and he hauls a towering backpack bursting at the seams. Few know the merchant's true nature and origins, though some theorize he is an immortal being or a god (they are not entirely incorrect). The Wandering Merchant always has something useful, far-flung, or incredible to sell at a reasonable price, and there's no telling when or where he'll show up next...",
                "description_pt": "“Que bom encontrar você aqui, no fundo de uma armadilha! Acontece que tenho esta linda corda à venda...\" -O Mercador Errante Um comerciante alegre que parece ser um homem saudável, de meia-idade, com bigode. Ele veste uma camisa branca, calça e avental de couro, e carrega uma mochila enorme estourando pelas costuras. Poucos conhecem a verdadeira natureza e origens do comerciante, embora alguns teorizem que ele é um ser imortal ou um deus (não estão totalmente incorretos). O Mercador Errante sempre tem algo útil, distante ou incrível para vender a um preço razoável, e não há como dizer quando ou onde ele aparecerá em seguida...",
                "ac": "16 (mithral chainmail)",
                "hp": 71,
                "hp_raw": "71",
                "atk": "4 +3 vorpal bastard sword +9 (1d10 + lop)",
                "atk_pt": "4 +3 espada bastarda vorpal +9 (1d10 + lop)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 3,
                "c": 4,
                "i": 3,
                "w": 4,
                "ch": 5,
                "al": "L",
                "lv": 15,
                "lv_raw": "15",
                "abilities": [
                    {
                        "en": "Legendary. Only damaged by magical sources. Hostile spells targeting The Wandering Merchant are DC 18 to cast.",
                        "pt": "Lendário. Danificado apenas por fontes mágicas. Magias hostis direcionados ao Mercador Errante têm DC 18 para serem lançados."
                    },
                    {
                        "en": "Amulet of Rahm-Hotep. In place of attacks, teleport to a random location in the multiverse.",
                        "pt": "Amuleto de Rahm-Hotep. No lugar dos ataques, teleport para um local aleatório no multiverso."
                    },
                    {
                        "en": "Bottomless Bag. Contains 200 gear slots in magical sub-pockets. Weighs as much as a normal backpack. The Wandering Merchant can summon it to himself from anywhere by snapping his fingers.",
                        "pt": "Bolsa Sem Fundo. Contém 200 slots de equipamento em subbolsos mágicos. Pesa tanto quanto uma mochila normal. O Mercador Errante pode invocá-lo de qualquer lugar estalando os dedos."
                    },
                    {
                        "en": "Dice of Truth. A set of three six-sided dice whose rolls cannot be magically or mundanely altered in any way.",
                        "pt": "Dados da Verdade. Um conjunto de três dados de seis lados cujos lançamentos não podem ser alterados de forma mágica ou mundana."
                    },
                    {
                        "en": "Lop. On a natural attack roll of 18-20, behead the target.",
                        "pt": "Decepar. Em uma jogada de ataque natural de 18-20, decapite o alvo."
                    },
                    {
                        "en": "Reckoning. Any creature who steals from The Wandering Merchant develops a curse. Over the next 2d8 days, that creature turns into a cockatrice. This curse can only be lifted by a wish spell or by returning the stolen goods.",
                        "pt": "Ajuste de Contas. Qualquer criatura que roube do Mercador Errante desenvolve uma maldição. Nos próximos 2d8 dias, essa criatura se transforma em um cockatrice. Esta maldição só pode ser levantada por um feitiço de desejo ou pela devolução dos bens roubados."
                    },
                    {
                        "en": "Strange Lands. The Wandering Merchant does not suffer any ill effects from the natural environment he does not wish to suffer.",
                        "pt": "Terras Estranhas. O Mercador Errante não sofre quaisquer efeitos nocivos do ambiente natural que não deseja sofrer."
                    }
                ]
        },
        {
                "name": "THIEF",
                "description": "A cat burglar in a black cloak.",
                "description_pt": "Um ladrão de gatos com uma capa preta.",
                "ac": "13 (leather)",
                "hp": 13,
                "hp_raw": "13",
                "atk": "1 dagger (close/near) +2 (1d4) or 1 shortsword +0 (1d6)",
                "atk_pt": "1 adaga (close/near) +2 (1d4) ou 1 espada curta +0 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 2,
                "c": 0,
                "i": 0,
                "w": 0,
                "ch": 1,
                "al": "N",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Stealthy. ADV on DEX checks to sneak and hide.",
                        "pt": "Furtivo. ADV em DEX verificações para se esgueirar e se esconder."
                    },
                    {
                        "en": "Backstab. Deal x2 damage against surprised creatures.",
                        "pt": "Golpe pelas Costas. Causa x2 de dano contra criaturas surpresas."
                    }
                ]
        },
        {
                "name": "THUG",
                "description": "A bruised and boorish ruffian.",
                "description_pt": "Um rufião ferido e grosseiro.",
                "ac": "13 (leather + shield)",
                "hp": 4,
                "hp_raw": "4",
                "atk": "1 shortsword +1 (1d6)",
                "atk_pt": "1 espada curta +1 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 0,
                "c": 0,
                "i": -1,
                "w": 1,
                "ch": -1,
                "al": "C",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                ]
        },
        {
                "name": "TREANT",
                "description": "Peaceful, slow-moving trees with merry eyes and tremulous voices. They protect the forest.",
                "description_pt": "Árvores pacíficas e lentas, com olhos alegres e vozes trêmulas. Eles protegem a floresta.",
                "ac": "14",
                "hp": 38,
                "hp_raw": "38",
                "atk": "3 slam +8 (1d10) or 1 rock (far) +8 (2d12)",
                "atk_pt": "3 batidas +8 (1d10) ou 1 pedra (far) +8 (2d12)",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 2,
                "i": 2,
                "w": 3,
                "ch": 1,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Animate Tree. 2/day. In place of attacks, one tree within near awakens as a treant ally without this ability. Reverts back in 1 day.",
                        "pt": "Animar Árvore. 2/dia. No lugar dos ataques, uma árvore dentro de near desperta como um aliado ente sem essa habilidade. Reverte em 1 dia."
                    }
                ]
        },
        {
                "name": "TRICERATOPS",
                "description": "Plodding herbivores with a wide, bony skull frill and three horns.",
                "description_pt": "Herbívoros pesados com um crânio largo e ossudo e três chifres.",
                "ac": "17",
                "hp": 35,
                "hp_raw": "35",
                "atk": "2 horns +6 (1d10) or 1 charge",
                "atk_pt": "2 buzinas +6 (1d10) ou 1 carga",
                "mv": "near",
                "mv_pt": "near",
                "s": 4,
                "d": -1,
                "c": 4,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Charge. Move up to double near in straight line and make 1 horn attack. If hit, x3 damage.",
                        "pt": "Investida. Mova-se para double near em linha reta e faça 1 ataque de chifre. Se atingido, x3 de dano."
                    }
                ]
        },
        {
                "name": "TROLL",
                "description": "Green, lanky giants with warty skin and territorial rage. Lair in deep forests and swamps.",
                "description_pt": "Gigantes verdes e esbeltos com pele verrugosa e raiva territorial. Covil em florestas profundas e pântanos.",
                "ac": "12",
                "hp": 24,
                "hp_raw": "24",
                "atk": "2 claw +4 (1d6) and 1 bite +4 (1d10)",
                "atk_pt": "2 garras +4 (1d6) e 1 mordida +4 (1d10)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 2,
                "c": 2,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Regenerate. Regains 2d6 HP on its turn unless its wounds are cauterized with fire or acid.",
                        "pt": "Regenerar. Recupera 2d6 HP em seu turno, a menos que seus ferimentos sejam cauterizados com fogo ou ácido."
                    }
                ]
        },
        {
                "name": "TROLL, FROST",
                "description": "Rime-covered trolls with blue skin and flinty, black eyes. They stalk arctic lands and frozen boreal forests.",
                "description_pt": "Trolls cobertos de neve com pele azul e olhos pretos e duros. Eles perseguem as terras árticas e as florestas boreais congeladas.",
                "ac": "13",
                "hp": 34,
                "hp_raw": "34",
                "atk": "2 claw +5 (1d8) and 1 bite +5 (1d12)",
                "atk_pt": "2 garras +5 (1d8) e 1 mordida +5 (1d12)",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 2,
                "c": 3,
                "i": -1,
                "w": 0,
                "ch": -1,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Impervious. Cold and fire immune.",
                        "pt": "Impermeável. Imune ao frio e ao fogo."
                    },
                    {
                        "en": "Regenerate. Regains 2d6 HP on its turn unless its wounds are cauterized with acid.",
                        "pt": "Regenerar. Recupera 2d6 HP em seu turno, a menos que seus ferimentos sejam cauterizados com ácido."
                    }
                ]
        },
        {
                "name": "TYRANNOSAURUS",
                "description": "Towering, bipedal lizards with a massive head, jaws, and neck.",
                "description_pt": "Lagartos imponentes e bípedes com cabeça, mandíbulas e pescoço enormes.",
                "ac": "13",
                "hp": 44,
                "hp_raw": "44",
                "atk": "3 bite +8 (2d12)",
                "atk_pt": "3 mordidas +8 (2d12)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 5,
                "d": 1,
                "c": 4,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 9,
                "lv_raw": "9",
                "abilities": [
                ]
        },
        {
                "name": "UNICORN",
                "description": "A silvery horse with a flowing mane and a single spiral horn.",
                "description_pt": "Um cavalo prateado com crina esvoaçante e um único chifre em espiral.",
                "ac": "12",
                "hp": 20,
                "hp_raw": "20",
                "atk": "1 hooves +3 (1d6)",
                "atk_pt": "1 cascos +3 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 2,
                "c": 2,
                "i": 1,
                "w": 2,
                "ch": 3,
                "al": "L",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Healing Horn. A touch heals 2d6 HP or ends one curse or disease.",
                        "pt": "Chifre Curador. Um toque cura 2d6 HP ou acaba com uma maldição ou doença."
                    }
                ]
        },
        {
                "name": "VAMPIRE",
                "description": "Pale, blood-drinking undead of supreme power and wickedness. They loathe sunlight and protect their coffins at all costs.",
                "description_pt": "Mortos-vivos pálidos e bebedores de sangue, de poder supremo e maldade. Eles detestam a luz solar e protegem seus caixões a todo custo.",
                "ac": "15",
                "hp": 52,
                "hp_raw": "52",
                "atk": "3 bite +7 (1d8 + blood drain) or 1 charm",
                "atk_pt": "3 mordidas +7 (1d8 + drenagem de sangue) ou 1 encanto",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 3,
                "c": 3,
                "i": 1,
                "w": 3,
                "ch": 4,
                "al": "C",
                "lv": 11,
                "lv_raw": "11",
                "abilities": [
                    {
                        "en": "Supreme Undead. Immune to morale checks. Only damaged by magical sources.",
                        "pt": "Morto-Vivo Supremo. Imune a verificações de moral. Danificado apenas por fontes mágicas."
                    },
                    {
                        "en": "Blood Drain. Vampire heals 2d6 HP and target permanently loses 1d4 CON. At 0 CON, target dies and rises as vampire or vampire spawn (vampire chooses).",
                        "pt": "Drenar Sangue. O vampiro cura 2d6 HP e o alvo perde permanentemente 1d4 CON. Em 0 CON, o alvo morre e ressuscita como vampiro ou vampiro (o vampiro escolhe)."
                    },
                    {
                        "en": "Charm. One humanoid target who can see vampire within near, DC 15 CHA or under vampire's control for 1d4 days.",
                        "pt": "Enfeitiçar. Um alvo humanóide que pode ver o vampiro dentro de near, DC 15 CHA ou sob o controle do vampiro por 1d4 dias."
                    },
                    {
                        "en": "Shapechange. In place of attacks, turn into a bat, wolf, or back into regular form.",
                        "pt": "Mudança de Forma. No lugar dos ataques, transforme-se em morcego, lobo ou volte à forma normal."
                    },
                    {
                        "en": "Vampire. Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP.",
                        "pt": "Vampiro. Deve dormir em um caixão diariamente ou perde 2d6 HP a cada dia que não pode ser curado até descansar no caixão. Recebe 3d8 de dano a cada rodada sob luz solar direta. Não pode ser morto a menos que seja perfurado no coração com uma estaca de madeira enquanto estiver em 0 HP."
                    }
                ]
        },
        {
                "name": "VAMPIRE SPAWN",
                "description": "Lesser, feral vampires born from the bite of their vampiric sires. Bloodthirsty and savage. They rarely leave a victim alive.",
                "description_pt": "Vampiros menores e selvagens nascidos da mordida de seus senhores vampíricos. Sanguinário e selvagem. Raramente deixam uma vítima viva.",
                "ac": "13 (leather)",
                "hp": 25,
                "hp_raw": "25",
                "atk": "2 bite +4 (1d8 + blood drain)",
                "atk_pt": "2 mordidas +4 (1d8 + drenagem de sangue)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 2,
                "c": 3,
                "i": -1,
                "w": 1,
                "ch": 2,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.",
                        "pt": "Morto-Vivo Maior. Imune a verificações de moral. Danificado apenas por prata ou fontes mágicas."
                    },
                    {
                        "en": "Blood Drain. Vampire heals 2d6 HP and target permanently loses 1d4 CON. At 0 CON, target dies and rises as a vampire spawn.",
                        "pt": "Drenar Sangue. O vampiro cura 2d6 HP e o alvo perde permanentemente 1d4 CON. Em 0 CON, o alvo morre e ressuscita como um vampiro."
                    },
                    {
                        "en": "Vampire. Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP.",
                        "pt": "Vampiro. Deve dormir em um caixão diariamente ou perde 2d6 HP a cada dia que não pode ser curado até descansar no caixão. Recebe 3d8 de dano a cada rodada sob luz solar direta. Não pode ser morto a menos que seja perfurado no coração com uma estaca de madeira enquanto estiver em 0 HP."
                    }
                ]
        },
        {
                "name": "VELOCIRAPTOR",
                "description": "Fast, turkey-sized raptors with vicious toe claws. Pack hunters.",
                "description_pt": "Raptores rápidos, do tamanho de um peru, com garras ferozes. Caçadores de matilha.",
                "ac": "13",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 claw +3 (1d6)",
                "atk_pt": "1 garra +3 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": -1,
                "d": 3,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Clever. +1d4 damage when attacking with surprise.",
                        "pt": "Astuto. +1d4 de dano ao atacar com surpresa."
                    }
                ]
        },
        {
                "name": "VIOLET FUNGUS",
                "description": "Child-sized, creeping fungi with neon purple caps. Their whiplike roots decompose living flesh.",
                "description_pt": "Fungos rastejantes de tamanho infantil com tampas roxas neon. Suas raízes em forma de chicote decompõem a carne viva.",
                "ac": "7",
                "hp": 9,
                "hp_raw": "9",
                "atk": "2 tendril (near) +0 (1d4)",
                "atk_pt": "2 gavinhas (near) +0 (1d4)",
                "mv": "close",
                "mv_pt": "close",
                "s": -3,
                "d": -2,
                "c": 0,
                "i": -4,
                "w": -3,
                "ch": -4,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                ]
        },
        {
                "name": "VIPERIAN",
                "description": "Lithe, snake-headed people with cobra hoods and emerald green scales covering their bodies.",
                "description_pt": "Pessoas ágeis, com cabeça de cobra, capuzes de cobra e escamas verde-esmeralda cobrindo seus corpos.",
                "ac": "13",
                "hp": 13,
                "hp_raw": "13",
                "atk": "2 scimitar +2 (1d6) or 1 javelin (close/far) +2 (1d4)",
                "atk_pt": "2 cimitarras +2 (1d6) ou 1 dardo (close/far) +2 (1d4)",
                "mv": "near",
                "mv_pt": "near",
                "s": 1,
                "d": 1,
                "c": 0,
                "i": 0,
                "w": 1,
                "ch": 0,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "VIPERIAN, OPHID",
                "description": "A giant anaconda body merges into a humanoid torso with a large snake head. It wears golden torcs and strings of glittering moonstones.",
                "description_pt": "O corpo de uma anaconda gigante se funde em um torso humanóide com uma grande cabeça de cobra. Ele usa torques dourados e cordões de pedras da lua brilhantes.",
                "ac": "14",
                "hp": 28,
                "hp_raw": "28",
                "atk": "3 falchion +5 (1d10) or 2 longbow (far) +3 (1d8)",
                "atk_pt": "3 cimitarras +5 (1d10) ou 2 arcos longos (far) +3 (1d8)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 4,
                "d": 2,
                "c": 1,
                "i": 1,
                "w": 1,
                "ch": 1,
                "al": "C",
                "lv": 6,
                "lv_raw": "6",
                "abilities": [
                    {
                        "en": "Impervious. Can only be harmed by magical sources.",
                        "pt": "Impermeável. Só pode ser prejudicado por fontes mágicas."
                    }
                ]
        },
        {
                "name": "VIPERIAN, WIZARD",
                "description": "Thin viperians with scales tinged in black. They wear silk robes and silver, serpentine jewelry.",
                "description_pt": "Viperianos magros com escamas tingidas de preto. Eles usam mantos de seda e jóias de prata com serpentina.",
                "ac": "13",
                "hp": 37,
                "hp_raw": "37",
                "atk": "1 dagger (close/ near) +2 (1d4) or 2 spell +5",
                "atk_pt": "1 adaga (close/ near) +2 (1d4) ou 2 feitiços +5",
                "mv": "near",
                "mv_pt": "near",
                "s": 0,
                "d": 1,
                "c": 0,
                "i": 3,
                "w": 1,
                "ch": 1,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Hiss (INT Spell). DC 12. End one spell within far.",
                        "pt": "Sibilar (Magia INT). DC 12. Termine um feitiço dentro de far."
                    },
                    {
                        "en": "Summon Cobra (INT Spell). DC 13. Summon 1d4 loyal cobras that appear within near. They leave in 1d4 rounds.",
                        "pt": "Invocar Cobra (Magia INT). DC 13. Convoque 1d4 cobras leais que aparecem em near. Eles saem em 1d4 rodadas."
                    },
                    {
                        "en": "Venom (INT Spell). DC 12. One target in far takes 2d8 damage.",
                        "pt": "Veneno (Magia INT). DC 12. Um alvo em far sofre 2d8 de dano."
                    },
                    {
                        "en": "Whispers (INT Spell). DC 14.",
                        "pt": "Sussurros (Magia INT). DC 14."
                    },
                    {
                        "en": "Focus. All enemies within near of viperian wizard have DISADV on spellcasting checks for the duration.",
                        "pt": "Foco. Todos os inimigos dentro de near do mago viperiano têm DISADV em testes de lançamento de feitiços durante a duração."
                    }
                ]
        },
        {
                "name": "VOID SPAWN",
                "description": "Scythe-like limbs jut from a purple bulb as big as an ogre. Its lower half is a nest of tentacles.",
                "description_pt": "Membros semelhantes a foices projetam-se de um bulbo roxo do tamanho de um ogro. Sua metade inferior é um ninho de tentáculos.",
                "ac": "13",
                "hp": 34,
                "hp_raw": "34",
                "atk": "2 scythe +6 (1d10) and 1 tentacles +6 (1d12 + toxin)",
                "atk_pt": "2 foices +6 (1d10) e 1 tentáculos +6 (1d12 + toxina)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 4,
                "d": 1,
                "c": 3,
                "i": 0,
                "w": 1,
                "ch": -1,
                "al": "C",
                "lv": 7,
                "lv_raw": "7",
                "abilities": [
                    {
                        "en": "Impervious. Immune to cold.",
                        "pt": "Impermeável. Imune ao frio."
                    },
                    {
                        "en": "Toxin. DC 12 CON or paralyzed for 1d4 rounds.",
                        "pt": "Toxina. DC 12 CON ou paralisado por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "VOID SPIDER",
                "description": "Pale, horse-sized arachnids that become ghostly and intangible.",
                "description_pt": "Aracnídeos pálidos, do tamanho de cavalos, que se tornam fantasmagóricos e intangíveis.",
                "ac": "13",
                "hp": 23,
                "hp_raw": "23",
                "atk": "2 bite +4 (1d8 + poison)",
                "atk_pt": "2 mordidas +4 (1d8 + veneno)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 3,
                "d": 3,
                "c": 1,
                "i": -1,
                "w": 1,
                "ch": -2,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Impervious. Immune to cold.",
                        "pt": "Impermeável. Imune ao frio."
                    },
                    {
                        "en": "Phase. Once per round, become corporeal or incorporeal.",
                        "pt": "Fase. Uma vez por rodada, torne-se corpóreo ou incorpóreo."
                    },
                    {
                        "en": "Poison. DC 12 CON or drop to 0 HP in 1d4 rounds.",
                        "pt": "Veneno. DC 12 CON ou cair para 0 HP em 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "VULTURE",
                "description": "Scavenger birds with black feathers, hunched backs, and bald heads.",
                "description_pt": "Aves necrófagas com penas pretas, costas curvadas e cabeças calvas.",
                "ac": "10",
                "hp": 5,
                "hp_raw": "5",
                "atk": "1 tear +1 (1d4)",
                "atk_pt": "1 lágrima +1 (1d4)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 1,
                "d": 0,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 1,
                "lv_raw": "1",
                "abilities": [
                    {
                        "en": "Carrion Tracker. Can track dead flesh unerringly within a mile.",
                        "pt": "Rastreador de Carniça. Pode rastrear carne morta infalivelmente em um raio de um quilômetro."
                    }
                ]
        },
        {
                "name": "WASP, GIANT",
                "description": "Man-sized wasps with glossy, yellow-striped abdomens.",
                "description_pt": "Vespas do tamanho de um homem com abdômen brilhante com listras amarelas.",
                "ac": "13",
                "hp": 9,
                "hp_raw": "9",
                "atk": "1 sting +3 (1d6 + venom)",
                "atk_pt": "1 picada +3 (1d6 + veneno)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": 1,
                "d": 3,
                "c": 0,
                "i": -3,
                "w": 0,
                "ch": -3,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Venom. DC 9 CON or go to 0 HP.",
                        "pt": "Veneno. DC 9 CON ou vá para 0 HP."
                    }
                ]
        },
        {
                "name": "WERERAT",
                "description": "A slinking, rat-faced humanoid covered in mangy fur.",
                "description_pt": "Um humanóide furtivo com cara de rato e coberto de pêlo sarnento.",
                "ac": "13 (leather)",
                "hp": 14,
                "hp_raw": "14",
                "atk": "2 bite +2 (1d6)",
                "atk_pt": "2 mordidas +2 (1d6)",
                "mv": "near (climb)",
                "mv_pt": "near (climb)",
                "s": 1,
                "d": 2,
                "c": 1,
                "i": -1,
                "w": 1,
                "ch": -1,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by silver or magic sources.",
                        "pt": "Impermeável. Danificado apenas por fontes de prata ou magia."
                    },
                    {
                        "en": "Lycanthropy. If 12 or more damage from the same wererat, contract lycanthropy.",
                        "pt": "Licantropia. Se 12 ou mais danos forem causados pelo mesmo homem-rato, contraia licantropia."
                    }
                ]
        },
        {
                "name": "WEREWOLF",
                "description": "A bipedal, wolf-faced humanoid covered in brown fur.",
                "description_pt": "Um humanóide bípede com cara de lobo coberto de pêlo marrom.",
                "ac": "12",
                "hp": 20,
                "hp_raw": "20",
                "atk": "2 rend +3 (1d6)",
                "atk_pt": "2 rendas +3 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 2,
                "c": 2,
                "i": 0,
                "w": 1,
                "ch": 0,
                "al": "C",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Impervious. Only damaged by silver or magic sources.",
                        "pt": "Impermeável. Danificado apenas por fontes de prata ou magia."
                    },
                    {
                        "en": "Lycanthropy. If 12 or more damage from the same werewolf, contract lycanthropy.",
                        "pt": "Licantropia. Se 12 ou mais danos forem causados pelo mesmo lobisomem, contraia licantropia."
                    }
                ]
        },
        {
                "name": "WIGHT",
                "description": "A pale, armored undead warrior with sinister intelligence.",
                "description_pt": "Um guerreiro morto-vivo pálido e blindado com inteligência sinistra.",
                "ac": "14 (chainmail)",
                "hp": 15,
                "hp_raw": "15",
                "atk": "1 bastard sword +3 (1d10) and 1 life drain +3",
                "atk_pt": "1 espada bastarda +3 (1d10) e 1 dreno de vida +3",
                "mv": "near",
                "mv_pt": "near",
                "s": 3,
                "d": 1,
                "c": 2,
                "i": 1,
                "w": 0,
                "ch": 3,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                    {
                        "en": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.",
                        "pt": "Morto-Vivo Maior. Imune a verificações de moral. Danificado apenas por prata ou fontes mágicas."
                    },
                    {
                        "en": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON.",
                        "pt": "Drenar Vida. 1d4 CON dano. Morte se reduzida a 0 CON."
                    }
                ]
        },
        {
                "name": "WILL-O'-WISP",
                "description": "A bobbing marsh light animated by an evil spirit. It tries to lead the living into danger.",
                "description_pt": "Uma luz oscilante do pântano animada por um espírito maligno. Ele tenta levar os vivos ao perigo.",
                "ac": "13",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 life drain +3",
                "atk_pt": "1 dreno de vida +3",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -3,
                "d": 3,
                "c": 1,
                "i": -1,
                "w": -1,
                "ch": -2,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON.",
                        "pt": "Drenar Vida. 1d4 CON dano. Morte se reduzida a 0 CON."
                    }
                ]
        },
        {
                "name": "WOLF",
                "description": "A giant canine with a gray pelt, yellow eyes, and dripping jaws.",
                "description_pt": "Um canino gigante com pele cinza, olhos amarelos e mandíbulas gotejantes.",
                "ac": "12",
                "hp": 10,
                "hp_raw": "10",
                "atk": "1 bite +2 (1d6)",
                "atk_pt": "1 mordida +2 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 2,
                "d": 2,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Pack Hunter. Deals +1 damage while an ally is close.",
                        "pt": "Caçador de Matilha. Causa +1 de dano enquanto um aliado estiver close."
                    }
                ]
        },
        {
                "name": "WOLF, DIRE",
                "description": "A massive wolf with spines of black bone along its brow ridge and back.",
                "description_pt": "Um lobo enorme com espinhos de ossos pretos ao longo da testa e nas costas.",
                "ac": "12",
                "hp": 19,
                "hp_raw": "19",
                "atk": "2 bite +4 (1d8)",
                "atk_pt": "2 mordidas +4 (1d8)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 2,
                "c": 1,
                "i": -1,
                "w": 1,
                "ch": 0,
                "al": "N",
                "lv": 4,
                "lv_raw": "4",
                "abilities": [
                    {
                        "en": "Pack Hunter. Deals +1 damage while an ally is close.",
                        "pt": "Caçador de Matilha. Causa +1 de dano enquanto um aliado estiver close."
                    }
                ]
        },
        {
                "name": "WOLF, WINTER",
                "description": "Sinister, white-pelted wolves with piercing blue eyes. From the fey realms of eternal winter.",
                "description_pt": "Lobos sinistros, de pelagem branca e olhos azuis penetrantes. Dos reinos feéricos do inverno eterno.",
                "ac": "12",
                "hp": 23,
                "hp_raw": "23",
                "atk": "2 bite +4 (1d6) or 1 frost breath",
                "atk_pt": "2 mordidas +4 (1d6) ou 1 sopro gelado",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 3,
                "d": 2,
                "c": 1,
                "i": 0,
                "w": 1,
                "ch": 0,
                "al": "C",
                "lv": 5,
                "lv_raw": "5",
                "abilities": [
                    {
                        "en": "Impervious. Cold immune.",
                        "pt": "Impermeável. Imune ao frio."
                    },
                    {
                        "en": "Frost Breath. Fills a near-sized cube extending from winter wolf. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds.",
                        "pt": "Sopro de Gelo. Preenche um cubo de tamanho near que se estende desde o lobo do inverno. DC 15 DEX ou 3d8 danos. Não é possível usar novamente por 1d4 rodadas."
                    }
                ]
        },
        {
                "name": "WORG",
                "description": "Bat-faced wolves that speak Goblin and often serve as war mounts for goblinkind.",
                "description_pt": "Lobos com cara de morcego que falam Goblin e muitas vezes servem como montarias de guerra para os goblins.",
                "ac": "11",
                "hp": 14,
                "hp_raw": "14",
                "atk": "1 bite +3 (1d6)",
                "atk_pt": "1 mordida +3 (1d6)",
                "mv": "double near",
                "mv_pt": "double near",
                "s": 2,
                "d": 1,
                "c": 1,
                "i": -2,
                "w": 1,
                "ch": -2,
                "al": "C",
                "lv": 3,
                "lv_raw": "3",
                "abilities": [
                ]
        },
        {
                "name": "WRAITH",
                "description": "A shadowy spirit seething with anger and malice. Its presence is unsettling to animals.",
                "description_pt": "Um espírito sombrio fervendo de raiva e malícia. Sua presença é perturbadora para os animais.",
                "ac": "14",
                "hp": 36,
                "hp_raw": "36",
                "atk": "3 death touch +6 (1d10 + life drain)",
                "atk_pt": "3 toque mortal +6 (1d10 + drenagem de vida)",
                "mv": "near (fly)",
                "mv_pt": "near (fly)",
                "s": -4,
                "d": 4,
                "c": 0,
                "i": 0,
                "w": 0,
                "ch": 3,
                "al": "C",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.",
                        "pt": "Morto-Vivo Maior. Imune a verificações de moral. Danificado apenas por prata ou fontes mágicas."
                    },
                    {
                        "en": "Incorporeal. In place of attacks, become corporeal or incorporeal.",
                        "pt": "Incorpóreo. No lugar dos ataques, torne-se corpóreo ou incorpóreo."
                    },
                    {
                        "en": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON.",
                        "pt": "Drenar Vida. 1d4 CON dano. Morte se reduzida a 0 CON."
                    }
                ]
        },
        {
                "name": "WYVERN",
                "description": "Dragon-cousins with a large tail stinger, mottled lizard skin, and leathery wings.",
                "description_pt": "Primos-dragão com um grande ferrão na cauda, pele de lagarto manchada e asas de couro.",
                "ac": "15",
                "hp": 37,
                "hp_raw": "37",
                "atk": "2 rend +6 (1d8) and 1 stinger +6 (1d6 + poison)",
                "atk_pt": "2 rend +6 (1d8) e 1 ferrão +6 (1d6 + veneno)",
                "mv": "double near (fly)",
                "mv_pt": "double near (fly)",
                "s": 4,
                "d": 2,
                "c": 1,
                "i": -3,
                "w": 1,
                "ch": -3,
                "al": "N",
                "lv": 8,
                "lv_raw": "8",
                "abilities": [
                    {
                        "en": "Poison. DC 15 CON or take 2d10 damage.",
                        "pt": "Veneno. DC 15 CON ou receba 2d10 de dano."
                    }
                ]
        },
        {
                "name": "ZOMBIE",
                "description": "Lurching and decomposed undead that hunt in mobs.",
                "description_pt": "Mortos-vivos cambaleantes e decompostos que caçam em multidões.",
                "ac": "8",
                "hp": 11,
                "hp_raw": "11",
                "atk": "1 slam +2 (1d6)",
                "atk_pt": "1 batida +2 (1d6)",
                "mv": "near",
                "mv_pt": "near",
                "s": 2,
                "d": -2,
                "c": 2,
                "i": -2,
                "w": -2,
                "ch": -3,
                "al": "C",
                "lv": 2,
                "lv_raw": "2",
                "abilities": [
                    {
                        "en": "Undead. Immune to morale checks.",
                        "pt": "Morto-Vivo. Imune a verificações de moral."
                    },
                    {
                        "en": "Relentless. If zombie reduced to 0 HP by a non-magical source, DC 15 CON to go to 1 HP instead.",
                        "pt": "Implacável. Se o zumbi for reduzido a 0 HP por uma fonte não mágica, DC 15 CON irá para 1 HP."
                    }
                ]
        }
    ]
};

// Utility functions for the bestiary
window.BestiaryUtils = {
    // Get all monsters sorted by name
    getAllMonsters: function() {
        return window.BESTIARY_DATA.monsters.sort((a, b) => a.name.localeCompare(b.name));
    },

    // Get monsters by level range
    getByLevel: function(minLv, maxLv) {
        return window.BESTIARY_DATA.monsters.filter(m => 
            m.lv >= minLv && m.lv <= maxLv
        );
    },

    // Get monsters by alignment
    getByAlignment: function(al) {
        return window.BESTIARY_DATA.monsters.filter(m => m.al === al);
    },

    // Search monsters by name
    searchByName: function(query) {
        const q = query.toLowerCase();
        return window.BESTIARY_DATA.monsters.filter(m => 
            m.name.toLowerCase().includes(q)
        );
    },

    // Get alignment label
    getAlignmentLabel: function(al, lang) {
        const labels = {
            'L': { 'pt-BR': 'Leal', en: 'Lawful' },
            'N': { 'pt-BR': 'Neutro', en: 'Neutral' },
            'C': { 'pt-BR': 'Caótico', en: 'Chaotic' }
        };
        return labels[al] ? labels[al][lang] || al : al;
    },

    // Get level label
    getLevelLabel: function(lv, lang) {
        if (lv === 0) return lang === 'pt-BR' ? 'Nível 0' : 'Level 0';
        return (lang === 'pt-BR' ? 'Nível ' : 'Level ') + lv;
    }
};
