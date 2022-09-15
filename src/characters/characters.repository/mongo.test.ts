import { Db } from 'mongodb';
import { createCharactersMongoRepository, defaults } from './mongo';

import { characterFirst, characterSecond, characterThird } from '../../mocks/data';

const characters = [characterFirst, characterSecond, characterThird];

describe('characters/repository/mongo', function () {
  const findOne = jest.fn().mockResolvedValue(characterFirst);

  const toArray = jest.fn().mockResolvedValue(characters);

  const limit = jest.fn().mockImplementation(() => ({
    toArray,
  }));

  const skip = jest.fn().mockImplementation( () => ({
    limit,
  }));

  const find = jest.fn().mockImplementation(() => ({
    skip,
  }));

  const insertOne = jest.fn().mockResolvedValue(characterFirst);

  const updateOne = jest.fn().mockResolvedValue(characterFirst);

  const deleteOne = jest.fn();

  const database: Db = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: Figure out more sophisticated DB mock
    collection: () => ({
      findOne,
      find,
      insertOne,
      updateOne,
      deleteOne,
    }),
  };

  const charactersMongoRepository = createCharactersMongoRepository(database);

  afterEach(jest.clearAllMocks);

  describe('create', () => {
    it('adds a character to the database', async () => {
      expect.assertions(3);

      const characterCreated = await charactersMongoRepository.create(characterFirst);

      expect(characterCreated).toEqual(characterFirst);

      expect(insertOne).toHaveBeenCalledTimes(1);
      expect(insertOne).toHaveBeenCalledWith(characterFirst);
    });
  });

  describe('update', () => {
    it('updates a character in the database', async () => {
      expect.assertions(3);

      const toUpdate = {
        name: `${characterFirst.name} - edited`,
      };

      const id = characterFirst.id;

      const expectedCharacter = {
        ...characterFirst,
        ...toUpdate,
      };

      findOne.mockResolvedValueOnce(expectedCharacter);

      const characterUpdated = await charactersMongoRepository.update(id, toUpdate);

      expect(characterUpdated).toEqual(expectedCharacter);

      expect(updateOne).toHaveBeenCalledTimes(1);
      expect(updateOne).toHaveBeenCalledWith({ id }, { $set: { ...toUpdate } });
    });
  });

  describe('remove', () => {
    it('removes a character from the database', async () => {
      expect.assertions(3);

      const characterRemoved = await charactersMongoRepository.remove(characterFirst.id);

      expect(characterRemoved).toEqual(characterFirst);

      expect(deleteOne).toHaveBeenCalledTimes(1);
      expect(deleteOne).toHaveBeenCalledWith({ id: characterFirst.id });
    });
  });

  describe('getById', () => {
    it('returns a character from the database', async () => {
      expect.assertions(3);

      const characterFound = await charactersMongoRepository.getById(characterFirst.id);

      expect(characterFound).toEqual(characterFirst);

      expect(findOne).toHaveBeenCalledTimes(1);
      expect(findOne).toHaveBeenCalledWith({ id: characterFirst.id }, expect.any(Object));
    });
  });

  describe('getAll', () => {
    it('returns all characters from the collection', async () => {
      expect.assertions(7);

      const charactersFound = await charactersMongoRepository.getAll();

      expect(charactersFound).toEqual(characters);

      expect(skip).toHaveBeenCalledTimes(1);
      expect(skip).toHaveBeenCalledWith(defaults.offset);

      expect(limit).toHaveBeenCalledTimes(1);
      expect(limit).toHaveBeenCalledWith(defaults.limit);

      expect(find).toHaveBeenCalledTimes(1);
      expect(find).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });

    it('returns characters from the collection specified by pagination', async () => {
      expect.assertions(7);

      toArray.mockResolvedValueOnce([characterSecond]);

      const pagination = {
        offset: 1,
        limit: 1,
      };

      const charactersFound = await charactersMongoRepository.getAll(
        pagination.offset, pagination.limit,
      );

      expect(charactersFound).toEqual([characterSecond]);

      expect(skip).toHaveBeenCalledTimes(1);
      expect(skip).toHaveBeenCalledWith(pagination.offset);

      expect(limit).toHaveBeenCalledTimes(1);
      expect(limit).toHaveBeenCalledWith(pagination.limit);

      expect(find).toHaveBeenCalledTimes(1);
      expect(find).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
  });
});
