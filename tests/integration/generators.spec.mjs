import { expect, test } from '@playwright/test';

const generators = [
  { name: 'Aventuras', path: '/generators/adventure-generator/', button: '#generate', result: '#results .adventure-result' },
  { name: 'Festanças', path: '/generators/carousing-generator/', button: '#roll-button', result: '#result-list .carousing-result-card' },
  { name: 'Encontros', path: '/generators/encounter-generator/', button: '#generate-button', result: '#result-list .encounter-result-card' },
  { name: 'Mapas de masmorras', path: '/generators/dungeon-map-generator/', button: '#generate', result: '#results .dungeon-result' },
  { name: 'Personagem nível 0', path: '/generators/level-zero-character/', button: '#generate-btn', result: '#generation-content .character-card' },
  { name: 'Personagens nível 1-10', path: '/generators/character-generator/', button: '#generate', result: '#results .character-card' },
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

test('home page links to all fifteen tool pages', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('.generator-grid a.tool-card[href]');
  await expect(links).toHaveCount(15);
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
  await expect(players).toHaveCount(4);
  await expect(gms).toHaveCount(11);

  // Player cards must lay out in a 3-column grid on desktop.
  const columns = await page.locator('#player-generator-grid').evaluate(grid => {
    const cards = [...grid.querySelectorAll('.tool-card')].map(card => card.getBoundingClientRect());
    const tops = cards.map(card => Math.round(card.top));
    const firstRowCount = cards.filter(card => Math.round(card.top) === tops[0]).length;
    return { firstRowCount, tops };
  });
  expect(columns.firstRowCount).toBe(3);

  await expect(players.nth(0)).toContainText('Gerador de Personagem Nível 0');
  await expect(players.nth(1)).toContainText('Gerador de Personagens');
  await expect(players.nth(2)).toContainText('Construtor de Personagem');
  await expect(players.nth(2)).toHaveAccessibleName('Construir personagem: Construtor de Personagem');
  await expect(players.nth(2).locator('img').first()).toHaveAttribute('src', 'assets/icons/lucide/clipboard-list.svg');
  await expect(players.nth(3)).toContainText('Gerador de Festanças');
  await page.locator('[data-lang="en"]').click();
  await expect(page.locator('#players-heading')).toHaveText('For players');
  await expect(page.locator('#gms-heading')).toHaveText('For GMs');
  await expect(players.nth(0)).toContainText('Level 0 Character Generator');
  await expect(players.nth(1)).toContainText('Character Generator');
  await expect(players.nth(2)).toContainText('Character Builder');
  await expect(players.nth(2)).toHaveAccessibleName('Build character: Character Builder');
  await expect(players.nth(3)).toContainText('Carousing Generator');
  await expect(gms.nth(7)).toContainText('Dungeon Map Generator');
  await expect(gms.nth(9)).toContainText('Magic');
  await expect(gms.nth(10)).toContainText('Magic Items');
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

test('magic page renders localized spells and generates items', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/magic/');
  await page.evaluate(() => localStorage.setItem('shadowdark-tools-lang', 'pt-BR'));
  await page.reload();

  const cards = page.locator('#spells-grid .spell-card');
  await expect(cards.first()).toBeVisible();
  await expect(page.locator('#spell-count')).toContainText('85');

  // pt-BR descriptions render by default.
  const firstCard = cards.first();
  await expect(firstCard.locator('.spell-card__description')).not.toBeEmpty();
  const ptDescription = await firstCard.locator('.spell-card__description').innerText();

  // Switching to EN must change the rendered prose.
  await page.locator('.magic-language-switch [data-lang="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.locator('#search-input').fill('alarm');
  await expect(page.locator('#spells-grid .spell-card')).toHaveCount(1);
  const enDescription = await page.locator('#spells-grid .spell-card .spell-card__description').innerText();
  expect(enDescription).not.toEqual(ptDescription);
  await page.locator('#search-input').fill('');

  // Language preference persists across reloads.
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  // Tier filter narrows the list.
  await page.locator('#filter-tier').selectOption('5');
  const tierBadges = await cards.locator('.spell-card__badge--tier').allInnerTexts();
  expect(tierBadges.length).toBeGreaterThan(0);
  expect(tierBadges.every((text) => text.includes('5'))).toBeTruthy();

  // Generators produce visible results.
  await page.locator('#generate-scroll').click();
  await expect(page.locator('#scroll-result')).toBeVisible();
  await page.locator('#generate-wand').click();
  await expect(page.locator('#wand-result')).toBeVisible();
  await page.locator('#generate-mishap').click();
  await expect(page.locator('#mishap-result')).toBeVisible();

  expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
});

test('magic items catalog renders items and generates scroll, wand, and magic item', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/magic/magic-items.html');
  await page.evaluate(() => localStorage.setItem('shadowdark-tools-lang', 'pt-BR'));
  await page.reload();

  const cards = page.locator('#items-grid .item-card');
  await expect(cards.first()).toBeVisible();
  await expect(page.locator('#item-count')).toContainText('91');

  // pt-BR content renders by default.
  const firstName = await cards.first().locator('.item-card__name').innerText();
  const firstDescription = await cards.first().locator('.item-card__description').innerText();
  expect(firstDescription.length).toBeGreaterThan(0);

  // Switching to EN must change the rendered prose.
  await page.locator('.magic-items-language-switch [data-lang="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  const enName = await cards.first().locator('.item-card__name').innerText();
  expect(enName).not.toEqual(firstName);

  // Language preference persists across reloads.
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  // Type filter narrows the list.
  await page.locator('#filter-type').selectOption('potion');
  const typeBadges = await cards.locator('.item-card__badge--type').allInnerTexts();
  expect(typeBadges.length).toBeGreaterThan(0);
  expect(typeBadges.every((text) => text.toLowerCase().includes('potion'))).toBeTruthy();

  // Generators produce visible results.
  await page.locator('#generate-scroll').click();
  await expect(page.locator('#scroll-result')).toBeVisible();
  await page.locator('#generate-wand').click();
  await expect(page.locator('#wand-result')).toBeVisible();
  await page.locator('#generate-magic-item').click();
  await expect(page.locator('#magic-item-result')).toBeVisible();

  expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
});

test('character generator builds level 1-10 characters and switches language', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/character-generator/');
  await page.evaluate(() => localStorage.setItem('shadowdark-tools-lang', 'pt-BR'));
  await page.reload();

  // Empty state before generating.
  await expect(page.locator('#empty')).toBeVisible();
  await expect(page.locator('#copy')).toBeDisabled();

  // Generate a single level 1 fighter.
  await page.locator('#level').selectOption('1');
  await page.locator('#class-select').selectOption('fighter');
  await page.locator('#generate').click();

  const card = page.locator('#results .character-card').first();
  await expect(card).toBeVisible();
  await expect(card.locator('.character-card__name')).not.toBeEmpty();
  await expect(card.locator('.character-card__level')).toContainText('1');
  await expect(card.locator('.character-card__stat')).toHaveCount(6);
  await expect(page.locator('#copy')).toBeEnabled();
  await expect(page.locator('#download')).toBeEnabled();

  // Level 10 wizard should show spells and a title.
  await page.locator('#level').selectOption('10');
  await page.locator('#class-select').selectOption('wizard');
  await page.locator('#generate').click();
  const highCard = page.locator('#results .character-card').first();
  await expect(highCard.locator('.character-card__level')).toContainText('10');
  await expect(highCard.locator('.character-card__spells')).toBeVisible();

  // Switching to EN re-localizes the rendered card.
  const ptTitle = await highCard.locator('.character-card__title').innerText();
  await page.locator('.character-language-switch [data-lang="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  const enTitle = await highCard.locator('.character-card__title').innerText();
  expect(enTitle).not.toEqual(ptTitle);
  await expect(page.locator('#nav-back-text')).toHaveText('Home');

  // Quantity control produces multiple cards.
  await page.locator('#count').fill('3');
  await page.locator('#generate').click();
  await expect(page.locator('#results .character-card')).toHaveCount(3);

  expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
});

test('character generator exports an elegant cards PDF', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.addInitScript(() => { Math.random = () => 0.42; });
  await page.goto('/generators/character-generator/');
  await page.evaluate(() => localStorage.setItem('shadowdark-tools-lang', 'pt-BR'));
  await page.reload();

  await page.locator('#generate').click();
  await expect(page.locator('#results .character-card').first()).toBeVisible();
  await expect(page.locator('#export-pdf')).toBeEnabled();

  // The export must build a styled cards PDF rather than a plain text dump.
  const built = await page.evaluate(() => {
    const cards = [{ title: 'Mira', badge: 'Mago 5', eyebrow: 'PERSONAGEM 1', stats: ['FOR 10 (+0)'], sections: [{ heading: 'PERFIL', lines: ['linha'] }] }];
    const blob = window.ShadowdarkExport.createCardsPdf({
      title: 'PERSONAGENS',
      subtitle: '1 personagem gerado',
      cards,
      footerLabel: 'SHADOWDARK TOOLS  -  PERSONAGENS',
    });
    return { size: blob.size, type: blob.type };
  });
  expect(built.type).toBe('application/pdf');
  expect(built.size).toBeGreaterThan(500);

  expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
});

test('action button icons stay dark on light backgrounds across generators', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.addInitScript(() => { Math.random = () => 0.42; });

  const cases = [
    { path: '/generators/character-generator/', generate: '#generate' },
    { path: '/generators/carousing-generator/', generate: '#roll-button' },
    { path: '/generators/encounter-generator/', generate: '#generate-button' },
    { path: '/generators/level-zero-character/', generate: '#generate-btn' },
  ];

  for (const item of cases) {
    await page.goto(item.path);
    await page.evaluate((sel) => document.querySelector(sel).click(), item.generate);
    await page.waitForTimeout(500);

    const filters = await page.evaluate(() => {
      const result = { primary: null, actions: [] };
      const primary = document.querySelector('button[class*="primary"]');
      if (primary) {
        const icon = primary.querySelector('img, .ui-icon');
        if (icon) result.primary = getComputedStyle(icon).filter;
      }
      document.querySelectorAll('button').forEach((button) => {
        if (button.className.includes('primary') || button.disabled) return;
        const icon = button.querySelector('img, .ui-icon');
        if (icon) result.actions.push(getComputedStyle(icon).filter);
      });
      return result;
    });

    if (filters.primary) {
      expect(filters.primary, `${item.path} primary icon should be inverted white`).toContain('invert(1)');
    }
    for (const filter of filters.actions) {
      expect(filter, `${item.path} action icon should stay dark`).not.toContain('invert(1)');
    }
  }

  expect(pageErrors, 'browser should not report uncaught page errors').toEqual([]);
});
