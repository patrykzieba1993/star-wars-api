import { ErrorTypes } from './ErrorTypes';

class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super();

    this.message = message;
    this.name = ErrorTypes.ResourceNotFoundError;
  }
}

export { ResourceNotFoundError };
