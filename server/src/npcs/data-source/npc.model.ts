import ref from "ref-napi";
import StructType from "ref-struct-di";
import ArrayType from "ref-array-di";

const struct = StructType(ref);
const array = ArrayType(ref);

export const StructBonusEffect = struct({
  type: ref.types.short,
  value: ref.types.short,
});

export type StructBonusEffectType = {
  type: number;
  value: number;
};

export const StructItem = struct({
  sIndex: ref.types.short,
  Value: ref.types.ushort,
  Flag: ref.types.uchar,
  Sanc: ref.types.uchar,
  stEffect: array(StructBonusEffect, 3),
});

export type StructItemType = {
  sIndex: number;
  Value: number;
  Flag: number;
  Sanc: number;
  stEffect: StructBonusEffectType[];
};

export const StructScore = struct({
  Level: ref.types.short,
  Ac: ref.types.int,
  Damage: ref.types.int,
  Reserved: ref.types.byte,
  AttackRun: ref.types.byte,
  MaxHp: ref.types.int,
  MaxMp: ref.types.int,
  Hp: ref.types.int,
  Mp: ref.types.int,
  Str: ref.types.ushort,
  Int: ref.types.ushort,
  Dex: ref.types.ushort,
  Con: ref.types.ushort,
  Special: array(ref.types.ushort, 4),
});

export type StructScoreType = {
  Level: number;
  Ac: number;
  Damage: number;
  Reserved: number;
  AttackRun: number;
  MaxHp: number;
  MaxMp: number;
  Hp: number;
  Mp: number;
  Str: number;
  Int: number;
  Dex: number;
  Con: number;
  Special: number[];
};

export const StructMob = struct({
  MobName: array(ref.types.char, 16),
  Clan: ref.types.char,
  Merchant: ref.types.uchar,
  Guild: ref.types.ushort,
  Class: ref.types.char,
  Rsv: ref.types.char,
  Quest: ref.types.ushort,
  Coin: ref.types.int,
  Exp: ref.types.longlong,
  HomeTownX: ref.types.ushort,
  HomeTownY: ref.types.ushort,
  BaseScore: StructScore,
  CurrentScore: StructScore,
  Equip: array(StructItem, 18),
  Carry: array(StructItem, 64),
  LearnedSkill: array(ref.types.uint, 2),
  ScoreBonus: ref.types.short,
  SpecialBonus: ref.types.short,
  SkillBonus: ref.types.short,
  Critical: ref.types.char,
  SaveMana: ref.types.char,
  ShortSkill: array(ref.types.char, 16),
  GuildLevel: ref.types.char,
  AttackSpeed: ref.types.short,
  CriticalDamage: ref.types.short,
  CriticalAc: ref.types.short,
  unk2: ref.types.int,
  RegenHp: ref.types.short,
  RegenMp: ref.types.short,
  Dummy: array(ref.types.uchar, 190),
  HideCostume: ref.types.char,
  GuildCooldownYear: ref.types.uchar,
  GuildCooldownMonth: ref.types.uchar,
  GuildCooldownDay: ref.types.uchar,
  Resist: array(ref.types.short, 4),
  Magic: ref.types.short,
  CurrentKill: ref.types.short,
  TotalKill: ref.types.short,
});

export type StructMobType = {
  MobName: string;
  Clan: number;
  Merchant: number;
  Guild: number;
  Class: number;
  Rsv: number;
  Quest: number;
  Coin: number;
  Exp: number;
  HomeTownX: number;
  HomeTownY: number;
  BaseScore: StructScoreType;
  CurrentScore: StructScoreType;
  Equip: StructItemType[];
  Carry: StructItemType[];
  LearnedSkill: number[];
  ScoreBonus: number;
  SpecialBonus: number;
  SkillBonus: number;
  Critical: number;
  SaveMana: number;
  ShortSkill: string;
  GuildLevel: number;
  AttackSpeed: number;
  CriticalDamage: number;
  CriticalAc: number;
  unk2: number;
  RegenHp: number;
  RegenMp: number;
  Dummy: number[];
  HideCostume: number;
  GuildCooldownYear: number;
  GuildCooldownMonth: number;
  GuildCooldownDay: number;
  Resist: number[];
  Magic: number;
  CurrentKill: number;
  TotalKill: number;
};
