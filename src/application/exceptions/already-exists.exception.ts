import {
  Exception,
  ExceptionTypes,
} from "@application/protocols/exception.protocol";

export class AlreadyExistsException extends Exception {
  constructor(message: string) {
    super(ExceptionTypes.ALREADY_EXISTS, message);
  }
}
