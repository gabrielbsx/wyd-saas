import {
  AggregateRoot,
  AggregateRootProps,
} from "@/shared/domain/aggregate-root";

export type AccountProps = Readonly<{
  id?: string;
  username: string;
  password: string;
}> &
  AggregateRootProps;

export class Account extends AggregateRoot {
  public username: string;
  public password: string;

  constructor({ username, password, ...aggregateRootProps }: AccountProps) {
    super(aggregateRootProps);

    this.username = username;
    this.password = password;
  }
}
