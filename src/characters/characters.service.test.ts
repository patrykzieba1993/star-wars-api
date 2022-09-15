import { createCharactersService } from './characters.service';
import { Character, CharactersRepository } from './character';
import { characterDTOFirst, characterFirst } from '../mocks/data';
import { ResourceNotFoundError } from '../errors';

const CharacterNotFoundError = (id: string) => (
  new ResourceNotFoundError(`Character with id ${id} not found`)
);

describe('characters/service', () => {
  const generateUniqueId = jest.fn().mockImplementation(() => characterFirst.id);

  const getAll = () => Promise.resolve([characterFirst]);
  const getById = jest.fn().mockResolvedValue(characterFirst);
  const create = jest.fn().mockResolvedValue(characterFirst);
  const update = jest.fn().mockResolvedValue(characterFirst);
  const remove = jest.fn().mockResolvedValue(characterFirst);

  const charactersRepository: CharactersRepository = {
    getAll, getById, create, update, remove,
  };

  const charactersService = createCharactersService(charactersRepository, generateUniqueId);

  afterEach(jest.clearAllMocks);

  describe('getById', () => {
    const id = characterFirst.id;

    it('returns a character specified by id', async () => {
      expect.assertions(3);

      const characterFound = await charactersService.getById(id);

      expect(characterFound).toEqual(characterFirst);

      expect(getById).toHaveBeenCalledTimes(1);
      expect(getById).toHaveBeenCalledWith(id);
    });

    it('throws an error when character is not found', async () => {
      expect.assertions(1);

      getById.mockResolvedValueOnce(null);

      await expect(charactersService.getById(id))
        .rejects
        .toThrow(CharacterNotFoundError(id));
    });
  });

  describe('create', () => {
    it('adds an unique id to a character', async () => {
      expect.assertions(4);

      const characterCreated = await charactersService.create(characterDTOFirst);

      expect(characterCreated).toEqual(characterFirst);

      expect(generateUniqueId).toHaveBeenCalledTimes(1);

      const expectedCharacter: Character = {
        ...characterDTOFirst,
        id: characterFirst.id,
      };

      expect(create).toHaveBeenCalledTimes(1);
      expect(create).toHaveBeenCalledWith(expectedCharacter);
    });
  });

  describe('update', () => {
    const id = characterFirst.id;

    const toUpdate = {
      ...characterDTOFirst,
    };

    it('updates a character', async () => {
      const characterUpdated = await charactersService.update(id, toUpdate);

      expect(characterUpdated).toEqual(characterFirst);

      expect(update).toHaveBeenCalledTimes(1);
      expect(update).toHaveBeenCalledWith(id, toUpdate);
    });

    it('throws an error when character is not found', async () => {
      expect.assertions(1);

      update.mockResolvedValueOnce(null);

      await expect(charactersService.update(id, toUpdate))
        .rejects
        .toThrow(CharacterNotFoundError(id));
    });
  });

  describe('delete', () => {
    const id = characterFirst.id;

    it('removes a character', async () => {
      const characterRemoved = await charactersService.remove(id);

      expect(characterRemoved).toEqual(characterFirst);

      expect(remove).toHaveBeenCalledTimes(1);
      expect(remove).toHaveBeenCalledWith(id);
    });

    it('throws an error when character is not found', async () => {
      expect.assertions(1);

      remove.mockResolvedValueOnce(null);

      await expect(charactersService.remove(id))
        .rejects
        .toThrow(CharacterNotFoundError(id));
    });
  });
});
