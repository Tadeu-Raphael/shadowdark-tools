(function () {
    "use strict";

    function printableText(value) {
        const substitutions = { "–": "-", "—": "-", "·": "*", "“": '"', "”": '"', "’": "'", "…": "...", "×": "x", "≤": "<=", "≥": ">=" };
        return Array.from(String(value ?? "").replace(/[–—·“”’…×≤≥]/g, char => substitutions[char]))
            .map(char => {
                const code = char.codePointAt(0);
                if (code === 10 || code === 13 || code === 9 || (code >= 32 && code <= 126) || (code >= 160 && code <= 255)) return char;
                const ascii = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return /^[\x20-\x7E]+$/.test(ascii) ? ascii : "?";
            }).join("");
    }

    function pdfEscape(value) {
        return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }

    function buildPdf(streams) {
        const objects = [null];
        const add = value => (objects.push(value), objects.length - 1);
        const catalogId = add("");
        const pagesId = add("");
        const regularFontId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
        const boldFontId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
        const pageIds = streams.map(stream => {
            const streamId = add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
            return add(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${streamId} 0 R >>`);
        });
        objects[catalogId] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
        objects[pagesId] = `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

        let pdf = "%PDF-1.4\n%SDT\n";
        const offsets = [0];
        for (let id = 1; id < objects.length; id++) {
            offsets[id] = pdf.length;
            pdf += `${id} 0 obj\n${objects[id]}\nendobj\n`;
        }
        const xrefOffset = pdf.length;
        pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
        for (let id = 1; id < objects.length; id++) pdf += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
        pdf += `trailer\n<< /Size ${objects.length} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
        return new Blob([Uint8Array.from(pdf, character => character.charCodeAt(0))], { type: "application/pdf" });
    }

    function createPdf(text) {
        const lines = printableText(text).split(/\r?\n/).flatMap(line => {
            if (!line) return [""];
            const wrapped = [];
            while (line.length > 92) {
                let splitAt = line.lastIndexOf(" ", 92);
                if (splitAt < 30) splitAt = 92;
                wrapped.push(line.slice(0, splitAt));
                line = line.slice(splitAt).trimStart();
            }
            wrapped.push(line);
            return wrapped;
        });
        const pages = [];
        for (let i = 0; i < lines.length; i += 48) pages.push(lines.slice(i, i + 48));
        if (!pages.length) pages.push([""]);
        return buildPdf(pages.map(pageLines => {
            const commands = ["BT", "/F1 10 Tf", "50 750 Td", "14 TL"];
            pageLines.forEach((line, index) => {
                if (index) commands.push("T*");
                commands.push(`(${pdfEscape(line)}) Tj`);
            });
            commands.push("ET");
            return commands.join("\n");
        }));
    }

    function wrapLine(value, max = 92) {
        const words = printableText(value).split(/\s+/).filter(Boolean);
        const lines = [];
        let line = "";
        words.forEach(word => {
            while (word.length > max) {
                if (line) { lines.push(line); line = ""; }
                lines.push(word.slice(0, max));
                word = word.slice(max);
            }
            if (!word) return;
            if (line && `${line} ${word}`.length > max) { lines.push(line); line = word; }
            else line = line ? `${line} ${word}` : word;
        });
        if (line) lines.push(line);
        return lines.length ? lines : [""];
    }

    function createCardsPdf({ title, subtitle = "", cards = [], footerLabel = "SHADOWDARK TOOLS" }) {
        const streams = cards.map((card, index) => {
            const commands = [];
            const text = (font, size, x, y, value, color = "0 0 0 rg") => {
                commands.push(color, "BT", `/${font} ${size} Tf`, `${x} ${y} Td`, `(${pdfEscape(printableText(value))}) Tj`, "ET");
            };
            const rect = (color, x, y, width, height, stroke = null) => {
                commands.push("q", `${color} rg`, `${x} ${y} ${width} ${height} re f`);
                if (stroke) commands.push(`${stroke} RG`, `${x} ${y} ${width} ${height} re S`);
                commands.push("Q");
            };

            // Header strip and red rule follow the generator's dark-page / parchment-card style.
            rect("0 0 0", 0, 744, 612, 48);
            text("F2", 10, 48, 763, "SHADOWDARK TOOLS", "1 1 1 rg");
            text("F1", 9, 196, 763, `/ ${title}`, "1 1 1 rg");
            text("F1", 8, 516, 763, `${index + 1} / ${cards.length}`, "1 1 1 rg");
            rect("0.72 0.08 0.12", 0, 739, 612, 5);

            text("F2", 26, 48, 696, card.title || `Personagem ${index + 1}`);
            const identity = [card.badge, card.eyebrow || ""].filter(Boolean).join("  -  ");
            text("F1", 10, 50, 675, identity, "0.36 0.34 0.32 rg");
            rect("0.72 0.08 0.12", 48, 663, 44, 3);

            text("F2", 9, 48, 640, "ATRIBUTOS", "0.36 0.34 0.32 rg");
            const stats = card.stats || [];
            const gap = 6;
            const tileWidth = (516 - gap * 5) / 6;
            stats.slice(0, 6).forEach((stat, statIndex) => {
                const x = 48 + statIndex * (tileWidth + gap);
                const label = typeof stat === "string" ? stat.split(/\s+/)[0] : stat.label;
                const value = typeof stat === "string" ? stat.slice(label.length).trim() : `${stat.value}${stat.modifier ? ` (${stat.modifier})` : ""}`;
                rect("0.95 0.94 0.91", x, 580, tileWidth, 50, "0.82 0.78 0.71");
                text("F2", 8, x + 7, 614, label, "0.36 0.34 0.32 rg");
                text("F2", 15, x + 7, 590, value);
                rect("0.72 0.08 0.12", x, 627, tileWidth, 3);
            });

            let y = 554;
            const sections = card.sections || (card.details || []).map(detail => ({ heading: "", lines: [detail] }));
            sections.forEach(section => {
                const heading = printableText(section.heading || "").toUpperCase();
                const lines = (section.lines || []).flatMap(line => wrapLine(line, 96));
                if (!heading && !lines.length) return;
                if (heading) {
                    text("F2", 9, 48, y, heading, "0.72 0.08 0.12 rg");
                    y -= 15;
                }
                lines.forEach(line => {
                    // Keep each wrapped line in one text run so labels and values cannot collide.
                    text("F1", 9, 52, y, line, "0.20 0.19 0.18 rg");
                    y -= 14;
                });
                y -= 5;
                commands.push("0.82 0.78 0.71 RG", `48 ${y + 3} 516 0.5 re S`);
                y -= 8;
            });

            rect("0.72 0.08 0.12", 48, 30, 516, 2);
            text("F1", 8, 48, 16, footerLabel, "0.42 0.40 0.37 rg");
            return commands.join("\n");
        });

        if (!streams.length) return buildPdf(["BT /F1 10 Tf 48 700 Td (Nenhum personagem foi gerado.) Tj ET"]);
        return buildPdf(streams);
    }

    function downloadPdf(text, filename) {
        downloadBlob(createPdf(text), filename);
    }

    function downloadCardsPdf(report, filename) {
        downloadBlob(createCardsPdf(report), filename);
    }

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    window.ShadowdarkExport = { createPdf, createCardsPdf, downloadPdf, downloadCardsPdf };

    function initialize() {
        const buttons = Array.from(document.querySelectorAll("[data-export-pdf]"));
        const update = button => {
            const content = document.getElementById(button.dataset.exportContent);
            const empty = !content || !content.textContent.trim() || content.querySelector(".carousing-empty, .encounter-empty, .adventure-empty, .dungeon-empty, .monster-empty, .npc-empty, .overland-empty, .settlement-empty, .treasure-empty, .empty-state");
            button.disabled = Boolean(empty);
        };
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const content = document.getElementById(button.dataset.exportContent);
                if (!content || button.disabled) return;
                window.ShadowdarkExport.downloadPdf(content.innerText || content.textContent, button.dataset.filename || "shadowdark-results.pdf");
            });
            update(button);
            const content = document.getElementById(button.dataset.exportContent);
            if (content) new MutationObserver(() => update(button)).observe(content, { childList: true, subtree: true, characterData: true });
        });

        const localize = () => buttons.forEach(button => {
            const english = document.documentElement.lang === "en";
            button.textContent = english ? "Export PDF" : "Exportar PDF";
            button.setAttribute("aria-label", button.textContent);
        });
        localize();
        new MutationObserver(localize).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
    else initialize();
}());
