const db = require('./dummy-db');
const _ = require('lodash');

console.log(_.sample(db.users));
console.log(_.sample(db.projects));
console.log(_.sample(db.issues));

module.exports = db;
