import { HttpRequest, HttpResponse } from "./http.protocol";

export type Controller = {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
};
