import {
  Exception,
  ExceptionTypes,
} from "@application/protocols/exception.protocol";

export class UnauthorizedException extends Exception {
  constructor() {
    super(ExceptionTypes.UNAUTHORIZED, "Unauthorized");
  }
}
