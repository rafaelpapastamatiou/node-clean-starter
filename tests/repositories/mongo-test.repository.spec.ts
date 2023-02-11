import { MongoTestRepository } from "@infra/mongodb/repositories/mongo-test.repository";

import {
  clearMongoMemoryServer,
  connectMongoMemoryServer,
  disconnectMongoMemoryServer,
} from "../helpers/mongoTestSetup";

describe("MongoTestRepository", () => {
  beforeAll(async () => {
    await connectMongoMemoryServer();
  });

  beforeEach(async () => {
    await clearMongoMemoryServer();
  });

  afterAll(async () => {
    await disconnectMongoMemoryServer();
  });

  test(".find()", async () => {
    const repository = new MongoTestRepository();

    const result = await repository.find();

    expect(result).toEqual([1, 2, 3]);
  });
});
