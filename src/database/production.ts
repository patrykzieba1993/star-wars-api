import { createConnect } from './connect';
import { config } from '../config';

const url = config.database.connectionString;
const dbName = config.database.databaseName;

const connect = createConnect({ url, dbName });

export { connect };
