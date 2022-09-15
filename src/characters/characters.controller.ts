import { Controller } from '../shared/types';
import { CharactersFacade } from './characters.facade';
import { withErrorHandling } from '../shared/functions';

type CharactersController = Controller<[
  'getCharacter', 'getCharacters', 'createCharacter', 'updateCharacter', 'removeCharacter',
]>;

const createCharactersController = (charactersFacade: CharactersFacade): CharactersController => {
  const getCharacters = withErrorHandling(async (request, response) => {
    const offset = parseInt(request.query.offset as string, 10);
    const limit = parseInt(request.query.limit as string, 10);

    const charactersFound = await charactersFacade.getAll(offset, limit);

    response.json({ characters: charactersFound });
  });

  const getCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;

    const characterFound = await charactersFacade.getById(id);

    response.json({ character: characterFound });
  });

  const createCharacter = withErrorHandling(async (request, response) => {
    const { body } = request;

    const characterCreated = await charactersFacade.create(body);

    response.status(201).json({ character: characterCreated });
  });

  const updateCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    const characterUpdated = await charactersFacade.update(id, body);

    response.json({ character: characterUpdated });
  });

  const removeCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;

    const characterRemoved = await charactersFacade.remove(id);

    response.json({ character: characterRemoved });
  });

  return {
    getCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    removeCharacter,
  };
};

export { createCharactersController, CharactersController };
