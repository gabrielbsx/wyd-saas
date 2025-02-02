export type Request<
  TBody = unknown,
  TQuery = unknown,
  TParams = unknown,
  THeaders = unknown
> = Readonly<
  Partial<{
    body: TBody;
    query: TQuery;
    params: TParams;
    headers: THeaders;
    cookies: unknown;
    tenant: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  }>
>;
