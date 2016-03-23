'use strict';

function User(options) {
  options = options || {};
  this.id = options.id;
  this.firstName = options.firstName;
  this.lastName = options.lastName;
}

User.prototype.displayName = function() {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.inspect = function() {
  return this.displayName();
};

module.exports = User;
