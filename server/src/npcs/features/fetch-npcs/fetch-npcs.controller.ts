import { Controller } from "@/shared/domain/interfaces/controller";
import { ok } from "@/shared/domain/responses";

import { inject, injectable } from "tsyringe";
import { NPC_BINDINGS } from "@/npcs/symbols";
import { IFetchNpcsUsecase } from "./fetch-npcs.usecase";

export interface IFetchNpcsController extends Controller {}

@injectable()
export class FetchNpcsController implements IFetchNpcsController {
  constructor(
    @inject(NPC_BINDINGS.FetchNpcsUsecase)
    private readonly _fetchNpcsUsecase: IFetchNpcsUsecase
  ) {}

  async handle() {
    const response = await this._fetchNpcsUsecase.execute();
    return ok(response);
  }
}
