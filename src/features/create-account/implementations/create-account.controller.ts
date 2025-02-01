import { Controller } from "@/shared/interfaces/controller";
import { Request } from "@/shared/types/request";
import { created } from "@/shared/responses";

import { CreateAccountUsecase } from "./create-account.usecase";
import { CreateAccountValidation } from "./create-account.validation";

export class CreateAccountController implements Controller {
  constructor(
    private readonly _createAccountUsecase: CreateAccountUsecase,
    private readonly _createAccountValidation: CreateAccountValidation
  ) {}

  async handle(request: Request) {
    const { body } = request;

    const dto = this._createAccountValidation.validate(body);

    await this._createAccountUsecase.execute(dto);

    return created();
  }
}
