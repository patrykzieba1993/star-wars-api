type Character = {
  id: string,
  name: string,
  episodes: Array<'NEWHOPE' | 'EMPIRE' | 'JEDI'>,
  planet?: string,
};

interface CharactersRepository {
  getAll: (offset?: number, limit?: number) => Promise<Array<Character>>;
  getById: (id: string) => Promise<Character | null>,
  create: (character: Character) => Promise<Character>,
  update: (id: string, character: Partial<Character>) => Promise<Character | null>,
  remove: (id: string) => Promise<Character | null>,
}

export { Character, CharactersRepository };
