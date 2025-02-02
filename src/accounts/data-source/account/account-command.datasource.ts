import { CreateAccountRequest } from "@/accounts/features/create-account/create-account.dto";
import { AccountModel } from "./account.model";
import { AccountMapper } from "./account.mapper";
import { injectable } from "tsyringe";

export type AccountCreation = Readonly<
  Omit<CreateAccountRequest, "passwordConfirmation">
>;

export interface IAccountCommandDatasource {
  create(dto: AccountCreation): Promise<void>;
  updatePassword(id: string, password: string): Promise<void>;
}

@injectable()
export class AccountCommandDatasource implements IAccountCommandDatasource {
  async create(dto: AccountCreation): Promise<void> {
    const account = new AccountModel(AccountMapper.createAccountToModel(dto));
    await account.save();
  }

  async updatePassword(id: string, password: string): Promise<void> {
    await AccountModel.updateOne({ _id: id }, { password });
  }
}
