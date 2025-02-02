export type CreateAccountRequest = Readonly<{
  username: string;
  password: string;
  passwordConfirmation: string;
}>;
