import { Character, CharacterDTO } from "./character";
import { CharactersRepository } from "./character";
import { generateUUID } from '../uuid/generate';

interface CharactersService {
  getById: (id: string) => Promise<Character | null>,
  create: (characterDTO: CharacterDTO) => Promise<Character | null>,
  update: (id: string, characterDTO: CharacterDTO) => Promise<Character | null>,
  remove: (id: string) => Promise<Character | null>,
}

const createCharactersService = (
  charactersRepository: CharactersRepository,
  generateUniqueId = generateUUID,
): CharactersService => {
  const getById = async (id: string) => {
    return null;
  };

  const create = async (characterDTO: CharacterDTO) => {
    return null;
  };

  const update = async (id: string, characterDTO: CharacterDTO) => {
    return null;
  };

  const remove = async (id: string) => {
    return null;
  };

  return {
    getById,
    create,
    update,
    remove,
  };
};

export { createCharactersService, CharactersService };