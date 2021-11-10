import React, { useEffect, useState } from "react";
import { personInfoURL, personMoviesURL, posterURL } from "../api";
import axios from "axios";
import styles from "../styles/PersonDetails.module.css";
import MovieCard from "./MovieCard";
import { sortMoviesByReleaseDate } from "../util";

const PersonDetails = ({ person_id }) => {
  const [personInfo, setPersonInfo] = useState({});
  const [personMovies, setPersonMovies] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getPerson = async (id) => {
      const p = await axios.get(personInfoURL(id));

      setPersonInfo(p.data);
    };
    const getPersonMovies = async (id) => {
      const movies = await axios.get(personMoviesURL(id));
      sortMoviesByReleaseDate(movies.data.cast);
      setPersonMovies(movies.data.cast);
    };
    getPerson(person_id);
    getPersonMovies(person_id);
  }, [person_id]);
  return (
    <div className={styles["person-details-container"]}>
      {personInfo ? (
        <div className={styles["main-info"]}>
          <img
            className={styles["person-profile-pic"]}
            src={personInfo.profile_path && posterURL(personInfo.profile_path)}
            alt={personInfo.name}
          />
          <div className={styles["info"]}>
            <span>Name:</span>
            <p>{personInfo.name}</p>
            <span>Birthday:</span>
            <p>{personInfo.birthday}</p>
            <span>Bio:</span>
            <p className={styles["bio"]}>{personInfo.biography}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {personMovies ? (
        <div>
          <div className={styles["movies-container"]}>
            {personMovies.map((movie) => (
              <div className={styles["movie-card-container"]} key={movie.id}>
                <MovieCard
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                  key={movie.id}
                  id={movie.id}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PersonDetails;
