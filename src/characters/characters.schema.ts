import Joi from 'joi';

import { config } from '../config';

const Id = Joi.string()
  .uuid();

const Name = Joi.string();

const Planet = Joi.string();

const Episodes = Joi.array()
  .items(
    Joi.string()
      .valid(...config.characters.allowedEpisodes),
  )
  .min(1);

const CreateCharacterBody = Joi.object({
  name: Name.required(),
  episodes: Episodes.required(),
  planet: Planet.optional(),
});

const UpdateCharacterBody = Joi.object({
  name: Name.optional(),
  episodes: Episodes.optional(),
  planet: Planet.optional(),
});

const GetAllCharactersQueryParams = Joi.object({
  limit: Joi.number()
    .integer()
    .min(config.characters.minLimit)
    .max(config.characters.maxLimit)
    .optional(),
  offset: Joi.number()
    .integer()
    .min(config.characters.minOffset)
    .optional(),
});

const GetByIdCharacterParams = Joi.object({
  id: Id.required(),
});

const RemoveCharacterParams = Joi.object({
  id: Id.required(),
});

const UpdateCharacterParams = Joi.object({
  id: Id.required(),
});

export {
  CreateCharacterBody,
  UpdateCharacterBody,
  GetAllCharactersQueryParams,
  GetByIdCharacterParams,
  RemoveCharacterParams,
  UpdateCharacterParams,
};
