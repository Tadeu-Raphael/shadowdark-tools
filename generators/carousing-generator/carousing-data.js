(function () {
    "use strict";

    window.CAROUSING_DATA = {
        costs: [
            { gp: 30, bonus: 0, pt: "Uma noite digna de bebida e festividade", en: "A worthy night of drinking and festivity" },
            { gp: 100, bonus: 1, pt: "Um dia e uma noite inteiros de folia, apostas e histórias sobre seus feitos", en: "A full day and night of revelry, gambling, and recounting your exploits" },
            { gp: 300, bonus: 2, pt: "Dois dias percorrendo dezenas de tavernas para cantar, pagar rodadas e dançar", en: "Two days of crawling dozens of taverns to sing, buy rounds, and dance" },
            { gp: 600, bonus: 3, pt: "Uma viagem de três dias pelas melhores comidas, bebidas e jogatinas que encontrar", en: "A three-day voyage into the finest food, drink, and gambling you can find" },
            { gp: 900, bonus: 4, pt: "Uma bebedeira de uma semana que esvazia várias tavernas conhecidas", en: "A hazy, weeklong bender that runs multiple well-known taverns dry" },
            { gp: 1200, bonus: 5, pt: "Uma festa animada de dez dias que atrai multidões e toma uma cidade ou um distrito inteiro", en: "A spirited ten-day fête that attracts hordes of revelers and takes over an entire town or city district" },
            { gp: 1800, bonus: 6, pt: "Duas semanas lendárias de bebida e devassidão tomam uma cidade inteira. Atraem festeiros incontáveis, incluindo nobres e bardos famosos; as ruas ficam vermelhas de vinho", en: "Two legendary weeks of drinking and debauchery take over a whole city. Countless celebrants join in, including famous nobles and bards; the streets run red with wine" }
        ],
        outcomes: [
            {
                pt: "Você acorda atordoado em sua cama.", en: "You wake up blurrily in your bed.", benefitPt: "Ganhe 2 XP.", benefitEn: "Gain 2 XP.",
                eventPt: "Uma noite tranquila", eventEn: "A quiet night", subtitlePt: "Consequências leves", subtitleEn: "Mild consequences",
                detailsPt: [
                    "Você acorda em sua cama após uma noite agradável. Ganhe 2 XP.",
                    "Você venceu uma competição de histórias e recebeu 30 PO. Ganhe 2 XP e 30 PO.",
                    "Um comerciante gostou da sua conversa e oferece 10% de desconto em suas mercadorias. Ganhe 2 XP e um contato comercial.",
                    "Você passou a noite jogando dados com marinheiros. Um deles lhe ensinou um truque útil. Ganhe 2 XP e vantagem em um próximo teste de jogo de azar.",
                    "Você conheceu um curandeiro que gostou de sua companhia. Ganhe 2 XP e uma poção de cura menor.",
                    "Você impressionou um grupo de aventureiros com suas histórias. Ganhe 2 XP e descubra a localização de um tesouro escondido."
                ],
                detailsEn: [
                    "You wake up in your bed after a pleasant night. Gain 2 XP.",
                    "You won a storytelling contest and received 30 gp. Gain 2 XP and 30 gp.",
                    "A merchant enjoyed your conversation and offers 10% off their goods. Gain 2 XP and a merchant contact.",
                    "You spent the night playing dice with sailors. One taught you a useful trick. Gain 2 XP and advantage on your next gambling check.",
                    "You met a healer who enjoyed your company. Gain 2 XP and a minor healing potion.",
                    "You impressed a group of adventurers with your stories. Gain 2 XP and learn the location of hidden treasure."
                ]
            },
            {
                pt: "Você passa 1d4 dias no tronco e paga multa de 20% da sua riqueza por incendiar um prédio.", en: "You're locked in the stocks for 1d4 days and fined 20% of your wealth for setting a building on fire.", benefitPt: "Ganhe 2 XP.", benefitEn: "Gain 2 XP.",
                eventPt: "Problemas com a lei", eventEn: "Trouble with the law", subtitlePt: "Pequenos crimes e penalidades", subtitleEn: "Minor crimes and penalties",
                detailsPt: [
                    "Você incendiou acidentalmente um depósito. Ganhe 2 XP, pague 20% da riqueza e fique preso por 1d4 dias.",
                    "Você brigou com um guarda e foi condenado a serviços comunitários. Ganhe 2 XP e não poderá comprar equipamentos na cidade por 3 dias.",
                    "Encontraram você dormindo em uma fonte pública. Ganhe 2 XP e pague multa de 10% da riqueza.",
                    "Você tentou roubar um cavalo e foi capturado. Ganhe 2 XP e perca um item aleatório do inventário, confiscado pela guarda.",
                    "Você organizou uma corrida ilegal de carroças. Ganhe 2 XP e um inimigo entre os comerciantes locais.",
                    "Você destruiu parte de uma propriedade nobre. Ganhe 2 XP e fica proibido de entrar no distrito nobre."
                ],
                detailsEn: [
                    "You accidentally set a warehouse on fire. Gain 2 XP, pay 20% of your wealth, and spend 1d4 days in jail.",
                    "You fought a guard and were sentenced to community service. Gain 2 XP and cannot buy equipment in town for 3 days.",
                    "You were found sleeping in a public fountain. Gain 2 XP and pay a fine worth 10% of your wealth.",
                    "You tried to steal a horse and were caught. Gain 2 XP and lose a random inventory item confiscated by the guards.",
                    "You organized an illegal wagon race. Gain 2 XP and make an enemy among local merchants.",
                    "You damaged a noble's property. Gain 2 XP and are barred from the noble district."
                ]
            },
            {
                pt: "Você acorda em uma sarjeta, tendo gasto 15% de sua riqueza.", en: "You wake up in a gutter with 15% of your wealth spent.", benefitPt: "Ganhe 3 XP.", benefitEn: "Gain 3 XP.",
                eventPt: "Uma manhã desagradável", eventEn: "A miserable morning", subtitlePt: "Prejuízos e surpresas", subtitleEn: "Losses and surprises",
                detailsPt: [
                    "Você acorda em uma sarjeta sem lembrar de nada. Ganhe 3 XP e perca 15% da riqueza.",
                    "Você acorda em um barco de pesca, longe da cidade. Ganhe 3 XP e perca um equipamento aleatório.",
                    "Você acorda em uma cela e precisa pagar para sair. Ganhe 3 XP e pague 10% da riqueza.",
                    "Você acorda em um estábulo, cercado de cavalos particularmente agressivos. Ganhe 3 XP e comece a próxima aventura com 1d4 pontos de dano.",
                    "Você desperta em uma carroça a caminho de outra cidade. Ganhe 3 XP e perca 1d4 dias de viagem.",
                    "Você acorda em um templo, tendo prometido servir a uma divindade desconhecida. Ganhe 3 XP, mas fique devendo um favor ao sacerdote local."
                ],
                detailsEn: [
                    "You wake up in a gutter with no memory of the night. Gain 3 XP and lose 15% of your wealth.",
                    "You wake up on a fishing boat far from town. Gain 3 XP and lose a random piece of equipment.",
                    "You wake up in a cell and must pay to get out. Gain 3 XP and pay 10% of your wealth.",
                    "You wake up in a stable among particularly aggressive horses. Gain 3 XP and start your next adventure with 1d4 damage.",
                    "You wake in a wagon bound for another town. Gain 3 XP and lose 1d4 days of travel.",
                    "You wake in a temple, having promised to serve an unknown deity. Gain 3 XP, but owe the local priest a favor."
                ]
            },
            {
                pt: "Você se lembra vagamente de ter doado 10% da sua riqueza a um sumo sacerdote.", en: "You hazily remember donating 10% of your wealth to a high priest.", benefitPt: "Ganhe 3 XP e um sacerdote aliado.", benefitEn: "Gain 3 XP and a priest ally.",
                eventPt: "Generosidade questionável", eventEn: "Questionable generosity", subtitlePt: "Contatos e benefícios", subtitleEn: "Contacts and benefits",
                detailsPt: [
                    "Você doou 10% da riqueza a um sacerdote. Ganhe 3 XP e um sacerdote como aliado.",
                    "Você financiou uma pequena enfermaria. Ganhe 3 XP e receba uma vez tratamento gratuito para recuperar todos os PV.",
                    "Você patrocinou uma companhia de mercenários. Ganhe 3 XP e um contato mercenário que pode fornecer informações.",
                    "Você pagou as dívidas de um artesão. Ganhe 3 XP e 20% de desconto em serviços de fabricação.",
                    "Você financiou uma festa para os moradores de um vilarejo. Ganhe 3 XP e receba abrigo e comida gratuitos nesse vilarejo.",
                    "Você financiou uma expedição de estudiosos. Ganhe 3 XP e uma pista sobre um local antigo ou uma masmorra."
                ],
                detailsEn: [
                    "You donated 10% of your wealth to a priest. Gain 3 XP and a priest ally.",
                    "You funded a small infirmary. Gain 3 XP and one free treatment that restores all HP.",
                    "You sponsored a mercenary company. Gain 3 XP and a mercenary contact who can provide information.",
                    "You paid an artisan's debts. Gain 3 XP and 20% off crafting services.",
                    "You funded a village feast. Gain 3 XP and free food and lodging in that village.",
                    "You funded a scholars' expedition. Gain 3 XP and a clue about an ancient site or dungeon."
                ]
            },
            {
                pt: "Você paga multa de 10% da sua riqueza por começar uma briga generalizada em uma taverna.", en: "You're fined 10% of your wealth for starting a full tavern brawl.", benefitPt: "Ganhe 3 XP e seja banido de uma taverna.", benefitEn: "Gain 3 XP and be barred from a tavern.",
                eventPt: "Confusões e proibições", eventEn: "Brawls and bans", subtitlePt: "Consequências sociais", subtitleEn: "Social consequences",
                detailsPt: [
                    "Você iniciou uma briga generalizada em uma taverna. Ganhe 3 XP, pague 10% da riqueza e seja banido do lugar.",
                    "Você desafiou um lutador local e perdeu vergonhosamente. Ganhe 3 XP e fique com um olho roxo: desvantagem no próximo teste de Carisma.",
                    "Você destruiu a cozinha de uma hospedaria. Ganhe 3 XP e fique devendo uma refeição por dia ao proprietário durante 1d6 dias.",
                    "Você apostou seu equipamento em uma partida de dados. Ganhe 3 XP e perca um item aleatório do inventário.",
                    "Você insultou publicamente um nobre. Ganhe 3 XP e adquira um inimigo aristocrata.",
                    "Você organizou uma competição ilegal de luta. Ganhe 3 XP e uma recompensa de 50 PO por sua captura."
                ],
                detailsEn: [
                    "You started a full tavern brawl. Gain 3 XP, pay 10% of your wealth, and be barred from the tavern.",
                    "You challenged a local fighter and lost in disgrace. Gain 3 XP and a black eye: disadvantage on your next Charisma check.",
                    "You wrecked an inn's kitchen. Gain 3 XP and owe the owner one meal a day for 1d6 days.",
                    "You wagered your gear on a dice game. Gain 3 XP and lose a random inventory item.",
                    "You publicly insulted a noble. Gain 3 XP and make an aristocratic enemy.",
                    "You organized an illegal fighting contest. Gain 3 XP and a 50 gp bounty is placed on your capture."
                ]
            },
            {
                pt: "A Guilda dos Ladrões extorquiu 5% da sua riqueza.", en: "The Thieves' Guild bilked you for 5% of your wealth.", benefitPt: "Ganhe 4 XP.", benefitEn: "Gain 4 XP.",
                eventPt: "Uma dívida inconveniente", eventEn: "An inconvenient debt", subtitlePt: "Dívidas e cobranças", subtitleEn: "Debts and collections",
                detailsPt: [
                    "A Guilda dos Ladrões cobrou uma taxa pelo uso de seus serviços. Ganhe 4 XP e pague 5% da riqueza.",
                    "Você perdeu uma aposta contra um agiota. Ganhe 4 XP e fique devendo 10% da riqueza.",
                    "Você comprou uma arma durante uma bebedeira e esqueceu de pagar. Ganhe 4 XP, mas comece a próxima aventura devendo 50 PO.",
                    "Você prometeu ajudar um grupo de mercenários. Ganhe 4 XP e uma dívida de serviço: deverá ajudá-los em uma missão.",
                    "Você apostou uma joia em uma partida de cartas. Ganhe 4 XP e perca uma joia ou item no valor de 100 PO.",
                    "Um comerciante afirma que você destruiu sua loja. Ganhe 4 XP, mas adquira um inimigo comerciante que pode denunciá-lo às autoridades."
                ],
                detailsEn: [
                    "The Thieves' Guild charged you a fee for using its services. Gain 4 XP and pay 5% of your wealth.",
                    "You lost a bet to a loan shark. Gain 4 XP and owe 10% of your wealth.",
                    "You bought a weapon while drunk and forgot to pay. Gain 4 XP, but start your next adventure owing 50 gp.",
                    "You promised to help a group of mercenaries. Gain 4 XP and owe them a service: help with a mission.",
                    "You wagered a jewel in a card game. Gain 4 XP and lose a jewel or item worth 100 gp.",
                    "A merchant claims you wrecked their shop. Gain 4 XP, but make a merchant enemy who may report you to the authorities."
                ]
            },
            {
                pt: "Você conduziu uma taverna inteira em uma canção ofensiva sobre um nobre detestado.", en: "You led an entire tavern in a wildly insulting song about a disliked noble.", benefitPt: "Ganhe 4 XP e um bardo famoso como aliado.", benefitEn: "Gain 4 XP and a famous bard ally.",
                eventPt: "Uma reputação inesperada", eventEn: "An unexpected reputation", subtitlePt: "Fama e contatos", subtitleEn: "Fame and contacts",
                detailsPt: [
                    "Você liderou uma canção ofensiva contra um nobre. Ganhe 4 XP e um bardo famoso como aliado.",
                    "Você venceu um concurso de histórias. Ganhe 4 XP e receba 100 PO de um patrono interessado em suas aventuras.",
                    "Você impressionou um grupo de aventureiros veteranos. Ganhe 4 XP e descubra a localização de uma masmorra.",
                    "Você venceu um sacerdote em uma disputa de oratória. Ganhe 4 XP e um contato religioso influente.",
                    "Você convenceu contrabandistas a ajudá-lo. Ganhe 4 XP e acesso ao mercado clandestino local.",
                    "Você virou assunto de uma peça de teatro. Ganhe 4 XP e fique conhecido em uma cidade próxima."
                ],
                detailsEn: [
                    "You led an insulting song about a noble. Gain 4 XP and a famous bard ally.",
                    "You won a storytelling contest. Gain 4 XP and receive 100 gp from a patron interested in your adventures.",
                    "You impressed a group of veteran adventurers. Gain 4 XP and learn the location of a dungeon.",
                    "You won an oratory contest against a priest. Gain 4 XP and gain an influential religious contact.",
                    "You convinced smugglers to help you. Gain 4 XP and access to the local black market.",
                    "You became the subject of a stage play. Gain 4 XP and become known in a nearby town."
                ]
            },
            {
                pt: "Você sobreviveu ileso a uma demonstração de arremesso de facas com os olhos vendados.", en: "You survived a blindfolded knife-throwing demonstration unscathed.", benefitPt: "Ganhe 4 XP e 1 token da sorte.", benefitEn: "Gain 4 XP and 1 luck token.",
                eventPt: "Sorte e imprudência", eventEn: "Luck and recklessness", subtitlePt: "Sorte extraordinária", subtitleEn: "Extraordinary luck",
                detailsPt: [
                    "Você sobreviveu a uma demonstração de arremesso de facas vendado. Ganhe 4 XP e 1 token da sorte.",
                    "Você venceu uma aposta extremamente improvável. Ganhe 4 XP e 150 PO.",
                    "Você escapou de um incêndio preso em um quarto. Ganhe 4 XP e uma vantagem permanente: uma vez, ignore dano de queda.",
                    "Você acertou todos os disparos em uma competição de tiro ao alvo. Ganhe 4 XP e uma arma de qualidade superior.",
                    "Você encontrou um anel mágico perdido durante uma bebedeira. Ganhe 4 XP e um item mágico menor, definido pelo mestre.",
                    "Você sobreviveu a uma brincadeira mortal com uma besta carregada. Ganhe 4 XP e receba +1 em um teste de atributo à sua escolha, uma vez."
                ],
                detailsEn: [
                    "You survived a blindfolded knife-throwing demonstration. Gain 4 XP and 1 luck token.",
                    "You won an extremely unlikely bet. Gain 4 XP and 150 gp.",
                    "You escaped a fire while trapped in a room. Gain 4 XP and a permanent edge: once, ignore falling damage.",
                    "You hit every shot in a target-shooting contest. Gain 4 XP and a superior-quality weapon.",
                    "You found a lost magic ring while drinking. Gain 4 XP and a minor magic item chosen by the GM.",
                    "You survived a deadly prank involving a loaded crossbow. Gain 4 XP and +1 to one ability check of your choice, once."
                ]
            },
            {
                pt: "Você venceu uma disputa de habilidade contra um brigão rival. Ele pode ser um amigo ou inimigo.", en: "You beat a rival brawler in a test of skill. They may be a friend or foe.", benefitPt: "Ganhe 5 XP e um NPC aliado ou inimigo.", benefitEn: "Gain 5 XP and an NPC ally or enemy.",
                eventPt: "Um rival ou um novo amigo", eventEn: "A rival or a new friend", subtitlePt: "NPCs e relacionamentos", subtitleEn: "NPCs and relationships",
                detailsPt: [
                    "Você derrotou um lutador famoso em uma competição. Ganhe 5 XP e um NPC aliado combatente.",
                    "Você venceu um duelista arrogante. Ganhe 5 XP e um rival que tentará desafiá-lo novamente.",
                    "Você impressionou um caçador experiente. Ganhe 5 XP e um aliado capaz de guiá-lo pela natureza.",
                    "Você derrotou um jogador profissional em uma partida de dados. Ganhe 5 XP e 200 PO.",
                    "Você ajudou um aventureiro ferido durante uma confusão. Ganhe 5 XP e um aliado que lhe deve a vida.",
                    "Você humilhou um mercenário diante dos companheiros. Ganhe 5 XP e um inimigo mercenário com 1d4 seguidores."
                ],
                detailsEn: [
                    "You defeated a famous fighter in a contest. Gain 5 XP and a combatant NPC ally.",
                    "You beat an arrogant duelist. Gain 5 XP and a rival who will challenge you again.",
                    "You impressed an experienced hunter. Gain 5 XP and an ally who can guide you through the wilderness.",
                    "You beat a professional gambler at dice. Gain 5 XP and 200 gp.",
                    "You helped an injured adventurer in a brawl. Gain 5 XP and an ally who owes you their life.",
                    "You humiliated a mercenary in front of their companions. Gain 5 XP and a mercenary enemy with 1d4 followers."
                ]
            },
            {
                pt: "Um mago furioso lança uma magia mortal contra você, mas você a rebate com sua caneca.", en: "An angry wizard casts a deadly spell at you, but you reflect it off your cup.", benefitPt: "Ganhe 5 XP e 1 token da sorte.", benefitEn: "Gain 5 XP and 1 luck token.",
                eventPt: "Magia fora de controle", eventEn: "Magic out of control", subtitlePt: "Magia e artefatos", subtitleEn: "Magic and artifacts",
                detailsPt: [
                    "Você rebateu com a caneca uma magia mortal lançada por um mago bêbado. Ganhe 5 XP e 1 token da sorte.",
                    "Você participou de um ritual e recebeu uma bênção inesperada. Ganhe 5 XP e +1 no próximo teste de resistência.",
                    "Um mago confundiu você com seu aprendiz. Ganhe 5 XP e aprenda algo útil sobre magia ou um feitiço.",
                    "Você encontrou um grimório esquecido durante uma festa. Ganhe 5 XP e um pergaminho mágico aleatório.",
                    "Você sobreviveu à explosão de um experimento alquímico. Ganhe 5 XP e uma poção aleatória.",
                    "Você absorveu uma descarga mágica por acidente. Ganhe 5 XP e uma habilidade mágica menor de uso único, definida pelo mestre."
                ],
                detailsEn: [
                    "You reflected a deadly spell from a drunk wizard with your mug. Gain 5 XP and 1 luck token.",
                    "You took part in a ritual and received an unexpected blessing. Gain 5 XP and +1 to your next saving throw.",
                    "A wizard mistook you for their apprentice. Gain 5 XP and learn something useful about magic or a spell.",
                    "You found a forgotten spellbook during a party. Gain 5 XP and a random magic scroll.",
                    "You survived an alchemical experiment's explosion. Gain 5 XP and a random potion.",
                    "You accidentally absorbed a magical discharge. Gain 5 XP and a minor one-use magical ability chosen by the GM."
                ]
            },
            {
                pt: "Você pregou uma peça humilhante em um comerciante corrupto e conquistou a Guarda da Cidade.", en: "You played a humiliating prank on a despised, corrupt merchant and won over the City Watch.", benefitPt: "Ganhe 5 XP e um aliado na Guarda da Cidade.", benefitEn: "Gain 5 XP and an ally in the City Watch.",
                eventPt: "Uma brincadeira de mau gosto", eventEn: "A nasty prank", subtitlePt: "Influência e autoridade", subtitleEn: "Influence and authority",
                detailsPt: [
                    "Você pregou uma peça em um comerciante corrupto e impressionou um guarda. Ganhe 5 XP e um aliado na Guarda da Cidade.",
                    "Você expôs um funcionário corrupto durante uma festa. Ganhe 5 XP e acesso a informações confidenciais da administração local.",
                    "Você enganou um nobre arrogante e conquistou a simpatia de seus empregados. Ganhe 5 XP e um informante em uma residência nobre.",
                    "Você convenceu um capitão da guarda a participar de uma aposta. Ganhe 5 XP e uma autorização para circular à noite na cidade.",
                    "Você roubou documentos de um magistrado durante uma brincadeira. Ganhe 5 XP e uma prova comprometedora contra uma figura importante.",
                    "Você organizou uma cerimônia falsa para ridicularizar um criminoso influente. Ganhe 5 XP e um contato na Guarda da Cidade que poderá ajudar uma vez."
                ],
                detailsEn: [
                    "You pranked a corrupt merchant and impressed a guard. Gain 5 XP and an ally in the City Watch.",
                    "You exposed a corrupt official at a party. Gain 5 XP and access to confidential local government information.",
                    "You fooled an arrogant noble and won their servants' favor. Gain 5 XP and an informant in a noble residence.",
                    "You convinced a watch captain to join a bet. Gain 5 XP and a permit to travel around town at night.",
                    "You stole a magistrate's documents as a prank. Gain 5 XP and compromising evidence against an important figure.",
                    "You staged a fake ceremony to mock an influential criminal. Gain 5 XP and a City Watch contact who can help once."
                ]
            },
            {
                pt: "Você derrotou um nobre em uma disputa de bebida com apostas altas.", en: "You defeated a noble in a highly wagered drinking contest.", benefitPt: "Ganhe 5 XP e um favor devido pelo nobre.", benefitEn: "Gain 5 XP and a favor owed by the noble.",
                eventPt: "Uma aposta memorável", eventEn: "A memorable wager", subtitlePt: "Fortuna e tesouros", subtitleEn: "Fortune and treasure",
                detailsPt: [
                    "Você venceu um nobre em uma competição de bebida. Ganhe 5 XP e um item da tabela de tesouros 80–100.",
                    "Você venceu um aristocrata em uma partida de cartas. Ganhe 5 XP e 250 PO.",
                    "Você venceu um nobre em uma competição de equitação. Ganhe 5 XP e um cavalo de qualidade.",
                    "Você apostou que roubaria o anel de um aristocrata sem ser percebido. Ganhe 5 XP e um anel mágico menor.",
                    "Você venceu um nobre em uma disputa de esgrima. Ganhe 5 XP e uma arma de qualidade superior.",
                    "Você derrotou um aristocrata em uma competição de histórias. Ganhe 5 XP e um favor devido por um nobre influente."
                ],
                detailsEn: [
                    "You beat a noble in a drinking contest. Gain 5 XP and an item from the 80–100 treasure table.",
                    "You won a card game against an aristocrat. Gain 5 XP and 250 gp.",
                    "You won a horseback riding contest against a noble. Gain 5 XP and a fine horse.",
                    "You bet you could steal an aristocrat's ring unnoticed. Gain 5 XP and a minor magic ring.",
                    "You won a fencing match against a noble. Gain 5 XP and a superior-quality weapon.",
                    "You beat an aristocrat in a storytelling contest. Gain 5 XP and a favor owed by an influential noble."
                ]
            },
            {
                pt: "Você realizou um assalto imprudente dentro da torre de um feiticeiro.", en: "You pulled off an ill-advised heist inside a feared sorcerer's tower.", benefitPt: "Ganhe 6 XP e um item da tabela de tesouros 80–100, se escapar.", benefitEn: "Gain 6 XP and an 80–100 treasure-table item, if you escape.",
                eventPt: "Uma aventura desastrosa", eventEn: "A disastrous adventure", subtitlePt: "Aventuras e grandes recompensas", subtitleEn: "Adventures and great rewards",
                detailsPt: [
                    "Você invadiu a torre de um feiticeiro e escapou com um objeto valioso. Ganhe 6 XP e um item da tabela de tesouros 80–100.",
                    "Você participou do roubo de uma carruagem de mercadorias. Ganhe 6 XP e 500 PO.",
                    "Você explorou uma cripta e encontrou um artefato antigo. Ganhe 6 XP e um item mágico definido pelo mestre.",
                    "Você descobriu um esconderijo de contrabandistas. Ganhe 6 XP e um esconderijo secreto que poderá usar uma vez.",
                    "Você roubou o mapa de uma expedição perdida. Ganhe 6 XP e a localização de uma masmorra desconhecida.",
                    "Você invadiu uma mansão amaldiçoada e encontrou um tesouro escondido. Ganhe 6 XP e um item da tabela de tesouros 80–100."
                ],
                detailsEn: [
                    "You broke into a sorcerer's tower and escaped with a valuable object. Gain 6 XP and an item from the 80–100 treasure table.",
                    "You took part in a heist of a merchant wagon. Gain 6 XP and 500 gp.",
                    "You explored a crypt and found an ancient artifact. Gain 6 XP and a magic item chosen by the GM.",
                    "You found a smugglers' hideout. Gain 6 XP and a secret hideout you can use once.",
                    "You stole a map from a lost expedition. Gain 6 XP and the location of an unknown dungeon.",
                    "You broke into a haunted manor and found hidden treasure. Gain 6 XP and an item from the 80–100 treasure table."
                ]
            },
            {
                pt: "Você desperta no fundo da fortaleza do governante local, segurando uma relíquia de família inestimável. Passos se aproximam.", en: "You wake deep inside the local ruler's stronghold, holding a priceless family heirloom. Footsteps approach.", benefitPt: "Ganhe 6 XP e um item da tabela de tesouros 90–100, se escapar.", benefitEn: "Gain 6 XP and a 90–100 treasure-table item, if you escape.",
                eventPt: "Onde diabos você está?", eventEn: "Where the hell are you?", subtitlePt: "Risco extremo e recompensas extraordinárias", subtitleEn: "Extreme risk and extraordinary rewards",
                detailsPt: [
                    "Você acorda no cofre de um castelo, segurando uma coroa antiga. Guardas se aproximam. Ganhe 6 XP e um item da tabela de tesouros 90–100, se escapar.",
                    "Você desperta em uma masmorra, acorrentado ao lado de um baú real. Ganhe 6 XP, 500 PO e um item da tabela de tesouros 90–100, se escapar.",
                    "Você acorda nos aposentos de um senhor da guerra, segurando seu cetro. Ganhe 6 XP e um artefato mágico, se escapar.",
                    "Você desperta no meio de um ritual de invocação demoníaca. Ganhe 6 XP e aprenda um segredo mágico proibido, se escapar.",
                    "Você acorda em uma fortaleza sitiada, ao lado de um general inimigo ferido. Ganhe 6 XP e um poderoso aliado militar, se escapar.",
                    "Você desperta no tesouro de um dragão, cercado por moedas e objetos preciosos. A criatura está voltando. Ganhe 6 XP, um item da tabela de tesouros 90–100 e 1d4 × 100 PO, se escapar."
                ],
                detailsEn: [
                    "You wake in a castle vault holding an ancient crown. Guards approach. Gain 6 XP and an item from the 90–100 treasure table, if you escape.",
                    "You wake in a dungeon, chained beside a royal chest. Gain 6 XP, 500 gp, and an item from the 90–100 treasure table, if you escape.",
                    "You wake in a warlord's chambers holding their scepter. Gain 6 XP and a magic artifact, if you escape.",
                    "You wake in the middle of a demonic summoning ritual. Gain 6 XP and learn a forbidden magical secret, if you escape.",
                    "You wake in a besieged fortress beside a wounded enemy general. Gain 6 XP and a powerful military ally, if you escape.",
                    "You wake in a dragon's hoard amid coins and valuables. The creature is returning. Gain 6 XP, an item from the 90–100 treasure table, and 1d4 × 100 gp, if you escape."
                ]
            }
        ]
    };
})();
