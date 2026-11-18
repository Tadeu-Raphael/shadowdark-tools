import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const context = vm.createContext({ window: {} });
for (const file of [
  'js/character-names.js',
  'generators/character-generator/character-data.js',
  'generators/character-generator/character-rules.js',
  'generators/character-builder/builder-rules.js',
]) {
  vm.runInContext(await readFile(new URL(`../../${file}`, import.meta.url), 'utf8'), context, { filename: file });
}
const { CHARACTER_DATA: D, ShadowdarkCharacterNames: N, ShadowdarkCharacterRules: R, ShadowdarkBuilderRules: B } = context.window;
const plain = (value) => JSON.parse(JSON.stringify(value));
const stats = (score = 9) => Object.fromEntries(D.STATS.map(({ key }) => [key, score]));
const randomQueue = (values) => {
  let index = 0;
  return () => {
    assert.ok(index < values.length, 'unexpected extra random draw');
    return values[index++];
  };
};
const draftWithRolls = (overrides = {}) => {
  const draft = Object.assign(B.createDraft(), { name: 'Elga Alric', scores: stats(), ...overrides });
  Object.assign(draft, B.rollVitals(draft, () => 0.42));
  draft.talentChoices = draft.talents.map((entry) => B.talentOptions(draft.classKey, entry.roll)[0].key);
  return draft;
};

test('double names use two distinct entries of the selected ancestry in both languages', () => {
  for (const ancestry of D.ANCESTRIES) {
    for (const lang of ['pt', 'en']) {
      const table = D.NAMES[ancestry.key][lang];
      for (const value of [0, 0.42, 0.999999]) {
        const result = N.rollName(table, () => value);
        assert.notEqual(result.roll1, result.roll2);
        assert.equal(result.name, `${table[result.roll1 - 1]} ${table[result.roll2 - 1]}`);
        assert.equal(result.die, 'd20');
      }
      assert.equal(N.rollName(table, randomQueue([0, 0.999999])).name, `${table[0]} ${table[19]}`);
    }
  }
  assert.throws(() => N.rollName([]), /at least two/);
});

test('shared HP applies at least +1 CON once and preserves both dwarf rolls at every level', () => {
  for (const classData of D.CLASSES) {
    for (const con of [3, 5, 7, 9, 10, 12, 14, 16, 18]) {
      for (const level of [1, 2, 10]) {
        const hp = R.hitPoints(classData, level, { con }, 'human', () => 0);
        assert.equal(hp.total, level + Math.max(1, R.modifier(con)));
        assert.ok(hp.rolls.every((roll) => roll.r1 === 1 && roll.r2 === null && roll.kept === 1));
      }
    }
  }
  const dwarf = R.hitPoints(D.CLASSES[0], 3, { con: 9 }, 'dwarf', randomQueue([0, .99, .55, .2, .4, .4]));
  assert.deepEqual(plain(dwarf.rolls), [{ r1: 1, r2: 8, kept: 8 }, { r1: 5, r2: 2, kept: 5 }, { r1: 4, r2: 4, kept: 4 }]);
  assert.equal(dwarf.total, 20);
});

test('builder rolls 3d6 boundaries and grants humans two talents at level 1', () => {
  assert.deepEqual(plain(B.rollStats(() => 0).scores), stats(3));
  assert.deepEqual(plain(B.rollStats(() => .99999).scores), stats(18));
  for (const ancestry of D.ANCESTRIES) {
    const draft = draftWithRolls({ ancestry: ancestry.key });
    assert.equal(draft.talents.length, ancestry.key === 'human' ? 2 : 1);
    assert.ok(draft.talents.every((entry) => entry.level === 1 && entry.roll === 6));
    assert.equal(B.validate(draft, 3), null);
  }
  const thief = draftWithRolls({ classKey: 'thief' });
  Object.assign(thief, B.rollVitals(thief, () => 0));
  assert.equal(thief.talents[0].roll, 2);
  assert.notEqual(thief.talents[1].roll, 2);
  assert.deepEqual(plain(thief.talents[1].rerolled), [1, 1]);
});

test('every class talent outcome has unique bilingual choices and applies ability bonuses', () => {
  for (const cls of D.CLASSES) {
    for (let roll = 2; roll <= 12; roll++) {
      const options = B.talentOptions(cls.key, roll);
      assert.ok(options.length > 0);
      assert.equal(new Set(options.map((entry) => entry.key)).size, options.length);
      assert.ok(options.every((entry) => entry.pt && entry.en));
    }
  }
  const dwarf = draftWithRolls({ ancestry: 'dwarf' });
  dwarf.talents[0].roll = 8;
  dwarf.talentChoices = ['stat:con:2'];
  assert.equal(B.scores(dwarf).con, 11);
  assert.equal(dwarf.scores.con, 9, 'base stats are not mutated');
  assert.equal(B.summary(dwarf).hp, 7);
});

test('builder validates every step and calculates armor, purchases and slots', () => {
  const empty = B.createDraft();
  assert.equal(B.validate(empty, 0), 'nameRequired');
  assert.equal(B.validate(empty, 1), 'statsRequired');
  assert.equal(B.validate(empty, 3), 'rollRequired');
  const dwarf = draftWithRolls({ ancestry: 'dwarf', weapon: 'longsword', armor: 'leather', kit: true });
  assert.equal(B.validate(dwarf, 5), null);
  const result = B.summary(dwarf);
  assert.equal(result.ac, 10);
  assert.equal(result.gold, 400);
  assert.equal(result.inventory.slots, 9);
  dwarf.armor = 'plate';
  assert.equal(B.validate(dwarf, 5), 'overBudget');
  dwarf.armor = 'leather';
  dwarf.goldRolls = [6, 6];
  dwarf.gear = ['torch', 'oil'];
  assert.equal(B.validate(dwarf, 5), 'overCapacity');
  dwarf.gear = [];
  dwarf.weapon = 'greatsword';
  dwarf.shield = true;
  assert.equal(B.validate(dwarf, 5), 'twoHands');
  dwarf.shield = false;
  dwarf.armor = 'plate';
  assert.equal(B.summary(dwarf).ac, 15, 'plate ignores negative DEX');
  assert.equal(B.price('5 cp'), 5);
  assert.equal(B.price('5 sp'), 50);
  assert.throws(() => B.price('Varia'), /Unknown equipment price/);
});

test('class, deity, languages and spell choices enforce their constraints', () => {
  const wizard = draftWithRolls({ classKey: 'wizard', ancestry: 'dwarf' });
  assert.deepEqual(Array.from(R.weapons('wizard'), (entry) => entry.key), ['dagger', 'staff']);
  assert.equal(R.armors('wizard').length, 0);
  assert.equal(B.validate(wizard, 4), 'spellsRequired');
  wizard.spells = ['Alarm', 'Burning hands', 'Charm person'];
  assert.equal(B.validate(wizard, 4), 'languagesRequired');
  wizard.languages = ['elvish', 'giant', 'celestial', 'diabolic'];
  assert.equal(B.validate(wizard, 4), null);
  wizard.talents[0].roll = 10;
  wizard.talentChoices[0] = 'extra-spell';
  assert.equal(B.spellCount(wizard), 4);
  assert.equal(B.validate(wizard, 4), 'spellsRequired');
  wizard.spells.push('Detect magic');
  assert.equal(B.validate(wizard, 4), null);
  wizard.weapon = 'dagger';
  wizard.armor = 'leather';
  assert.equal(B.validate(wizard, 5), 'armorInvalid');

  const priest = draftWithRolls({ classKey: 'priest', ancestry: 'elf' });
  assert.equal(B.validate(priest, 2), 'deityRequired');
  priest.deity = 'memnon';
  assert.equal(B.validate(priest, 2), 'deityRequired');
  priest.deity = 'madeera';
  assert.equal(B.validate(priest, 2), null);
  priest.talents[0].roll = 2;
  priest.talentChoices[0] = 'advantage:Light';
  priest.spells = ['Cure wounds', 'Holy weapon'];
  assert.equal(B.validate(priest, 4), 'knownSpellRequired');
  priest.spells = ['Light', 'Holy weapon'];
  priest.languages = ['primordial'];
  assert.equal(B.validate(priest, 4), null);
});
