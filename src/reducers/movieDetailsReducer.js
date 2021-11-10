const initState = {
  movie: [],
  credits: [],
  videos: [],
  active: false,
};

const movieDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "MOVIE_DETAILS_ON": {
      return { ...state, active: true, movie: action.payload.movie };
    }
    case "MOVIE_DETAILS_OFF": {
      return { ...state, active: false };
    }
    case "MOVIE_CREDITS": {
      return { ...state, credits: action.payload.credits };
    }
    case "MOVIE_VIDEOS": {
      return { ...state, videos: action.payload.videos };
    }
    default: {
      return { ...state };
    }
  }
};

export default movieDetailsReducer;
