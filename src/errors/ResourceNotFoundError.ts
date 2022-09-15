import { ErrorTypes } from './ErrorTypes';

class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super();

    this.message = message;
    this.name = ErrorTypes.ResourceNotFoundError;
  }
}

const isResourceNotFoundError = (error: Error): error is ResourceNotFoundError => {
  return error.name === ErrorTypes.ResourceNotFoundError;
};

export { ResourceNotFoundError, isResourceNotFoundError };
