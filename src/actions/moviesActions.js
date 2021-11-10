import axios from "axios";
import {
  popularMoviesURL,
  upcomingMoviesURL,
  searchMoviesURL,
  moviesByGenresURL,
  moviesByFiltersURL,
} from "../api";

export const getPopularMovies = (pageNum) => (dispatch) => {
  dispatch(actionDispatcher(popularMoviesURL, pageNum));
};

export const getUpcomingMovies = (pageNum) => (dispatch) => {
  dispatch(actionDispatcher(upcomingMoviesURL, pageNum));
};

export const getSearchMovies = (pageNum, query) => (dispatch) => {
  dispatch(actionDispatcher(searchMoviesURL, pageNum, query));
};
export const getMoviesByGenres = (pageNum, genres) => (dispatch) => {
  dispatch(actionDispatcher(moviesByGenresURL, pageNum, genres));
};

export const getMoviesByFilters = (pageNum, query) => (dispatch) => {
  dispatch(actionDispatcher(moviesByFiltersURL, pageNum, query));
};
//Universal Dispatcher for diffrent type of movies request
const actionDispatcher =
  (httpURL, pageNum, arg = 0) =>
  async (dispatch) => {
    const param = [pageNum];
    if (arg !== 0) param.push(arg);
    dispatch({ type: "LOADING_MOVIES" });

    const moviesData = await axios.get(httpURL(...param));
    dispatch({
      type: "GET_MOVIES",
      payload: {
        movies: moviesData.data.results,
        pages: moviesData.data.total_pages,
      },
    });
    dispatch({ type: "LOADING_FINISH" });
  };
