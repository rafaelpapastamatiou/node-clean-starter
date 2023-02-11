import { ApiPath } from "swagger-decorators";
import { inject, injectable } from "tsyringe";

import { Controller } from "@application/protocols/controller.protocol";
import {
  HttpRequest,
  HttpResponse,
} from "@application/protocols/http.protocol";
import { TestUseCaseInterface } from "@application/useCases/test.use-case";
import { TestBodyInputDTO, TestOutputDTO } from "@infra/http/dtos/test.dto";

@injectable()
export class TestController implements Controller {
  constructor(
    @inject("TestUseCase") private testUseCase: TestUseCaseInterface,
  ) {}

  @ApiPath({
    method: "post",
    path: "/test",
    description: "POST test endpoint",
    requestBodySchema: "TestBodyInputDTO",
    responses: {
      200: {
        description: "Success",
        responseSchema: "TestOutputDTO",
      },
      404: {
        description: "User not found",
        responseMessage: "User not found",
      },
    },
  })
  async handle({
    body,
  }: HttpRequest<TestBodyInputDTO>): Promise<HttpResponse<TestOutputDTO>> {
    await this.testUseCase.execute();

    return new HttpResponse(200, {
      email: body.email,
      name: body.name,
    });
  }
}
