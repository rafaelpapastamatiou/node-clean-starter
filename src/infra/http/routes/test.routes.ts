import { Router } from "express";
import { container } from "tsyringe";

import { ExpressRouteAdapter } from "../adapters/express-controller.adapter";
import { TestController } from "../controllers/test.controller";

// import { ExpressMiddlewareAdapter } from "../adapters/express-middleware.adapter";
// import { TestBodyInputDTO } from "../dtos/test.dto";
// import { ValidationMiddleware } from "../middlewares/validation.middleware";

export const testRoutes = Router();

const testController = container.resolve(TestController);

testRoutes.get(
  "/",
  // ExpressMiddlewareAdapter.adapt(
  //   new ValidationMiddleware({ bodySchema: TestBodyInputDTO }),
  // ),
  ExpressRouteAdapter.adapt(testController),
);
