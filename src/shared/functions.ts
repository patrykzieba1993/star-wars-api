import { NextFunction, Request, Response } from 'express';

import { Handler } from './types';

const withErrorHandling = (handler: Handler) => async (request: Request, response: Response, next: NextFunction) => {
  try {
    await handler(request, response, next);
  } catch (error) {
    next(error);
  }
};

export { withErrorHandling };
