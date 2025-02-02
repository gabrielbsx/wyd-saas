import { Controller } from "@/shared/domain/interfaces/controller";
import { Request } from "@/shared/domain/types/request";
import { created } from "@/shared/domain/responses";

import { ICreateAccountUsecase } from "./create-account.usecase";
import { ICreateAccountValidation } from "./create-account.validation";
import { inject, injectable } from "tsyringe";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

export interface ICreateAccountController extends Controller {}

@injectable()
export class CreateAccountController implements ICreateAccountController {
  constructor(
    @inject(ACCOUNT_BINDINGS.CreateAccountUsecase)
    private readonly _createAccountUsecase: ICreateAccountUsecase,
    @inject(ACCOUNT_BINDINGS.CreateAccountValidation)
    private readonly _createAccountValidation: ICreateAccountValidation
  ) {}

  async handle(request: Request) {
    const dto = this._createAccountValidation.validate(request.body);
    await this._createAccountUsecase.execute(dto);
    return created();
  }
}
