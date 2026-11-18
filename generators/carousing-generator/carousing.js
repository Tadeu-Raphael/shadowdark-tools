(function () {
    "use strict";

    const TEXT = {
        "pt-BR": {
            navHome: "Início", navGenerators: "Geradores", navAbout: "Sobre",
            eyebrow: "MESTRE", title: "Gerador de Festanças",
            description: "Escolha quanto o personagem gastou e role para descobrir as consequências da festança.",
            cost: "Gasto", mode: "Versão", count: "Quantidade", standard: "Padrão", expanded: "Expandida",
            roll: "Rolar festança", rule: "Role 1d8 e some o bônus do gasto. Na versão expandida, role também 1d6 para descobrir o acontecimento.",
            results: "Resultados", copy: "Copiar", copied: "Copiado", copyFailed: "Não foi possível copiar",
            download: "Baixar TXT", event: "Festança", bonus: "Bônus", reference: "Consultar custos e bônus",
            empty: "Escolha o gasto e role para descobrir o resultado da festança.",
            costHint: "Bônus aplicado à rolagem de 1d8.", rollWord: "Rolagem", detailRoll: "Acontecimento expandido · d6",
            result: "Resultado", source: "Tabela padrão de festanças adaptada do Livro de Regras de Shadowdark, páginas 92–93. Os acontecimentos expandidos são baseados no material fornecido.",
            footerCredit: 'Feito por <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Código em <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG é propriedade de <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. Este é um projeto de fã não oficial.'
        },
        en: {
            navHome: "Home", navGenerators: "Generators", navAbout: "About",
            eyebrow: "GAME MASTER", title: "Carousing Generator",
            description: "Choose how much the character spent and roll to discover the consequences of the carousing.",
            cost: "Cost", mode: "Version", count: "Quantity", standard: "Standard", expanded: "Expanded",
            roll: "Roll carousing", rule: "Roll 1d8 and add the spending bonus. In Expanded mode, also roll 1d6 to find out what happened.",
            results: "Results", copy: "Copy", copied: "Copied", copyFailed: "Could not copy",
            download: "Download TXT", event: "Carousing", bonus: "Bonus", reference: "View costs and bonuses",
            empty: "Choose a cost and roll to find out what happened during the carousing.",
            costHint: "Bonus added to the 1d8 roll.", rollWord: "Roll", detailRoll: "Expanded event · d6",
            result: "Result", source: "Standard carousing table adapted from the Shadowdark Rulebook, pages 92–93. Expanded events are based on the supplied material.",
            footerCredit: 'Made by <a href="https://github.com/Tadeu-Raphael" target="_blank" rel="noopener">Tadeu Raphael</a> · Code on <a href="https://github.com/Tadeu-Raphael/shadowdark-tools" target="_blank" rel="noopener">GitHub</a>',
            footerSubcredit: 'Shadowdark RPG is property of <a href="https://thearcanelibrary.com/" target="_blank" rel="noopener">The Arcane Library</a>. This is an unofficial fan project.'
        }
    };

    const $ = (id) => document.getElementById(id);
    const costSelect = $("cost-select");
    const modeSelect = $("mode-select");
    const resultList = $("result-list");
    const referenceBody = $("cost-table-body");
    let language = localStorage.getItem("shadowdark-tools-lang") || (navigator.language.startsWith("pt") ? "pt-BR" : "en");
    if (!TEXT[language]) language = "pt-BR";
    let results = [];

    function getText(value) {
        return value[language === "pt-BR" ? "pt" : "en"];
    }

    function formatCost(cost) {
        return `${cost.gp.toLocaleString(language === "pt-BR" ? "pt-BR" : "en-US")} ${language === "pt-BR" ? "PO" : "gp"}`;
    }

    function populateCosts() {
        const selectedCost = costSelect.value;
        costSelect.innerHTML = "";
        referenceBody.innerHTML = "";
        window.CAROUSING_DATA.costs.forEach((cost) => {
            const option = document.createElement("option");
            option.value = String(cost.gp);
            option.textContent = `${formatCost(cost)} (+${cost.bonus})`;
            costSelect.appendChild(option);

            const row = document.createElement("tr");
            const amount = document.createElement("td");
            amount.textContent = formatCost(cost);
            const event = document.createElement("td");
            event.textContent = getText(cost);
            const bonus = document.createElement("td");
            bonus.textContent = `+${cost.bonus}`;
            row.append(amount, event, bonus);
            referenceBody.appendChild(row);
        });
        costSelect.value = selectedCost || "30";
        updateCostDescription();
    }

    function updateCostDescription() {
        const cost = window.CAROUSING_DATA.costs.find((item) => item.gp === Number(costSelect.value));
        if (cost) $("cost-description").textContent = getText(cost);
    }

    function outcomeFor(result) {
        return window.CAROUSING_DATA.outcomes[result.outcomeIndex];
    }

    function makeCard(result, index) {
        const t = TEXT[language];
        const suffix = language === "pt-BR" ? "Pt" : "En";
        const outcome = outcomeFor(result);
        const expanded = result.detailRoll !== null;
        const article = document.createElement("article");
        article.className = "carousing-result-card";

        const header = document.createElement("div");
        header.className = "carousing-result-card__header";
        const title = document.createElement("h3");
        const band = result.outcomeIndex === 13 ? "14+" : String(result.outcomeIndex + 1);
        title.textContent = expanded
            ? `${t.result} ${index + 1} · ${band} — ${outcome[`event${suffix}`]}`
            : `${t.result} ${index + 1} · ${band}`;
        const roll = document.createElement("span");
        roll.className = "carousing-roll";
        roll.textContent = `${formatCost({ gp: result.cost })} · d8 ${result.d8} + ${result.bonus} = ${result.total}`;
        header.append(title, roll);
        article.appendChild(header);

        if (expanded) {
            const subtitle = document.createElement("p");
            subtitle.className = "carousing-result-card__subtitle";
            subtitle.textContent = outcome[`subtitle${suffix}`];
            article.appendChild(subtitle);

            const detail = document.createElement("div");
            detail.className = "carousing-result-card__detail";
            const label = document.createElement("p");
            label.className = "carousing-result-card__detail-label";
            label.textContent = `${t.detailRoll}: ${result.detailRoll}`;
            const text = document.createElement("p");
            text.textContent = outcome[`details${suffix}`][result.detailRoll - 1];
            detail.append(label, text);
            article.appendChild(detail);
        } else {
            const description = document.createElement("p");
            description.className = "carousing-result-card__text";
            description.textContent = getText(outcome);
            const benefit = document.createElement("p");
            benefit.className = "carousing-result-card__benefit";
            benefit.textContent = outcome[`benefit${suffix}`];
            article.append(description, benefit);
        }

        return article;
    }

    function renderResults() {
        resultList.innerHTML = "";
        if (!results.length) {
            const empty = document.createElement("div");
            empty.className = "carousing-empty";
            empty.textContent = TEXT[language].empty;
            resultList.appendChild(empty);
            $("copy-button").disabled = true;
            $("export-button").disabled = true;
            return;
        }
        results.forEach((result, index) => resultList.appendChild(makeCard(result, index)));
        $("copy-button").disabled = false;
        $("export-button").disabled = false;
    }

    function rollD8() { return Math.floor(Math.random() * 8) + 1; }
    function rollD6() { return Math.floor(Math.random() * 6) + 1; }

    function generate() {
        const cost = window.CAROUSING_DATA.costs.find((item) => item.gp === Number(costSelect.value)) || window.CAROUSING_DATA.costs[0];
        const count = Math.max(1, Math.min(10, Number.parseInt($("result-count").value, 10) || 1));
        $("result-count").value = String(count);
        results = Array.from({ length: count }, () => {
            const d8 = rollD8();
            const total = d8 + cost.bonus;
            return {
                d8,
                cost: cost.gp,
                bonus: cost.bonus,
                total,
                outcomeIndex: Math.min(total, 14) - 1,
                detailRoll: modeSelect.value === "expanded" ? rollD6() : null
            };
        });
        renderResults();
    }

    function resultAsText(result, index) {
        const t = TEXT[language];
        const suffix = language === "pt-BR" ? "Pt" : "En";
        const outcome = outcomeFor(result);
        const band = result.outcomeIndex === 13 ? "14+" : String(result.outcomeIndex + 1);
        const lines = [`${t.result} ${index + 1} — ${band} — ${formatCost({ gp: result.cost })} — d8 ${result.d8} + ${result.bonus} = ${result.total}`];
        if (result.detailRoll !== null) {
            lines.push(`${outcome[`event${suffix}`]} — ${outcome[`subtitle${suffix}`]}`);
            lines.push(`${t.detailRoll}: ${result.detailRoll} — ${outcome[`details${suffix}`][result.detailRoll - 1]}`);
        } else {
            lines.push(getText(outcome));
            lines.push(outcome[`benefit${suffix}`]);
        }
        return lines.join("\n");
    }

    async function copyResults() {
        try {
            await navigator.clipboard.writeText(results.map(resultAsText).join("\n\n"));
            $("copy-label").textContent = TEXT[language].copied;
            setTimeout(() => { $("copy-label").textContent = TEXT[language].copy; }, 1400);
        } catch {
            $("copy-label").textContent = TEXT[language].copyFailed;
            setTimeout(() => { $("copy-label").textContent = TEXT[language].copy; }, 1800);
        }
    }

    function exportResults() {
        const blob = new Blob([results.map(resultAsText).join("\n\n")], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `shadowdark-carousing-${modeSelect.value}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    }

    function setLanguage(nextLanguage) {
        if (!TEXT[nextLanguage]) return;
        language = nextLanguage;
        localStorage.setItem("shadowdark-tools-lang", language);
        document.documentElement.lang = language;
        const t = TEXT[language];
        const textMap = {
            "nav-back-text": t.navHome, "nav-generators": t.navGenerators, "nav-about": t.navAbout,
            "page-eyebrow": t.eyebrow, "page-title": t.title, "page-description": t.description,
            "cost-label": t.cost, "mode-label": t.mode, "count-label": t.count,
            "roll-label": t.roll, "rule-note": t.rule, "results-heading": t.results,
            "copy-label": t.copy, "export-label": t.download,
            "reference-title": t.reference, "reference-cost": t.cost,
            "reference-event": t.event, "reference-bonus": t.bonus,
            "source-note": t.source,
            "footer-caption": `Shadowdark Tools · ${t.title}`,
            "footer-credit-author": t.footerCredit,
            "footer-subcredit": t.footerSubcredit
        };
        Object.entries(textMap).forEach(([id, value]) => {
            const el = $(id);
            if (!el) return;
            if (id === "footer-credit-author" || id === "footer-subcredit") el.innerHTML = value;
            else el.textContent = value;
        });
        modeSelect.options[0].textContent = t.standard;
        modeSelect.options[1].textContent = t.expanded;
        document.querySelectorAll(".carousing-language-switch button").forEach((button) => {
            button.setAttribute("aria-pressed", button.dataset.lang === language ? "true" : "false");
        });
        populateCosts();
        renderResults();
    }

    document.querySelectorAll(".carousing-language-switch button").forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });
    $("roll-button").addEventListener("click", generate);
    $("copy-button").addEventListener("click", copyResults);
    $("export-button").addEventListener("click", exportResults);
    $("mode-select").addEventListener("change", () => { results = []; renderResults(); });
    $("cost-select").addEventListener("change", () => { updateCostDescription(); results = []; renderResults(); });

    setLanguage(language);
})();
