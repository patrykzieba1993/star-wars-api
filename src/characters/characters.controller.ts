import { Controller } from '../shared/types';
import { CharactersRepository } from './character';
import { withErrorHandling } from '../shared/functions';

type CharactersController = Controller<[
  'getCharacter', 'getCharacters', 'createCharacter', 'updateCharacter', 'removeCharacter',
]>;

const createCharactersController = (charactersRepository: CharactersRepository): CharactersController => {
  const getCharacters = withErrorHandling(async (request, response) => {
    const offset = parseInt(request.query.offset as string, 10);
    const limit = parseInt(request.query.limit as string, 10);

    const characters = await charactersRepository.getAll(offset, limit);

    response.json(characters);
  });

  const getCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;

    const character = await charactersRepository.getById(id);

    response.json(character);
  });

  const createCharacter = withErrorHandling(async (request, response) => {
    const { body } = request;

    const characterCreated = await charactersRepository.create(body);

    response.status(201).json(characterCreated);
  });

  const updateCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    const characterUpdated = await charactersRepository.update(id, body);

    response.json(characterUpdated);
  });

  const removeCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;

    const characterRemoved = await charactersRepository.remove(id);

    response.json(characterRemoved);
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
