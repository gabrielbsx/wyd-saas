import jwt from "jsonwebtoken";
import { Tokenizer } from "../domain/interfaces/tokenizer";
import { env } from "@/shared/externals/env";
import { injectable } from "inversify";

@injectable()
export class JwtTokenizer implements Tokenizer {
  generate(payload: string | Buffer | object): string {
    return jwt.sign(payload, env.JWT_SECRET);
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
