import express from 'express';
import { Db } from 'mongodb';
import consolidate from 'consolidate';
import path from "path";

import { charactersRoutes } from './characters';
import { handleError } from './middlewares';
import { swagger } from './swagger';

const createApplication = (database?: Db) => {
  const app = express();

  app.engine('hjs', consolidate.handlebars);
  app.set('view engine', 'hjs');
  app.use(express.static(path.join(__dirname, '..', 'views')));
  app.use(express.json());
  app.use(swagger());
  app.use(charactersRoutes(database));
  app.use(handleError);

  return app;
};

export { createApplication };
