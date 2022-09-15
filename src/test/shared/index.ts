// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import { Express } from 'express';

import { CharacterDTO } from '../../characters/character';

const createCharacter = (application: Express, characterDTO: CharacterDTO) => request(application)
  .post('/characters')
  .send(characterDTO);

export { createCharacter };
