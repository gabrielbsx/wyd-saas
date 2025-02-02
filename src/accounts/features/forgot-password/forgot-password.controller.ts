import { ACCOUNT_BINDINGS } from "@/accounts/symbols";
import { Controller } from "@/shared/interfaces/controller";
import { ok } from "@/shared/responses";
import { Request } from "@/shared/types/request";
import { IForgotPasswordUsecase } from "./forgot-password.usecase";
import { IForgotPasswordValidation } from "./forgot-password.validation";
import { inject, injectable } from "tsyringe";

export interface IForgotPasswordController extends Controller {}

@injectable()
export class ForgotPasswordController implements IForgotPasswordController {
  constructor(
    @inject(ACCOUNT_BINDINGS.ForgotPasswordUsecase)
    private readonly _forgotPasswordUsecase: IForgotPasswordUsecase,
    @inject(ACCOUNT_BINDINGS.ForgotPasswordValidation)
    private readonly _forgotPasswordValidation: IForgotPasswordValidation
  ) {}

  async handle(request: Request) {
    const dto = this._forgotPasswordValidation.validate(request.body);
    const response = await this._forgotPasswordUsecase.execute(dto);
    return ok(response);
  }
}
