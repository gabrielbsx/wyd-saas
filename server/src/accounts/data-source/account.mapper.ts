import { Account } from "@/accounts/domain/account";
import { IAccountModelDocument } from "./account.model";
import mongoose, { Document } from "mongoose";
import { AccountCreation } from "./account-command.datasource";

export class AccountMapper {
  static toDomain(accountModel: IAccountModelDocument & Document): Account {
    return new Account({
      id: accountModel._id.toString(),
      ...accountModel.toJSON<IAccountModelDocument>(),
    });
  }

  static createAccountToModel(
    accountCreation: AccountCreation
  ): IAccountModelDocument {
    return {
      _id: new mongoose.Types.ObjectId(),
      createdAt: new Date(),
      ...accountCreation,
    };
  }
}
