import { connect } from './database/production';
import { createApplication } from './application';

const port = 3030;

(async () => {
  try {
    const { database } = await connect();

    const application = createApplication(database);

    application.listen(port, () => console.log(`HTTP server works on port: ${port}`));
  } catch (error) {
    console.error(error);
  }
})();
