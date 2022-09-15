import { ErrorTypes } from './ErrorTypes';

class HttpRequestValidationError extends Error {
  constructor(message: string) {
    super(message);

    this.name = ErrorTypes.HttpRequestValidationError;
  }
}

const isHttpRequestValidationError = (error: Error): error is HttpRequestValidationError => {
  return error.name === ErrorTypes.HttpRequestValidationError;
};

export { HttpRequestValidationError, isHttpRequestValidationError };
