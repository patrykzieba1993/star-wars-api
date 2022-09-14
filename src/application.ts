import express from 'express';

const createApplication = () => {
  const app = express();

  app.get('/', (req, res) => res.json({ message: 'Hello Star Wars!!!' }));

  return app;
};

export { createApplication };
