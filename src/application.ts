import express from 'express';
import { Db } from 'mongodb';

import { charactersRoutes } from './characters';
import { handleError } from './middlewares';

const createApplication = (database?: Db) => {
  const app = express();

  app.use(express.json());
  app.use(charactersRoutes(database));
  app.use(handleError);

  return app;
};

export { createApplication };
