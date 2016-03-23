'use strict';

const starWarsMovies = require('./movies.json');
const _ = require('lodash');

let directors =
  _(starWarsMovies)
  .map('Director')
  .uniq()
  .value();

console.log('Star Wars movie directos:');
directors.forEach(director => console.log(`- ${director}`));
