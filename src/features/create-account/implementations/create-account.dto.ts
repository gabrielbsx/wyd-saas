export type CreateAccountDto = Readonly<{
  username: string;
  password: string;
  passwordConfirmation: string;
}>;
