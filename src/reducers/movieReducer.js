import { GET_MOVIES, GET_MOVIE, FILTER_MOVIES } from '../actions/types';

const initialState = {
  movies: [],
  displayedMovies: [],
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        displayedMovies: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case FILTER_MOVIES:
      return {
        ...state,
        displayedMovies: state.movies.filter(movie =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default:
      return state;
  }
}
