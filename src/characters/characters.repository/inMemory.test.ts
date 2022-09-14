import { Character, CharactersRepository } from '../character';

import { createCharactersInMemoryRepository } from './inMemory';

import {
  characterFirst,
  characterSecond,
  characterThird,
  characterFourth,
} from '../../mocks/data';

describe('characters/repository/inMemory', () => {
  let charactersInMemoryRepository: CharactersRepository;

  beforeEach(() => {
    charactersInMemoryRepository = createCharactersInMemoryRepository();
  });

  describe('create', () => {
    it('adds a character to the collection', async () => {
      expect.assertions(2);

      const characterCreated = await charactersInMemoryRepository.create({ ...characterFirst });

      const expectedCollection = [
        characterFirst,
      ];

      const currentCollection = await charactersInMemoryRepository.getAll();

      expect(characterCreated).toEqual(characterFirst);
      expect(currentCollection).toEqual(expectedCollection);
    });
  });

  describe('update', () => {
    it('updates a character in the collection', async () => {
      expect.assertions(2);

      await charactersInMemoryRepository.create(characterFirst);

      const updatedName = `${characterFirst.name} - edited`;

      const expectedCharacter: Character = {
        ...characterFirst,
        name: updatedName,
      };

      const id = characterFirst.id;

      const toUpdate = {
        name: updatedName,
      };

      const characterUpdated = await charactersInMemoryRepository.update(id, toUpdate);

      const expectedCollection = [
        expectedCharacter,
      ];

      const currentCollection = await charactersInMemoryRepository.getAll();

      expect(characterUpdated).toEqual(characterUpdated);
      expect(currentCollection).toEqual(expectedCollection);
    });

    it('returns null when a character does not exist', async () => {
      expect.assertions(1);

      const id = characterFirst.id;

      const toUpdate = {};

      const characterUpdated = await charactersInMemoryRepository.update(id, toUpdate);

      expect(characterUpdated).toEqual(null);
    });
  });

  describe('remove', () => {
    it('removes a character from the collection', async () => {
      expect.assertions(2);

      await charactersInMemoryRepository.create(characterFirst);

      const characterRemoved = await charactersInMemoryRepository.remove(characterFirst.id);

      const currentCollection = await charactersInMemoryRepository.getAll();

      expect(characterRemoved).toEqual(characterFirst);
      expect(currentCollection).toEqual([]);
    });

    it('returns null when a character does not exist', async () => {
      expect.assertions(1);

      const id = characterFirst.id;

      const characterUpdated = await charactersInMemoryRepository.remove(id);

      expect(characterUpdated).toEqual(null);
    });
  });

  describe('getById', () => {
    it('returns a character from the collection', async () => {
      expect.assertions(1);

      await charactersInMemoryRepository.create(characterFirst);

      const characterFound = await charactersInMemoryRepository.getById(characterFirst.id);

      expect(characterFound).toEqual(characterFirst);
    });

    it('returns null when a character does not exist', async () => {
      expect.assertions(1);

      const id = characterFirst.id;

      const characterUpdated = await charactersInMemoryRepository.getById(id);

      expect(characterUpdated).toEqual(null);
    });
  });

  describe('getAll', () => {
    it('returns all characters from the collection', async () => {
      expect.assertions(1);

      await charactersInMemoryRepository.create(characterFirst);
      await charactersInMemoryRepository.create(characterSecond);

      const charactersFound = await charactersInMemoryRepository.getAll();

      const expectedCollection = [
        characterFirst,
        characterSecond,
      ];

      expect(charactersFound).toEqual(expectedCollection);
    });

    it('returns characters from the collection specified by pagination', async () => {
      expect.assertions(1);

      await charactersInMemoryRepository.create(characterFirst);
      await charactersInMemoryRepository.create(characterSecond);
      await charactersInMemoryRepository.create(characterThird);
      await charactersInMemoryRepository.create(characterFourth);

      const offset = 1;
      const limit = 2;

      const charactersFound = await charactersInMemoryRepository.getAll(offset, limit);

      const expectedCollection = [
        characterSecond,
        characterThird,
      ];

      expect(charactersFound).toEqual(expectedCollection);
    });
  });
});
