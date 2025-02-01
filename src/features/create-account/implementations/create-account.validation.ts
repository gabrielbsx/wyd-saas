import { Validation } from "@/shared/interfaces/validation";
import { CreateAccountDto } from "./create-account.dto";
import { z } from "zod";
import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

export interface CreateAccountValidation extends Validation<CreateAccountDto> {}

export class CreateAccountValidation implements CreateAccountValidation {
  static schema = z
    .object({
      username: z.string().min(4).max(10),
      password: z.string().min(4).max(10),
      passwordConfirmation: z.string().min(4).max(10),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
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
      throw new BadRequestException(
        `Validation failed: ${error.errors.join(", ")}`
      );
    }

    return dto;
  }
}
