import { MongoClient } from 'mongodb';

const createConnect = (
  { url, dbName }: { url: string, dbName: string },
) => async () => {
  const client = new MongoClient(url);

  await client.connect();

  const database = client.db(dbName);

  return {
    database,
  };
};

export { createConnect };
