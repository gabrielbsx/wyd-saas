import { Usecase } from "@/shared/interfaces/usecase";
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from "./forgot-password.dto";
import { inject, injectable } from "tsyringe";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";
import { AccountNotFoundException } from "@/accounts/domain/exceptions/account-not-found.exception";
import { IAccountQueryDatasource } from "@/accounts/data-source/account/account-query.datasource";
import { SHARED_BINDINGS } from "@/shared/symbols";
import { EventBus } from "@/shared/interfaces/event-bus";
import { ForgotPasswordNotificationEventName } from "@/accounts/events/forgot-password-notification.event";
import { Cryptography } from "@/accounts/domain/interfaces/cryptography";
import { IAccountCommandDatasource } from "@/accounts/data-source/account/account-command.datasource";

export interface IForgotPasswordUsecase
  extends Usecase<ForgotPasswordRequest, ForgotPasswordResponse> {}

@injectable()
export class ForgotPasswordUsecase implements IForgotPasswordUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountQueryDatasource)
    private readonly _accountQueryDataSource: IAccountQueryDatasource,
    @inject(ACCOUNT_BINDINGS.AccountCommandDatasource)
    private readonly _accountCommandDataSource: IAccountCommandDatasource,
    @inject(SHARED_BINDINGS.EventBus)
    private readonly _eventBus: EventBus,
    @inject(ACCOUNT_BINDINGS.Cryptography)
    private readonly _cryptography: Cryptography
  ) {}

  async execute({
    username,
  }: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    const account = await this._accountQueryDataSource.findAccountByUsername(
      username
    );

    if (!account) throw new AccountNotFoundException();

    const passwordUpdated = this.generatePassword();
    const passwordHashed = this._cryptography.hash(passwordUpdated);

    await this._accountCommandDataSource.updatePassword(
      account.id!,
      passwordHashed
    );

    await this._eventBus.publish(ForgotPasswordNotificationEventName, {
      email: account.email,
      passwordUpdated: passwordUpdated,
    });

    return { message: "Account recovered" };
  }

  private generatePassword() {
    return Math.random().toString(36).substring(7);
  }
}
