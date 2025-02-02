import { Response } from "../types/response";

export const ok = <T>(body: T): Response<T> => ({
  status: 200,
  body,
});

export const created = <T>(body?: T): Response<T> => ({
  status: 201,
  body,
});

export const noContent = (): Response<void> => ({
  status: 204,
  body: undefined,
});

export const badRequest = (error: Error): Response<Error> => ({
  status: 400,
  body: error,
});

export const unauthorized = (): Response<void> => ({
  status: 401,
  body: undefined,
});
