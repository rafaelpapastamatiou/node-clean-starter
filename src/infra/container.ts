import "reflect-metadata";
import { container } from "tsyringe";

import {
  TestUseCase,
  TestUseCaseInterface,
} from "@application/useCases/test.use-case";
import { TestRepository } from "@domain/repositories/test.repository";
import { MongoTestRepository } from "./mongodb/repositories/mongo-test.repository";

container.registerSingleton<TestUseCaseInterface>("TestUseCase", TestUseCase);
container.registerSingleton<TestRepository>(
  "TestRepository",
  MongoTestRepository,
);
