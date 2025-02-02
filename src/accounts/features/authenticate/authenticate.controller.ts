import { Controller } from "@/shared/interfaces/controller";
import { Request } from "@/shared/types/request";
import { Response } from "@/shared/types/response";
import { AuthenticateUsecase } from "./authenticate.usecase";
import { AuthenticateValidation } from "./authenticate.validation";
import { ok } from "@/shared/responses";
import { inject, injectable } from "inversify";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

export interface IAunthenticateController extends Controller {}

@injectable()
export class AuthenticateController implements IAunthenticateController {
  constructor(
    @inject(ACCOUNT_BINDINGS.AuthenticateUsecase)
    private readonly _authenticateUsecase: AuthenticateUsecase,
    @inject(ACCOUNT_BINDINGS.AuthenticateValidation)
    private readonly _authenticateValidation: AuthenticateValidation
  ) {}

  async handle(request: Request): Promise<Response> {
    const { body } = request;

    const dto = this._authenticateValidation.validate(body);

    const response = await this._authenticateUsecase.execute(dto);

    return ok(response);
  }
}
