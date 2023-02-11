import { inject, injectable } from "tsyringe";

import { UseCase } from "@application/protocols/use-case.protocol";
import { TestRepository } from "@domain/repositories/test.repository";

export type TestUseCaseInterface = UseCase<[], string>;

@injectable()
export class TestUseCase implements TestUseCaseInterface {
  constructor(
    @inject("TestRepository") private testRepository: TestRepository,
  ) {}

  async execute(): Promise<string> {
    const _repositoryResult = await this.testRepository.find();

    return "TestUseCase succeeded";
  }
}
