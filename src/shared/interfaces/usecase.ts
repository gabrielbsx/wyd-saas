export interface Usecase<T, U> {
  execute(dto?: T): Promise<U>;
}
