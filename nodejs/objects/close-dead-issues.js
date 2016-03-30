'use strict';

const _ = require('lodash');
const moment = require('moment');
const DB = require('./db');

let deadIssuesList = findDeadIssues(DB.issues);
console.log('Dead issues count:', deadIssuesList.length);
console.log('Now resolving...');
resolveIssues(deadIssuesList);
deadIssuesList = findDeadIssues(DB.issues);
console.log('Dead issues count:', deadIssuesList.length);

function findDeadIssues(issues) {
  return _(issues)
    .filter(issue => {
      let issueTime = moment(issue.createdAt);
      return !issue.resolved && moment().diff(issueTime, 'years') > 1;
    })
    .value();
}

function resolveIssues(issues) {
  issues.forEach(issue => issue.resolve());
}
