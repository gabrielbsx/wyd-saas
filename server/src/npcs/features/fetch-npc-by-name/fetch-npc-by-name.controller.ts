import { Controller } from "@/shared/domain/interfaces/controller";
import { ok } from "@/shared/domain/responses";

import { inject, injectable } from "tsyringe";
import { NPC_BINDINGS } from "@/npcs/symbols";
import { IFetchNpcByNameUsecase } from "./fetch-npc-by-name.usecase";
import { IFetchNpcByNameValidation } from "./fetch-npc-by-name.validation";
import { Request } from "@/shared/domain/types/request";

export interface IFetchNpcByNameController extends Controller {}

@injectable()
export class FetchNpcByNameController implements IFetchNpcByNameController {
  constructor(
    @inject(NPC_BINDINGS.FetchNpcByNameUsecase)
    private readonly _fetchNpcByNameUsecase: IFetchNpcByNameUsecase,
    @inject(NPC_BINDINGS.FetchNpcByNameValidation)
    private readonly _fetchNpcByNameValidation: IFetchNpcByNameValidation
  ) {}

  async handle({ params }: Request) {
    const dto = await this._fetchNpcByNameValidation.validate(params);
    const response = await this._fetchNpcByNameUsecase.execute(dto);
    return ok(response);
  }
}
