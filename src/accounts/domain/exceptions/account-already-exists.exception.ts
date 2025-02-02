import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

export class AccountAlreadyExistsException extends BadRequestException {
  constructor() {
    super("Account already exists");

    this.name = "AccountAlreadyExistsException";
  }
}
