import { NextFunction, Request, Response } from 'express';

type Handler = (request: Request, response: Response, next: NextFunction) => Promise<void>;

type Controller<T extends Array<string>> = {
  [K in T[number]]: Handler;
};

export { Handler, Controller };