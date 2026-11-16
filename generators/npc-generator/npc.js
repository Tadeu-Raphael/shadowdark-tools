(function () {
    "use strict";
    const D = window.NPC_DATA, $ = (id) => document.getElementById(id);
    let lang = localStorage.getItem("shadowdark-tools-lang") || (navigator.language.startsWith("pt") ? "pt-BR" : "en");
    if (lang !== "en") lang = "pt-BR";
    let records = [];
    const t = {
        "pt-BR": { home:"Início",generators:"Geradores",about:"Sobre",eyebrow:"MESTRE",title:"Gerador de NPCs",intro:"Gere personagens memoráveis ou um grupo de exploradores rivais com as tabelas do livro.",mode:"Tipo de geração",npc:"NPC comum",rival:"Rival ou grupo de rivais",format:"Formato",single:"Rival individual",party:"Grupo de rivais",count:"Quantidade",nameStyle:"Estilo do nome",ancestryNames:"Por ancestralidade",syllableNames:"Sílabas aleatórias",generateNpc:"Gerar NPC",generateRival:"Gerar rival",generateParty:"Gerar grupo rival",noteNpc:"Os NPCs comuns recebem ancestralidade, idade, tendência, riqueza, ocupação e três características aleatórias.",noteSingle:"Gere um explorador rival com ancestralidade, classe, nível, tendência e riqueza.",noteParty:"O grupo tem 1d4 + 1 integrantes, todos com a mesma tendência. Cada rival começa no nível 1d6.",results:"Resultados",copy:"Copiar",download:"Baixar TXT",empty:"Escolha um tipo e gere NPCs para começar.",reference:"Consultar tabelas",source:"Tabelas de NPCs adaptadas do Livro de Regras de Shadowdark, páginas 124–129.",normal:"NPC comum",rivalLabel:"Rival",group:"Grupo rival",age:"Idade",alignment:"Tendência",wealth:"Riqueza",occupation:"Ocupação",appearance:"Aparência",does:"Faz",secret:"Segredo",qualities:"Características",class:"Classe",level:"Nível inicial",members:"Integrantes",renown:"Reputação do grupo",partySecret:"Segredo do grupo",partyWealth:"Riqueza do grupo",partyName:"Nome do grupo",known:"Conhecidos por",tactic:"Tática característica",ancestryTable:"Ancestralidade",ageTable:"Idade",alignmentTable:"Tendência",partyAlignmentTable:"Tendência do grupo rival",wealthTable:"Riqueza",qualityTable:"Características de NPC",occupationTable:"Ocupação",rivalClassTable:"Classe de rival",renownTable:"Reputação do grupo",secretTable:"Segredo do grupo",partyWealthTable:"Riqueza do grupo",partyNameTable:"Nome do grupo",tacticTable:"Táticas características",nameTable:"Nomes por ancestralidade",syllableTable:"Nomes por sílaba",identifierTable:"Identificador",appearanceCol:"Aparência",doesCol:"Faz",secretCol:"Segredo",nameCol:"Nome",forCol:"Conhecidos por",dwarf:"Anão",elf:"Elfo",goblin:"Goblin",halfling:"Halfling",halfOrc:"Meio-orc",human:"Humano",prefix:"Prefixo",syllable2:"Sílaba 2",syllable3:"Sílaba 3",suffix:"Sufixo",lawful:"Ordeiro",neutral:"Neutro",chaotic:"Caótico",copied:"Copiado!",footer:"Shadowdark Tools · Gerador de NPCs" },
        en: { home:"Home",generators:"Generators",about:"About",eyebrow:"GM",title:"NPC Generator",intro:"Create memorable characters or a rival adventuring party using the book's tables.",mode:"Generation type",npc:"Regular NPC",rival:"Rival or rival party",format:"Format",single:"Single rival",party:"Rival party",count:"Quantity",nameStyle:"Name style",ancestryNames:"By ancestry",syllableNames:"Random syllables",generateNpc:"Generate NPC",generateRival:"Generate rival",generateParty:"Generate party",noteNpc:"Regular NPCs get ancestry, age, alignment, wealth, occupation, and three random qualities.",noteSingle:"Create a rival crawler with ancestry, class, level, alignment, and wealth.",noteParty:"The party has 1d4 + 1 members, all with the same alignment. Each rival starts at level 1d6.",results:"Results",copy:"Copy",download:"Download TXT",empty:"Choose a type and generate NPCs to begin.",reference:"Consult tables",source:"NPC tables adapted from the Shadowdark Rulebook, pages 124–129.",normal:"Regular NPC",rivalLabel:"Rival",group:"Rival party",age:"Age",alignment:"Alignment",wealth:"Wealth",occupation:"Occupation",appearance:"Appearance",does:"Does",secret:"Secret",qualities:"Qualities",class:"Class",level:"Starting level",members:"Members",renown:"Party renown",partySecret:"Party secret",partyWealth:"Party wealth",partyName:"Party name",known:"Known for",tactic:"Signature tactic",ancestryTable:"Ancestry",ageTable:"Age",alignmentTable:"Alignment",partyAlignmentTable:"Rival party alignment",wealthTable:"Wealth",qualityTable:"NPC qualities",occupationTable:"Occupation",rivalClassTable:"Rival class",renownTable:"Party renown",secretTable:"Party secret",partyWealthTable:"Party wealth",partyNameTable:"Party name",tacticTable:"Signature tactics",nameTable:"NPC names by ancestry",syllableTable:"NPC names by syllable",identifierTable:"Identifier",appearanceCol:"Appearance",doesCol:"Does",secretCol:"Secret",nameCol:"Name",forCol:"Known for",dwarf:"Dwarf",elf:"Elf",goblin:"Goblin",halfling:"Halfling",halfOrc:"Half-orc",human:"Human",prefix:"Prefix",syllable2:"Syllable 2",syllable3:"Syllable 3",suffix:"Suffix",lawful:"Lawful",neutral:"Neutral",chaotic:"Chaotic",copied:"Copied!",footer:"Shadowdark Tools · NPC Generator" }
    };
    const tr = () => t[lang]; const choose = (a, i) => a[i][lang === "en" ? 0 : 1];
    const dice = (s) => Math.floor(Math.random() * s) + 1;
    function set(id, value) { const e=$(id); if(e)e.textContent=value; }
    function localize() {
        const x=tr();
        ["nav-home","nav-generators","nav-about"].forEach((id,i)=>set(id,[x.home,x.generators,x.about][i]));
        set("eyebrow",x.eyebrow);set("title",x.title);set("intro",x.intro);set("mode-label",x.mode);set("count-label",x.count);set("name-style-label",x.nameStyle);set("rival-type-label",x.format);set("results-title",x.results);set("copy",x.copy);set("download",x.download);set("reference-title",x.reference);set("source",x.source);set("footer-caption",x.footer);
        const mode=$("mode"), rt=$("rival-type"), ns=$("name-style"); mode.options[0].text=x.npc;mode.options[1].text=x.rival;rt.options[0].text=x.single;rt.options[1].text=x.party;ns.options[0].text=x.ancestryNames;ns.options[1].text=x.syllableNames;
        $("footer-credit").innerHTML=lang==="en"?'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>':'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>';
        $("footer-subcredit").innerHTML=lang==="en"?'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.':'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.';
        document.documentElement.lang=lang;document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang?"true":"false"));updateMode();renderReferences();renderResults();
    }
    function updateMode() {
        const mode=$("mode").value, party=mode==="rival"&&$("rival-type").value==="party";
        $("rival-type-wrap").hidden=mode!=="rival";$("name-style-wrap").hidden=party;set("generate-label",mode==="npc"?tr().generateNpc:(party?tr().generateParty:tr().generateRival));
        set("rule-note",mode==="npc"?tr().noteNpc:(party?tr().noteParty:tr().noteSingle));
    }
    const ancestryIndex = [5,1,0,3,4,2];
    function npcName(ancestry, nameRoll, style, idRoll) {
        const category=ancestry<4?0:(ancestry<6?1:(ancestry<8?2:(ancestry<10?3:(ancestry===10?4:5))));
        const species=ancestryIndex[category];
        if(style==="syllable") { const s=D.syllables; return s[nameRoll[0]][0]+s[nameRoll[1]][1]+s[nameRoll[2]][2]+s[nameRoll[3]][3]; }
        return D.names[nameRoll[0]][species];
    }
    function genNpc(rival=false) {
        const a=dice(12)-1, nameRoll=$("name-style").value==="syllable"?Array.from({length:4},()=>dice(20)-1):[dice(20)-1];
        return {type:rival?"single":"npc",a,nameRoll,style:$("name-style").value,id:[dice(4)-1,dice(4)-1],age:dice(8)-1,align:dice(6)-1,wealth:dice(6)-1,occupation:[dice(4)-1,dice(4)-1],qualities:[dice(20)-1,dice(20)-1,dice(20)-1],cls:dice(4)-1,level:dice(6)};
    }
    function genParty() {
        const members=dice(4)+1,align=dice(6)-1,party={type:"party",members,align,renown:dice(6)-1,secret:dice(6)+dice(6),wealth:dice(6)-1,name:dice(20)-1,known:dice(20)-1,tactic:[dice(4)-1,dice(4)-1],crawlers:[]};
        for(let i=0;i<members;i++) party.crawlers.push({a:dice(12)-1,cls:dice(4)-1,level:dice(6),nameRoll:$("name-style").value==="syllable"?Array.from({length:4},()=>dice(20)-1):[dice(20)-1],style:$("name-style").value,id:[dice(4)-1,dice(4)-1]});
        return party;
    }
    function nameFor(o) { let n=npcName(o.a,o.nameRoll,o.style,o.id); n+=` ${lang==="en"?D.identifiers[o.id[0]][o.id[1]]:D.identifierPt[o.id[0]][o.id[1]]}`; return n; }
    function ancestryFor(a) { const ranges=[[0,1,2,3],[4,5],[6,7],[8,9],[10],[11]]; const type=ranges.findIndex(r=>r.includes(a));return choose(D.ancestry,type); }
    function ageFor(a) { if(a===0)return choose(D.age,0);if(a===1)return choose(D.age,1);if(a<=3)return choose(D.age,2);if(a<=5)return choose(D.age,3);if(a===6)return choose(D.age,4);return choose(D.age,5); }
    function alignmentFor(a) { return choose(D.alignment,a<=2?0:(a===3?1:2)); }
    function partyAlignmentFor(a) { return choose(D.alignment,a<=1?0:(a<=3?1:2)); }
    function wealthFor(a) { return choose(D.wealth,a===0?0:(a<=2?1:(a<=4?2:3))); }
    function partyWealthFor(a) { return choose(D.wealth,a===0?0:(a<=3?1:(a===4?2:3))); }
    function rivalAncestry(a) { const index=a<4?0:(a<6?1:(a<8?2:(a<10?3:(a===10?4:5))));return choose(D.ancestry,index); }
    function table(title, headers, rows) { const wrap=document.createElement("section");wrap.className="npc-reference__table";const h=document.createElement("h3");h.textContent=title;wrap.appendChild(h);const tbl=document.createElement("table"),thead=document.createElement("thead"),hr=document.createElement("tr");headers.forEach(v=>{const th=document.createElement("th");th.textContent=v;hr.appendChild(th);});thead.appendChild(hr);tbl.appendChild(thead);const body=document.createElement("tbody");rows.forEach(row=>{const rr=document.createElement("tr");row.forEach(c=>{const td=document.createElement("td");td.textContent=c;rr.appendChild(td);});body.appendChild(rr);});tbl.appendChild(body);wrap.appendChild(tbl);return wrap; }
    function renderReferences() {
        const x=tr(), host=$("reference-grid");host.innerHTML="";
        host.append(table(x.ancestryTable,["d12",x.ancestryTable],[["1–4",choose(D.ancestry,0)],["5–6",choose(D.ancestry,1)],["7–8",choose(D.ancestry,2)],["9–10",choose(D.ancestry,3)],["11",choose(D.ancestry,4)],["12",choose(D.ancestry,5)]]));
        host.append(table(x.ageTable,["d8",x.age],[["1",choose(D.age,0)],["2",choose(D.age,1)],["3–4",choose(D.age,2)],["5–6",choose(D.age,3)],["7",choose(D.age,4)],["8",choose(D.age,5)]]));
        host.append(table(x.alignmentTable,["d6",x.alignment],[["1–3",choose(D.alignment,0)],["4",choose(D.alignment,1)],["5–6",choose(D.alignment,2)]]));
        host.append(table(x.partyAlignmentTable,["d6",x.alignment],[["1–2",choose(D.alignment,0)],["3–4",choose(D.alignment,1)],["5–6",choose(D.alignment,2)]]));
        host.append(table(x.wealthTable,["d6",x.wealth],[["1",choose(D.wealth,0)],["2–3",choose(D.wealth,1)],["4–5",choose(D.wealth,2)],["6",choose(D.wealth,3)]]));
        host.append(table(x.qualityTable,["d20",x.appearanceCol,x.doesCol,x.secretCol],D.quality.map((r,i)=>[String(i+1),r[lang==="en"?0:1],r[lang==="en"?2:3],r[lang==="en"?4:5]])));
        host.append(table(x.occupationTable,["d4, d4","1","2","3","4"],D.occupations.map((r,i)=>[String(i+1),...r.map(c=>c[lang==="en"?0:1])] )));
        host.append(table(x.nameTable,["d20",x.dwarf,x.elf,x.goblin,x.halfling,x.halfOrc,x.human],D.names.map((r,i)=>[String(i+1),...r])));
        host.append(table(x.syllableTable,["d20",x.prefix,x.syllable2,x.syllable3,x.suffix],D.syllables.map((r,i)=>[String(i+1),...r])));
        host.append(table(x.identifierTable,["d4, d4","1","2","3","4"],D.identifiers.map((r,i)=>[String(i+1),...(lang==="en"?r:D.identifierPt[i])])));
        host.append(table(x.rivalClassTable,["d4",x.class],D.rivalClass.map((r,i)=>[String(i+1),r[lang==="en"?0:1]])));
        host.append(table(x.renownTable,["d6",x.renown],[["1",D.renown[0][lang==="en"?0:1]],["2–3",D.renown[1][lang==="en"?0:1]],["4–5",D.renown[2][lang==="en"?0:1]],["6",D.renown[3][lang==="en"?0:1]]]));
        host.append(table(x.secretTable,["2d6",x.partySecret],[["2",D.rivalSecret[0][lang==="en"?0:1]],["3–4",D.rivalSecret[1][lang==="en"?0:1]],["5–6",D.rivalSecret[2][lang==="en"?0:1]],["7–8",D.rivalSecret[3][lang==="en"?0:1]],["9–11",D.rivalSecret[4][lang==="en"?0:1]],["12",D.rivalSecret[5][lang==="en"?0:1]]]));
        host.append(table(x.partyWealthTable,["d6",x.partyWealth],[["1",choose(D.wealth,0)],["2–4",choose(D.wealth,1)],["5",choose(D.wealth,2)],["6",choose(D.wealth,3)]]));
        host.append(table(x.partyNameTable,["d20",x.partyName,x.partyName,x.forCol],D.partyFirst.map((f,i)=>[String(i+1),f[lang==="en"?0:1],D.partySecond[i][lang==="en"?0:1],D.partyKnown[i][lang==="en"?0:1]])));
        host.append(table(x.tacticTable,["d4",x.lawful,x.neutral,x.chaotic],D.tactics.map((r,i)=>[String(i+1),...r.map(c=>c[lang==="en"?0:1])] )));
    }
    function addField(card,label,value) { const h=document.createElement("h4");h.textContent=label;const p=document.createElement("p");p.textContent=value;card.append(h,p); }
    function renderNpc(o,index) {
        const x=tr(), card=document.createElement("article");card.className="npc-result";const h=document.createElement("h3");h.textContent=`${index+1}. ${o.type==="npc"?x.normal:x.rivalLabel}: ${nameFor(o)}`;card.appendChild(h);
        addField(card,x.ancestryTable,ancestryFor(o.a));
        if(o.type==="npc") {
            addField(card,x.age,ageFor(o.age));addField(card,x.alignment,alignmentFor(o.align));addField(card,x.wealth,wealthFor(o.wealth));addField(card,x.occupation,D.occupations[o.occupation[0]][o.occupation[1]][lang==="en"?0:1]);
            const q=document.createElement("h4");q.textContent=x.qualities;card.appendChild(q);const ul=document.createElement("ul");o.qualities.forEach(i=>{const li=document.createElement("li");const r=D.quality[i];li.textContent=`${r[lang==="en"?0:1]} · ${r[lang==="en"?2:3]} · ${r[lang==="en"?4:5]}`;ul.appendChild(li);});card.appendChild(ul);
        } else { addField(card,x.class,D.rivalClass[o.cls][lang==="en"?0:1]);addField(card,x.level,String(o.level));addField(card,x.alignment,partyAlignmentFor(o.align));addField(card,x.wealth,partyWealthFor(o.wealth)); }
        const small=document.createElement("small");small.textContent=`d12 ${o.a+1} · d20 ${o.nameRoll.map(n=>n+1).join("/")}`;card.appendChild(small);return card;
    }
    function renderParty(o,index) {
        const x=tr(),card=document.createElement("article");card.className="npc-result";const h=document.createElement("h3");const first=D.partyFirst[o.name][lang==="en"?0:1],second=D.partySecond[o.name][lang==="en"?0:1];const partyName=lang==="en"?`${first} ${second}`:([2,6].includes(o.name)?`Lua ${o.name===2?"Gelada":"Flamejante"}`:`${second} ${first}`);h.textContent=`${index+1}. ${x.group}: ${partyName}`;card.appendChild(h);
        addField(card,x.known,D.partyKnown[o.known][lang==="en"?0:1]);addField(card,x.alignment,partyAlignmentFor(o.align));addField(card,x.renown,D.renown[o.renown===0?0:(o.renown<=2?1:(o.renown<=4?2:3))][lang==="en"?0:1]);addField(card,x.partySecret,D.rivalSecret[o.secret<=2?0:(o.secret<=4?1:(o.secret<=6?2:(o.secret<=8?3:(o.secret<=11?4:5))) )][lang==="en"?0:1]);addField(card,x.partyWealth,partyWealthFor(o.wealth));
        const tacticColumn=o.align<=1?0:(o.align<=3?1:2);addField(card,x.tactic,D.tactics[o.tactic[0]][tacticColumn][lang==="en"?0:1]);
        const mh=document.createElement("h4");mh.textContent=`${x.members} (${o.members})`;card.appendChild(mh);const ul=document.createElement("ul");o.crawlers.forEach(m=>{const li=document.createElement("li");li.textContent=`${nameFor(m)} — ${rivalAncestry(m.a)}, ${D.rivalClass[m.cls][lang==="en"?0:1]}, ${x.level.toLowerCase()} ${m.level}`;ul.appendChild(li);});card.appendChild(ul);return card;
    }
    function renderResults() { const host=$("results");host.innerHTML="";if(!records.length){const e=document.createElement("div");e.className="npc-empty";e.textContent=tr().empty;host.appendChild(e);return;}records.forEach((o,i)=>host.appendChild(o.type==="party"?renderParty(o,i):renderNpc(o,i))); }
    function plainText() { return Array.from($("results").querySelectorAll(".npc-result")).map(e=>e.innerText).join("\n\n"); }
    $("mode").addEventListener("change",updateMode);$("rival-type").addEventListener("change",updateMode);
    $("generate").addEventListener("click",()=>{const n=Math.max(1,Math.min(10,Number.parseInt($("count").value,10)||1)),mode=$("mode").value,party=mode==="rival"&&$("rival-type").value==="party";records=Array.from({length:n},()=>party?genParty():genNpc(mode==="rival"));$("copy").disabled=$("download").disabled=false;renderResults();});
    $("copy").addEventListener("click",async()=>{await navigator.clipboard.writeText(plainText());const b=$("copy");b.textContent=tr().copied;setTimeout(()=>b.textContent=tr().copy,1300);});
    $("download").addEventListener("click",()=>{const a=document.createElement("a"),url=URL.createObjectURL(new Blob([plainText()],{type:"text/plain;charset=utf-8"}));a.href=url;a.download="shadowdark-npcs.txt";a.click();URL.revokeObjectURL(url);});
    document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;localStorage.setItem("shadowdark-tools-lang",lang);localize();}));
    localize();
})();
