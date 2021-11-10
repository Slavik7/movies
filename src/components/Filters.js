import React, { useState } from "react";
import YearsFilter from "./YearsFilter";
import GenresFilter from "./GenresFilter";
import SortBy from "./SortBy";
import styles from "../styles/Filters.module.css";
const Filters = ({ setFiltersQuery }) => {
  const [activeFilters, setActiveFilters] = useState({
    genresQuery: "",
    yearQuery: "",
    sortQuery: "",
  });

  const filterHandler = (e) => {
    e.preventDefault();
    setFiltersQuery(filtersToString());
  };

  const filtersToString = () => {
    let str = "";

    for (const query in activeFilters) {
      str += activeFilters[query];
    }
    return str;
  };

  return (
    <div className={styles["filters-container"]}>
      <YearsFilter setActiveFilters={setActiveFilters} />
      <GenresFilter setActiveFilters={setActiveFilters} />
      <SortBy setActiveFilters={setActiveFilters} />

      <button
        className={styles["btn-filter"]}
        type="submit"
        onClick={filterHandler}
      >
        Filter
      </button>
    </div>
  );
};

export default Filters;
