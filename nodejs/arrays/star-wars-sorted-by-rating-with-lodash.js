'use strict';

const starWarsMovies = require('./movies.json');
const _ = require('lodash');

let processedMovies =
  _(starWarsMovies)
  .sort((movie1, movie2) => movie1.imdbRating - movie2.imdbRating)
  .map(_.partialRight(_.pick, 'Title', 'imdbRating'))
  .value();

console.log(processedMovies);

console.log('Star Wars movies sorted by IMDB rating\n');
processedMovies.forEach((movie) => {
  console.log(`${movie.Title} - ${movie.imdbRating}`);
});
