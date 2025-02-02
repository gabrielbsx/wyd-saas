export const ACCOUNT_BINDINGS = {
  CreateAccountController: Symbol.for("CreateAccountController"),
  CreateAccountValidation: Symbol.for("CreateAccountValidation"),
  CreateAccountUsecase: Symbol.for("CreateAccountUsecase"),
  CreateGameAccountEvent: Symbol.for("CreateGameAccountEvent"),

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
} as const;
