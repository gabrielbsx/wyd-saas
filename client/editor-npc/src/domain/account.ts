import { Entity } from "./entity";

export type Account = Readonly<{
  username: string;
  password?: string;
  email: string;
}> &
  Entity;
