import { Router } from 'express';

import { CharactersController } from './characters.controller';
import { createValidateRequest, ValidationKeys } from '../middlewares';
import * as Schema from './characters.schema';

const createCharactersRoutes = (charactersController: CharactersController) => {
  const router = Router();

  router.get(
    '/characters',
    [
      createValidateRequest(Schema.GetAllCharactersQueryParams, ValidationKeys.queryParams),
    ],
    charactersController.getCharacters,
  );

  router.get(
    '/characters/:id',
    [
      createValidateRequest(Schema.GetByIdCharacterParams, ValidationKeys.params),
    ],
    charactersController.getCharacter,
  );

  router.post(
    '/characters',
    [
      createValidateRequest(Schema.CreateCharacterBody, ValidationKeys.body),
    ],
    charactersController.createCharacter,
  );

  router.patch(
    '/characters/:id',
    [
      createValidateRequest(Schema.UpdateCharacterParams, ValidationKeys.params),
      createValidateRequest(Schema.UpdateCharacterBody, ValidationKeys.body),
    ],
    charactersController.updateCharacter,
  );

  router.delete(
    '/characters/:id',
    [
      createValidateRequest(Schema.RemoveCharacterParams, ValidationKeys.params),
    ],
    charactersController.removeCharacter,
  );

  return router;
};

export { createCharactersRoutes };