import { Validation } from "@/shared/domain/interfaces/validation";

import { z } from "zod";
import { injectable } from "tsyringe";
import { FetchNpcByNameRequest } from "./fetch-npc-by-name.dto";

export interface IFetchNpcByNameValidation
  extends Validation<FetchNpcByNameRequest> {}

@injectable()
export class FetchNpcByNameValidation implements IFetchNpcByNameValidation {
  static schema = z
    .object({
      name: z.string(),
    })
    .readonly();

  validate(data: unknown) {
    const {
      success,
      error,
      data: dto,
    } = FetchNpcByNameValidation.schema.safeParse(data);

    if (!success) {
      throw error;
    }

    return dto;
  }
}
