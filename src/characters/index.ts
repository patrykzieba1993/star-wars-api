import { Db } from 'mongodb';

import { createCharactersInMemoryRepository } from './characters.repository/inMemory';
import { createCharactersMongoRepository } from './characters.repository/mongo';
import { createCharactersService } from './characters.service';
import { createCharactersFacade } from './characters.facade';
import { createCharactersController } from './characters.controller';
import { createCharactersRoutes } from './characters.routes';

const charactersRoutes = (database?: Db) => {
  let charactersRepository = createCharactersInMemoryRepository();

  if (database) {
    charactersRepository = createCharactersMongoRepository(database);
  }

  const charactersService = createCharactersService(charactersRepository);
  const charactersFacade = createCharactersFacade(charactersRepository, charactersService);
  const charactersController = createCharactersController(charactersFacade);

  return createCharactersRoutes(charactersController);
};

export { charactersRoutes };
