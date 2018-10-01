import { GET_MOVIES, GET_MOVIE, FILTER_MOVIES, SET_MODAL } from './types';
import axios from 'axios';

export const getMovies = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: 'bbce44df3ab7afa8c2f1f2f6fe93b640',
      region: 'US'
    }
  });
  dispatch({
    type: GET_MOVIES,
    payload: res.data.results
  });
};

export const getMovie = id => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: 'bbce44df3ab7afa8c2f1f2f6fe93b640'
    }
  });
  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
};

export const filterMovies = term => {
  return {
    type: FILTER_MOVIES,
    payload: term
  };
};

export const setModal = modal => {
  return {
    type: SET_MODAL,
    payload: modal
  };
};
