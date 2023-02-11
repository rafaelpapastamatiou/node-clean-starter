import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

import {
  HttpRequest,
  HttpResponse,
} from "@application/protocols/http.protocol";
import { Middleware } from "@application/protocols/middleware.protocol";

interface ValidationMiddlewareConstructorParams {
  bodySchema?: ClassConstructor<object>;
  paramsSchema?: ClassConstructor<object>;
}

export class ValidationMiddleware implements Middleware {
  bodySchema?: ClassConstructor<object>;
  paramsSchema?: ClassConstructor<object>;

  constructor({
    bodySchema,
    paramsSchema,
  }: ValidationMiddlewareConstructorParams) {
    this.bodySchema = bodySchema;
    this.paramsSchema = paramsSchema;
  }

  async handle(request: HttpRequest): Promise<HttpResponse | undefined> {
    try {
      const { body, params } = request;

      let errors: string[] = [];

      if (this.bodySchema) {
        const bodyDtoObject = plainToInstance(this.bodySchema, body);
        const bodyErrors = await validate(bodyDtoObject);

        errors = errors.concat(this.formatErrors(bodyErrors));
      }

      if (this.paramsSchema) {
        const paramsDtoObject = plainToInstance(this.paramsSchema, params);
        const paramErrors = await validate(paramsDtoObject);

        errors = errors.concat(this.formatErrors(paramErrors));
      }

      if (errors.length > 0) {
        return new HttpResponse(400, { errors });
      }
    } catch (err) {
      console.log("ValidationMiddleware error: ", err);

      return new HttpResponse(500, { error: "Internal Server Error" });
    }
  }

  formatErrors(errors: ValidationError[]) {
    return errors.map((err) => Object.values(err.constraints || {}).join(", "));
  }
}
