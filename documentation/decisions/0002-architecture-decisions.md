# 2. Architecture decisions

Date: 2022-09-14

## Status

Accepted

## Context

This ADR is about the application and infrastructure architecture decisions.

## Decision

### Application architecture
The application is pretty straightforward. HTTP API that supports CRUD operations. The decision is to use layered architecture. Expected layers:
- `routes` - responsible for defining the API routes and their validation constraints.
- `middlewares` - responsible for additional operations regarding HTTP requests handling like: performing validation, handling errors, etc.
- `controllers` - responsible for handling the HTTP requests.
- `repositories` - responsible for communication with data storage.

If the application was more complicated in the future or it had more business rules, an additional `services` layer would be introduced then.

If the business rules were advanced, the application architecture could be changed to hexagonal, where the `domain` layer would be a central point of the application (Domain Driven Design).

### Infrastructure architecture
Same as in the application architecture, the infrastructure is pretty simple at this point. The decision is to use simple AWS lambda to host the application.

So, clients talk directly with the application by calling the lambda, and the application takes data from external data storage.

If the application were more advanced, so it had to be split into more microservices, then AWS API gateway would be used between clients and the microservices. Moreover, the communication would be done via queues then, e.g., AWS SNS/SQS, to improve the whole system's reliability.
