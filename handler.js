const serverless = require("serverless-http");

const { createApplication } = require('./dist/application');

const application = createApplication();

module.exports.handler = serverless(application);
