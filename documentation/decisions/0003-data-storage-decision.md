# 3. Data storage decision

Date: 2022-09-14

## Status

Accepted

## Context

This ADR is about data storage decisions.

## Solutions
There are a few options regarding data storage. The most important decision driver is the fact that it has to be permanent, so solutions like memory or in-memory databases are not perfect. However, those approaches will/would be used in the following way:
- an in-memory data structure will be used for local development and integration tests.
- a fast in-memory, key-value database like Redis would be used in the next stage of the application lifecycle to limit communication between the primary data storage and the application.

Regarding the data storage. There are the following options:
- relational database (e.g.: Postgres)
- key-value database (e.g.: DynamoDB)
- document database (e.g.: MongoDB)

## Decision
Considering the current data structure, the best choice at this point is a document database. The structure does not have advanced relations and does not have a clear key.

In the future, once the structure is more complicated, a relational database seems to be a sensible choice. Especially Postgres that is a hybrid database where documents might be stored in JSONB columns as well as key-value pairs.

At this point, the decision is to use `MongoDB` database.

UPDATE:
`Character` data schema is extended with unique `id` that could be used as a `key` in the key-value database. However, it still makes sense to use document database so the final decision is to keep `MongoDB`.