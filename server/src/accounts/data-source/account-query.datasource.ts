import { AccountModel } from "./account.model";
import { AccountMapper } from "./account.mapper";
import { Account } from "@/accounts/domain/account";
import { injectable } from "tsyringe";

export interface IAccountQueryDatasource {
  findAccountByUsername(username: string): Promise<Account | null>;
}

@injectable()
export class AccountQueryDatasource implements IAccountQueryDatasource {
  async findAccountByUsername(username: string): Promise<Account | null> {
    const account = await AccountModel.findOne({
      username,
    });

    return !account ? null : AccountMapper.toDomain(account);
  }
}
