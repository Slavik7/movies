import React, { useEffect, useState } from "react";
import MoviesSlider from "../components/MoviesSlider";
import MovieDetails from "../components/MovieDetails";
import PersonSlider from "../components/PersonSlider";
import { popularMoviesURL, upcomingMoviesURL, personPopularURL } from "../api";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [personPopular, setPersonPopular] = useState([]);
  const { movieDetails } = useSelector((state) => state);

  useEffect(() => {
    const getMovies = async () => {
      const popMovies = await axios.get(popularMoviesURL());
      setPopularMovies([...popMovies.data.results]);

      const upMovies = await axios.get(upcomingMoviesURL());
      setUpcomingMovies([...upMovies.data.results]);
      const popPerson = await axios.get(personPopularURL());
      setPersonPopular([...popPerson.data.results]);
    };
    getMovies();
  }, []);
  return (
    <div className={styles["home-page-container"]}>
      <div className={styles["title-container"]}>
        <h1 className={styles["main-title"]}>Movies.</h1>
        <h2 className={styles["sub-title"]}>simple.</h2>
      </div>
      <div className={styles["home-sliders"]}>
        {movieDetails.active && <MovieDetails />}
        {popularMovies.length > 0 && (
          <MoviesSlider
            key={"Popular Movies"}
            movies={popularMovies}
            typeTitle="Popular Movies"
          />
        )}
        {upcomingMovies.length > 0 && (
          <MoviesSlider
            key={"Upcoming Movies"}
            movies={upcomingMovies}
            typeTitle="Upcoming Movies"
          />
        )}
        <PersonSlider persons={personPopular} />
      </div>
    </div>
  );
};

export default Home;
