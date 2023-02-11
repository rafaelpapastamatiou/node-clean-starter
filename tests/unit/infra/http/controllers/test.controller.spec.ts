import "reflect-metadata";
import { container, DependencyContainer } from "tsyringe";

import { TestUseCaseInterface } from "@application/useCases/test.use-case";
import { TestController } from "@infra/http/controllers/test.controller";
import { TestUseCaseStub } from "@tests/unit/application/useCases/stubs/test.use-case.stub";

let childContainer: DependencyContainer;

describe("TestController", () => {
  beforeAll(() => {
    container.clearInstances();

    childContainer = container
      .createChildContainer()
      .registerSingleton<TestUseCaseInterface>("TestUseCase", TestUseCaseStub);
  });

  test("should call TestUseCase", async () => {
    const testController = childContainer.resolve(TestController);

    const testUseCaseStub =
      childContainer.resolve<TestUseCaseInterface>("TestUseCase");

    const testUseCaseSpy = jest.spyOn(testUseCaseStub, "execute");
    const response = await testController.handle({
      body: { email: "johndoe@email.com", name: "john" },
      params: {},
      headers: {},
      query: {},
    });

    expect(testUseCaseSpy).toHaveBeenCalled();
    expect(response.statusCode).toBe(200);
    expect(response.body.email).toBe("johndoe@email.com");
    expect(response.body.name).toBe("john");
  });
});
