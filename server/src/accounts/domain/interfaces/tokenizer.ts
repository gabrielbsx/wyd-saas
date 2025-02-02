export interface Tokenizer {
  generate(payload: string | Buffer | object): string;
  verify<T = unknown>(token: string): T | null;
}
