const config = {
  mongoDb: {
    connectionString: process.env.MONGO_DB_CONNECTION_STRING as string,
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
