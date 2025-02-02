import jwt from "jsonwebtoken";
import { Tokenizer } from "../domain/interfaces/tokenizer";
import { env } from "@/shared/externals/env";
import { injectable } from "tsyringe";

@injectable()
export class JwtTokenizer implements Tokenizer {
  generate(payload: object): string {
    return jwt.sign(JSON.stringify(payload), env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });
  }

  verify<T = unknown>(token: string): T | null {
    try {
      return jwt.verify(token, env.JWT_SECRET) as T;
    } catch {
      // todo: avaliar se há a necessidade de ignorar o erro
      return null;
    }
  }
}
