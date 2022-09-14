import { Character, CharactersRepository } from '../character';

import { createCharactersInMemoryRepository } from './inMemory';

import {
  characterFirst,
  characterSecond,
  characterThird,
  characterFourth,
} from '../../mocks/data';

describe('characters/repository/inMemory', () => {
  let collection: Array<Character> = [];
  let charactersInMemoryRepository: CharactersRepository;

  beforeEach(() => {
    collection = [
      characterFirst,
      characterSecond,
      characterThird,
    ];

    charactersInMemoryRepository = createCharactersInMemoryRepository(collection);
  });

  it('adds a character to the collection', async () => {
    expect.assertions(2);

    const characterCreated = await charactersInMemoryRepository.create(characterFourth);

    const expectedCollection = [
      ...collection,
      characterFourth,
    ];

    expect(characterCreated).toEqual(characterFourth);
    expect(collection).toEqual(expectedCollection);
  });

  it('updates a character in the collection', async () => {
    expect.assertions(2);

    const updatedName = `${characterSecond.name} - edited`;

    const characterUpdated = await charactersInMemoryRepository.update({
      name: updatedName,
    });

    const expectedCharacter: Character = {
      ...characterSecond,
      name: updatedName,
    };

    const expectedCollection = [
      characterFirst,
      expectedCharacter,
      characterThird,
    ];

    expect(characterUpdated).toEqual(characterUpdated);
    expect(collection).toEqual(expectedCollection);
  });

  it('removes a character from the collection', async () => {
    expect.assertions(2);

    const characterRemoved = await charactersInMemoryRepository.remove(characterSecond.id);

    const expectedCollection = [
      characterFirst,
      characterThird,
    ];

    expect(characterRemoved).toEqual(characterSecond);
    expect(collection).toEqual(expectedCollection);
  });

  it('returns a character from the collection', async () => {
    expect.assertions(1);

    const characterFound = await charactersInMemoryRepository.getById(characterSecond.id);

    expect(characterFound).toEqual(characterSecond);
  });

  it('returns all characters from the collection', async () => {
    expect.assertions(1);

    const charactersFound = await charactersInMemoryRepository.getAll();

    expect(charactersFound).toEqual(collection);
  });

  it('returns characters from the collection specified by pagination', async () => {
    expect.assertions(1);

    const offset = 1;
    const limit = 1;

    const charactersFound = await charactersInMemoryRepository.getAll(offset, limit);

    expect(charactersFound).toEqual([characterSecond]);
  });
});
