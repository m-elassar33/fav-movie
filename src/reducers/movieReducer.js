import {
  GET_MOVIES,
  GET_MOVIE,
  FILTER_MOVIES,
  SET_MODAL
} from '../actions/types';

const initialState = {
  movies: [],
  displayedMovies: [],
  movie: { modalIsOpen: false }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        displayedMovies: [...state.displayedMovies, ...action.payload]
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: { ...action.payload, modalIsOpen: state.movie.modalIsOpen }
      };
    case FILTER_MOVIES:
      return {
        ...state,
        displayedMovies: state.movies.filter(movie =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case SET_MODAL:
      return {
        ...state,
        movie: { ...state.movie, modalIsOpen: action.payload }
      };
    default:
      return state;
  }
}
