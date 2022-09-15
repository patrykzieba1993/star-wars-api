import { Request, Response, NextFunction } from 'express';

import {
  isHttpRequestValidationError,
  isResourceNotFoundError,
} from '../errors';

const handleError = (error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error) {
    let message = 'Internal server error';
    let code = 500;

    console.log(error);

    if (isHttpRequestValidationError(error)) {
      code = 400;
      message = error.message;
    }

    if (isResourceNotFoundError(error)) {
      code = 404;
      message = error.message;
    }

    response.status(code).json({
      code,
      message,
    });
  } else {
    next();
  }
};

export { handleError };
