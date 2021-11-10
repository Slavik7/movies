import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { posterURL } from "../api";
import styles from "../styles/MovieDetails.module.css";
import { setMovieDetailsOff } from "../actions/detailsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const MovieDetails = () => {
  const { movie, credits, videos } = useSelector((state) => state.movieDetails);
  const [videoToggle, setVideoToggle] = useState(false);
  const [castToggle, setCastToggle] = useState(false);
  const dispatch = useDispatch();
  const num = castToggle ? credits.length : 12;
  const exitDetailsHandler = (e) => {
    if (
      e.target.id === "detailsCard" ||
      e.target.id === "cast-click" ||
      e.target.id === "close-btn"
    ) {
      dispatch(setMovieDetailsOff());
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }
  };
  const btnCastToggleHandler = () => {
    setCastToggle((state) => !state);
  };
  return (
    <div
      className={styles["movie-details-container"]}
      id="detailsCard"
      onClick={exitDetailsHandler}
    >
      <div className={styles["movie-details"]}>
        <div
          id="close-btn"
          className={styles["close-btn"]}
          onClick={exitDetailsHandler}
        >
          x
        </div>
        <h3 className={styles["movie-title"]}>{movie.title}</h3>
        <div
          className={`${styles["movie-main-info"]} ${
            videoToggle ? styles["hidden"] : ""
          }`}
        >
          <img
            className={styles["cover-image"]}
            src={movie?.poster_path && posterURL(movie.poster_path)}
            alt={movie.title}
          />
          <div className={styles["movie-info"]}>
            <span>Release Date:</span>
            <p className={styles["release-year"]}>{movie.release_date}</p>
            <span>Genres:</span>
            <div className={styles["genres"]}>
              {movie.genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
            <span>Overview:</span>
            <div className={styles["overview"]}>
              <p>{movie.overview}</p>
            </div>
            <span>Credits:</span>
            <div className={styles["credits-container"]}>
              <div className={styles["credits"]}>
                {credits.slice(0, num).map((castName) => (
                  <Link
                    onClick={exitDetailsHandler}
                    to={`/person/${castName.id}`}
                    key={castName.id}
                    id="cast-click"
                  >
                    <div className={styles["cast-member"]} key={castName.id}>
                      {castName.profile_path ? (
                        <img
                          className={styles["profile-pic"]}
                          src={posterURL(castName.profile_path)}
                          alt={castName.name}
                        />
                      ) : (
                        ""
                      )}
                      <p>{castName.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
              {credits.length >= num && (
                <button
                  onClick={btnCastToggleHandler}
                  className={styles["btn-more-cast"]}
                >{`${!castToggle ? "More..." : "Less"}`}</button>
              )}
            </div>
          </div>
        </div>
        {videos.length ? (
          <div
            className={styles["video-toggle"]}
            onClick={() => setVideoToggle(!videoToggle)}
          >
            <div className={styles["video-icons"]}>
              <p>{!videoToggle ? "Trailer" : "Close"}</p>
              <FontAwesomeIcon className={styles["icon-play"]} icon={faPlay} />
            </div>
          </div>
        ) : (
          ""
        )}
        {videoToggle && (
          <div className={styles["video-container"]}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${videos[0]?.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        )}
      </div>
    </div>
  );
};
//need to render the movie details card //already fetched the details from the api
//need to check again the onClick for all cards
export default MovieDetails;
