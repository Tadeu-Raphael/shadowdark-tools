(function () {
    "use strict";
    const D=window.DUNGEON_DATA,$=id=>document.getElementById(id);
    let lang=localStorage.getItem("shadowdark-tools-lang")||(navigator.language.startsWith("pt")?"pt-BR":"en");if(lang!=="en")lang="pt-BR";
    let dungeons=[];
    const I={
        "pt-BR":{home:"Início",generators:"Geradores",about:"Sobre",eyebrow:"MESTRE",title:"Gerador de Mapas de Masmorras",intro:"Gere salas, perigos e tesouros; o mapa esquemático mostra conexões e destaca o objetivo.",size:"Tamanho do local",type:"Tipo do local",danger:"Nível de perigo",count:"Quantidade",random:"Aleatório (d6)",small:"Pequena",medium:"Média",large:"Grande",cave:"Caverna",tomb:"Tumba",tunnels:"Túneis profundos",ruins:"Ruínas",unsafe:"Inseguro",risky:"Arriscado",deadly:"Letal",rollDanger:"Rolar d6",generate:"Gerar mapa",guide:"Escolha ou role o tamanho e o tipo do local. Cada dado d10 representa uma sala; o resultado também determina seu conteúdo. O mapa esquemático conecta as salas em uma rota explorável.",objectiveNote:"A sala com o maior resultado na rolagem de tipo de sala contém o objetivo ou o monstro-chefe.",chaosNote:"Nível de perigo",results:"Mapas gerados",copy:"Copiar",download:"Baixar TXT",empty:"Escolha as opções e gere uma masmorra.",reference:"Consultar tabelas",source:"Tabelas de mapas de masmorras adaptadas do Livro de Regras de Shadowdark, páginas 130–131.",dungeon:"Masmorra",siteSize:"Tamanho",siteType:"Tipo de local",dangerLevel:"Perigo geral",rooms:"Salas",objective:"Objetivo",room:"Sala",roomType:"Tipo de sala",roomRoll:"Rolagem d10",details:"Detalhes",objectiveRoom:"Objetivo / monstro-chefe",sizeTable:"Tamanho do local",typeTable:"Tipo de local",roomTable:"Tipo de sala",dangerTable:"Nível de perigo",trapTable:"Armadilha",mobTable:"Grupo de monstros",minorTable:"Perigo menor",majorTable:"Perigo maior",soloTable:"Monstro solitário",treasureTable:"Tesouro",npcTable:"NPC",bossTable:"Monstro-chefe",detail:"Detalhe",detail1:"Detalhe 1",detail2:"Detalhe 2",dice:"Dados",feature:"Característica",level:"Nível",caveStyle:"As salas têm contornos irregulares, próprios de uma caverna.",tombStyle:"As salas formam câmaras fechadas de uma tumba.",tunnelStyle:"As salas seguem túneis estreitos e profundos.",ruinsStyle:"As salas representam estruturas quebradas em ruínas.",copied:"Copiado!",footer:"Shadowdark Tools · Gerador de Masmorras"},
        en:{home:"Home",generators:"Generators",about:"About",eyebrow:"GM",title:"Dungeon Map Generator",intro:"Generate rooms, hazards, and treasure; the schematic map shows connections and highlights the objective.",size:"Site size",type:"Site type",danger:"Danger level",count:"Quantity",random:"Random (d6)",small:"Small",medium:"Medium",large:"Large",cave:"Cave",tomb:"Tomb",tunnels:"Deep tunnels",ruins:"Ruins",unsafe:"Unsafe",risky:"Risky",deadly:"Deadly",rollDanger:"Roll d6",generate:"Generate map",guide:"Roll or choose the site size and type. Each d10 represents a room; its result also determines the room's contents. The schematic map connects the rooms into an explorable route.",objectiveNote:"The room with the highest room type roll contains the objective or boss monster.",chaosNote:"Danger level",results:"Generated maps",copy:"Copy",download:"Download TXT",empty:"Choose options and generate a dungeon.",reference:"Consult tables",source:"Dungeon map tables adapted from the Shadowdark Rulebook, pages 130–131.",dungeon:"Dungeon",siteSize:"Size",siteType:"Site type",dangerLevel:"Overall danger",rooms:"Rooms",objective:"Objective",room:"Room",roomType:"Room type",roomRoll:"d10 roll",details:"Details",objectiveRoom:"Objective / boss monster",sizeTable:"Site size",typeTable:"Site type",roomTable:"Room type",dangerTable:"Danger level",trapTable:"Trap",mobTable:"Monster mob",minorTable:"Minor hazard",majorTable:"Major hazard",soloTable:"Solo monster",treasureTable:"Treasure",npcTable:"NPC",bossTable:"Boss monster",detail:"Detail",detail1:"Detail 1",detail2:"Detail 2",dice:"Dice",feature:"Feature",level:"Level",caveStyle:"Rooms have irregular outlines like a cave system.",tombStyle:"Rooms form enclosed tomb chambers.",tunnelStyle:"Rooms follow narrow, deep tunnels.",ruinsStyle:"Rooms represent broken structures in ruins.",copied:"Copied!",footer:"Shadowdark Tools · Dungeon Generator"}
    };
    const t=()=>I[lang],v=pair=>pair[lang==="en"?0:1],roll=n=>Math.floor(Math.random()*n)+1;
    function set(id,text){const e=$(id);if(e)e.textContent=text;}
    function localize(){const x=t();["nav-home","nav-generators","nav-about"].forEach((id,i)=>set(id,[x.home,x.generators,x.about][i]));set("eyebrow",x.eyebrow);set("title",x.title);set("intro",x.intro);set("size-label",x.size);set("type-label",x.type);set("danger-label",x.danger);set("count-label",x.count);set("generate-label",x.generate);set("results-title",x.results);set("copy",x.copy);set("download",x.download);set("reference-title",x.reference);set("source",x.source);set("footer-caption",x.footer);
        const sizes=$("size");sizes.options[0].text=x.random;sizes.options[1].text=`${x.small} · 5d10`;sizes.options[2].text=`${x.medium} · 8d10`;sizes.options[3].text=`${x.large} · 12d10`;const types=$("site-type");types.options[0].text=x.random;types.options[1].text=x.cave;types.options[2].text=x.tomb;types.options[3].text=x.tunnels;types.options[4].text=x.ruins;const dangers=$("danger");dangers.options[0].text=x.rollDanger;dangers.options[1].text=x.unsafe;dangers.options[2].text=x.risky;dangers.options[3].text=x.deadly;
        $("footer-credit").innerHTML=lang==="en"?'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>':'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>';
        $("footer-subcredit").innerHTML=lang==="en"?'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.':'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.';document.documentElement.lang=lang;document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang?"true":"false"));renderGuide();renderRefs();renderResults();}
    function renderGuide(){const guide=$("guide");guide.innerHTML="";const p=document.createElement("p");p.textContent=t().guide;guide.appendChild(p);const tip=document.createElement("p");tip.textContent=t().objectiveNote;guide.appendChild(tip);}
    function mapIndexFromRoll(value){return value===1?0:(value===2?1:(value<=4?2:(value===5?3:4)));}
    function rollSize(){const picked=$("size").value;if(picked!=="random")return {index:Number(picked),roll:null};const r=roll(6);return {index:r<=2?0:(r<=5?1:2),roll:r};}
    function rollType(){const picked=$("site-type").value;if(picked!=="random")return {index:Number(picked),roll:null};const r=roll(6);return {index:r<=2?0:(r===3?1:(r===4?2:3)),roll:r};}
    function rollDanger(){const picked=$("danger").value;if(picked!=="random")return {index:Number(picked),roll:null};const r=roll(6);return {index:r<=3?0:(r<=5?1:2),roll:r};}
    function featureForRoom(roomRoll){if(roomRoll<=2)return {kind:"empty",detail:null};if(roomRoll===3)return {kind:"trap",detailRoll:roll(6)};if(roomRoll===4)return {kind:"minorHazard",detailRoll:roll(6)};if(roomRoll===5)return {kind:"solo",detailRoll:roll(6)};if(roomRoll===6)return {kind:"npc",detailRoll:roll(6)};if(roomRoll===7)return {kind:"mob",detailRoll:roll(6)};if(roomRoll===8)return {kind:"majorHazard",detailRoll:roll(6)};if(roomRoll===9)return {kind:"treasure",detailRoll:roll(6)};return {kind:"boss",detailRoll:roll(6)};}
    function generateDungeon(){const size=rollSize(),site=rollType(),danger=rollDanger(),count=D.size[size.index][2],rooms=Array.from({length:count},(_,i)=>{const result=roll(10);return {number:i+1,roll:result,kind:result<=2?0:result-2,feature:featureForRoom(result)};});const max=Math.max(...rooms.map(r=>r.roll)),candidates=rooms.filter(r=>r.roll===max),objective=candidates[roll(candidates.length)-1].number-1;const cols=Math.min(4,count),rows=Math.ceil(count/cols),connections=[];for(let i=1;i<count;i++)connections.push([i-1,i]);for(let row=0;row<rows-1;row++){for(let col=0;col<cols;col++){const a=row*cols+(row%2===0?col:cols-1-col),b=(row+1)*cols+((row+1)%2===0?col:cols-1-col);if(a<count&&b<count&&Math.abs(a-b)!==1&&Math.random()<.32)connections.push([a,b]);}}
        return {size,site,danger,rooms,objective,connections};}
    function featureName(room){return v(D.roomTypes[room.kind]);}
    function mappedDetail(list,die,kind){if(kind==="trap")return D.trap[mapIndexFromRoll(die)].map(v);if(kind==="mob")return D.mob[die===1?0:(die<=3?1:(die===4?2:(die===5?3:4)))].filter((x,i)=>i%2===(lang==="en"?0:1));if(kind==="solo")return D.solo[die===1?0:(die<=3?1:(die<=5?2:3))].filter((x,i)=>i%2===(lang==="en"?0:1));if(kind==="minorHazard")return v(D.minorHazard[die===1?0:(die<=3?1:(die===4?2:(die===5?3:4)))]);if(kind==="majorHazard")return v(D.majorHazard[die<=2?0:(die===3?1:(die===4?2:(die===5?3:4)))]);if(kind==="treasure")return v(D.treasure[die<=2?0:(die<=4?1:(die===5?2:3))]);if(kind==="npc")return v(D.npc[die===1?0:(die===2?1:(die<=4?2:3))]);if(kind==="boss")return v(D.boss[die===1?0:(die===2?1:(die<=5?2:3))]);return "";}
    function featureText(room){if(room.feature.kind==="empty")return "";const text=mappedDetail(null,room.feature.detailRoll,room.feature.kind),detail=room.feature.kind==="trap"||room.feature.kind==="mob"||room.feature.kind==="solo"?`${text[0]} · ${text[1]}`:text;return `d6 ${room.feature.detailRoll}: ${detail}`;}
    function svgElement(name,attrs){const el=document.createElementNS("http://www.w3.org/2000/svg",name);Object.entries(attrs).forEach(([k,val])=>el.setAttribute(k,String(val)));return el;}
    function mapSvg(dungeon){const cols=Math.min(4,dungeon.rooms.length),rows=Math.ceil(dungeon.rooms.length/cols),cellW=205,cellH=145,roomW=158,roomH=80,width=cols*cellW+35,height=rows*cellH+35,svg=svgElement("svg",{viewBox:`0 0 ${width} ${height}`,class:`dungeon-map dungeon-map--${["cave","tomb","tunnels","ruins"][dungeon.site.index]}`,role:"img","aria-label":`${v(D.type[dungeon.site.index])} · ${D.size[dungeon.size.index][2]} ${t().rooms.toLowerCase()}`});const coords=dungeon.rooms.map((r,i)=>{const row=Math.floor(i/cols),slot=i%cols,col=row%2===0?slot:cols-1-slot;return {x:22+col*cellW,y:20+row*cellH};});dungeon.connections.forEach(([a,b],index)=>{const x1=coords[a].x+roomW/2,y1=coords[a].y+roomH/2,x2=coords[b].x+roomW/2,y2=coords[b].y+roomH/2;const line=svgElement("line",{x1,y1,x2,y2,class:index>=dungeon.rooms.length-1?"corridor loop":"corridor"});svg.appendChild(line);});dungeon.rooms.forEach((room,i)=>{const p=coords[i],g=svgElement("g",{}),rect=svgElement("rect",{x:p.x,y:p.y,width:roomW,height:roomH,class:`room room--${["cave","tomb","tunnels","ruins"][dungeon.site.index]}${i===dungeon.objective?" room--objective":""}`});g.appendChild(rect);const num=svgElement("text",{x:p.x+roomW/2,y:p.y+22,class:"room-number"});num.textContent=`${room.number} · d10 ${room.roll}`;g.appendChild(num);const label=svgElement("text",{x:p.x+roomW/2,y:p.y+45,class:"room-label"});label.textContent=featureName(room);g.appendChild(label);if(i===dungeon.objective){const objective=svgElement("text",{x:p.x+roomW/2,y:p.y+64,class:"objective-label"});objective.textContent=t().objectiveRoom;g.appendChild(objective);}svg.appendChild(g);});return svg;}
    function node(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;}
    function renderDungeon(d,index){const card=node("article","dungeon-result"),title=node("h3","",`${index+1}. ${t().dungeon}`);card.appendChild(title);const sizeName=v(D.size[d.size.index]),siteName=v(D.type[d.site.index]),dangerName=v(D.danger[d.danger.index]);card.appendChild(node("p","",`${t().siteSize}: ${sizeName} (${D.size[d.size.index][2]}d10${d.size.roll?` · d6 ${d.size.roll}`:""}) · ${t().siteType}: ${siteName}${d.site.roll?` (d6 ${d.site.roll})`:""} · ${t().dangerLevel}: ${dangerName}${d.danger.roll?` (d6 ${d.danger.roll})`:""}`));card.appendChild(mapSvg(d));card.appendChild(node("h4","",t().rooms));const list=node("ol");d.rooms.forEach((room,i)=>{const li=node("li");li.appendChild(document.createTextNode(`${t().room} ${room.number}: ${featureName(room)} (d10 ${room.roll})${i===d.objective?` · ${t().objectiveRoom}`:""}`));const details=featureText(room);if(details)li.appendChild(node("span","dungeon-room-detail",` — ${details}`));list.appendChild(li);});card.appendChild(list);return card;}
    function renderResults(){const host=$("results");host.innerHTML="";if(!dungeons.length){host.appendChild(node("div","dungeon-empty",t().empty));return;}dungeons.forEach((d,i)=>host.appendChild(renderDungeon(d,i)));}
    function plainText(){return Array.from($("results").querySelectorAll(".dungeon-result")).map(c=>c.innerText).join("\n\n");}
    function table(title,headers,rows){const wrap=node("section","dungeon-reference__table"),h=node("h3","",title),tbl=document.createElement("table"),thead=document.createElement("thead"),tr=document.createElement("tr");wrap.appendChild(h);headers.forEach(value=>tr.appendChild(node("th","",value)));thead.appendChild(tr);tbl.appendChild(thead);const body=document.createElement("tbody");rows.forEach(row=>{const r=document.createElement("tr");row.forEach(value=>r.appendChild(node("td","",value)));body.appendChild(r);});tbl.appendChild(body);wrap.appendChild(tbl);return wrap;}
    function refTables() {
        const x = t();
        const host = $("reference-grid");
        host.innerHTML = "";

        host.appendChild(table(x.sizeTable, ["d6", x.type, x.dice], [
            ["1–2", v(D.size[0]), "5d10"], ["3–5", v(D.size[1]), "8d10"], ["6", v(D.size[2]), "12d10"]
        ]));
        host.appendChild(table(x.typeTable, ["d6", x.type], [
            ["1–2", v(D.type[0])], ["3", v(D.type[1])], ["4", v(D.type[2])], ["5–6", v(D.type[3])]
        ]));
        host.appendChild(table(x.roomTable, ["d10", x.feature], [
            ["1–2", v(D.roomTypes[0])], ["3", v(D.roomTypes[1])], ["4", v(D.roomTypes[2])],
            ["5", v(D.roomTypes[3])], ["6", v(D.roomTypes[4])], ["7", v(D.roomTypes[5])],
            ["8", v(D.roomTypes[6])], ["9", v(D.roomTypes[7])], ["10", v(D.roomTypes[8])]
        ]));
        host.appendChild(table(x.dangerTable, ["d6", x.level], [
            ["1–3", v(D.danger[0])], ["4–5", v(D.danger[1])], ["6", v(D.danger[2])]
        ]));
        host.appendChild(table(x.trapTable, ["d6", x.detail1, x.detail2], [
            ["1", ...D.trap[0].map(v)], ["2", ...D.trap[1].map(v)], ["3–4", ...D.trap[2].map(v)],
            ["5", ...D.trap[3].map(v)], ["6", ...D.trap[4].map(v)]
        ]));
        host.appendChild(table(x.mobTable, ["d6", x.detail1, x.detail2], [
            ["1", D.mob[0][lang === "en" ? 0 : 1], D.mob[0][lang === "en" ? 2 : 3]],
            ["2–3", D.mob[1][lang === "en" ? 0 : 1], D.mob[1][lang === "en" ? 2 : 3]],
            ["4", D.mob[2][lang === "en" ? 0 : 1], D.mob[2][lang === "en" ? 2 : 3]],
            ["5", D.mob[3][lang === "en" ? 0 : 1], D.mob[3][lang === "en" ? 2 : 3]],
            ["6", D.mob[4][lang === "en" ? 0 : 1], D.mob[4][lang === "en" ? 2 : 3]]
        ]));
        host.appendChild(table(x.minorTable, ["d6", x.detail], [
            ["1", v(D.minorHazard[0])], ["2–3", v(D.minorHazard[1])], ["4", v(D.minorHazard[2])],
            ["5", v(D.minorHazard[3])], ["6", v(D.minorHazard[4])]
        ]));
        host.appendChild(table(x.majorTable, ["d6", x.detail], [
            ["1–2", v(D.majorHazard[0])], ["3", v(D.majorHazard[1])], ["4", v(D.majorHazard[2])],
            ["5", v(D.majorHazard[3])], ["6", v(D.majorHazard[4])]
        ]));
        host.appendChild(table(x.soloTable, ["d6", x.detail1, x.detail2], [
            ["1", D.solo[0][lang === "en" ? 0 : 1], D.solo[0][lang === "en" ? 2 : 3]],
            ["2–3", D.solo[1][lang === "en" ? 0 : 1], D.solo[1][lang === "en" ? 2 : 3]],
            ["4–5", D.solo[2][lang === "en" ? 0 : 1], D.solo[2][lang === "en" ? 2 : 3]],
            ["6", D.solo[3][lang === "en" ? 0 : 1], D.solo[3][lang === "en" ? 2 : 3]]
        ]));
        host.appendChild(table(x.treasureTable, ["d6", x.detail], [
            ["1–2", v(D.treasure[0])], ["3–4", v(D.treasure[1])], ["5", v(D.treasure[2])], ["6", v(D.treasure[3])]
        ]));
        host.appendChild(table(x.npcTable, ["d6", x.detail], [
            ["1", v(D.npc[0])], ["2", v(D.npc[1])], ["3–4", v(D.npc[2])], ["5–6", v(D.npc[3])]
        ]));
        host.appendChild(table(x.bossTable, ["d6", x.detail], [
            ["1", v(D.boss[0])], ["2", v(D.boss[1])], ["3–5", v(D.boss[2])], ["6", v(D.boss[3])]
        ]));
    }
    $("generate").addEventListener("click",()=>{const count=Math.max(1,Math.min(3,parseInt($("count").value,10)||1));dungeons=Array.from({length:count},generateDungeon);$("copy").disabled=$("download").disabled=false;renderResults();});
    $("copy").addEventListener("click",async()=>{await navigator.clipboard.writeText(plainText());const b=$("copy");b.textContent=t().copied;setTimeout(()=>b.textContent=t().copy,1200);});$("download").addEventListener("click",()=>{const a=document.createElement("a"),url=URL.createObjectURL(new Blob([plainText()],{type:"text/plain;charset=utf-8"}));a.href=url;a.download="shadowdark-dungeon-maps.txt";a.click();URL.revokeObjectURL(url);});
    document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;localStorage.setItem("shadowdark-tools-lang",lang);localize();}));localize();
})();
