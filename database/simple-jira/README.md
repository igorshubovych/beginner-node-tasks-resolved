# Simple JIRA

- create new web project with [ExpressJS][express]
- use [Bootstrap][bootstrap] or [Zurb Foundation][foundation] for front-end
- store data in MySQL/PostgreSQL database
- provide RESTful API
- have 3 entities: Projects, Issues, Users
- Issues belongs to Project, Issue is assigned to User
- implement full CRUD API for Projects, Issues, Users
- create views and GUI interfaces for CRUD operations
- fill database with mock data (100 projects, 1000 issues per project, 100 users)
- create report views for the following reports:
    - top 10 long-unresolved issues
    - projects with the biggest amount of unresolved issues
    - users with no tasks
    - users with too many tasks (top 10)
- write tests using [Mocha][mocha]
- logging

[express]: http://expressjs.com/
[bootstrap]: http://getbootstrap.com/
[foundation]: http://foundation.zurb.com/
[mocha]: https://mochajs.org/