import { Usecase } from "@/shared/domain/interfaces/usecase";
import { inject, injectable } from "tsyringe";
import { INpcQueryDatasource } from "@/npcs/data-source/npc-query.datasource";
import { NPC_BINDINGS } from "@/npcs/symbols";
import { FetchNpcByNameRequest } from "./fetch-npc-by-name.dto";
import { Npc } from "@/npcs/domain/npc";

export interface IFetchNpcByNameUsecase
  extends Usecase<FetchNpcByNameRequest, Npc> {}

@injectable()
export class FetchNpcByNameUsecase implements IFetchNpcByNameUsecase {
  constructor(
    @inject(NPC_BINDINGS.NpcQueryDatasource)
    private readonly _npcsDatasource: INpcQueryDatasource
  ) {}

  async execute({ name }: FetchNpcByNameRequest): Promise<Npc> {
    return await this._npcsDatasource.getByName(name);
  }
}
