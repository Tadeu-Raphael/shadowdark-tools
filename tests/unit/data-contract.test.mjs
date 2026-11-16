import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dataFiles = [
  ['generators/adventure-generator/adventure-data.js', 'ADVENTURE_DATA'],
  ['generators/carousing-generator/carousing-data.js', 'CAROUSING_DATA'],
  ['generators/dungeon-map-generator/dungeon-data.js', 'DUNGEON_DATA'],
  ['generators/encounter-generator/extra-tables.js', 'ENCOUNTER_EXTRA_TABLES'],
  ['generators/monster-generator/monster-data.js', 'MONSTER_DATA'],
  ['generators/npc-generator/npc-data.js', 'NPC_DATA'],
  ['generators/overland-hex-generator/overland-data.js', 'OVERLAND_DATA'],
  ['generators/settlement-generator/settlement-data.js', 'SETTLEMENT_DATA'],
  ['generators/treasure-generator/treasure-data.js', 'TREASURE_DATA'],
  ['generators/treasure-generator/treasure-extra-data.js', 'TREASURE_EXTRA'],
  ['generators/treasure-generator/treasure-magic-data.js', 'TREASURE_MAGIC'],
];

async function loadData(relativePath, globalName) {
  const source = await readFile(path.join(root, relativePath), 'utf8');
  const window = {};
  vm.runInNewContext(source, { window }, { filename: relativePath });
  assert.ok(window[globalName], `${relativePath} must assign window.${globalName}`);
  return window[globalName];
}

function inspectData(value, location = 'data') {
  if (Array.isArray(value)) {
    assert.ok(value.length > 0, `${location} should not be an empty table`);
    value.forEach((entry, index) => inspectData(entry, `${location}[${index}]`));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, entry]) => inspectData(entry, `${location}.${key}`));
  } else {
    assert.notEqual(value, undefined, `${location} must be defined`);
    assert.notEqual(value, null, `${location} must not be null`);
    if (typeof value === 'string') assert.notEqual(value.trim(), '', `${location} must not be blank`);
  }
}

test('all external table scripts parse and publish their expected data global', async (t) => {
  for (const [file, globalName] of dataFiles) {
    await t.test(globalName, async () => {
      const data = await loadData(file, globalName);
      assert.equal(typeof data, 'object');
      inspectData(data, globalName);
    });
  }
});

test('treasure d100 tiers cover every roll from 01 through 00', async () => {
  const data = await loadData('generators/treasure-generator/treasure-data.js', 'TREASURE_DATA');
  assert.equal(data.ranges.length, 50);
  assert.equal(data.tiers.length, 4);
  const expanded = data.ranges.flatMap((range) => {
    if (range === '00') return [100];
    const [first, last = first] = range.split('–').map(Number);
    return Array.from({ length: last - first + 1 }, (_, offset) => first + offset);
  });
  assert.deepEqual(expanded, Array.from({ length: 100 }, (_, index) => index + 1));
  for (const tier of data.tiers) {
    assert.equal(tier.rows.length, data.ranges.length);
    assert.ok(tier.rows.every((row) => Array.isArray(row) && row.length === 2));
    assert.equal(data.ranges.at(-1), '00');
  }
});

test('magic item tables have matching dimensions for their dice', async () => {
  const data = await loadData('generators/treasure-generator/treasure-magic-data.js', 'TREASURE_MAGIC');
  assert.equal(data.armorFeature.length, 20);
  assert.equal(data.armorBenefit.length, 12);
  assert.equal(data.armorCurse.length, 12);
  assert.equal(data.potionFeatures.length, 8);
  assert.equal(data.potionFeature2.length, 8);
  assert.equal(data.potionFeature3.length, 8);
  assert.equal(data.potionBenefit.length, 12);
  assert.equal(data.potionCurse.length, 12);
  assert.equal(data.spells.length, 5);
  assert.ok(data.spells.every((tier) => tier.length === 12));
  assert.equal(data.utilityTypes.length, 20);
  assert.equal(data.weaponTypes.length, 20);
  assert.equal(data.weaponBenefit.length, 12);
  assert.equal(data.weaponCurse.length, 12);
});
