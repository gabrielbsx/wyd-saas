import { Usecase } from "@/shared/domain/interfaces/usecase";
import { AccountNotFoundException } from "@/accounts/domain/exceptions/account-not-found.exception";
import { Cryptography } from "@/accounts/domain/interfaces/cryptography";
import { UnauthorizedException } from "@/shared/domain/exceptions/unauthorized.exception";
import { Tokenizer } from "@/accounts/domain/interfaces/tokenizer";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

import { inject, injectable } from "tsyringe";

import { AuthenticateRequest, AuthenticateResponse } from "./authenticate.dto";
import { IAccountQueryDatasource } from "@/accounts/data-source/account/account-query.datasource";

export interface IAuthenticateUsecase
  extends Usecase<AuthenticateRequest, AuthenticateResponse> {}

@injectable()
export class AuthenticateUsecase implements IAuthenticateUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountQueryDatasource)
    private readonly _accountQueryDataSource: IAccountQueryDatasource,
    @inject(ACCOUNT_BINDINGS.Cryptography)
    private readonly _cryptography: Cryptography,
    @inject(ACCOUNT_BINDINGS.Tokenizer)
    private readonly _tokenizer: Tokenizer
  ) {}

  async execute({
    username,
    password,
  }: AuthenticateRequest): Promise<AuthenticateResponse> {
    const account = await this._accountQueryDataSource.findAccountByUsername(
      username
    );

    if (!account) throw new AccountNotFoundException();

    const { password: hashedPassword } = account;

    const isPasswordValid = this._cryptography.compare(
      password,
      hashedPassword
    );

    if (!isPasswordValid) throw new UnauthorizedException();

    const token = this._tokenizer.generate(account);

    const { password: _, ...accountWithoutPassword } = account;

    return { token, account: accountWithoutPassword };
  }
}
