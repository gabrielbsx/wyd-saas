export const ACCOUNT_BINDINGS = {
  CreateAccountController: Symbol.for("CreateAccountController"),
  CreateAccountValidation: Symbol.for("CreateAccountValidation"),
  CreateAccountUsecase: Symbol.for("CreateAccountUsecase"),
  CreateGameAccountEvent: Symbol.for("CreateGameAccountEvent"),

  AuthenticateController: Symbol.for("AuthenticateController"),
  AuthenticateValidation: Symbol.for("AuthenticateValidation"),
  AuthenticateUsecase: Symbol.for("AuthenticateUsecase"),

  AccountDataSource: Symbol.for("AccountDataSource"),
  Cryptography: Symbol.for("Cryptography"),
  Tokenizer: Symbol.for("Tokenizer"),
} as const;
