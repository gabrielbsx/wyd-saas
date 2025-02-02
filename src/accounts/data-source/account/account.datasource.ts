import { Account } from "@/accounts/domain/account";
import { CreateAccountRequest } from "@/accounts/features/create-account/create-account.dto";
import { AccountModel } from "./account.model";
import { AccountMapper } from "./account.mapper";
import { injectable } from "tsyringe";

export interface IAccountDataSource {
  create(
    dto: Omit<CreateAccountRequest, "passwordConfirmation">
  ): Promise<void>;
  findAccountByUsername(username: string): Promise<Account | null>;
}

@injectable()
export class AccountDataSource implements IAccountDataSource {
  async create(
    dto: Omit<CreateAccountRequest, "passwordConfirmation">
  ): Promise<void> {
    const account = new AccountModel(AccountMapper.createAccountToModel(dto));
    await account.save();
  }

  async findAccountByUsername(username: string): Promise<Account | null> {
    const account = await AccountModel.findOne({
      username,
    });
    return !account ? null : AccountMapper.toDomain(account);
  }
}
