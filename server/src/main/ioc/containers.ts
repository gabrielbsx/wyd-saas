import { BcryptCryptography } from "@/accounts/infra/bcrypt";
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
import { JwtTokenizer } from "@/accounts/infra/jwt";
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
import { EventBus } from "@/shared/domain/interfaces/event-bus";
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
} from "@/accounts/data-source/account-command.datasource";
import {
  AccountQueryDatasource,
  IAccountQueryDatasource,
} from "@/accounts/data-source/account-query.datasource";
import { INotification } from "@/shared/domain/interfaces/notification";
import { EmailNotificationEvent } from "@/shared/notifications/email-notification";
import {
  ForgotPasswordNotificationEvent,
  IForgotPasswordNotificationEvent,
} from "@/accounts/events/forgot-password-notification.event";
import {
  FetchNpcsController,
  IFetchNpcsController,
} from "@/npcs/features/fetch-npcs/fetch-npcs.controller";
import { NPC_BINDINGS } from "@/npcs/symbols";
import {
  FetchNpcsUsecase,
  IFetchNpcsUsecase,
} from "@/npcs/features/fetch-npcs/fetch-npcs.usecase";
import {
  INpcQueryDatasource,
  NpcQueryDatasource,
} from "@/npcs/data-source/npc-query.datasource";
import {
  FetchNpcByNameController,
  IFetchNpcByNameController,
} from "@/npcs/features/fetch-npc-by-name/fetch-npc-by-name.controller";
import {
  FetchNpcByNameUsecase,
  IFetchNpcByNameUsecase,
} from "@/npcs/features/fetch-npc-by-name/fetch-npc-by-name.usecase";
import {
  FetchNpcByNameValidation,
  IFetchNpcByNameValidation,
} from "@/npcs/features/fetch-npc-by-name/fetch-npc-by-name.validation";

/**
 * Account DI
 */
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

/**
 * Shared DI
 */

container.register<EventBus>(SHARED_BINDINGS.EventBus, EventBusImpl);
container.register<Tokenizer>(ACCOUNT_BINDINGS.Tokenizer, JwtTokenizer);
container.register<Cryptography>(
  ACCOUNT_BINDINGS.Cryptography,
  BcryptCryptography
);
container.register<INotification>(
  SHARED_BINDINGS.EmailNotification,
  EmailNotificationEvent
);
container.register<IForgotPasswordNotificationEvent>(
  ACCOUNT_BINDINGS.ForgotPasswordNotificationEvent,
  ForgotPasswordNotificationEvent
);

/**
 * NPC DI
 */
container.register<IFetchNpcsController>(
  NPC_BINDINGS.FetchNpcsController,
  FetchNpcsController
);

container.register<IFetchNpcsUsecase>(
  NPC_BINDINGS.FetchNpcsUsecase,
  FetchNpcsUsecase
);

container.register<INpcQueryDatasource>(
  NPC_BINDINGS.NpcQueryDatasource,
  NpcQueryDatasource
);

container.register<IFetchNpcByNameController>(
  NPC_BINDINGS.FetchNpcByNameController,
  FetchNpcByNameController
);

container.register<IFetchNpcByNameUsecase>(
  NPC_BINDINGS.FetchNpcByNameUsecase,
  FetchNpcByNameUsecase
);

container.register<IFetchNpcByNameValidation>(
  NPC_BINDINGS.FetchNpcByNameValidation,
  FetchNpcByNameValidation
);

export { container };
