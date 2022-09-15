import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

import { HttpRequestValidationError } from '../errors/HttpRequestValidationError';

enum ValidationKeys {
  body = 'body',
  params = 'params',
  queryParams = 'queryParams',
}

const createValidateRequest = (
  schema: Schema,
  key: string,
) => (request: Request, response: Response, next: NextFunction) => {
  let value;

  switch (key) {
    case ValidationKeys.body:
      value = request.body;
      break;
    case ValidationKeys.params:
      value = request.params;
      break;
    case ValidationKeys.queryParams:
      value = request.query;
      break;
    default:
      throw new Error(`Unrecognised validation key ${key}`);
  }

  const validationResult = schema.validate(value);

  if (validationResult.error) {
    throw new HttpRequestValidationError(validationResult.error.message);
  }

  next();
};

export { createValidateRequest, ValidationKeys };