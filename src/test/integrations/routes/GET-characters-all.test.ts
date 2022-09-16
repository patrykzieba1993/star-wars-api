import request from 'supertest';

import { createTestApplication } from '../testApplication';
import {
  characterDTOFirst,
  characterDTOSecond,
  characterDTOThird,
  characterDTOFourth,
} from '../../../mocks/data';
import { createCharacter } from '../shared';

const application = createTestApplication();

describe('GET /characters endpoint', () => {
  beforeAll(async () => {
    await createCharacter(application, characterDTOFirst);
    await createCharacter(application, characterDTOSecond);
    await createCharacter(application, characterDTOThird);
    await createCharacter(application, characterDTOFourth);
  });

  it('returns all characters', async () => {
    expect.assertions(2);

    const getCharactersResult = await request(application)
      .get('/characters');

    const expectedBody = {
      characters: [
        {
          ...characterDTOFirst,
          id: expect.any(String),
        },
        {
          ...characterDTOSecond,
          id: expect.any(String),
        },
        {
          ...characterDTOThird,
          id: expect.any(String),
        },
        {
          ...characterDTOFourth,
          id: expect.any(String),
        },
      ],
    };

    expect(getCharactersResult.statusCode).toBe(200);
    expect(getCharactersResult.body).toEqual(expectedBody);
  });

  it('returns all characters specified by pagination', async () => {
    expect.assertions(2);

    const getCharactersResult = await request(application)
      .get('/characters?offset=1&limit=2');

    const expectedBody = {
      characters: [
        {
          ...characterDTOSecond,
          id: expect.any(String),
        },
        {
          ...characterDTOThird,
          id: expect.any(String),
        },
      ],
    };

    expect(getCharactersResult.statusCode).toBe(200);
    expect(getCharactersResult.body).toEqual(expectedBody);
  });
});
