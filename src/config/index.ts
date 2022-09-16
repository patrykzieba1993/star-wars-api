const config = {
  host: process.env.HOST as string,
  database: {
    connectionString: process.env.DB_CONNECTION_STRING as string,
    databaseName: 'characters',
    collectionName: 'characters',
  },
  characters: {
    minLimit: 1,
    maxLimit: 100,
    defaultLimit: 100,
    minOffset: 0,
    defaultOffset: 0,
    allowedEpisodes: ['NEWHOPE', 'EMPIRE', 'JEDI'],
  },
};

export { config };
