import { injectable } from "tsyringe";
import fs from "fs";
import { Npc, NpcNames } from "../domain/npc";
import { env } from "@/shared/env";
import { NpcMapper } from "./npc.mapper";

export interface INpcQueryDatasource {
  getAll(): Promise<NpcNames>;
  getByName(name: string): Promise<Npc>;
}

@injectable()
export class NpcQueryDatasource implements INpcQueryDatasource {
  async getAll(): Promise<NpcNames> {
    const filenames = fs.readdirSync(env.NPC_DIR);
    return filenames.map((filename) => ({ name: filename }));
  }

  async getByName(name: string): Promise<Npc> {
    const filename = `${env.NPC_DIR}/${name}`;
    const npcBuffer = fs.readFileSync(filename);
    return NpcMapper.mapNpc(npcBuffer);
  }
}
