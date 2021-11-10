import React, { useState, useEffect } from "react";
import styles from "../styles/YearsFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";
const YearsFilter = ({ setActiveFilters }) => {
  const [years, setYears] = useState([]);
  const [direction, setDirection] = useState(true); // gte = true , lte= false
  useEffect(() => {
    setYears(getYears());
  }, []);
  const getYears = () => {
    const year = new Date().getFullYear();
    const yearsArr = Array.from(new Array(50), (el, i) => year - i);
    return yearsArr;
  };
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setActiveFilters((state) => {
      return {
        ...state,
        yearQuery: `&release_date.${direction ? "gte" : "lte"}=${selectedYear}`,
      };
    });
  }, [direction, selectedYear]);
  const selectionChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  const changeTheYearFilterHandler = () => {
    setDirection((state) => !state);
  };
  return (
    <div className={styles["year-filter-container"]}>
      <p className={styles["year-filter-title"]}>Year:</p>
      <div className={styles["selections"]}>
        <select value={selectedYear} onChange={selectionChangeHandler}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          onClick={changeTheYearFilterHandler}
          className={styles["arrow-icon"]}
          icon={direction ? faLongArrowAltUp : faLongArrowAltDown}
        />
      </div>
    </div>
  );
};

export default YearsFilter;
