(function () {
    "use strict";
    const data = window.ADVENTURE_DATA;
    const $ = (id) => document.getElementById(id);
    let language = localStorage.getItem("shadowdark-tools-lang") || (navigator.language.startsWith("pt") ? "pt-BR" : "en");
    if (language !== "en") language = "pt-BR";
    let generated = [];
    const ui = {
        "pt-BR": { navHome:"Início", navGenerators:"Geradores", navAbout:"Sobre", eyebrow:"MESTRE", title:"Gerador de Aventuras", intro:"Combine três resultados para criar o objetivo, o obstáculo e o local da sua próxima aventura.", count:"Quantidade", generate:"Gerar aventuras", results:"Resultados", copy:"Copiar", download:"Baixar TXT", empty:"Clique em “Gerar aventuras” para combinar as tabelas.", adventureTable:"Tabela do gerador de aventuras (d20)", help:"Use uma ou mais linhas de cada coluna; ajuste as palavras de ligação conforme necessário.", siteTable:"Tabela de nomes de locais (d20)", one:"Detalhe 1", two:"Detalhe 2", three:"Detalhe 3", name1:"Nome 1", name2:"Nome 2", name3:"Nome 3", source:"Tabelas de aventuras adaptadas do Livro de Regras de Shadowdark, páginas 122–123.", purpose:"Aventura", location:"Local", copyDone:"Copiado!", footer:"Shadowdark Tools · Gerador de Aventuras", credit:"Feito por <a href=\"https://github.com/Tadeu-Raphael\" target=\"_blank\" rel=\"noopener\">Tadeu Raphael</a> · Código em <a href=\"https://github.com/Tadeu-Raphael/shadowdark-tools\" target=\"_blank\" rel=\"noopener\">GitHub</a>", subcredit:"Shadowdark RPG é propriedade de <a href=\"https://thearcanelibrary.com/\" target=\"_blank\" rel=\"noopener\">The Arcane Library</a>. Este é um projeto de fã não oficial." },
        en: { navHome:"Home", navGenerators:"Generators", navAbout:"About", eyebrow:"GM", title:"Adventure Generator", intro:"Combine three results to create the goal, obstacle, and location for your next adventure.", count:"Quantity", generate:"Generate adventures", results:"Results", copy:"Copy", download:"Download TXT", empty:"Click “Generate adventures” to combine the tables.", adventureTable:"Adventure generator table (d20)", help:"Use one or more entries from each column; adjust connecting words as needed.", siteTable:"Adventuring site name table (d20)", one:"Detail 1", two:"Detail 2", three:"Detail 3", name1:"Name 1", name2:"Name 2", name3:"Name 3", source:"Adventure tables adapted from the Shadowdark Rulebook, pages 122–123.", purpose:"Adventure", location:"Location", copyDone:"Copied!", footer:"Shadowdark Tools · Adventure Generator", credit:"Made by <a href=\"https://github.com/Tadeu-Raphael\" target=\"_blank\" rel=\"noopener\">Tadeu Raphael</a> · Code on <a href=\"https://github.com/Tadeu-Raphael/shadowdark-tools\" target=\"_blank\" rel=\"noopener\">GitHub</a>", subcredit:"Shadowdark RPG is property of <a href=\"https://thearcanelibrary.com/\" target=\"_blank\" rel=\"noopener\">The Arcane Library</a>. This is an unofficial fan project." }
    };
    const val = (row) => row[language === "en" ? 0 : 1];
    function setText(id, value) { const el = $(id); if (el) el.textContent = value; }
    function localize() {
        const t = ui[language];
        ["nav-home", "nav-generators", "nav-about"].forEach((id, i) => setText(id, [t.navHome,t.navGenerators,t.navAbout][i]));
        setText("eyebrow", t.eyebrow); setText("title", t.title); setText("intro", t.intro); setText("results-title", t.results); setText("generate-label", t.generate); setText("empty", t.empty); setText("source", t.source); setText("footer-caption", t.footer);
        setText("count-label", t.count); setText("copy", t.copy); setText("download", t.download); setText("adventure-table-title", t.adventureTable); setText("adventure-help", t.help); setText("site-table-title", t.siteTable);
        setText("col-one", t.one); setText("col-two", t.two); setText("col-three", t.three); setText("name-one", t.name1); setText("name-two", t.name2); setText("name-three", t.name3);
        $("footer-credit").innerHTML = t.credit; $("footer-subcredit").innerHTML = t.subcredit; document.documentElement.lang = language;
        document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === language ? "true" : "false"));
        renderTables(); renderResults();
    }
    function renderTable(id, tables) {
        const body = $(id); body.innerHTML = "";
        for (let i = 0; i < 20; i++) {
            const tr = document.createElement("tr"); const roll = document.createElement("td"); roll.textContent = i + 1; tr.appendChild(roll);
            tables.forEach((table) => { const td = document.createElement("td"); td.textContent = val(table[i]); tr.appendChild(td); }); body.appendChild(tr);
        }
    }
    function renderTables() { renderTable("adventure-body", [data.adventure, data.detail, data.complication]); renderTable("site-body", [data.siteStart, data.siteMiddle, data.siteEnd]); }
    function d20() { return Math.floor(Math.random() * 20); }
    function portugueseQuest(actionIndex, detailIndex, complicationIndex) {
        const action = data.adventure[actionIndex][1];
        const object = data.detail[detailIndex][1];
        const feminine = [2, 14, 17].includes(detailIndex);
        const article = feminine ? "a" : "o";
        let phrase;
        if (action.endsWith(" em")) phrase = `${action.slice(0, -3)} ${feminine ? "na" : "no"} ${object}`;
        else if (action.endsWith(" de")) phrase = `${action.slice(0, -3)} ${feminine ? "da" : "do"} ${object}`;
        else if (action.endsWith(" com")) phrase = `${action} ${article} ${object}`;
        else phrase = `${action} ${article} ${object}`;
        return `${phrase} ${val(data.complication[complicationIndex]).toLowerCase()}`;
    }
    function makeOne() {
        const rolls = [d20(), d20(), d20(), d20(), d20(), d20()];
        const quest = language === "en"
            ? `${val(data.adventure[rolls[0]])} ${val(data.detail[rolls[1]]).toLowerCase()} ${val(data.complication[rolls[2]]).toLowerCase()}`
            : portugueseQuest(rolls[0], rolls[1], rolls[2]);
        return { rolls, quest, site: `${val(data.siteStart[rolls[3]])} ${val(data.siteMiddle[rolls[4]])} ${val(data.siteEnd[rolls[5]])}` };
    }
    function renderResults() {
        const host = $("results"); host.innerHTML = "";
        if (!generated.length) { const empty = document.createElement("div"); empty.className = "adventure-empty"; empty.textContent = ui[language].empty; host.appendChild(empty); return; }
        generated.forEach((item, i) => { const card = document.createElement("article"); card.className = "adventure-result card";
            const title = document.createElement("h3"); title.textContent = `${i + 1}. ${ui[language].purpose}`;
            const p = document.createElement("p"); p.textContent = item.quest;
            const locLabel = document.createElement("h4"); locLabel.textContent = ui[language].location;
            const loc = document.createElement("p"); loc.textContent = item.site;
            const rolls = document.createElement("small"); rolls.textContent = `d20: ${item.rolls.map((n) => n + 1).join(" · ")}`;
            card.append(title, p, locLabel, loc, rolls); host.appendChild(card);
        });
    }
    function plainText() { return generated.map((item, i) => `${i + 1}. ${ui[language].purpose}: ${item.quest}\n   ${ui[language].location}: ${item.site}\n   d20: ${item.rolls.map((n) => n + 1).join(" · ")}`).join("\n\n"); }
    $("generate").addEventListener("click", () => { const count = Math.max(1, Math.min(10, Number.parseInt($("result-count").value, 10) || 1)); generated = Array.from({ length: count }, makeOne); $("copy").disabled = $("download").disabled = false; renderResults(); });
    $("copy").addEventListener("click", async () => { await navigator.clipboard.writeText(plainText()); const b = $("copy"); b.textContent = ui[language].copyDone; setTimeout(() => { b.textContent = ui[language].copy; }, 1400); });
    $("download").addEventListener("click", () => { const blob = new Blob([plainText()], { type: "text/plain;charset=utf-8" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "shadowdark-adventures.txt"; a.click(); URL.revokeObjectURL(a.href); });
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => { language = b.dataset.lang; localStorage.setItem("shadowdark-tools-lang", language); localize(); }));
    localize();
})();
