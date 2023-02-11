export abstract class Exception {
  message: string;
  type: ExceptionTypes;

  constructor(type: ExceptionTypes, message: string) {
    this.type = type;
    this.message = message;
  }
}

export enum ExceptionTypes {
  "NOT_FOUND",
  "ALREADY_EXISTS",
  "INVALID_PARAM",
  "UNAUTHORIZED",
}
