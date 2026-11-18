import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dataFiles = [
  ['generators/adventure-generator/adventure-data.js', 'ADVENTURE_DATA'],
  ['generators/bestiary/bestiary-data.js', 'BESTIARY_DATA'],
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
    // `abilities` is legitimately empty for creatures with no special powers.
    if (!location.endsWith('.abilities')) {
      assert.ok(value.length > 0, `${location} should not be an empty table`);
    }
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

test('shared encounter trap and hazard tables can feed dungeon rooms', async () => {
  const data = await loadData('generators/encounter-generator/extra-tables.js', 'ENCOUNTER_EXTRA_TABLES');
  assert.equal(data.traps.length, 12);
  assert.equal(data.hazards.length, 12);
  assert.ok(data.traps.every((entry) => entry.name.length === 2 && entry.trigger.length === 2 && entry.effect.length === 2));
  assert.ok(data.hazards.every((entry) => entry.movement.length === 2 && entry.damage.length === 2 && entry.weaken.length === 2));
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
  assert.deepEqual(Array.from(expanded), Array.from({ length: 100 }, (_, index) => index + 1));
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

test('bestiary monsters carry complete pt-BR translations', async () => {
  const data = await loadData('generators/bestiary/bestiary-data.js', 'BESTIARY_DATA');
  assert.equal(data.monsters.length, 238);

  for (const monster of data.monsters) {
    const where = monster.name;
    assert.ok(monster.description_pt, `${where} needs description_pt`);
    assert.ok(monster.atk_pt, `${where} needs atk_pt`);
    assert.ok(monster.mv_pt, `${where} needs mv_pt`);
    assert.ok(Array.isArray(monster.abilities), `${where} needs an abilities array`);

    for (const ability of monster.abilities) {
      assert.equal(typeof ability, 'object', `${where} abilities must be en/pt pairs`);
      assert.ok(ability.en, `${where} ability needs en`);
      assert.ok(ability.pt, `${where} ability needs pt`);
      assert.notEqual(ability.en, ability.pt, `${where} ability en and pt must differ`);
    }
  }
});

test('bestiary pt-BR text keeps game jargon and leaks no English prose', async () => {
  const data = await loadData('generators/bestiary/bestiary-data.js', 'BESTIARY_DATA');
  const englishProse = /\b(the|and|with|from|target|within|creature|rounds|damage|attack|immune)\b/i;

  for (const monster of data.monsters) {
    const ptText = [monster.description_pt, monster.atk_pt, monster.mv_pt,
      ...monster.abilities.map((a) => a.pt)].join(' ');
    // Range/pace tokens are intentionally kept in English by design.
    const scrubbed = ptText.replace(/\b(near|far|close|double|swim|fly|climb|burrow|teleport)\b/g, '');
    assert.ok(!englishProse.test(scrubbed),
      `${monster.name} pt-BR text still contains English prose`);
  }
});

test('bestiary legendary monsters have correct stat blocks (regression)', async () => {
  const data = await loadData('generators/bestiary/bestiary-data.js', 'BESTIARY_DATA');
  const byName = Object.fromEntries(data.monsters.map((m) => [m.name, m]));

  // These three were previously shifted due to a PDF layout quirk.
  assert.equal(byName['THE TEN-EYED ORACLE'].lv, 18, 'Ten-Eyed Oracle LV');
  assert.equal(byName['THE TEN-EYED ORACLE'].ac, '17', 'Ten-Eyed Oracle AC');
  assert.equal(byName['THE TEN-EYED ORACLE'].hp, 85, 'Ten-Eyed Oracle HP');

  assert.equal(byName['THE TARRASQUE'].lv, 30, 'Tarrasque LV');
  assert.equal(byName['THE TARRASQUE'].ac, '22', 'Tarrasque AC');
  assert.equal(byName['THE TARRASQUE'].hp, 140, 'Tarrasque HP');

  assert.equal(byName['THE WANDERING MERCHANT'].lv, 15, 'Wandering Merchant LV');
  assert.equal(byName['THE WANDERING MERCHANT'].ac, '16 (mithral chainmail)', 'Wandering Merchant AC');
  assert.equal(byName['THE WANDERING MERCHANT'].hp, 71, 'Wandering Merchant HP');
});

test('magic data carries complete bilingual spells and mishap tables', async () => {
  const data = await loadData('generators/magic/magic-data.js', 'MAGIC_DATA');
  assert.equal(data.spells.length, 85);
  assert.equal(data.scrollFeatures.length, 8);
  assert.equal(data.wandFeatures.length, 8);
  assert.deepEqual(Object.keys(data.mishaps), ['1', '2', '3']);

  const seen = new Set();
  for (const spell of data.spells) {
    assert.ok(spell.name, 'spell needs a name');
    assert.ok(!seen.has(spell.name), `${spell.name} must be unique`);
    seen.add(spell.name);
    assert.ok(spell.tier >= 1 && spell.tier <= 5, `${spell.name} tier must be 1-5`);
    assert.ok(spell.classes.length > 0, `${spell.name} needs at least one class`);
    assert.ok(spell.classes.every((entry) => ['wizard', 'priest'].includes(entry)),
      `${spell.name} has an unknown class`);
    assert.ok(spell.duration, `${spell.name} needs a duration`);
    assert.ok(spell.range, `${spell.name} needs a range`);
    assert.ok(spell.description, `${spell.name} needs description`);
    assert.ok(spell.description_pt, `${spell.name} needs description_pt`);
    assert.notEqual(spell.description, spell.description_pt,
      `${spell.name} description and description_pt must differ`);
  }

  for (const [tier, effects] of Object.entries(data.mishaps)) {
    assert.equal(effects.length, 12, `mishap tier ${tier} must have 12 rows`);
    for (const effect of effects) {
      assert.ok(effect.name, `mishap tier ${tier} needs a name`);
      assert.ok(effect.name_pt, `mishap tier ${tier} needs name_pt`);
      assert.ok(effect.description, `mishap tier ${tier} needs a description`);
    }
  }
});

test('magic item catalog carries complete bilingual items', async () => {
  const data = await loadData('generators/magic/magic-item-catalog.js', 'MAGIC_ITEM_CATALOG');
  assert.equal(data.items.length, 91);
  assert.deepEqual(Object.keys(data.types), ['armor', 'weapon', 'potion', 'wand', 'staff', 'ring', 'wondrous']);

  const seen = new Set();
  for (const item of data.items) {
    assert.ok(item.name, 'item needs a name');
    assert.ok(!seen.has(item.name), `${item.name} must be unique`);
    seen.add(item.name);
    assert.ok(data.types[item.type], `${item.name} has an unknown type`);
    assert.ok(item.description, `${item.name} needs description`);
    assert.ok(item.description_pt, `${item.name} needs description_pt`);
    assert.notEqual(item.description, item.description_pt,
      `${item.name} description and description_pt must differ`);
    assert.ok(Array.isArray(item.benefits), `${item.name} needs a benefits array`);
    assert.ok(Array.isArray(item.curses), `${item.name} needs a curses array`);
    assert.equal(item.benefits.length, item.benefits_pt.length,
      `${item.name} benefits and benefits_pt must match in length`);
    assert.equal(item.curses.length, item.curses_pt.length,
      `${item.name} curses and curses_pt must match in length`);
    if (item.bonus) {
      assert.ok(item.bonus_pt, `${item.name} needs bonus_pt when it has a bonus`);
    }
    if (item.alignment) {
      assert.ok(item.alignment_pt, `${item.name} needs alignment_pt when it has an alignment`);
    }
    if (item.personality) {
      assert.ok(item.personality_pt, `${item.name} needs personality_pt when it has a personality`);
    }
  }
});
