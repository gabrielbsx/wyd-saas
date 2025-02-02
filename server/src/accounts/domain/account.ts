import {
  AggregateRoot,
  AggregateRootProps,
} from "@/shared/domain/aggregate-root";

export type AccountProps = Readonly<{
  id?: string;
  username: string;
  email: string;
  password: string;
}> &
  AggregateRootProps;

export class Account extends AggregateRoot {
  public username: string;
  public password: string;
  public email: string;

  constructor({
    email,
    username,
    password,
    ...aggregateRootProps
  }: AccountProps) {
    super(aggregateRootProps);

    this.email = email;
    this.username = username;
    this.password = password;
  }
}
