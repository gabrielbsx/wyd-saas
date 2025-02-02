import { Account } from "@/accounts/domain/account";
import { IAccountModelDocument } from "./account.model";
import mongoose from "mongoose";
import { AccountCreation } from "./account-command.datasource";

export class AccountMapper {
  static toDomain({ _id, ...accountModel }: IAccountModelDocument): Account {
    return new Account({
      id: _id.toString(),
      ...accountModel,
    });
  }

  static createAccountToModel({
    username,
    password,
  }: AccountCreation): IAccountModelDocument {
    return {
      _id: new mongoose.Types.ObjectId(),
      username,
      password,
      createdAt: new Date(),
    };
  }
}
