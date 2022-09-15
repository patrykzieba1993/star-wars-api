import request from 'supertest';

import { createApplication } from '../../application';
import { characterDTOFirst } from '../../mocks/data';
import { Character } from '../../characters/character';
import { createCharacter } from '../shared';

const application = createApplication();

describe('PATCH /characters/:id endpoint', () => {
  it('returns updated character', async () => {
    expect.assertions(2);

    const createCharacterResult = await createCharacter(application, characterDTOFirst);

    const characterCreated: Character = createCharacterResult.body.character;

    const editedName = `${characterCreated.name} - edited`;

    const updateCharacterResult = await request(application)
      .patch(`/characters/${characterCreated.id}`)
      .send({
        name: editedName,
      });

    const expectedBody = {
      character: {
        ...characterDTOFirst,
        id: expect.any(String),
        name: editedName,
      },
    };

    expect(updateCharacterResult.statusCode).toBe(200);
    expect(updateCharacterResult.body).toEqual(expectedBody);
  });
});
