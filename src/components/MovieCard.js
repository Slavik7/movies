import React from "react";
import styles from "../styles/MovieCard.module.css";
import { posterURL } from "../api";
import { useDispatch } from "react-redux";
import {
  setMovieDetailsOn,
  getMovieCredits,
  getMovieVideos,
} from "../actions/detailsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ title, poster_path, release_date, id }) => {
  const dispatch = useDispatch();
  const movieClickHandler = () => {
    dispatch(setMovieDetailsOn(id));
    dispatch(getMovieCredits(id));
    dispatch(getMovieVideos(id));
    document.body.style.overflow = "hidden";
  };
  const titleFix = () => {
    if (title.length > 17) {
      return `${title.slice(0, 18)}...`;
    }
    return title;
  };
  return (
    <div className={styles["movie-card"]} onClick={movieClickHandler}>
      <h3 className={styles["movie-title"]}>{titleFix()}</h3>
      <h4 className={styles["movie-year"]}>{release_date}</h4>
      {poster_path ? (
        <img
          className={styles["image"]}
          src={poster_path ? posterURL(poster_path) : ""}
          alt={title}
        />
      ) : (
        <div className={styles["no-image"]}>
          <FontAwesomeIcon icon={faFilm} />
          <p>No Image</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
