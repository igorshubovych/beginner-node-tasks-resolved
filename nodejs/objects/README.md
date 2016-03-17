# Objects

## Simple issue tracking system

Recreate a subdomain of very simple issue tracking system.

The domain will have only 3 objects: _Project_, _Issue_, _User_.

_Project_ has fields:

- ID
- name
- list of issues

_Issue_ has fields:

- ID
- description
- long description
- assignee
- createdAt
- assign(otherUser) method
- resolved (true or false)
- resolve() method
- reopen() method

_User_ has fields:

- ID
- first name
- last name

## Dummy database

- Create a database of connected dummy objects
- 10 projects, 20 users, each project should have 100 issues
- Use [Faker.js][faker] or other package to obtain dummy data
- Store the database to JSON file

## Issue tracking

### Deactivate user

- remove one user from database
- reassign all his issues to other people working on that project

### Close dead issues

- find all old issues (createdAt > 1 year ago) on all projects
- resolve them

[faker]: https://www.npmjs.com/package/faker
