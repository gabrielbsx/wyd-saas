import { injectable } from "inversify";
import { Cryptography } from "../domain/interfaces/cryptography";
import bcrypt, { genSaltSync } from "bcrypt";

@injectable()
export class BcryptCryptography implements Cryptography {
  hash(plaintext: string) {
    return bcrypt.hashSync(plaintext, genSaltSync());
  }

  compare(plaintext: string, hashed: string): boolean {
    return bcrypt.compareSync(plaintext, hashed);
  }
}
