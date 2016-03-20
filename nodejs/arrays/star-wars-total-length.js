'use strict';

const starWarsMovies = require('./movies.json');

let starWarsSagaLength = totalLength(starWarsMovies);
let starWarsLengthHrs = Math.floor(starWarsSagaLength / 60);
let starWarsLengthMins = starWarsSagaLength % 60;
let starWarsRuntime = `${starWarsLengthHrs} hrs ${starWarsLengthMins} mins`;

console.log(`Total runtime of Star Wars movies: ${starWarsRuntime}`);

function totalLength(movies) {
  return movies.reduce((length, movie) => {
    let mins = parseInt(movie.Runtime.match(/\d+/g), 10);
    return length + mins;
  }, 0);
}
