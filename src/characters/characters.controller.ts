import { Controller } from '../shared/types';
import { withErrorHandling } from '../shared/functions';

type CharactersController = Controller<[
  'getCharacter', 'getCharacters', 'createCharacter', 'updateCharacter', 'removeCharacter',
]>;

const createCharactersController = (): CharactersController => {
  const getCharacters = withErrorHandling(async (request, response) => {
    const { offset, limit } = request.query;

    response.json({
      character: `characters ${offset} ${limit}`,
    });
  });

  const getCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;

    response.json({
      character: `character ${id}`,
    });
  });

  const createCharacter = withErrorHandling(async (request, response) => {
    const { body } = request;

    response.json({
      character: `create character ${JSON.stringify(body)}`,
    });
  });

  const updateCharacter = withErrorHandling(async (request, response) => {
    const { body } = request;

    response.json({
      character: `update character ${JSON.stringify(body)}`,
    });
  });

  const removeCharacter = withErrorHandling(async (request, response) => {
    const { id } = request.params;

    response.json({
      character: `delete character ${id}`,
    });
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
