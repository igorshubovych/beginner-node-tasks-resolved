'use strict';

const movies = require('./movies.json');
const _ = require('lodash');

let topBilledActors =
  _(movies)
  .map('Actors')
  .map(actors => actors.split(/,\s+/))
  .flatten()
  .uniq()
  .sort()
  .value();

console.log('Star Wars top-billed actors (alphabetically):');
topBilledActors.forEach(actor => console.log(`- ${actor}`));
