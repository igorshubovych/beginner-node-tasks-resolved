'use strict';

const faker = require('faker');
const _ = require('lodash');
const hash = require('object-hash');

const User = require('./user');
const Issue = require('./issue');
const Project = require('./project');

const USERS_NUMBER = 20;
const PROJECTS_NUMBER = 10;
const ISSUES_NUMBER = 100; // Per project

function generate(options) {
  options = options || {};
  let usersNumber = options.usersNumber || USERS_NUMBER;
  let projectsNumber = options.projectsNumber || PROJECTS_NUMBER;
  let issuesNumber = options.issuesNumber || ISSUES_NUMBER;

  let users = _.times(usersNumber, generateUser);
  let projects = _.times(projectsNumber, generateProject);

  let issues = [];
  for (let project of projects) {
    for (let i = 0; i < issuesNumber; i++) {
      let user = _.sample(users);
      let issue = generateIssue(project, user);
      issues.push(issue);
      project.issues.push(issue);
    }
  }
  return {
    users,
    projects,
    issues
  };
}

function generateUser() {
  let user = new User({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  });
  user.id = hash.sha1(user.displayName());
  return user;
}

function generateProject() {
  let projectName = _.camelCase(`${faker.random.word()} ${faker.random.word()}`);
  let projectId = hash.sha1(projectName);
  let project = new Project({
    id: projectId,
    name: projectName
  });
  return project;
}

function generateIssue(project, user) {
  let issueDescription = faker.lorem.sentence();
  let issue = new Issue({
    id: hash.sha1(issueDescription),
    description: issueDescription,
    longDescription: faker.lorem.sentences(3),
    assignee: user,
    project: project,
    resolved: false
  });
  return issue;
}

module.exports = generate();
