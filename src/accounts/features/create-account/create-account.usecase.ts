import { Usecase } from "@/shared/interfaces/usecase";
import { CreateAccountRequest } from "./create-account.dto";
import { AccountAlreadyExistsException } from "../../domain/exceptions/account-already-exists.exception";
import { Cryptography } from "@/accounts/domain/interfaces/cryptography";
import { inject, injectable } from "tsyringe";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";
import { SHARED_BINDINGS } from "@/shared/symbols";
import { EventBus } from "@/shared/interfaces/event-bus";
import { CreateGameAccountEventName } from "@/accounts/events/create-game-account.event";
import { IAccountCommandDatasource } from "@/accounts/data-source/account/account-command.datasource";
import { IAccountQueryDatasource } from "@/accounts/data-source/account/account-query.datasource";

export interface ICreateAccountUsecase
  extends Usecase<CreateAccountRequest, void> {}

@injectable()
export class CreateAccountUsecase implements ICreateAccountUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountCommandDatasource)
    private readonly _accountCommandDataSource: IAccountCommandDatasource,
    @inject(ACCOUNT_BINDINGS.AccountQueryDatasource)
    private readonly _accountQueryDatasource: IAccountQueryDatasource,
    @inject(ACCOUNT_BINDINGS.Cryptography)
    private readonly _cryptography: Cryptography,
    @inject(SHARED_BINDINGS.EventBus)
    private readonly _eventBus: EventBus
  ) {}

  async execute({ username, email, password }: CreateAccountRequest) {
    const isAccountAlreadyExists =
      await this._accountQueryDatasource.findAccountByUsername(username);

    if (isAccountAlreadyExists) throw new AccountAlreadyExistsException();

    const passwordHashed = await this._cryptography.hash(password);

    await this._accountCommandDataSource.create({
      username,
      email,
      password: passwordHashed,
    });

    this._eventBus.publish(CreateGameAccountEventName, {
      username,
      password,
    });
  }
}
