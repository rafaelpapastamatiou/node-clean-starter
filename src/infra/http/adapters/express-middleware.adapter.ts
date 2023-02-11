import { Handler } from "express";

import { Exception } from "@application/protocols/exception.protocol";
import {
  HttpRequest,
  HttpResponse,
} from "@application/protocols/http.protocol";
import { Middleware } from "@application/protocols/middleware.protocol";
import { getExceptionStatusCode } from "@infra/helpers/get-exception-status-code";

export class ExpressMiddlewareAdapter {
  async adapt(middleware: Middleware): Promise<Handler> {
    return async (req, res, next) => {
      const httpRequest = new HttpRequest({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
        userId: (req as any).userId,
      });

      try {
        const response = await middleware.handle(httpRequest);

        if (response) {
          return res.status(response.statusCode).json(response.body);
        }

        return next();
      } catch (err) {
        if (err instanceof Exception) {
          const statusCode = getExceptionStatusCode(err);

          const response = new HttpResponse(statusCode, {
            error: err.message,
          });

          return res.status(response.statusCode).json(response.body);
        }

        console.log("ExpressMiddlewareAdapter error: ", err);

        const response = new HttpResponse(500, {
          error: "Internal Server Error",
        });

        return res.status(response.statusCode).json(response.body);
      }
    };
  }
}
