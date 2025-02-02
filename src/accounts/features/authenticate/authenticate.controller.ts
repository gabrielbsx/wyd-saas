import { Controller } from "@/shared/domain/interfaces/controller";
import { Request } from "@/shared/domain/types/request";
import { Response } from "@/shared/domain/types/response";
import { IAuthenticateUsecase } from "./authenticate.usecase";
import { IAuthenticateValidation } from "./authenticate.validation";
import { ok } from "@/shared/domain/responses";
import { inject, injectable } from "tsyringe";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

export interface IAunthenticateController extends Controller {}

@injectable()
export class AuthenticateController implements IAunthenticateController {
  constructor(
    @inject(ACCOUNT_BINDINGS.AuthenticateUsecase)
    private readonly _authenticateUsecase: IAuthenticateUsecase,
    @inject(ACCOUNT_BINDINGS.AuthenticateValidation)
    private readonly _authenticateValidation: IAuthenticateValidation
  ) {}

  async handle(request: Request): Promise<Response> {
    const dto = this._authenticateValidation.validate(request.body);
    const response = await this._authenticateUsecase.execute(dto);
    return ok(response);
  }
}
