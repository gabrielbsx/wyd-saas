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
import { container } from "tsyringe";
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
import {
  ForgotPasswordController,
  IForgotPasswordController,
} from "@/accounts/features/forgot-password/forgot-password.controller";
import {
  ForgotPasswordUsecase,
  IForgotPasswordUsecase,
} from "@/accounts/features/forgot-password/forgot-password.usecase";
import {
  ForgotPasswordValidation,
  IForgotPasswordValidation,
} from "@/accounts/features/forgot-password/forgot-password.validation";
import {
  AccountCommandDatasource,
  IAccountCommandDatasource,
} from "@/accounts/data-source/account/account-command.datasource";
import {
  AccountQueryDatasource,
  IAccountQueryDatasource,
} from "@/accounts/data-source/account/account-query.datasource";

container.register<IAccountCommandDatasource>(
  ACCOUNT_BINDINGS.AccountCommandDatasource,
  AccountCommandDatasource
);
container.register<IAccountQueryDatasource>(
  ACCOUNT_BINDINGS.AccountQueryDatasource,
  AccountQueryDatasource
);

container.register<ICreateGameAccountEvent>(
  ACCOUNT_BINDINGS.CreateGameAccountEvent,
  CreateGameAccountEvent
);
container.register<ICreateAccountController>(
  ACCOUNT_BINDINGS.CreateAccountController,
  CreateAccountController
);
container.register<ICreateAccountValidation>(
  ACCOUNT_BINDINGS.CreateAccountValidation,
  CreateAccountValidation
);
container.register<ICreateAccountUsecase>(
  ACCOUNT_BINDINGS.CreateAccountUsecase,
  CreateAccountUsecase
);

container.register<IAunthenticateController>(
  ACCOUNT_BINDINGS.AuthenticateController,
  AuthenticateController
);
container.register<IAuthenticateValidation>(
  ACCOUNT_BINDINGS.AuthenticateValidation,
  AuthenticateValidation
);
container.register<IAuthenticateUsecase>(
  ACCOUNT_BINDINGS.AuthenticateUsecase,
  AuthenticateUsecase
);

container.register<IForgotPasswordController>(
  ACCOUNT_BINDINGS.ForgotPasswordController,
  ForgotPasswordController
);

container.register<IForgotPasswordValidation>(
  ACCOUNT_BINDINGS.ForgotPasswordValidation,
  ForgotPasswordValidation
);

container.register<IForgotPasswordUsecase>(
  ACCOUNT_BINDINGS.ForgotPasswordUsecase,
  ForgotPasswordUsecase
);

container.register<EventBus>(SHARED_BINDINGS.EventBus, EventBusImpl);
container.register<Tokenizer>(ACCOUNT_BINDINGS.Tokenizer, JwtTokenizer);
container.register<Cryptography>(
  ACCOUNT_BINDINGS.Cryptography,
  BcryptCryptography
);

export { container };
