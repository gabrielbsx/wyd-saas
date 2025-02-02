import { Controller } from "@/shared/interfaces/controller";
import { Request } from "@/shared/types/request";
import { created } from "@/shared/responses";

import { CreateAccountUsecase } from "./create-account.usecase";
import { CreateAccountValidation } from "./create-account.validation";
import { inject, injectable } from "inversify";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

export interface ICreateAccountController extends Controller {}

@injectable()
export class CreateAccountController implements ICreateAccountController {
  constructor(
    @inject(ACCOUNT_BINDINGS.CreateAccountUsecase)
    private readonly _createAccountUsecase: CreateAccountUsecase,
    @inject(ACCOUNT_BINDINGS.CreateAccountValidation)
    private readonly _createAccountValidation: CreateAccountValidation
  ) {}

  async handle(request: Request) {
    const { body } = request;

    const dto = this._createAccountValidation.validate(body);

    await this._createAccountUsecase.execute(dto);

    return created();
  }
}
