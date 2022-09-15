type CharacterDTO = {
  name: string,
  episodes: Array<'NEWHOPE' | 'EMPIRE' | 'JEDI'>,
  planet?: string,
};

type Character = CharacterDTO & {
  id: string,
};

interface CharactersRepository {
  getAll: (offset?: number, limit?: number) => Promise<Array<Character>>;
  getById: (id: string) => Promise<Character | null>,
  create: (character: Character) => Promise<Character>,
  update: (id: string, character: Partial<Character>) => Promise<Character | null>,
  remove: (id: string) => Promise<Character | null>,
}

export { CharacterDTO, Character, CharactersRepository };
