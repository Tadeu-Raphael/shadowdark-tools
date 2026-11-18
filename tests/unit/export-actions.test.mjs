import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const source = await readFile(new URL('../../js/export-actions.js', import.meta.url), 'utf8');

test('PDF export creates a valid multi-page PDF blob from generated text', async () => {
  const context = {
    window: {},
    document: { readyState: 'loading', addEventListener() {} },
    Blob,
    URL,
    setTimeout,
    console,
  };
  vm.runInNewContext(source, context);
  const text = Array.from({ length: 100 }, (_, index) => `Resultado ${index + 1}: acao, tesouro e perigo`).join('\n');
  const blob = context.window.ShadowdarkExport.createPdf(text);
  const pdf = new TextDecoder('windows-1252').decode(await blob.arrayBuffer());

  assert.equal(blob.type, 'application/pdf');
  assert.ok(pdf.startsWith('%PDF-1.4'));
  assert.match(pdf, /\/Count 3/);
  assert.match(pdf, /xref\n0 /);
  assert.match(pdf, /%%EOF$/);
  assert.match(pdf, /acao, tesouro e perigo/);
  const localized = await context.window.ShadowdarkExport.createPdf('Tesouro mágico: poção').arrayBuffer();
  assert.match(new TextDecoder('windows-1252').decode(localized), /Tesouro mágico: poção/);

  const styled = await context.window.ShadowdarkExport.createCardsPdf({
    title: 'PERSONAGENS NÍVEL 0',
    subtitle: '1 personagem gerado',
    cards: [{ title: 'Mira', badge: 'Original', stats: ['STR 10 (+0)', 'DEX 12 (+1)'], sections: [{ heading: 'Equipment', lines: ['Caltrops (one bag): Tiny iron spikes'] }] }],
  }).arrayBuffer();
  const styledPdf = new TextDecoder('windows-1252').decode(styled);
  assert.match(styledPdf, /PERSONAGENS NÍVEL 0/);
  assert.match(styledPdf, /Mira/);
  assert.ok(styledPdf.includes(String.raw`Caltrops \(one bag\): Tiny iron spikes`));
  assert.match(styledPdf, /0 0 0 rg/);
  assert.match(styledPdf, /0.95 0.94 0.91 rg/);
  assert.match(styledPdf, /\/F2 26 Tf/);
});

test('cards PDF accepts a custom footer label for each generator', async () => {
  const context = {
    window: {},
    document: { readyState: 'loading', addEventListener() {} },
    Blob,
    URL,
    setTimeout,
    console,
  };
  vm.runInNewContext(source, context);

  const cards = [{ title: 'Lydia', badge: 'Mago 5 · Halfling', stats: ['FOR 12 (+1)'], sections: [{ heading: 'PERFIL', lines: ['linha'] }] }];
  const blob = await context.window.ShadowdarkExport.createCardsPdf({
    title: 'PERSONAGENS',
    subtitle: '1 personagem gerado',
    cards,
    footerLabel: 'SHADOWDARK TOOLS  -  PERSONAGENS',
  }).arrayBuffer();
  const pdf = new TextDecoder('windows-1252').decode(blob);

  assert.equal(blob.byteLength > 0, true);
  assert.match(pdf, /SHADOWDARK TOOLS  -  PERSONAGENS/);
  assert.match(pdf, /Lydia/);
  assert.match(pdf, /0.72 0.08 0.12 rg/);
});
