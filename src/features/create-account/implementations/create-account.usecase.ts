import { Usecase } from "@/shared/interfaces/usecase";
import { CreateAccountDto } from "./create-account.dto";

export interface CreateAccountUsecase extends Usecase<CreateAccountDto, void> {}

export class CreateAccountUsecaseImpl implements CreateAccountUsecase {
  async execute(dto: CreateAccountDto) {}
}
