const initState = {
  movies: [],
  pages: 0,
  isLoading: false,
};
const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        movies: action.payload.movies,
        pages: action.payload.pages,
      };
    }
    case "LOADING_MOVIES": {
      return { ...state, isLoading: true };
    }
    case "LOADING_FINISH": {
      return { ...state, isLoading: false };
    }
    default:
      return { ...state };
  }
};

export default moviesReducer;
