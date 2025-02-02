import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

export class AccountAlreadyExistsException extends BadRequestException {
  constructor(message?: string) {
    super(message);

    this.name = "AccountAlreadyExistsException";
  }
}
