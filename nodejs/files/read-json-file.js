'use strict';

const fs = require('fs');

let fileContent = fs.readFileSync('movies.json');

let movies = JSON.parse(fileContent);

console.log('MOVIES', movies);
