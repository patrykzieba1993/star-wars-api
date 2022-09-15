import { ErrorTypes } from './ErrorTypes';

export class HttpRequestValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = ErrorTypes.HttpRequestValidationError;
  }
}
