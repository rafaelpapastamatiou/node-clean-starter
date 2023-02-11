export type HttpBody = object;
export type HttpParams = object;
export type HttpQuery = object;

interface HttpRequestConstructor<
  B extends HttpBody = HttpBody,
  P extends HttpParams = HttpParams,
  Q extends HttpQuery = HttpQuery,
> {
  body: B;
  params: P;
  query: Q;
  headers: object;
  userId?: string;
}

export class HttpRequest<
  B extends HttpBody = HttpBody,
  P extends HttpParams = HttpParams,
  Q extends HttpQuery = HttpQuery,
> {
  body: B;
  params: P;
  query: Q;
  headers: object;
  userId?: string;

  constructor(params: HttpRequestConstructor<B, P, Q>) {
    Object.assign(this, params);
  }
}

export class HttpResponse<B extends HttpBody = HttpBody> {
  statusCode: number;
  body: B;

  constructor(statusCode: number, body: B) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
