import { ErrorTypes } from './ErrorTypes';

class ApplicationError extends Error {
  constructor(message: string) {
    super();

    this.message = message;
    this.name = ErrorTypes.ApplicationError;
  }
}

export { ApplicationError };
