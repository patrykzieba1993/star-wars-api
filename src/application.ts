import express from 'express';
import { Db } from 'mongodb';

import { charactersRoutes } from './characters';

const createApplication = (database: Db) => {
  const app = express();

  app.use(express.json());
  app.use(charactersRoutes(database));

  return app;
};

export { createApplication };
