import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import styles from "../styles/MoviesSlider.module.css";

const MoviesSlider = ({ movies, typeTitle }) => {
  return (
    <section className={styles["movies-type-container"]}>
      <h2 className={styles["type-title"]}>{typeTitle}</h2>
      {
        <div className={styles["movies-slider-container"]}>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              <div className={styles["movie-card-container"]} key={movie.id}>
                <MovieCard
                  title={movie.title}
                  release_date={movie.release_date}
                  poster_path={movie.poster_path}
                  key={movie.id}
                  id={movie.id}
                />
              </div>
            ))}
        </div>
      }
    </section>
  );
};

export default MoviesSlider;
