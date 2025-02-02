export class NotFoundException extends Error {
  readonly statusCode = 404;

  constructor(message?: string) {
    super(message);

    this.name = "NotFoundException";
  }
}
