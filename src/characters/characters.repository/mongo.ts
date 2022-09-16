import { Db } from 'mongodb';

import { Character, CharacterDTO, CharactersRepository } from '../character';
import { config } from '../../config';

const findOptions = { projection: { _id: 0 } };

const defaults = {
  offset: config.characters.defaultOffset,
  limit: config.characters.defaultLimit,
  collectionName: config.database.collectionName,
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

  const update = async (id: string, characterDTO: Partial<CharacterDTO>) => {
    await collection.updateOne({ id }, { $set: { ...characterDTO } });

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
