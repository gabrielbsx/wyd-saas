import { Npc } from "../domain/npc";
import { StructMob } from "./npc.model";

export class NpcMapper {
  public static mapNpc(npcBuffer: Buffer): Npc {
    const npcFileStruct = StructMob();
    const npcFileBufferWithNotOutOfBounds = Buffer.alloc(npcFileStruct.ref().length);
    npcBuffer.copy(npcFileBufferWithNotOutOfBounds);
    npcFileStruct.ref().set(npcFileBufferWithNotOutOfBounds);

    const npc: Npc = {
      MobName: npcFileStruct.MobName.buffer.readCString(),
      Clan: npcFileStruct.Clan,
      Merchant: npcFileStruct.Merchant,
      Guild: npcFileStruct.Guild,
      Class: npcFileStruct.Class,
      Rsv: npcFileStruct.Rsv,
      Quest: npcFileStruct.Quest,
      Coin: npcFileStruct.Coin,
      Exp: Number(npcFileStruct.Exp),
      HomeTownX: npcFileStruct.HomeTownX,
      HomeTownY: npcFileStruct.HomeTownY,
      BaseScore: {
        Level: npcFileStruct.BaseScore.Level,
        Ac: npcFileStruct.BaseScore.Ac,
        Damage: npcFileStruct.BaseScore.Damage,
        Reserved: npcFileStruct.BaseScore.Reserved,
        AttackRun: npcFileStruct.BaseScore.AttackRun,
        MaxHp: npcFileStruct.BaseScore.MaxHp,
        MaxMp: npcFileStruct.BaseScore.MaxMp,
        Hp: npcFileStruct.BaseScore.Hp,
        Mp: npcFileStruct.BaseScore.Mp,
        Str: npcFileStruct.BaseScore.Str,
        Int: npcFileStruct.BaseScore.Int,
        Dex: npcFileStruct.BaseScore.Dex,
        Con: npcFileStruct.BaseScore.Con,
        Special: Array.from(npcFileStruct.BaseScore.Special)
      },
      CurrentScore: {
        Level: npcFileStruct.CurrentScore.Level,
        Ac: npcFileStruct.CurrentScore.Ac,
        Damage: npcFileStruct.CurrentScore.Damage,
        Reserved: npcFileStruct.CurrentScore.Reserved,
        AttackRun: npcFileStruct.CurrentScore.AttackRun,
        MaxHp: npcFileStruct.CurrentScore.MaxHp,
        MaxMp: npcFileStruct.CurrentScore.MaxMp,
        Hp: npcFileStruct.CurrentScore.Hp,
        Mp: npcFileStruct.CurrentScore.Mp,
        Str: npcFileStruct.CurrentScore.Str,
        Int: npcFileStruct.CurrentScore.Int,
        Dex: npcFileStruct.CurrentScore.Dex,
        Con: npcFileStruct.CurrentScore.Con,
        Special: Array.from(npcFileStruct.CurrentScore.Special)
      },
      Equip: npcFileStruct.Equip.toArray().map((item) => ({
        Flag: item.Flag,
        Sanc: item.Sanc,
        Value: item.Value,
        sIndex: item.sIndex,
        stEffect: item.stEffect.toArray().map((effect) => ({
          type: effect.type,
          value: effect.value
        }))
      })),
      Carry: npcFileStruct.Carry.toArray().map((item) => ({
        Flag: item.Flag,
        Sanc: item.Sanc,
        Value: item.Value,
        sIndex: item.sIndex,
        stEffect: item.stEffect.toArray().map((effect) => ({
          type: effect.type,
          value: effect.value
        }))
      })),
      LearnedSkill: npcFileStruct.LearnedSkill.toArray().map((skill) => skill),
      ScoreBonus: npcFileStruct.ScoreBonus,
      SpecialBonus: npcFileStruct.SpecialBonus,
      SkillBonus: npcFileStruct.SkillBonus,
      Critical: npcFileStruct.Critical,
      SaveMana: npcFileStruct.SaveMana,
      ShortSkill: npcFileStruct.ShortSkill.toString(),
      GuildLevel: npcFileStruct.GuildLevel,
      AttackSpeed: npcFileStruct.AttackSpeed,
      CriticalDamage: npcFileStruct.CriticalDamage,
      CriticalAc: npcFileStruct.CriticalAc,
      unk2: npcFileStruct.unk2,
      RegenHp: npcFileStruct.RegenHp,
      RegenMp: npcFileStruct.RegenMp,
      Dummy: Array.from(npcFileStruct.Dummy),
      HideCostume: npcFileStruct.HideCostume,
      GuildCooldownYear: npcFileStruct.GuildCooldownYear,
      GuildCooldownMonth: npcFileStruct.GuildCooldownMonth,
      GuildCooldownDay: npcFileStruct.GuildCooldownDay,
      Resist: Array.from(npcFileStruct.Resist),
      Magic: npcFileStruct.Magic,
      CurrentKill: npcFileStruct.CurrentKill,
      TotalKill: npcFileStruct.TotalKill
    };

    return npc;
  }
}