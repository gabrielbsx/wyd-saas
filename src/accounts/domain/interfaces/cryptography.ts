export interface Cryptography {
  hash(plaintext: string): string;
  compare(plaintext: string, hashed: string): boolean;
}
