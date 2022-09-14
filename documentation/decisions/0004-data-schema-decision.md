# 4. Data schema decision

Date: 2022-09-14

## Status

Accepted

## Context

This ADR is about the data schema used in the project.

## Solutions
The initial specification defines `Character` without an id.

## Decision
The decision is to extend the `Character` data with the id to ensure that specific characters are unique in the system. Moreover, the `id` is defined as an `uuid`, not as a `number`. A numeric id is unique inside a specific part of the system. An id that is `uuid` guarantees uniqueness across all parts of the system and even globally.

The final `Character` schema:

```
type Character = {
  id: string,
  name: string,
  episodes: Array<'NEWHOPE' | 'EMPIRE' | 'JEDI'>,
  planet?: string,
};
```
