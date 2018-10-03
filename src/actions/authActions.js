import axios from 'axios';
import setSessionId from '../utils/setSessionId';

import { SET_AUTHENTICATED } from './types';

export const login = user => async dispatch => {
  // Get a request_token
  const res1 = await axios.get(
    'https://api.themoviedb.org/3/authentication/token/new',
    {
      params: {
        api_key: 'bbce44df3ab7afa8c2f1f2f6fe93b640'
      }
    }
  );
  const { request_token } = res1.data;
  // Create a session with login
  await axios.post(
    'https://api.themoviedb.org/3/authentication/token/validate_with_login',
    {
      ...user,
      request_token
    },
    {
      params: {
        api_key: 'bbce44df3ab7afa8c2f1f2f6fe93b640'
      }
    }
  );
  // Get a session_id
  const res2 = await axios.post(
    'https://api.themoviedb.org/3/authentication/session/new',
    {
      request_token
    },
    {
      params: {
        api_key: 'bbce44df3ab7afa8c2f1f2f6fe93b640'
      }
    }
  );
  const { session_id } = res2.data;
  sessionStorage.setItem('session_id', session_id);
  setSessionId(session_id);
  dispatch(setAuthenticated(true));
};

export const setAuthenticated = isAuthenticated => {
  return {
    type: SET_AUTHENTICATED,
    payload: isAuthenticated
  };
};

export const logout = () => dispatch => {
  sessionStorage.removeItem('session_id');
  setSessionId(false);
  dispatch(setAuthenticated(false));
};
