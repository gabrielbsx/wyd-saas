export class UnauthorizedException extends Error {
  readonly statusCode = 401;

  constructor() {
    super("Unauthorized");

    this.name = "UnauthorizedException";
  }
}
