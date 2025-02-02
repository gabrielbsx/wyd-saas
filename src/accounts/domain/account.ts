export type AccountProps = Readonly<{
  id?: string;
  username: string;
  password: string;
}>;

export class Account {
  private _props: AccountProps;

  constructor(props: AccountProps) {
    this._props = props;
  }

  get username() {
    return this._props.username;
  }

  get password() {
    return this._props.password;
  }

  get id() {
    return this._props.id;
  }
}
