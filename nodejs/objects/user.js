'use strict';

function User(options) {
  options = options || {};
  this.id = options.id;
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.issues = options.issues || {};
}

User.prototype.displayName = function() {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.inspect = function() {
  return this.displayName();
};

User.prototype.assign = function(issue) {
  let key = issue.id;
  this.issues[key] = issue;
};

User.prototype.unassign = function(issue) {
  let key = issue.id;
  delete this.issues[key];
};

module.exports = User;
