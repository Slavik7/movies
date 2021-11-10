import React from "react";
import MoviesList from "../components/MoviesList";

import { getUpcomingMovies } from "../actions/moviesActions";

const UpcomingMovies = () => {
  return (
    <div>
      <h2>Upcomig Movies</h2>
      <MoviesList moviesType={getUpcomingMovies} />;
    </div>
  );
};

export default UpcomingMovies;
