export abstract class Exception extends Error {
  message: string;
  type: ExceptionTypes;

  constructor(type: ExceptionTypes, message: string) {
    super(message);
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
