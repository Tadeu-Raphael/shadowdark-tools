import { expect, test } from '@playwright/test';

const generators = [
  { name: 'Aventuras', path: '/generators/adventure-generator/', button: '#generate', result: '#results .adventure-result' },
  { name: 'Festanças', path: '/generators/carousing-generator/', button: '#roll-button', result: '#result-list .carousing-result-card' },
  { name: 'Encontros', path: '/generators/encounter-generator/', button: '#generate-button', result: '#result-list .encounter-result-card' },
  { name: 'Mapas de masmorras', path: '/generators/dungeon-map-generator/', button: '#generate', result: '#results .dungeon-result' },
  { name: 'Personagem nível 0', path: '/generators/level-zero-character/', button: '#generate-btn', result: '#generation-content .character-card' },
  { name: 'Monstros', path: '/generators/monster-generator/', button: '#generate', result: '#results .monster-result' },
  { name: 'NPCs', path: '/generators/npc-generator/', button: '#generate', result: '#results .npc-result' },
  { name: 'Terrenos hexagonais', path: '/generators/overland-hex-generator/', button: '#generate', result: '#results .overland-result' },
  { name: 'Cidades e assentamentos', path: '/generators/settlement-generator/', button: '#generate', result: '#results .settlement-result' },
  { name: 'Tesouros', path: '/generators/treasure-generator/', button: '#generate', result: '#results .treasure-result' },
];

for (const generator of generators) {
  test(`${generator.name}: página inicializa e gera um resultado`, async ({ page }) => {
    const pageErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.addInitScript(() => { Math.random = () => 0.42; });
    await page.goto(generator.path);
    await expect(page.locator(generator.button)).toBeVisible();
    await page.locator(generator.button).click();
    await expect(page.locator(generator.result).first()).toBeVisible();
    await expect(page.locator(generator.result).first()).not.toBeEmpty();
    expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
  });
}

test('home page links to all eleven generator pages', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('.generator-grid a.tool-card[href]');
  await expect(links).toHaveCount(11);
  for (const link of await links.all()) {
    const href = await link.getAttribute('href');
    const response = await page.request.get(new URL(href, page.url()).toString());
    expect(response.ok(), `${href} should resolve`).toBeTruthy();
  }
});


test('home page separates player and GM generators in both languages', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('shadowdark-tools-lang', 'pt-BR'));
  await page.goto('/');
  const players = page.locator('#player-generator-grid a.tool-card[href]');
  const gms = page.locator('#gm-generator-grid a.tool-card[href]');
  await expect(page.locator('#players-heading')).toHaveText('Para jogadores');
  await expect(page.locator('#gms-heading')).toHaveText('Para mestres');
  await expect(players).toHaveCount(2);
  await expect(gms).toHaveCount(9);
  const twoCardAlignment = await page.locator('#player-generator-grid').evaluate(grid => {
    const cards = [...grid.querySelectorAll('.tool-card')].map(card => card.getBoundingClientRect());
    const gridRect = grid.getBoundingClientRect();
    return Math.abs((cards[0].left + cards[1].right) / 2 - (gridRect.left + gridRect.right) / 2);
  });
  expect(twoCardAlignment).toBeLessThan(2);
  await expect(players.nth(0)).toContainText('Gerador de Personagem Nível 0');
  await expect(players.nth(1)).toContainText('Gerador de Festanças');
  await page.locator('[data-lang="en"]').click();
  await expect(page.locator('#players-heading')).toHaveText('For players');
  await expect(page.locator('#gms-heading')).toHaveText('For GMs');
  await expect(players.nth(0)).toContainText('Level 0 Character Generator');
  await expect(gms.nth(7)).toContainText('Dungeon Map Generator');
  await page.locator('#player-generator-grid .tool-card').last().evaluate(card => card.remove());
  const oneCardAlignment = await page.locator('#player-generator-grid').evaluate(grid => {
    const card = grid.querySelector('.tool-card').getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    return Math.abs((card.left + card.right) / 2 - (gridRect.left + gridRect.right) / 2);
  });
  expect(oneCardAlignment).toBeLessThan(2);
});

test('bestiary renders localized monsters and switches language', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.goto('/generators/bestiary/');
  await page.evaluate(() => localStorage.setItem('shadowdark-tools-lang', 'pt-BR'));
  await page.reload();

  const cards = page.locator('#monsters-grid .monster-card');
  await expect(cards.first()).toBeVisible();
  await expect(page.locator('#monster-count')).toContainText('238');

  // pt-BR content is rendered by default.
  const firstCard = cards.first();
  await expect(firstCard.locator('.monster-card__description')).not.toBeEmpty();
  await expect(firstCard.locator('.monster-card__attack-desc')).not.toBeEmpty();
  const ptDescription = await firstCard.locator('.monster-card__description').innerText();
  const ptAbilities = await firstCard.locator('.monster-card__ability').allInnerTexts();

  // Switching to EN must change the rendered prose.
  await page.locator('.bestiary-language-switch [data-lang="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  const enDescription = await firstCard.locator('.monster-card__description').innerText();
  const enAbilities = await firstCard.locator('.monster-card__ability').allInnerTexts();
  expect(enDescription).not.toEqual(ptDescription);
  expect(enAbilities).not.toEqual(ptAbilities);

  // Ability names stay bold in both languages.
  await expect(firstCard.locator('.monster-card__ability strong').first()).toBeVisible();

  // Language preference persists across reloads.
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  // Search finds monsters by localized content.
  await page.locator('#search-input').fill('aboleth');
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText('ABOLETH');

  expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
});
