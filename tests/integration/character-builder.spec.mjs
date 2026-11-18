import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('shadowdark-tools-lang', 'pt-BR');
    Math.random = () => 0.42;
  });
});

async function begin(page, ancestry = 'Anão', classKey = 'fighter') {
  await page.goto('/generators/character-builder/');
  await page.locator('#ancestry').selectOption({ label: ancestry });
  await page.locator('#roll-name').click();
  await page.locator('#next').click();
  await page.locator('#roll-stats').click();
  await page.locator('#next').click();
  await page.locator('#classKey').selectOption(classKey);
}

async function chooseGear(page, weapon = 'longsword', armor = 'leather') {
  await page.locator('#weapon').selectOption(weapon);
  if (armor) await page.locator('#armor').selectOption(armor);
  await page.locator('[data-group="equipment"][value="kit"]').check();
  await page.locator('#next').click();
}

test('double names match ancestry tables, remain stable in both languages and appear in exports', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/generators/character-generator/');
  const names = { Anão: 'Elga Alric', Elfo: 'Hiralia Cyrwin', Goblin: 'Prim Zeb', Halfling: 'Rose Ardo', 'Meio-Orc': 'Brolga Drago', Humano: 'Morgan Giralt' };
  for (const [label, expected] of Object.entries(names)) {
    await page.locator('#ancestry-select').selectOption({ label });
    await page.locator('#generate').click();
    await expect(page.locator('.character-card__name')).toHaveText(expected);
    await expect(page.locator('#roll-log')).toContainText('d20=9, d20=10');
  }
  await page.locator('[data-lang="en"]').click();
  await expect(page.locator('.character-card__name')).toHaveText('Morgan Giralt');
  const downloading = page.waitForEvent('download');
  await page.locator('#download').click();
  const txt = await (await downloading).createReadStream();
  let content = '';
  for await (const chunk of txt) content += chunk;
  expect(content).toContain('Morgan Giralt');
  await page.goto('/generators/level-zero-character/');
  await page.locator('#generate-btn').click();
  await expect(page.locator('#generation-content .character-card__title').first()).toBeVisible();
  const zeroNames = await page.locator('#generation-content .character-card__title').allTextContents();
  expect(zeroNames.length).toBeGreaterThan(0);
  expect(zeroNames.every((name) => name.trim().split(/\s+/).length === 2)).toBeTruthy();
  expect(errors).toEqual([]);
});

test('builder guides a dwarf fighter, audits advantage and exports the reviewed sheet', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/generators/character-builder/');
  await expect(page.locator('#previous')).toBeDisabled();
  await expect(page.locator('#copy')).toBeDisabled();
  await page.locator('#next').click();
  await expect(page.locator('#builder-error')).toContainText('nome');

  await begin(page);
  await page.locator('#next').click();
  await page.locator('#next').click();
  await expect(page.locator('#builder-error')).toContainText('Role os PV');
  await page.locator('#roll-vitals').click();
  await page.locator('.builder-audit summary').click();
  await expect(page.locator('.builder-audit')).toContainText('1d8=4 / 4 (escolhido: 4)');
  await expect(page.locator('.builder-audit')).toContainText('Bônus de CON aplicado: +1');
  await expect(page.locator('.builder-audit')).toContainText('Total: 7');
  await page.locator('#next').click();
  await expect(page.locator('#step-title')).toHaveText('Magias e idiomas');
  await expect(page.locator('#step-content')).toContainText('não conjura magias');
  await page.locator('#next').click();
  await page.locator('#weapon').selectOption('longsword');
  await page.locator('#armor').selectOption('plate');
  await page.locator('#next').click();
  await expect(page.locator('#builder-error')).toContainText('mais que o ouro');
  await chooseGear(page);
  const sheet = page.locator('#character-sheet');
  await expect(sheet).toContainText('Elga Alric');
  await expect(sheet).toContainText('PV: 7');
  await expect(sheet).toContainText('CA: 10');
  await expect(sheet).toContainText('Ouro: 4 gp');
  await expect(sheet).toContainText('Nível 1 (6): +1 em ataques');
  await expect(page.locator('#export-pdf')).toBeEnabled();
  await page.locator('[data-lang="en"]').click();
  await expect(sheet).toContainText('HP: 7');
  await expect(sheet).toContainText('Elga Alric');
  await expect(page.locator('#nav-back-text')).toHaveText('Home');
  await expect(page.locator('#footer-credit a')).toHaveCount(2);
  await expect(page.locator('[data-step="6"]')).toHaveAttribute('aria-current', 'step');

  const pdfDownloading = page.waitForEvent('download');
  const captured = await page.evaluate(() => {
    let captured;
    const original = window.ShadowdarkExport.downloadCardsPdf;
    window.ShadowdarkExport.downloadCardsPdf = (options, filename) => {
      captured = { options, filename };
      original(options, filename);
    };
    document.getElementById('export-pdf').click();
    return captured;
  });
  expect(captured.options.cards[0].title).toBe('Elga Alric');
  expect(captured.options.footerLabel).toContain('CHARACTER BUILDER');
  expect(captured.options.cards[0].sections.some((section) => section.heading === 'Roll log')).toBeTruthy();
  const pdf = await pdfDownloading;
  expect(pdf.suggestedFilename()).toBe('shadowdark-character.pdf');
  const chunks = [];
  for await (const chunk of await pdf.createReadStream()) chunks.push(chunk);
  expect(Buffer.concat(chunks).subarray(0, 5).toString()).toBe('%PDF-');
  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('shadowdark-character.txt');
  let text = '';
  for await (const chunk of await download.createReadStream()) text += chunk;
  expect(text).toContain('Elga Alric');
  expect(text).toContain('HP: 7');

  await page.locator('[data-step="2"]').click();
  await page.locator('#classKey').selectOption('wizard');
  await page.locator('#next').click();
  await expect(page.locator('#talent-0')).toHaveCount(0);
  await page.locator('#next').click();
  await expect(page.locator('#builder-error')).toContainText('Roll HP');
  expect(errors).toEqual([]);
});

test('wizard builder preserves choices across steps and languages, and validates spells and languages', async ({ page }) => {
  await begin(page, 'Anão', 'wizard');
  await page.locator('#next').click();
  await page.locator('#roll-vitals').click();
  await page.locator('#talent-0').selectOption('casting');
  await page.locator('#next').click();
  await page.locator('#next').click();
  await expect(page.locator('#builder-error')).toContainText('magias');
  for (const spell of ['Alarm', 'Burning hands', 'Charm person']) await page.locator(`[data-group="spells"][value="${spell}"]`).check();
  for (const lang of ['elvish', 'giant']) await page.locator(`[data-group="languages-common"][value="${lang}"]`).check();
  for (const lang of ['celestial', 'diabolic']) await page.locator(`[data-group="languages-rare"][value="${lang}"]`).check();
  await page.locator('[data-lang="en"]').click();
  await expect(page.locator('[data-group="spells"]:checked')).toHaveCount(3);
  await page.locator('#next').click();
  await expect(page.locator('#armor option')).toHaveCount(1);
  await expect(page.locator('[data-group="equipment"][value="shield"]')).toHaveCount(0);
  await chooseGear(page, 'dagger', '');
  await expect(page.locator('#character-sheet')).toContainText('Alarm');
  await expect(page.locator('#character-sheet')).toContainText('Celestial, Diabolic');
  await page.locator('#previous').click();
  await expect(page.locator('#weapon')).toHaveValue('dagger');
  await page.locator('#next').click();
  await expect(page.locator('#character-sheet')).toContainText('Elga Alric');
  page.once('dialog', (dialog) => dialog.accept());
  await page.locator('#restart').click();
  await expect(page.locator('#step-title')).toHaveText('Identity');
  await expect(page.locator('#name')).toHaveValue('');
  await expect(page.locator('#copy')).toBeDisabled();
});

test('priest deity is alignment-bound and human gets a second talent', async ({ page }) => {
  await begin(page, 'Humano', 'priest');
  await expect(page.locator('#deity option[value="memnon"]')).toHaveCount(0);
  await page.locator('#next').click();
  await expect(page.locator('#builder-error')).toContainText('divindade');
  await page.locator('#deity').selectOption('madeera');
  await page.locator('#next').click();
  await page.locator('#roll-vitals').click();
  await expect(page.locator('[id^="talent-"]')).toHaveCount(2);
  await page.locator('#talent-0').selectOption('attack:melee');
  await page.locator('#talent-1').selectOption('attack:ranged');
  await page.locator('#next').click();
  await expect(page.locator('#step-content')).toContainText('Expulsar Mortos-Vivos');
  await expect(page.locator('[data-group="spells"]')).toHaveCount(5);
});

test('builder supports mobile and renders typed names as text', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await begin(page);
  await page.locator('#next').click();
  await page.locator('#roll-vitals').click();
  await page.locator('#next').click();
  await page.locator('#next').click();
  await chooseGear(page);
  await page.locator('[data-step="0"]').click();
  await page.locator('#name').fill('<b>Mira Vale</b>');
  for (let index = 0; index < 6; index++) await page.locator('#next').click();
  await expect(page.locator('.character-card__name')).toHaveText('<b>Mira Vale</b>');
  await expect(page.locator('.character-card__name b')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});
