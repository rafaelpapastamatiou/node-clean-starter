import {
  Exception,
  ExceptionTypes,
} from "@application/protocols/exception.protocol";

export class NotFoundException extends Exception {
  constructor(message: string) {
    super(ExceptionTypes.NOT_FOUND, message);
  }
}
