import { Character, CharactersRepository } from '../character';

const createCharactersInMemoryRepository = (): CharactersRepository => {
  let collection: Array<Character> = [];

  const getAll = (offset?: number, limit?: number) => {
    let collectionToReturn = [...collection];

    if (offset) {
      collectionToReturn = collectionToReturn.slice(offset);
    }

    if (limit) {
      collectionToReturn = collectionToReturn.slice(0, limit);
    }

    return Promise.resolve(collectionToReturn);
  };

  const getById = (id: string) => {
    const characterFound = collection.find(character => character.id === id);

    if (!characterFound) {
      return Promise.resolve(null);
    }

    return Promise.resolve(characterFound);
  };

  const create = (character: Character) => {
    collection.push(character);

    return Promise.resolve(character);
  };

  const update = (id: string, character: Partial<Character>) => {
    const indexOfCharacter = collection.findIndex(
      (currentCharacter) => currentCharacter.id === id,
    );

    if (indexOfCharacter === -1) {
      return Promise.resolve(null);
    }

    collection[indexOfCharacter] = { ...collection[indexOfCharacter], ...character };

    const characterUpdated = collection[indexOfCharacter];

    return Promise.resolve(characterUpdated);
  };

  const remove = (id: string) => {
    const characterRemoved = collection.find(character => character.id === id);

    if (!characterRemoved) {
      return Promise.resolve(null);
    }

    collection = collection.filter(character => character.id !== id);

    return Promise.resolve(characterRemoved);
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};

export { createCharactersInMemoryRepository };