import axios from "axios";
import { movieDetailsURL, movieCreditsURL, movieVideosURL } from "../api";

export const setMovieDetailsOn = (movie_id) => async (dispatch) => {
  const movieData = await axios.get(movieDetailsURL(movie_id));
  dispatch({ type: "MOVIE_DETAILS_ON", payload: { movie: movieData.data } });
};

export const setMovieDetailsOff = () => {
  return { type: "MOVIE_DETAILS_OFF" };
};

export const getMovieCredits = (movie_id) => async (dispatch) => {
  const movieCredits = await axios.get(movieCreditsURL(movie_id));

  dispatch({
    type: "MOVIE_CREDITS",
    payload: { credits: movieCredits.data.cast },
  });
};

export const getMovieVideos = (movie_id) => async (dispatch) => {
  const movieVideos = await axios.get(movieVideosURL(movie_id));
  dispatch({
    type: "MOVIE_VIDEOS",
    payload: { videos: movieVideos.data.results },
  });
};
