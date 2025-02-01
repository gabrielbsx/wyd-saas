export interface Validation<T> {
  validate(data: unknown): T;
}
