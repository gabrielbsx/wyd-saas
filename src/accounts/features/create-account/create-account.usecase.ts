import { Usecase } from "@/shared/interfaces/usecase";
import { AccountDataSource } from "@/accounts/data-source/account/account.datasource";
import { CreateAccountRequest } from "./create-account.dto";
import { AccountAlreadyExistsException } from "../../domain/exceptions/account-already-exists.exception";
import { Cryptography } from "@/accounts/domain/interfaces/cryptography";
import { inject, injectable } from "inversify";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";
import { SHARED_BINDINGS } from "@/shared/symbols";
import { EventBus } from "@/shared/interfaces/event-bus";
import { CreateGameAccountEventName } from "@/accounts/events/create-game-account.event";

export interface ICreateAccountUsecase
  extends Usecase<CreateAccountRequest, void> {}

@injectable()
export class CreateAccountUsecase implements ICreateAccountUsecase {
  constructor(
    @inject(ACCOUNT_BINDINGS.AccountDataSource)
    private readonly _accountDataSource: AccountDataSource,
    @inject(ACCOUNT_BINDINGS.Cryptography)
    private readonly _cryptography: Cryptography,
    @inject(SHARED_BINDINGS.EventBus)
    private readonly _eventBus: EventBus
  ) {}

  async execute({ username, password }: CreateAccountRequest) {
    const isAccountAlreadyExists =
      await this._accountDataSource.findAccountByUsername(username);

    if (isAccountAlreadyExists) throw new AccountAlreadyExistsException();

    const passwordHashed = await this._cryptography.hash(password);

    await this._accountDataSource.create({
      username,
      password: passwordHashed,
    });

    this._eventBus.publish(CreateGameAccountEventName, {
      username,
      password,
    });
  }
}
