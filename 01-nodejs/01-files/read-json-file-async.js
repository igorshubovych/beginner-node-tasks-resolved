'use strict';

const fs = require('fs');

fs.readFile('movies.json', (error, fileContent) => {
  if (error) {
    console.error(error);
  } else {
    let movies = JSON.parse(fileContent);
    console.log('MOVIES', movies);
  }
});
