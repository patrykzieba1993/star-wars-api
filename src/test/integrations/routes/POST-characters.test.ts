import { createTestApplication } from '../testApplication';
import { characterDTOFirst } from '../../../mocks/data';
import { createCharacter } from '../shared';

const application = createTestApplication();

describe('POST /characters endpoint', () => {
  it('returns newly created character', async () => {
    expect.assertions(2);

    const createCharacterResult = await createCharacter(application, characterDTOFirst);

    const expectedBody = {
      character: {
        ...characterDTOFirst,
        id: expect.any(String),
      },
    };

    expect(createCharacterResult.statusCode).toBe(201);
    expect(createCharacterResult.body).toEqual(expectedBody);
  });
});
