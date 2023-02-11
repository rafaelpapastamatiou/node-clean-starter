export interface TestRepository {
  find(): Promise<unknown[]>;
}
