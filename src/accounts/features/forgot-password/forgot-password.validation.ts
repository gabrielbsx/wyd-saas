import { Validation } from "@/shared/domain/interfaces/validation";
import { ForgotPasswordRequest } from "./forgot-password.dto";
import { z } from "zod";
import { injectable } from "tsyringe";

export interface IForgotPasswordValidation
  extends Validation<ForgotPasswordRequest> {}

@injectable()
export class ForgotPasswordValidation implements IForgotPasswordValidation {
  static schema = z.object({
    username: z.string().min(4).max(10),
  });

  validate(data: unknown): ForgotPasswordRequest {
    const {
      success,
      error,
      data: dto,
    } = ForgotPasswordValidation.schema.safeParse(data);

    if (!success) {
      throw error;
    }

    return dto;
  }
}
