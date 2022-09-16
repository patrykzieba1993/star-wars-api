import request from 'supertest';

import { createTestApplication } from '../testApplication';
import { characterDTOFirst } from '../../../mocks/data';
import { Character } from '../../../characters/character';
import { createCharacter } from '../shared';

const application = createTestApplication();

describe('DELETE /characters/:id endpoint', () => {
  it('returns updated character', async () => {
    expect.assertions(2);

    const createCharacterResult = await createCharacter(application, characterDTOFirst);

    const characterCreated: Character = createCharacterResult.body.character;

    const removeCharacterResult = await request(application)
      .delete(`/characters/${characterCreated.id}`);

    const expectedBody = {
      character: {
        ...characterDTOFirst,
        id: expect.any(String),
      },
    };

    expect(removeCharacterResult.statusCode).toBe(200);
    expect(removeCharacterResult.body).toEqual(expectedBody);
  });
});
