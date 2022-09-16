## Star Wars API

This application is an HTTP API that manages Star Wars characters.

The application is available [here](https://0xfrd0k0c9.execute-api.us-east-1.amazonaws.com)

## Local setup

Make sure that you use the proper `node` (`16`) and `npm` (`8`) versions:
```
nvm use
npm i -g npm@8
```

Install dependencies:
```
npm i
```

Run linter:
```
npm run lint
```

Run unit and integration tests:
```
npm run test
```

You can also test the application locally:
```
sls invoke local --function api --env <your_environment_variables> --data <your_data>
```
The Environment variables that has to be specified to make the application work:
- `DB_CONNECTION_STRING` a database connection string to your document database
- `HOST` your current application host 

Deploy changes to the AWS Lambda:
```
npm run deploy
```

## Notes
### Serverless template
This project uses a serverless' `AWS - Node.js - Express API` template. The other one - with built-in TS support - was not chosen intentionally because it offers more advanced concepts that would be overkill for this project.

### Integration tests
A memory database - that is in fact a data structure - is used to perform integration tests. However, the application is flexible, so you can use your own document database to:
- run the application locally by defining and passing the `DB_CONNECTION_STRING` env variable to your local lambda setup
- run the integration tests

To tun the integration tests with your database ensure that your `database` object is passed to the `createTestApplication` function in the `src/test/integrations/testApplication` module.

If you use a MongoDB database, you can use the existing connection driver from `src/database/connect` module.

If the document database that you want to use is not MongoDB then you need to implement a repository that knows the database's driver interface and use it in the `src/characters/index` module.

### Further development
There are a few more features and improvements that could be applied in future development:
- add `_links` support in the responses to make the API RESTfull and follow the HATEOAS standard
- add HTTP cache-related response headers accordingly to the future requirements and same as above - make the API RESTfull
- add CORS restrictions to make sure that the application is accessible only from specific hosts
- add authentication layer to make sure that the application is accessible only by authorised clients
- add application cache (Redis), so the communication between the application and database would be limited - so the application would be more efficient (lower latency) 
- add prettier to make sure that code convention is common across all of the project's contributors
