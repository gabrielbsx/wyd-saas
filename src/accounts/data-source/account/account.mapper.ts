import { Account } from "@/accounts/domain/account";
import { CreateAccountRequest } from "@/accounts/features/create-account/create-account.dto";
import { AccountModelDocument } from "./account.model";
import mongoose from "mongoose";

export class AccountMapper {
  static toDomain({ _id, username, password }: AccountModelDocument): Account {
    return new Account({
      id: _id.toString(),
      username,
      password,
    });
  }

  static createAccountToModel({
    username,
    password,
  }: Omit<CreateAccountRequest, "passwordConfirmation">): AccountModelDocument {
    return {
      _id: new mongoose.Types.ObjectId(),
      username,
      password,
    };
  }
}
