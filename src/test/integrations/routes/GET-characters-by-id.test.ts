import request from 'supertest';

import { createTestApplication } from '../testApplication';
import { characterDTOFirst } from '../../../mocks/data';
import { Character } from '../../../characters/character';
import { createCharacter } from '../shared';

const application = createTestApplication();

describe('GET /characters/:id endpoint', () => {
  it('returns requested character', async () => {
    expect.assertions(2);

    const createCharacterResult = await createCharacter(application, characterDTOFirst);

    const characterCreated: Character = createCharacterResult.body.character;

    const getCharacterResult = await request(application)
      .get(`/characters/${characterCreated.id}`);

    const expectedBody = {
      character: {
        ...characterDTOFirst,
        id: expect.any(String),
      },
    };

    expect(getCharacterResult.statusCode).toBe(200);
    expect(getCharacterResult.body).toEqual(expectedBody);
  });
});
