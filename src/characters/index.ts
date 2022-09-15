import { Db } from 'mongodb';

// Use InMemoryRepository if needed
// import { createCharactersInMemoryRepository } from './characters.repository/inMemory';
import { createCharactersMongoRepository } from './characters.repository/mongo';
import { createCharactersController } from './characters.controller';
import { createCharactersRoutes } from './characters.routes';

const charactersRoutes = (database: Db) => {
  const charactersRepository = createCharactersMongoRepository(database);
  const charactersController = createCharactersController(charactersRepository);

  return createCharactersRoutes(charactersController);
};

export { charactersRoutes };
