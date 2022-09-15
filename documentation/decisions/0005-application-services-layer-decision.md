# 5. Application services layer decision

Date: 2022-09-15

## Status

Accepted

## Context

This ADR is about the services layer for the application architecture.

## Solutions
As it was mentioned in the `0002-architecture-decsions` ADR, an initial idea is to not use the `services` layer.

## Decision
The decision has to be changed because there is an application logic related to:
- assigning unique id for the resources
- defining application-level errors

that has to be handled, and the `services` layer is the best place to do so.
