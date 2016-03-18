'use strict';

const fs = require('fs');
const moviesFilename = 'movies.json';

let starWarsMovies = JSON.parse(fs.readFileSync(moviesFilename));

let processedMovies = titlesAndRating(sortByRating(starWarsMovies));

console.log('Star Wars movies sorted by IMDB rating\n');
processedMovies.forEach((movie) => {
  console.log(`${movie.Title} - ${movie.imdbRating}`);
});
console.log('');

let starWarsSagaLength = totalLength(starWarsMovies);
let starWarsLengthHrs = Math.floor(starWarsSagaLength / 60);
let starWarsLengthMins = starWarsSagaLength % 60;
let starWarsRuntime = `${starWarsLengthHrs} hrs ${starWarsLengthMins} mins`;
console.log(`Total runtime of Star Wars movies: ${starWarsRuntime}`);

function sortByRating(movies) {
  return movies.sort((movie1, movie2) => {
    return movie1.imdbRating - movie2.imdbRating;
  });
}

function titlesAndRating(movies) {
  return movies.map((movie) => {
    return {
      Title: movie.Title,
      imdbRating: movie.imdbRating
    };
  });
}

function totalLength(movies) {
  return movies.reduce((length, movie) => {
    let mins = parseInt(movie.Runtime.match(/\d+/g), 10);
    return length + mins;
  }, 0);
}
