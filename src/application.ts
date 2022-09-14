import express from 'express';

import { charactersRoutes } from './characters';

const createApplication = () => {
  const app = express();

  app.use(express.json());
  app.use(charactersRoutes());

  return app;
};

export { createApplication };
