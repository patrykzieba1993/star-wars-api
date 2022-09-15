import { Character, CharacterDTO } from './character';
import { CharactersRepository } from './character';
import { generateUUID } from '../uuid/generate';
import { ResourceNotFoundError } from '../errors';

interface CharactersService {
  getById: (id: string) => Promise<Character>,
  create: (characterDTO: CharacterDTO) => Promise<Character>,
  update: (id: string, characterDTO: CharacterDTO) => Promise<Character>,
  remove: (id: string) => Promise<Character>,
}

const CharacterNotFoundError = (id: string) => {
  return new ResourceNotFoundError(`Character with id ${id} not found`);
};

const createCharactersService = (
  charactersRepository: CharactersRepository,
  generateUniqueId = generateUUID,
): CharactersService => {
  const getById = async (id: string) => {
    const characterFound = await charactersRepository.getById(id);

    if (!characterFound) {
      throw CharacterNotFoundError(id);
    }

    return characterFound;
  };

  const create = async (characterDTO: CharacterDTO) => {
    const character: Character = {
      id: generateUniqueId(),
      ...characterDTO,
    };

    return charactersRepository.create(character);
  };

  const update = async (id: string, characterDTO: CharacterDTO) => {
    const characterUpdated = await charactersRepository.update(id, characterDTO);

    if (!characterUpdated) {
      throw CharacterNotFoundError(id);
    }

    return characterUpdated;
  };

  const remove = async (id: string) => {
    const characterRemoved = await charactersRepository.remove(id);

    if (!characterRemoved) {
      throw CharacterNotFoundError(id);
    }

    return characterRemoved;
  };

  return {
    getById,
    create,
    update,
    remove,
  };
};

export { createCharactersService, CharactersService };
