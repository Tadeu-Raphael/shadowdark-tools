(function () {
    "use strict";

    const TEXT = {
        "pt-BR": {
            navHome: "Início", navGenerators: "Geradores", navAbout: "Sobre",
            eyebrow: "MESTRE", title: "Gerador de Encontros",
            description: "Role nas tabelas de encontros aleatórios por ambiente e use os resultados como estão ou como inspiração para a cena.",
            environment: "Ambiente", count: "Quantidade", generate: "Rolar encontros",
            sourceLanguage: "As descrições dos encontros são exibidas em português.",
            specialRule: "Regra da tabela: 98–99 gera dois resultados adicionais; se algum deles também cair em 98–99, repita essa rolagem.",
            results: "Resultados", copy: "Copiar", copied: "Copiado", copyFailed: "Não foi possível copiar",
            download: "Baixar TXT", tableSummary: "Consultar a tabela d100",
            tableDescription: "A tabela do ambiente selecionado, com os intervalos usados na rolagem.",
            filter: "Filtrar resultados", rollColumn: "d100", entryColumn: "Encontro",
            empty: "Escolha um ambiente e role para gerar um encontro.",
            reroll: "Rolar novamente", resultTitle: "Encontro", combined: "Resultados combinados",
            rerolls: "Rolagens 98–99 repetidas", sourceCredit: "Tabelas extraídas do Livro de Regras fornecido, páginas 142–185.",
            footerCaption: "Shadowdark Tools · Gerador de Encontros",
            error: "Não foi possível carregar as tabelas de encontros. Recarregue a página e tente novamente.",
            all: "Tudo"
        },
        en: {
            navHome: "Home", navGenerators: "Generators", navAbout: "About",
            eyebrow: "GAME MASTER", title: "Encounter Generator",
            description: "Roll on the random encounter tables by environment and use the results as written or as inspiration for the scene.",
            environment: "Environment", count: "Quantity", generate: "Roll encounters",
            sourceLanguage: "Encounter descriptions are displayed in English.",
            specialRule: "Table rule: 98–99 produces two additional results; if either is also 98–99, reroll that result.",
            results: "Results", copy: "Copy", copied: "Copied", copyFailed: "Could not copy",
            download: "Download TXT", tableSummary: "Browse the d100 table",
            tableDescription: "The selected environment's table and its roll ranges.",
            filter: "Filter results", rollColumn: "d100", entryColumn: "Encounter",
            empty: "Choose an environment and roll to generate an encounter.",
            reroll: "Roll again", resultTitle: "Encounter", combined: "Combined results",
            rerolls: "Repeated 98–99 rolls", sourceCredit: "Tables transcribed from the supplied rulebook, pages 142–185.",
            footerCaption: "Shadowdark Tools · Encounter Generator",
            error: "Could not load the encounter tables. Reload the page and try again.",
            all: "All"
        }
    };

    const TITLES = {
        arctic: ["Ártico", "Arctic"],
        "artisan-district": ["Distrito dos Artesãos", "Artisan District"],
        "castle-district": ["Distrito do Castelo", "Castle District"],
        cave: ["Caverna", "Cave"],
        "deep-tunnels": ["Túneis Profundos", "Deep Tunnels"],
        desert: ["Deserto", "Desert"],
        forest: ["Floresta", "Forest"],
        grassland: ["Campos", "Grassland"],
        "high-district": ["Distrito Alto", "High District"],
        jungle: ["Selva", "Jungle"],
        "low-district": ["Distrito Baixo", "Low District"],
        market: ["Mercado", "Market"],
        mountain: ["Montanha", "Mountain"],
        ocean: ["Oceano", "Ocean"],
        "river-and-coast": ["Rio e Costa", "River and Coast"],
        ruins: ["Ruínas", "Ruins"],
        slums: ["Bairros Pobres", "Slums"],
        swamp: ["Pântano", "Swamp"],
        tavern: ["Taverna", "Tavern"],
        "temple-district": ["Distrito do Templo", "Temple District"],
        tomb: ["Tumba", "Tomb"],
        "university-district": ["Distrito Universitário", "University District"]
    };

    const $ = (id) => document.getElementById(id);
    const environmentSelect = $("environment-select");
    const resultList = $("result-list");
    const tableBody = $("table-body");
    const searchInput = $("table-search");
    let language = localStorage.getItem("shadowdark-tools-lang") || (navigator.language.startsWith("pt") ? "pt-BR" : "en");
    if (!TEXT[language]) language = "pt-BR";
    let tables = [];
    let results = [];

    function titleFor(table) {
        const pair = TITLES[table.id];
        return pair ? pair[language === "pt-BR" ? 0 : 1] : table.title;
    }

    function entryText(entry) {
        return language === "pt-BR" ? (entry.textPt || entry.text) : entry.text;
    }

    function setLanguage(nextLanguage) {
        if (!TEXT[nextLanguage]) return;
        language = nextLanguage;
        localStorage.setItem("shadowdark-tools-lang", language);
        document.documentElement.lang = language;
        const t = TEXT[language];
        const textMap = {
            "nav-home": t.navHome, "nav-generators": t.navGenerators, "nav-about": t.navAbout,
            "page-eyebrow": t.eyebrow, "page-title": t.title, "page-description": t.description,
            "environment-label": t.environment, "count-label": t.count, "generate-label": t.generate,
            "source-language-note": t.sourceLanguage, "results-heading": t.results,
            "special-rule-note": t.specialRule,
            "copy-label": t.copy, "export-label": t.download, "table-summary": t.tableSummary,
            "table-description": t.tableDescription, "roll-column": t.rollColumn,
            "entry-column": t.entryColumn, "source-credit": t.sourceCredit,
            "footer-caption": t.footerCaption
        };
        Object.entries(textMap).forEach(([id, value]) => { const el = $(id); if (el) el.textContent = value; });
        searchInput.placeholder = t.filter;
        searchInput.setAttribute("aria-label", t.filter);
        document.querySelectorAll(".encounter-language-switch button").forEach((button) => {
            button.setAttribute("aria-pressed", button.dataset.lang === language ? "true" : "false");
        });
        const selectedTable = getSelectedTable();
        if (selectedTable) {
            renderTable(selectedTable);
            renderResults();
        } else {
            renderEmpty();
        }
    }

    function getSelectedTable() {
        return tables.find((table) => table.id === environmentSelect.value) || null;
    }

    function populateEnvironments() {
        environmentSelect.innerHTML = "";
        tables.forEach((table) => {
            const option = document.createElement("option");
            option.value = table.id;
            option.textContent = titleFor(table);
            environmentSelect.appendChild(option);
        });
        const saved = localStorage.getItem("shadowdark-encounter-environment");
        if (saved && tables.some((table) => table.id === saved)) environmentSelect.value = saved;
    }

    function rollD100() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function formatRoll(value) {
        if (value === 100) return "00";
        return String(value).padStart(2, "0");
    }

    function getEntry(table, roll) {
        const percentile = roll === 100 ? 0 : roll;
        return table.entries.find((entry) => {
            const [start, end] = entry.roll.split("-").map(Number);
            return percentile >= start && percentile <= (end || start);
        });
    }

    function rollEncounter(table, mayCombine = true) {
        const repeatedRolls = [];
        let roll = rollD100();
        while (!mayCombine && (roll === 98 || roll === 99)) {
            repeatedRolls.push(roll);
            roll = rollD100();
        }
        const entry = getEntry(table, roll);
        if (!entry) throw new Error(`Missing d100 table entry for ${roll}`);
        if (mayCombine && (roll === 98 || roll === 99)) {
            return {
                roll,
                entry,
                combined: [rollEncounter(table, false), rollEncounter(table, false)],
                repeatedRolls
            };
        }
        return { roll, entry, combined: null, repeatedRolls };
    }

    function createResultCard(result, index) {
        const t = TEXT[language];
        const article = document.createElement("article");
        article.className = "encounter-result-card";

        const header = document.createElement("div");
        header.className = "encounter-result-card__header";
        const heading = document.createElement("h3");
        heading.textContent = `${t.resultTitle} ${index + 1} · ${titleFor(result.table)}`;
        const rollLabel = document.createElement("span");
        rollLabel.className = "encounter-roll";
        rollLabel.textContent = `d100 ${formatRoll(result.roll)}`;
        header.append(heading, rollLabel);
        article.appendChild(header);

        const description = document.createElement("p");
        description.textContent = entryText(result.entry);
        article.appendChild(description);

        if (result.combined) {
            const combined = document.createElement("div");
            combined.className = "encounter-result-card__combined";
            result.combined.forEach((subResult, subIndex) => {
                const item = document.createElement("p");
                item.className = "encounter-combined-item";
                item.textContent = `${subIndex + 1}. d100 ${formatRoll(subResult.roll)} (${subResult.entry.roll}): ${entryText(subResult.entry)}`;
                combined.appendChild(item);
            });
            article.appendChild(combined);
        }

        if (result.combined && result.combined.some((item) => item.repeatedRolls.length)) {
            const repeated = document.createElement("p");
            repeated.className = "encounter-result-card__note";
            const rolls = result.combined.flatMap((item) => item.repeatedRolls).map(formatRoll).join(", ");
            repeated.textContent = `${t.rerolls}: ${rolls}`;
            article.appendChild(repeated);
        }

        const footer = document.createElement("div");
        footer.className = "encounter-result-card__footer";
        const reroll = document.createElement("button");
        reroll.type = "button";
        reroll.textContent = t.reroll;
        reroll.addEventListener("click", () => {
            const table = getSelectedTable();
            if (!table) return;
            results[index] = { ...rollEncounter(table), table };
            renderResults();
        });
        footer.appendChild(reroll);
        article.appendChild(footer);
        return article;
    }

    function renderEmpty() {
        resultList.innerHTML = "";
        const empty = document.createElement("div");
        empty.className = "encounter-empty";
        empty.textContent = TEXT[language].empty;
        resultList.appendChild(empty);
    }

    function renderResults() {
        resultList.innerHTML = "";
        if (!results.length) {
            renderEmpty();
            $("copy-button").disabled = true;
            $("export-button").disabled = true;
            return;
        }
        results.forEach((result, index) => resultList.appendChild(createResultCard(result, index)));
        $("copy-button").disabled = false;
        $("export-button").disabled = false;
    }

    function generate() {
        const table = getSelectedTable();
        if (!table) return;
        const count = Math.max(1, Math.min(10, Number.parseInt($("encounter-count").value, 10) || 1));
        $("encounter-count").value = String(count);
        localStorage.setItem("shadowdark-encounter-environment", table.id);
        results = Array.from({ length: count }, () => ({ ...rollEncounter(table), table }));
        renderResults();
    }

    function renderTable(table) {
        const query = searchInput.value.trim().toLocaleLowerCase();
        tableBody.innerHTML = "";
        table.entries.filter((entry) => !query || `${entry.roll} ${entryText(entry)}`.toLocaleLowerCase().includes(query)).forEach((entry) => {
            const row = document.createElement("tr");
            const roll = document.createElement("td");
            roll.textContent = entry.roll;
            const text = document.createElement("td");
            text.textContent = entryText(entry);
            row.append(roll, text);
            tableBody.appendChild(row);
        });
    }

    function resultAsText(result, index) {
        const output = [`${TEXT[language].resultTitle} ${index + 1} — ${titleFor(result.table)} — d100 ${formatRoll(result.roll)}`, entryText(result.entry)];
        if (result.combined) {
            result.combined.forEach((subResult, subIndex) => {
                output.push(`${subIndex + 1}. d100 ${formatRoll(subResult.roll)} (${subResult.entry.roll}): ${entryText(subResult.entry)}`);
            });
        }
        return output.join("\n");
    }

    async function copyResults() {
        const text = results.map(resultAsText).join("\n\n");
        try {
            await navigator.clipboard.writeText(text);
            $("copy-label").textContent = TEXT[language].copied;
            setTimeout(() => { $("copy-label").textContent = TEXT[language].copy; }, 1400);
        } catch {
            $("copy-label").textContent = TEXT[language].copyFailed;
            setTimeout(() => { $("copy-label").textContent = TEXT[language].copy; }, 1800);
        }
    }

    function exportResults() {
        const text = results.map(resultAsText).join("\n\n");
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `shadowdark-encounters-${getSelectedTable()?.id || "results"}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    }

    async function init() {
        document.querySelectorAll(".encounter-language-switch button").forEach((button) => {
            button.addEventListener("click", () => setLanguage(button.dataset.lang));
        });
        $("generate-button").addEventListener("click", generate);
        $("copy-button").addEventListener("click", copyResults);
        $("export-button").addEventListener("click", exportResults);
        environmentSelect.addEventListener("change", () => {
            const table = getSelectedTable();
            if (!table) return;
            localStorage.setItem("shadowdark-encounter-environment", table.id);
            renderTable(table);
            results = [];
            renderResults();
        });
        searchInput.addEventListener("input", () => {
            const table = getSelectedTable();
            if (table) renderTable(table);
        });

        try {
            const response = await fetch("data/encounters.json");
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            tables = await response.json();
            populateEnvironments();
            setLanguage(language);
            renderTable(getSelectedTable());
        } catch (error) {
            console.error("Encounter tables failed to load", error);
            $("generate-button").disabled = true;
            resultList.textContent = TEXT[language].error;
        }
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
