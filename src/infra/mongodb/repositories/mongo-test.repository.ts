import { TestRepository } from "@domain/repositories/test.repository";

export class MongoTestRepository implements TestRepository {
  async find(): Promise<number[]> {
    return [1, 2, 3];
  }
}
