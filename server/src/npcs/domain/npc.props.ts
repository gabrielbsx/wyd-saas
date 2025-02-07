type StructScoreType = {
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

export type StructItemType = {
  sIndex: number;
  Value: number;
  Flag: number;
  Sanc: number;
  stEffect: StructBonusEffectType[];
};

export type StructBonusEffectType = {
  type: number;
  value: number;
};

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
