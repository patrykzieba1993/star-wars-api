import { CharactersService } from './characters.service';
import { CharactersRepository } from './character';

interface CharactersFacade {
  getAll: CharactersRepository['getAll'],
  getById: CharactersService['getById'],
  create: CharactersService['create'],
  update: CharactersService['update'],
  remove: CharactersService['remove'],
}

const createCharactersFacade = (
  charactersRepository: CharactersRepository,
  charactersService: CharactersService,
): CharactersFacade => ({
  getAll: charactersRepository.getAll,
  getById: charactersService.getById,
  create: charactersService.create,
  update: charactersService.update,
  remove: charactersService.remove,
});

export { createCharactersFacade, CharactersFacade };
