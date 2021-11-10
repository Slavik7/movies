import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/MoviesList.module.css";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
const MoviesList = ({ moviesType, arg = 0 }) => {
  //fetchig to the movies states by the movies type type
  const dispatch = useDispatch();
  const { movies, isLoading, pages } = useSelector((state) => state.movies);
  const { movieDetails } = useSelector((state) => state);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (moviesType) {
      if (arg) dispatch(moviesType(pageNum, arg));
      else dispatch(moviesType(pageNum));
      console.log("dispatched");
    }
  }, [arg, pageNum, moviesType, dispatch]);
  useEffect(() => {
    setPageNum(1);
  }, [arg]);
  return (
    <div>
      <div className={styles["movies-container"]}>
        {movieDetails.active && <MovieDetails />}
        {!isLoading
          ? movies.map((movie) => (
              <MovieCard
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                key={movie.id}
                id={movie.id}
              />
            ))
          : ""}
      </div>
      {!isLoading && pages > 1 && (
        <div className={styles["page-control"]}>
          {!isLoading && pageNum > 1 && (
            <button
              className={styles["btn-page"]}
              onClick={() => setPageNum((page) => page - 1)}
            >
              {`< Previous Page`}
            </button>
          )}
          {!isLoading && pageNum < pages && (
            <button
              className={styles["btn-page"]}
              onClick={() => setPageNum((page) => page + 1)}
            >
              {`Next Page >`}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
