import { TestRepository } from "@domain/repositories/test.repository";

export class TestRepositoryStub implements TestRepository {
  async find(): Promise<number[]> {
    return [1, 2, 3];
  }
}
