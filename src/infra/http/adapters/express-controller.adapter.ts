import { Handler } from "express";

import { Controller } from "@application/protocols/controller.protocol";
import { Exception } from "@application/protocols/exception.protocol";
import {
  HttpRequest,
  HttpResponse,
} from "@application/protocols/http.protocol";
import { getExceptionStatusCode } from "@infra/helpers/get-exception-status-code";

export class ExpressRouteAdapter {
  static async adapt(controller: Controller): Promise<Handler> {
    return async (req, res) => {
      const httpRequest = new HttpRequest({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
        userId: (req as any).userId,
      });

      try {
        const response = await controller.handle(httpRequest);

        return res.status(response.statusCode).json(response.body);
      } catch (err) {
        if (err instanceof Exception) {
          const statusCode = getExceptionStatusCode(err);

          const response = new HttpResponse(statusCode, {
            error: err.message,
          });

          return res.status(response.statusCode).json(response.body);
        }

        console.log("ExpressControllerAdapter error: ", err);

        const response = new HttpResponse(500, {
          error: "Internal Server Error",
        });

        return res.status(response.statusCode).json(response.body);
      }
    };
  }
}
