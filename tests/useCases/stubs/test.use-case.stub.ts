import { injectable } from "tsyringe";

import { TestUseCaseInterface } from "@application/useCases/test.use-case";

@injectable()
export class TestUseCaseStub implements TestUseCaseInterface {
  async execute(): Promise<string> {
    return "success";
  }
}
