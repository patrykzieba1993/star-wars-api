type Character = {
  id: string,
  name: string,
  episodes: Array<'NEWHOPE' | 'EMPIRE' | 'JEDI'>,
  planet?: string,
};

export { Character };
