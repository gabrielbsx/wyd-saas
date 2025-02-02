import { Validation } from "@/shared/interfaces/validation";
import { BadRequestException } from "@/shared/exceptions/bad-request.exception";

import { z } from "zod";
import { AuthenticateRequest } from "./authenticate.dto";
import { injectable } from "tsyringe";

export interface IAuthenticateValidation
  extends Validation<AuthenticateRequest> {}

@injectable()
export class AuthenticateValidation implements IAuthenticateValidation {
  static schema = z
    .object({
      username: z.string().min(4).max(10),
      password: z.string().min(4).max(10),
    })
    .readonly();

  validate(data: unknown) {
    const {
      success,
      error,
      data: dto,
    } = AuthenticateValidation.schema.safeParse(data);

    if (!success) {
      throw new BadRequestException(
        `Validation failed: ${error.errors.join(", ")}`
      );
    }

    return dto;
  }
}
