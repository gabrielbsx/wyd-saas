import { NotFoundException } from "@/shared/exceptions/not-found.exception";

export class AccountNotFoundException extends NotFoundException {
  constructor(message?: string) {
    super(message);

    this.name = "AccountNotFoundException";
  }
}
