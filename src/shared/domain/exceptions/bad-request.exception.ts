export class BadRequestException extends Error {
  readonly statusCode = 400;

  constructor(message?: string) {
    super(message);

    this.name = "BadRequestException";
  }
}
