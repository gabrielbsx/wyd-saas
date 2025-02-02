import {
  AccountDataSource,
  IAccountDataSource,
} from "@/accounts/data-source/account/account.datasource";
import { BcryptCryptography } from "@/accounts/externals/bcrypt";
import { Cryptography } from "@/accounts/domain/interfaces/cryptography";
import {
  CreateAccountController,
  ICreateAccountController,
} from "@/accounts/features/create-account/create-account.controller";
import {
  CreateAccountUsecase,
  ICreateAccountUsecase,
} from "@/accounts/features/create-account/create-account.usecase";
import { Container } from "inversify";
import { Tokenizer } from "@/accounts/domain/interfaces/tokenizer";
import { JwtTokenizer } from "@/accounts/externals/jwt";
import {
  AuthenticateController,
  IAunthenticateController,
} from "@/accounts/features/authenticate/authenticate.controller";
import {
  AuthenticateUsecase,
  IAuthenticateUsecase,
} from "@/accounts/features/authenticate/authenticate.usecase";
import {
  AuthenticateValidation,
  IAuthenticateValidation,
} from "@/accounts/features/authenticate/authenticate.validation";
import {
  CreateAccountValidation,
  ICreateAccountValidation,
} from "@/accounts/features/create-account/create-account.validation";

import { SHARED_BINDINGS } from "@/shared/symbols";
import {
  CreateGameAccountEvent,
  ICreateGameAccountEvent,
} from "@/accounts/events/create-game-account.event";
import { EventBus } from "@/shared/interfaces/event-bus";
import { EventBusImpl } from "@/shared/event/event-bus";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

const container = new Container();

container
  .bind<ICreateAccountController>(ACCOUNT_BINDINGS.CreateAccountController)
  .to(CreateAccountController);
container
  .bind<ICreateAccountValidation>(ACCOUNT_BINDINGS.CreateAccountValidation)
  .to(CreateAccountValidation);
container
  .bind<ICreateAccountUsecase>(ACCOUNT_BINDINGS.CreateAccountUsecase)
  .to(CreateAccountUsecase);
container
  .bind<ICreateGameAccountEvent>(ACCOUNT_BINDINGS.CreateGameAccountEvent)
  .to(CreateGameAccountEvent);

container
  .bind<IAunthenticateController>(ACCOUNT_BINDINGS.AuthenticateController)
  .to(AuthenticateController);
container
  .bind<IAuthenticateValidation>(ACCOUNT_BINDINGS.AuthenticateValidation)
  .to(AuthenticateValidation);
container
  .bind<IAuthenticateUsecase>(ACCOUNT_BINDINGS.AuthenticateUsecase)
  .to(AuthenticateUsecase);

container
  .bind<IAccountDataSource>(ACCOUNT_BINDINGS.AccountDataSource)
  .to(AccountDataSource);
container
  .bind<Cryptography>(ACCOUNT_BINDINGS.Cryptography)
  .to(BcryptCryptography);
container.bind<Tokenizer>(ACCOUNT_BINDINGS.Tokenizer).to(JwtTokenizer);

container.bind<EventBus>(SHARED_BINDINGS.EventBus).to(EventBusImpl);

export { container };
