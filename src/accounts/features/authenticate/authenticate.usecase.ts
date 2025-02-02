import { Usecase } from "@/shared/interfaces/usecase";
import { AccountDataSource } from "@/accounts/data-source/account/account.datasource";
import { AccountNotFoundException } from "@/accounts/domain/exceptions/account-not-found.exception";
import { Cryptography } from "@/accounts/domain/interfaces/cryptography";
import { UnauthorizedException } from "@/shared/exceptions/unauthorized.exception";
import { Tokenizer } from "@/accounts/domain/interfaces/tokenizer";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

import { inject, injectable } from "inversify";

import { AuthenticateRequest, AuthenticateResponse } from "./authenticate.dto";

export interface IAuthenticateUsecase
  extends Usecase<AuthenticateRequest, AuthenticateResponse> {}

@injectable()
export class AuthenticateUsecase implements IAuthenticateUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountDataSource)
    private readonly _accountDataSource: AccountDataSource,
    @inject(ACCOUNT_BINDINGS.Cryptography)
    private readonly _cryptography: Cryptography,
    @inject(ACCOUNT_BINDINGS.Tokenizer)
    private readonly _tokenizer: Tokenizer
  ) {}

  async execute({
    username,
    password,
  }: AuthenticateRequest): Promise<AuthenticateResponse> {
    const account = await this._accountDataSource.findAccountByUsername(
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

    const { password: _, ...accountWithoutPassword } = account.props;

    return { token, account: accountWithoutPassword };
  }
}
