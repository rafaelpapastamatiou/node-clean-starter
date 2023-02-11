import {
  Exception,
  ExceptionTypes,
} from "@application/protocols/exception.protocol";

export function getExceptionStatusCode(exception: Exception): number {
  switch (exception.type) {
    case ExceptionTypes.ALREADY_EXISTS:
      return 400;

    case ExceptionTypes.INVALID_PARAM:
      return 400;

    case ExceptionTypes.NOT_FOUND:
      return 404;

    case ExceptionTypes.UNAUTHORIZED:
      return 401;

    default:
      return 400;
  }
}
