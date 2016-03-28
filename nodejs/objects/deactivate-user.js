'use strict';

const _ = require('lodash');
const DB = require('./db');

let userToDelete = _.sample(DB.users);

printStats('BEFORE REMOVAL', userToDelete);

_.remove(DB.users, userToDelete);

_.each(userToDelete.issues,
  issue => reassignToUserOnProject(issue));

printStats('AFTER REMOVAL', userToDelete);

function reassignToUserOnProject(issue) {
  let allUsersOnProject = usersOnProject(issue.project);
  allUsersOnProject = _.pull(allUsersOnProject, userToDelete);
  let randomUser = _.sample(allUsersOnProject);
  issue.assign(randomUser);
}

function usersOnProject(project) {
  return _(project.issues)
    .map('assignee')
    .uniq()
    .value();
}

function printStats(header, user) {
  console.log();
  console.log(header);
  console.log('Users: ', DB.users.length);
  console.log('Projects: ', DB.projects.length);
  console.log('Issues: ', DB.issues.length);
  console.log('User issues: ', _.size(user.issues));
  console.log('User to delete: ', user);
}
