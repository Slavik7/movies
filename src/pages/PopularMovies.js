import React from "react";
import MoviesList from "../components/MoviesList";

import { getPopularMovies } from "../actions/moviesActions";

const PopularMovies = () => {
  return (
    <div>
      <h2>Popular Movies</h2>
      <MoviesList moviesType={getPopularMovies} />;
    </div>
  );
};

export default PopularMovies;
