import React, { useState } from "react";
import Filters from "../components/Filters";
import MoviesList from "../components/MoviesList";
import { getMoviesByFilters } from "../actions/moviesActions";

import styles from "../styles/Pages.module.css";
import YearsFilter from "../components/YearsFilter";
const FilterMovies = () => {
  const [filtersQuery, setFiltersQuery] = useState("");

  return (
    <div>
      <h2>Filter Movies</h2>
      <div className={styles["filter-page-container"]}>
        <Filters setFiltersQuery={setFiltersQuery} />
        {filtersQuery ? (
          <MoviesList moviesType={getMoviesByFilters} arg={filtersQuery} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilterMovies;
