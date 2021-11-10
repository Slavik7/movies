import React, { useEffect, useState } from "react";
import styles from "../styles/SortBy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

const SortBy = ({ setActiveFilters }) => {
  const [sortDir, setSortDir] = useState("desc");
  const [sortType, setSortType] = useState("popularity");
  useEffect(() => {
    setActiveFilters((state) => {
      return { ...state, sortQuery: `&sort_by=${sortType}.${sortDir}` };
    });
  }, [sortType, sortDir]);

  const sortTypeChangeHandler = (e) => {
    setSortType(e.target.value);
  };
  const sortDirChangeHandler = () => {
    setSortDir((state) => {
      return state === "desc" ? "asc" : "desc";
    });
  };
  return (
    <div className={styles["sort-filter-container"]}>
      <p className={styles["sort-filter-title"]}>Sort By:</p>
      <div className={styles["selections"]}>
        <select value={sortType} onChange={sortTypeChangeHandler}>
          <option value={`popularity`}>Popularity</option>
          <option value={`release_date`}>Release Date</option>
          <option value={`original_title`}>Title</option>
        </select>
        <FontAwesomeIcon
          onClick={sortDirChangeHandler}
          className={styles["arrow-icon"]}
          icon={sortDir === "desc" ? faLongArrowAltDown : faLongArrowAltUp}
        />
      </div>
    </div>
  );
};

export default SortBy;
