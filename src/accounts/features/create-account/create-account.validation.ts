import { Validation } from "@/shared/interfaces/validation";
import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

import { z } from "zod";
import { CreateAccountRequest } from "./create-account.dto";
import { injectable } from "inversify";

export interface ICreateAccountValidation
  extends Validation<CreateAccountRequest> {}

@injectable()
export class CreateAccountValidation implements ICreateAccountValidation {
  static schema = z
    .object({
      username: z.string().min(4).max(10),
      password: z.string().min(4).max(10),
      passwordConfirmation: z.string().min(4).max(10),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      path: ["passwordConfirmation"],
      message: "Passwords do not match",
    })
    .readonly();

  validate(data: unknown) {
    const {
      success,
      error,
      data: dto,
    } = CreateAccountValidation.schema.safeParse(data);

    if (!success) {
      throw error;
    }

    return dto;
  }
}
