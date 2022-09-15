import express, { Router } from "express";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

import { config } from '../config';

const host = config.host;

const swagger = () => {
  const router = Router();

  const options = {
    failOnErrors: false,
    definition: {
      info: {
        title: 'Star Wars API',
        version: '1.0.0',
      },
      host,
      basePath: '/',
    },
    apis: [
      path.join(__dirname, '/characters.routes.js'),
    ],
  };

  const swaggerSpec = swaggerJSDoc(options);

  router.get('/swagger.json', (req: express.Request, res: express.Response): void => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  router.get('/docs', (req: express.Request, res: express.Response): void => {
    res.render('docs', { host });
  });

  return router;
};

export { swagger };
