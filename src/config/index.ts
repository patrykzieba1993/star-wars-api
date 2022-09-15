const config = {
  mongoDb: {
    connectionString: process.env.MONGO_DB_CONNECTION_STRING as string,
  },
};

export { config };
