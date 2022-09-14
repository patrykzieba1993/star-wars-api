import { Router } from 'express';
import { CharactersController } from './characters.controller';

const createCharactersRoutes = (charactersController: CharactersController) => {
  const router = Router();

  router.get(
    '/characters',
    charactersController.getCharacters,
  );

  router.get(
    '/characters/:id',
    charactersController.getCharacter,
  );

  router.post(
    '/characters',
    charactersController.createCharacter,
  );

  router.patch(
    '/characters/:id',
    charactersController.updateCharacter,
  );

  router.delete(
    '/characters/:id',
    charactersController.removeCharacter,
  );

  return router;
};

export { createCharactersRoutes };