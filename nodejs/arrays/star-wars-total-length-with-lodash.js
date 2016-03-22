'use strict';

const _ = require('lodash');
const starWarsMovies = require('./movies.json');

let starWarsSagaLength = totalLength(starWarsMovies);
let starWarsLengthHrs = Math.floor(starWarsSagaLength / 60);
let starWarsLengthMins = starWarsSagaLength % 60;
let starWarsRuntime = `${starWarsLengthHrs} hrs ${starWarsLengthMins} mins`;

console.log(`Total runtime of Star Wars movies: ${starWarsRuntime}`);

function totalLength(movies) {
  return _(movies)
    .map('Runtime')
    .map((movieLength) => movieLength.match(/\d+/g))
    .map(_.parseInt)
    .sum();
}
