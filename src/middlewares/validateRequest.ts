import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

import { HttpRequestValidationError } from '../errors/HttpRequestValidationError';
import { ApplicationError } from '../errors/ApplicationError';

enum ValidationKeys {
  body = 'body',
  params = 'params',
  queryParams = 'queryParams',
}

const createValidateRequest = (
  schema: Schema,
  key: string,
) => (req: Request, res: Response, next: NextFunction) => {
  let value;

  switch (key) {
    case ValidationKeys.body:
      value = req.body;
      break;
    case ValidationKeys.params:
      value = req.params;
      break;
    case ValidationKeys.queryParams:
      value = req.query;
      break;
    default:
      throw new ApplicationError(`Unrecognised validation key ${key}`);
  }

  const validationResult = schema.validate(value);

  if (validationResult.error) {
    throw new HttpRequestValidationError(validationResult.error.message);
  }

  next();
};

export { createValidateRequest, ValidationKeys };