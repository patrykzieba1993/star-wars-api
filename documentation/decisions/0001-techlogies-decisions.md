# 1. Technologies decisions

Date: 2022-09-14

## Status

Accepted

## Context

This ADR is about the technologies and libraries that were chosen to use in this project.

## Decision
Core technologies were specified upfront: `Node.js`, `Typescript`, and `AWS serverless services`.

Other than that, the decision is to use:
- `AWS Lambda` for the application hosting. 

- `Express.js` for an HTTP server.

- `Jest` for overall automation tests.

- `Supertest` for integration tests.

- `Eslint` for code formatting.

- `Swagger` for the HTTP server documentation for clients.

- `Joi` for HTTP requests validation.
