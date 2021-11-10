const baseURL = "https://api.themoviedb.org/3/";

//MOVIES API URL's
export const popularMoviesURL = (pageNum = 1) =>
  `${baseURL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNum}`;

export const posterURL = (poster_path) =>
  `https://image.tmdb.org/t/p/w500${poster_path}`;

export const fullPosterURL = (poster_path) =>
  `https://image.tmdb.org/t/p${poster_path}`;

export const upcomingMoviesURL = (pageNum = 1) =>
  `${baseURL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNum}`;

export const movieDetailsURL = (movie_id) =>
  `${baseURL}movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const movieCreditsURL = (movie_id) =>
  `${baseURL}movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;

export const searchMoviesURL = (pageNum, query) =>
  `${baseURL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${pageNum}`;

export const movieVideosURL = (movie_id) =>
  `${baseURL}movie/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;

export const moviesByGenresURL = (pageNum, genres) =>
  `${baseURL}discover/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }&with_genres=${genresIdToString(genres)}&page=${pageNum}`;

export const moviesByYearURL = (pageNum, year) =>
  `${baseURL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&release_date_gte=${year}&page=${pageNum}`;
export const getGenersURL = () =>
  `${baseURL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;

// string of the genres id's to query
const genresIdToString = (genres) => {
  let str = "";
  for (let i = 0; i < genres.length - 1; i++) {
    str += `${genres[i].id}|`;
  }
  str += `${genres[genres.length - 1].id}`;
  return str;
};

export const moviesByFiltersURL = (pageNum, query) =>
  `${baseURL}discover/movie/?api_key=${process.env.REACT_APP_API_KEY}${query}&page=${pageNum}`;

//Person API URL's
export const personInfoURL = (person_id) =>
  `${baseURL}person/${person_id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const personMoviesURL = (person_id) =>
  `${baseURL}person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`;

export const personPopularURL = () =>
  `${baseURL}person/popular?api_key=${process.env.REACT_APP_API_KEY}`;

export const searchPersonURL = (pageNum, query) =>
  `${baseURL}search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${pageNum}`;
