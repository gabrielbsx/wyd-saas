import { Account } from "@/accounts/domain/account";
import { AccountModelType } from "./account.model";
import mongoose from "mongoose";
import { CreateAccountDto } from "@/accounts/features/create-account/create-account.dto";

export class AccountMapper {
  static toDomain({ _id, username, password }: AccountModelType): Account {
    return new Account({
      id: _id.toString(),
      username,
      password,
    });
  }

  static createAccountToModel({
    username,
    password,
  }: Omit<CreateAccountDto, "passwordConfirmation">): AccountModelType {
    return {
      _id: new mongoose.Types.ObjectId(),
      username,
      password,
    };
  }
}
