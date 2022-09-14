type Character = {
  id: string,
  name: string,
  episodes: Array<'NEWHOPE' | 'EMPIRE' | 'JEDI'>,
  planet?: string,
};

interface CharactersRepository {
  getAll: (offset?: number, limit?: number) => Promise<Array<Character>>;
  getById: (id: string) => Promise<Character>,
  create: (character: Character) => Promise<Character>,
  update: (character: Partial<Character>) => Promise<Character>,
  remove: (id: string) => Promise<Character>,
}

export { Character, CharactersRepository };
