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
