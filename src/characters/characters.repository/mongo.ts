import { Db } from 'mongodb';

import { Character, CharactersRepository } from "../character";

const defaults = {
  offset: 0,
  limit: 100,
};

const createCharactersMongoRepository = (database: Db): CharactersRepository => {
  const getAll = (offset?: number, limit?: number) => {
    return Promise.resolve([]);
  };

  const getById = (id: string) => {
    return Promise.resolve(null);
  };

  const create = (character: Character) => {
    return Promise.resolve(character);
  };

  const update = (id: string, character: Partial<Character>) => {
    return Promise.resolve(null);
  };

  const remove = (id: string) => {
    return Promise.resolve(null);
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};

export { createCharactersMongoRepository, defaults };