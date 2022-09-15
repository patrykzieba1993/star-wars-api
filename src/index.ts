import { createApplication } from './application';
import { connect } from './database/production';

const runApplication = async () => {
  const { database } = await connect();

  return createApplication(database);
};

export { runApplication };
