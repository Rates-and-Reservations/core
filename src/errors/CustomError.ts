export class CustomError extends Error {
  statusCode: number;
  details?: unknown;

  constructor(message: string, statusCode = 400, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;

    // For extending built-in Error
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
