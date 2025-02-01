import { CreateAccountDto } from "../implementations/create-account.dto";

export interface CreateAccountPersistence {
  create(dto: CreateAccountDto): Promise<void>;
}
