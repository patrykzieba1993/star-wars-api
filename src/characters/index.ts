import { createCharactersController } from './characters.controller';
import { createCharactersRoutes } from './characters.routes';

const charactersRoutes = () => {
  const characterController = createCharactersController();

  return createCharactersRoutes(characterController);
};

export { charactersRoutes };
