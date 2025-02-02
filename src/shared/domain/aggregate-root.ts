export type AggregateRootProps = Readonly<{
  createdAt: Date;
  updateAt?: Date;
  deletedAt?: Date;
  id?: string;
}>;

export abstract class AggregateRoot {
  public createdAt: Date;
  public updateAt?: Date;
  public deletedAt?: Date;
  public id?: string;

  constructor(props: AggregateRootProps) {
    this.createdAt = props.createdAt;
    this.updateAt = props.updateAt;
    this.deletedAt = props.deletedAt;
    this.id = props.id;
  }
}
