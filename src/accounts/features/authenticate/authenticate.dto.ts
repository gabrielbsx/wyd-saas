import { AccountProps } from "@/accounts/domain/account";

export type AuthenticateRequest = Readonly<{
  username: string;
  password: string;
}>;

export type AuthenticateResponse = Readonly<{
  token: string;
  account: AccountProps;
}>;
