import { NotFoundException } from "@/shared/exceptions/not-found.exception";

export class AccountNotFoundException extends NotFoundException {
  constructor() {
    super("Account not found");

    this.name = "AccountNotFoundException";
  }
}
