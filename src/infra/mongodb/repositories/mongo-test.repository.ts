import { getModelForClass } from "@typegoose/typegoose";

import { Test } from "@domain/entities/test";
import { TestRepository } from "@domain/repositories/test.repository";

const TestModel = getModelForClass(Test);

export class MongoTestRepository implements TestRepository {
  model: typeof TestModel;

  constructor() {
    this.model = TestModel;
  }
  async find(): Promise<number[]> {
    return [1, 2, 3];
  }
}
