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

export interface IForgotPasswordUsecase
  extends Usecase<ForgotPasswordRequest, ForgotPasswordResponse> {}

@injectable()
export class ForgotPasswordUsecase implements IForgotPasswordUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountQueryDatasource)
    private readonly _accountQueryDataSource: IAccountQueryDatasource,
    @inject(SHARED_BINDINGS.EventBus)
    private readonly _eventBus: EventBus
  ) {}

  async execute({
    username,
  }: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    const account = await this._accountQueryDataSource.findAccountByUsername(
      username
    );

    if (!account) throw new AccountNotFoundException();

    await this._eventBus.publish(ForgotPasswordNotificationEventName, {
      email: "testando@gmail.com",
      passwordUpdated: "123456",
    });

    return { message: "Account recovered" };
  }
}
