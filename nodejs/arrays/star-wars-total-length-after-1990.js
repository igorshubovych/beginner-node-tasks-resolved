'use strict';

const _ = require('lodash');
const starWarsMovies = require('./movies.json');
const desiredYear = 1990;

let starWarsSagaLength = totalLengthAfter(starWarsMovies, desiredYear);
let starWarsLengthHrs = Math.floor(starWarsSagaLength / 60);
let starWarsLengthMins = starWarsSagaLength % 60;
let starWarsRuntime = `${starWarsLengthHrs} hrs ${starWarsLengthMins} mins`;

console.log(`Total runtime of Star Wars movies released after 1990: ${starWarsRuntime}`);

function totalLengthAfter(movies, year) {
  return _(movies)
    .filter(movie => movie.Year >= year)
    .map('Runtime')
    .map((movieLength) => movieLength.match(/\d+/g))
    .map(_.parseInt)
    .sum();
}
