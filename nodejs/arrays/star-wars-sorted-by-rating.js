'use strict';

const starWarsMovies = require('./movies.json');

let processedMovies = titlesAndRating(sortByRating(starWarsMovies));

console.log('Star Wars movies sorted by IMDB rating\n');
processedMovies.forEach((movie) => {
  console.log(`${movie.Title} - ${movie.imdbRating}`);
});

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
