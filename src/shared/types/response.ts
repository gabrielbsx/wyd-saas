export type Response<T = unknown> = Readonly<{
  status: number;
  body?: T;
}>;
