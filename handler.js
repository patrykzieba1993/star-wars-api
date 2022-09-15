const serverless = require("serverless-http");

const { runApplication } = require('./dist');

module.exports.handler = async (event, context, callback) => {
  const application = await runApplication();

  const proxy = await serverless(application);

  return proxy(event, context, callback);
};
