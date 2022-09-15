import { Db } from 'mongodb';

import { Character, CharactersRepository } from '../character';

const findOptions = { projection: { _id: 0 } };

const defaults = {
  offset: 0,
  limit: 100,
  collectionName: 'characters',
};

const createCharactersMongoRepository = (database: Db): CharactersRepository => {
  const collection = database.collection<Character>(defaults.collectionName);

  const getAll = async (offset?: number, limit?: number) => {
    const charactersFound = await collection
      .find({}, findOptions)
      .skip(offset || defaults.offset)
      .limit(limit || defaults.limit)
      .toArray();

    return charactersFound;
  };

  const getById = async (id: string) => {
    return collection.findOne({ id }, findOptions);
  };

  const create = async (character: Character) => {
    await collection.insertOne({ ...character });

    return character;
  };

  const update = async (id: string, character: Partial<Character>) => {
    await collection.updateOne({ id }, { $set: { ...character } });

    return getById(id);
  };

  const remove = async (id: string) => {
    const characterRemoved = await getById(id);

    await collection.deleteOne({ id });

    return characterRemoved;
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
