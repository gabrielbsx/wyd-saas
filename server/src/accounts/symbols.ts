export const ACCOUNT_BINDINGS = {
  CreateAccountController: Symbol.for("CreateAccountController"),
  CreateAccountValidation: Symbol.for("CreateAccountValidation"),
  CreateAccountUsecase: Symbol.for("CreateAccountUsecase"),

  AuthenticateController: Symbol.for("AuthenticateController"),
  AuthenticateValidation: Symbol.for("AuthenticateValidation"),
  AuthenticateUsecase: Symbol.for("AuthenticateUsecase"),

  ForgotPasswordController: Symbol.for("ForgotPasswordController"),
  ForgotPasswordValidation: Symbol.for("ForgotPasswordValidation"),
  ForgotPasswordUsecase: Symbol.for("ForgotPasswordUsecase"),

  AccountCommandDatasource: Symbol.for("AccountCommandDatasource"),
  AccountQueryDatasource: Symbol.for("AccountQueryDatasource"),
  Cryptography: Symbol.for("Cryptography"),
  Tokenizer: Symbol.for("Tokenizer"),

  CreateGameAccountEvent: Symbol.for("CreateGameAccountEvent"),
  ForgotPasswordNotificationEvent: Symbol.for(
    "ForgotPasswordNotificationEvent"
  ),
} as const;
