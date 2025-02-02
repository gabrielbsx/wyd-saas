export type ForgotPasswordRequest = Readonly<{
  username: string;
}>;

export type ForgotPasswordResponse = Readonly<{
  message: string;
}>;
