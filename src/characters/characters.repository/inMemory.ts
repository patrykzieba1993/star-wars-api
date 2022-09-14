import { Character, CharactersRepository } from '../character';

// collection parameter is mutable intentionally because it simulates a permanent data storage
const createCharactersInMemoryRepository = (collection: Array<Character> = []): CharactersRepository => {
  const getAll = (offset?: number, limit?: number) => {
    return Promise.resolve(collection);
  };

  const getById = (id: string) => {
    return Promise.resolve(collection[0]);
  };

  const create = (character: Character) => {
    return Promise.resolve(collection[0]);
  };

  const update = (character: Partial<Character>) => {
    return Promise.resolve(collection[0]);
  };

  const remove = (id: string) => {
    return Promise.resolve(collection[0]);
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