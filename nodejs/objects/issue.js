'use strict';

function Issue(options) {
  options = options || {};
  this.id = options.id;
  this.description = options.description;
  this.longDescription = options.longDescription;
  this.assignee = options.assignee;
  this.project = options.project;
  this.createdAt = options.createdAt || Date.now();
  this.updatedAt = options.updatedAt || Date.now();
  this.resolved = options.resolved || false;
}

Issue.prototype.resolve = function() {
  this.resolved = true;
  this.updatedAt = Date.now();
  return this;
};

Issue.prototype.unresolve = function() {
  this.resolved = false;
  this.updatedAt = Date.now();
  return this;
};

Issue.prototype.assign = function(newAssignee) {
  let currentAssignee = this.assignee;
  this.assignee = newAssignee;
  if (currentAssignee) {
    currentAssignee.unassign(this);
  }
  newAssignee.assign(this);
  this.updatedAt = Date.now();
  return this;
};

Issue.prototype.inspect = function() {
  return this.description +
    (this.assignee ? ` (assigned to ${this.assignee.inspect()})` : '');
};

module.exports = Issue;
