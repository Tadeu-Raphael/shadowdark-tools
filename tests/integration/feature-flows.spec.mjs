import { expect, test } from '@playwright/test';

test('dungeon rooms include linked trap, hazard, treasure, and monster generators', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('shadowdark-tools-lang', 'pt-BR');
    window.setDungeonRolls = () => {
      const die = (sides, result) => (result - 0.5) / sides;
      window.randomQueue = [
        die(10, 3), die(6, 2), die(12, 7),
        die(10, 4), die(6, 2), die(12, 8),
        die(10, 8), die(6, 2), die(12, 9),
        die(10, 9), die(6, 2), die(100, 1),
        die(10, 5), die(6, 2), die(20, 10), die(3, 2),
        die(12, 4), die(12, 6), die(6, 3), die(2, 1), die(2, 1),
      ];
      Math.random = () => window.randomQueue.length ? window.randomQueue.shift() : 0.42;
    };
    Math.random = () => 0.42;
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/generators/dungeon-map-generator/');
  await page.locator('#size').selectOption('0');
  await page.locator('#site-type').selectOption('0');
  await page.locator('#danger').selectOption('0');
  await page.locator('#party-level').selectOption('4');
  await page.evaluate(() => window.setDungeonRolls());
  await page.locator('#generate').click();
  const linked = page.locator('.dungeon-room-linked');
  await expect(linked).toHaveCount(5);
  await expect(linked.nth(0)).toContainText('Armadilha');
  await expect(linked.nth(1)).toContainText('Hazard');
  await expect(linked.nth(2)).toContainText('Hazard');
  await expect(linked.nth(3)).toContainText('Tesouro 4–6');
  await expect(linked.nth(4)).toContainText('Monstro');
  await page.locator('[data-lang="en"]').click();
  await expect(linked.nth(0)).toContainText('Trap');
  await expect(linked.nth(3)).toContainText('Treasure 4–6');
  await expect(linked.nth(4)).toContainText('Monster');
  expect(errors).toEqual([]);
});

test('treasure generator supports each generation mode', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => { localStorage.setItem('shadowdark-tools-lang', 'pt-BR'); window.setFirstRandom = (value) => { let first = true; Math.random = () => { if (first) { first = false; return value; } return 0.42; }; }; Math.random = () => 0.42; });
  await page.goto('/generators/treasure-generator/');
  for (const mode of ['treasure', 'mundane', 'luxury', 'boon', 'magic']) {
    await page.locator('#generation-mode').selectOption(mode);
    await page.locator('#generate').click();
    await expect(page.locator('#results .treasure-result')).toHaveCount(1);
    await expect(page.locator('#results .treasure-result').first()).not.toBeEmpty();
  }
  for (const [die, label] of [[1, 'Armadura'], [2, 'Poção'], [3, 'Pergaminho'], [4, 'Utilitário'], [5, 'Varinha'], [6, 'Arma']]) {
    await page.locator('#generation-mode').selectOption('magic');
    await page.evaluate((roll) => window.setFirstRandom((roll - 0.5) / 6), die);
    await page.locator('#generate').click();
    await expect(page.locator('#results .treasure-result')).toContainText(label);
  }
  expect(errors).toEqual([]);
});

test('treasure d100 boundary and wandering-monster chance render correctly', async ({ page }) => {
  await page.addInitScript(() => { localStorage.setItem('shadowdark-tools-lang', 'pt-BR'); window.setFirstRandom = (value) => { let first = true; Math.random = () => { if (first) { first = false; return value; } return 0.42; }; }; Math.random = () => 0.42; });
  await page.goto('/generators/treasure-generator/');
  await page.locator('#generation-mode').selectOption('treasure');
  await page.evaluate(() => window.setFirstRandom(0.999));
  await page.locator('#generate').click();
  await expect(page.locator('#results .treasure-result')).toContainText('d100 00');

  await page.locator('#source-mode').selectOption('wandering');
  await page.evaluate(() => window.setFirstRandom(0.999));
  await page.locator('#generate').click();
  await expect(page.locator('#results .treasure-result')).toContainText('Sem tesouro');
});

test('carousing generator supports standard and expanded rules', async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/carousing-generator/');
  for (const mode of ['standard', 'expanded']) {
    await page.locator('#mode-select').selectOption(mode);
    await page.locator('#roll-button').click();
    await expect(page.locator('#result-list .carousing-result-card')).toHaveCount(1);
    await expect(page.locator('#result-list .carousing-result-card')).not.toBeEmpty();
  }
});

test('NPC generator supports normal NPCs, individual rivals, and rival parties', async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/npc-generator/');
  await page.locator('#generate').click();
  await expect(page.locator('#results .npc-result')).toHaveCount(1);

  await page.locator('#mode').selectOption('rival');
  await page.locator('#rival-type').selectOption('single');
  await page.locator('#generate').click();
  await expect(page.locator('#results .npc-result')).toHaveCount(1);

  await page.locator('#rival-type').selectOption('party');
  await page.locator('#generate').click();
  await expect(page.locator('#results .npc-result')).toHaveCount(1);
  await expect(page.locator('#results .npc-result').first()).toContainText(/Integrantes|Members/);
});

test('settlement generator creates settlements, taverns, and shops', async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/settlement-generator/');
  for (const mode of ['settlement', 'tavern', 'shop']) {
    await page.locator('#mode').selectOption(mode);
    await page.locator('#generate').click();
    await expect(page.locator('#results .settlement-result')).toHaveCount(1);
    await expect(page.locator('#results .settlement-result').first()).not.toBeEmpty();
  }
});

test('encounter supplemental and hazard tables roll independently', async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/encounter-generator/');
  for (const [button, result] of [
    ['#something-button', '#something-result'],
    ['#rumors-button', '#rumors-result'],
    ['#trap-button', '#trap-result'],
    ['#hazard-button', '#hazard-result'],
    ['#distance-button', '#distance-result'],
    ['#activity-button', '#activity-result'],
    ['#reaction-button', '#reaction-result'],
    ['#treasure-button', '#treasure-result'],
  ]) {
    await page.locator(button).click();
    await expect(page.locator(result)).not.toBeEmpty();
  }
});

test('treasure generator localizes labels and tables to English', async ({ page }) => {
  await page.addInitScript(() => { localStorage.setItem('shadowdark-tools-lang', 'pt-BR'); Math.random = () => 0.42; });
  await page.goto('/generators/treasure-generator/');
  await page.locator('[data-lang="en"]').click();
  await expect(page.locator('#title')).toHaveText('Treasure Generator');
  await page.locator('#generation-mode').selectOption('magic');
  await page.locator('#generate').click();
  await expect(page.locator('#results .treasure-result')).toContainText('Type');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('all generators expose icon actions and download a PDF of generated results', async ({ page }) => {
  const flows = [
    ['/generators/adventure-generator/', '#generate', '[data-export-pdf]'],
    ['/generators/carousing-generator/', '#roll-button', '[data-export-pdf]'],
    ['/generators/dungeon-map-generator/', '#generate', '[data-export-pdf]'],
    ['/generators/encounter-generator/', '#generate-button', '[data-export-pdf]'],
    ['/generators/level-zero-character/', '#generate-btn', '#export-pdf-btn'],
    ['/generators/monster-generator/', '#generate', '[data-export-pdf]'],
    ['/generators/npc-generator/', '#generate', '[data-export-pdf]'],
    ['/generators/overland-hex-generator/', '#generate', '[data-export-pdf]'],
    ['/generators/settlement-generator/', '#generate', '[data-export-pdf]'],
    ['/generators/treasure-generator/', '#generate', '[data-export-pdf]'],
  ];
  await page.addInitScript(() => { Math.random = () => 0.42; });

  for (const [path, generateSelector, pdfSelector] of flows) {
    await page.goto(path);
    for (const action of ['copy', 'txt']) {
      const button = page.locator(`[data-export-action="${action}"]`);
      await expect(button).toBeVisible();
      const hasIcon = await button.evaluate(element => Boolean(element.querySelector('img')) || getComputedStyle(element, '::before').maskImage !== 'none');
      expect(hasIcon).toBe(true);
    }
    const pdfButton = page.locator(pdfSelector);
    await expect(pdfButton).toBeDisabled();
    if (path.includes('level-zero-character')) await page.locator('#lang-select').selectOption('pt-BR');
    await page.locator(generateSelector).click();
    await expect(pdfButton).toBeEnabled({ timeout: 5000 });
    const levelZeroName = path.includes('level-zero-character')
      ? await page.locator('.character-card__title').first().innerText()
      : null;
    if (path.includes('level-zero-character')) {
      await page.evaluate(() => { window.__printCalls = 0; window.print = () => { window.__printCalls += 1; }; });
      const pdfIcon = await pdfButton.evaluate(button => ({ svg: button.querySelectorAll('svg').length, pseudo: getComputedStyle(button, '::before').maskImage }));
      expect(pdfIcon.svg).toBe(1);
      expect(pdfIcon.pseudo).toBe('none');
    }
    const downloadEvent = page.waitForEvent('download');
    await pdfButton.click();
    const download = await downloadEvent;
    expect(download.suggestedFilename()).toMatch(/\.pdf$/);
    const filePath = await download.path();
    const content = await import('node:fs/promises').then(({ readFile }) => readFile(filePath));
    expect(content.subarray(0, 8).toString()).toBe('%PDF-1.4');
    if (levelZeroName) {
      const pdfText = new TextDecoder('windows-1252').decode(content);
      expect(pdfText).toContain('PERSONAGENS NÍVEL 0');
      expect(pdfText).toContain(levelZeroName);
      expect(pdfText).toContain('PERSONAGEM 1 DE 4');
      expect(pdfText).toContain('/Count 4');
      expect(pdfText).toContain('0.95 0.94 0.91 rg');
      expect(await page.evaluate(() => window.__printCalls)).toBe(0);
    }
  }
});
