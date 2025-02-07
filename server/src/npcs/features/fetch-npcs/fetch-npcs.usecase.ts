import { Usecase } from "@/shared/domain/interfaces/usecase";
import { FetchNpcsResponse } from "./fetch-npcs.dto";
import { inject, injectable } from "tsyringe";
import { INpcQueryDatasource } from "@/npcs/data-source/npc-query.datasource";
import { NPC_BINDINGS } from "@/npcs/symbols";

export interface IFetchNpcsUsecase extends Usecase<{}, FetchNpcsResponse> {}

@injectable()
export class FetchNpcsUsecase implements IFetchNpcsUsecase {
  constructor(
    @inject(NPC_BINDINGS.NpcQueryDatasource)
    private readonly _npcsDatasource: INpcQueryDatasource
  ) {}

  async execute(): Promise<readonly { name: string }[]> {
    return await this._npcsDatasource.getAll();
  }
}
