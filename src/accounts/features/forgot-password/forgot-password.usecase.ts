import { Usecase } from "@/shared/interfaces/usecase";
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from "./forgot-password.dto";
import { inject, injectable } from "tsyringe";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";
import { IAccountDataSource } from "@/accounts/data-source/account/account.datasource";
import { AccountNotFoundException } from "@/accounts/domain/exceptions/account-not-found.exception";

export interface IForgotPasswordUsecase
  extends Usecase<ForgotPasswordRequest, ForgotPasswordResponse> {}

@injectable()
export class ForgotPasswordUsecase implements IForgotPasswordUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountDataSource)
    private readonly _accountDataSource: IAccountDataSource
  ) {}

  async execute({
    username,
  }: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    const account = await this._accountDataSource.findAccountByUsername(
      username
    );

    if (!account) throw new AccountNotFoundException();

    return { message: "Account recovered" };
  }
}
