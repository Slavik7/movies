import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/GenresFilter.module.css";
import { getGenersURL } from "../api";
const GenresFilter = ({ setActiveFilters }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);
  useEffect(() => {
    const genresStr = genresIdToString(genres.filter((genre) => genre.active));
    setActiveFilters((state) => {
      return {
        ...state,
        genresQuery: genresStr ? `&with_genres=${genresStr}` : "",
      };
    });
  }, [genres, setActiveFilters]);

  //getting all the geners and id's
  const getGenres = async () => {
    const genresData = await axios.get(getGenersURL());
    setGenres(
      genresData.data.genres.map((genre) => {
        return { ...genre, active: false };
      })
    );
  };
  const checkboxChangeHandler = (e) => {
    setGenres(
      genres.map((genre) => {
        if (e.target.id === "" + genre.id)
          return { ...genre, active: e.target.checked };
        else return { ...genre };
      })
    );
  };

  const genresIdToString = (g) => {
    let str = "";
    if (g.length > 0) {
      for (let i = 0; i < g.length - 1; i++) {
        str += `${g[i].id}|`;
      }
      str += `${g[g.length - 1].id}`;
    }
    return str;
  };
  return (
    <div className={styles["genres-filter-container"]}>
      <p className={styles["genres-filter-title"]}>Genres:</p>
      {genres.map((genre) => (
        <div key={genre.id} className={styles["checkbox-option"]}>
          <input
            type="checkbox"
            id={genre.id}
            name={genre.name}
            value={genre.id}
            onChange={checkboxChangeHandler}
          />
          <label htmlFor={genre.id}>{genre.name}</label>
        </div>
      ))}
    </div>
  );
};

export default GenresFilter;
