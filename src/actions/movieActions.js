import { GET_MOVIES } from './types';
import axios from 'axios';

export const getMovies = () => async dispatch => {
  const res = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=bbce44df3ab7afa8c2f1f2f6fe93b640'
  );
  dispatch({
    type: GET_MOVIES,
    payload: res.data.results
  });
};
