import { createConnect } from './connect';
import { config } from '../config';

const url = config.mongoDb.connectionString;
const dbName = 'characters';

const connect = createConnect({ url, dbName });

export { connect };
