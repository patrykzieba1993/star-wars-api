import { Character, CharacterDTO } from '../characters/character';

const characterDTOFirst: CharacterDTO = {
  name: 'Luke Sywalker',
  planet: 'Alderaan',
  episodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
};

const characterFirst: Character = {
  ...characterDTOFirst,
  id: '4203749a-54b1-4c59-a794-fc7ed301f4a3',
};

const characterDTOSecond: CharacterDTO = {
  name: 'Darth Vader',
  episodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
};

const characterSecond: Character = {
  ...characterDTOSecond,
  id: '32dbb3b5-6729-4790-b71e-1a787af221cd',
};

const characterDTOThird: CharacterDTO = {
  name: 'Han Solo',
  episodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
};

const characterThird: Character = {
  ...characterDTOThird,
  id: '993c0cfc-bbd7-4c85-baef-bb09a854303f',
};

const characterDTOFourth: CharacterDTO = {
  name: 'Leia Organa',
  episodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
  planet: 'Alderaan',
};

const characterFourth: Character = {
  ...characterDTOFourth,
  id: 'c47acfd9-093d-4588-b31d-7a19e0b88922',
};

const characterFifth: Character = {
  id: 'd52d8aad-c1a9-4aaf-a270-161b8e55537d',
  name: 'Wilhuff Tarkin',
  episodes: ['NEWHOPE'],
};

const characterSixth: Character = {
  id: '49c4a79c-7cb2-439d-a6e4-efa61fb80e26',
  name: 'C-3PO',
  episodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
};

const characterSeventh: Character = {
  id: '33bb4734-f548-48fe-acc0-76bc646ba40c',
  name: 'R2-D2',
  episodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
};

export {
  characterDTOFirst,
  characterFirst,
  characterDTOSecond,
  characterSecond,
  characterDTOThird,
  characterThird,
  characterDTOFourth,
  characterFourth,
  characterFifth,
  characterSixth,
  characterSeventh,
};
