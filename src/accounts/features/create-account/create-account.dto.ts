export type CreateAccountRequest = Readonly<{
  username: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}>;
