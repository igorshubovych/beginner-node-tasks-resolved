'use strict';

function Project(options) {
  options = options || {};
  this.id = options.id;
  this.name = options.name;
  this.issues = options.issues || [];
}

Project.prototype.inspect = function() {
  return this.name;
};

module.exports = Project;
