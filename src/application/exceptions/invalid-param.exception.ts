import {
  Exception,
  ExceptionTypes,
} from "@application/protocols/exception.protocol";

export class InvalidParamException extends Exception {
  constructor(message: string) {
    super(ExceptionTypes.INVALID_PARAM, message);
  }
}
