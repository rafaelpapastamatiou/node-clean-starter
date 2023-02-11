import "reflect-metadata";
import { container, DependencyContainer } from "tsyringe";

import { TestUseCase } from "@application/useCases/test.use-case";
import { TestRepository } from "@domain/repositories/test.repository";
import { TestRepositoryStub } from "@tests/unit/domain/repositories/stubs/test.repository.stub";

let childContainer: DependencyContainer;

describe("TestUseCase", () => {
  beforeAll(() => {
    container.clearInstances();

    childContainer = container
      .createChildContainer()
      .registerSingleton<TestRepository>("TestRepository", TestRepositoryStub);
  });

  test("should call TestRepository", async () => {
    const testUseCase = childContainer.resolve(TestUseCase);

    const testRepositoryStub =
      childContainer.resolve<TestRepository>("TestRepository");

    const testRepositorySpy = jest.spyOn(testRepositoryStub, "find");

    await testUseCase.execute();

    expect(testRepositorySpy).toHaveBeenCalled();
  });
});
