import request from 'supertest';

import { createTestApplication } from '../testApplication';
import { characterDTOFirst, characterSecond } from '../../../mocks/data';

const application = createTestApplication();

describe('characters not found', () => {
  beforeAll(async () => {
    await request(application)
      .post('/characters')
      .send(characterDTOFirst);
  });

  const path = `/characters/${characterSecond.id}`;

  const cases = (): Array<[string, { doRequest: () => request.Test }]> => [
    [
      'for GET /characters',
      {
        doRequest: () => request(application).get(path),
      },
    ],
    [
      'for PATCH /characters',
      {
        doRequest: () => request(application).patch(path),
      },
    ],
    [
      'for DELETE /characters',
      {
        doRequest: () => request(application).delete(path),
      },
    ],
  ];

  test.each(cases())('%s endpoint', async (_, { doRequest }) => {
    const result = await doRequest();

    const expectedBody = {
      code: 404,
      message: `Character with id ${characterSecond.id} not found`,
    };

    expect(result.statusCode).toBe(404);
    expect(result.body).toEqual(expectedBody);
  });
});
