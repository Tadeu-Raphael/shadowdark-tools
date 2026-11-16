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

test('home page links to all ten generator pages', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('#generator-grid a.tool-card[href]');
  await expect(links).toHaveCount(10);
  for (const link of await links.all()) {
    const href = await link.getAttribute('href');
    const response = await page.request.get(new URL(href, page.url()).toString());
    expect(response.ok(), `${href} should resolve`).toBeTruthy();
  }
});
