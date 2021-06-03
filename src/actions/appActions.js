import axios from 'axios';
import { clearPlayerData } from './playerActions';
import { returnErrors } from './errorActions';

export const redirectToLogin = () => {
  window.location = 'http://localhost:8888/login';
};

export const addToken = (data) => {
  return {
    type: 'ADD_TOKEN',
    payload: data,
  };
};

export const clearAppData = () => {
  return {
    type: 'CLEAR_APP_DATA',
  };
};

export const clearData = () => (dispatch) => {
  dispatch(clearAppData());
  dispatch(clearPlayerData());
  localStorage.removeItem('state')
};

export const isTokenExpired = (expiration) => {
  return expiration - Date.now() < 10 * 60 * 1000;
};

export const refreashToken = () => (dispatch) => {
  axios
    .get('http://localhost:8888/refresh', { withCredentials: true })
    .then((res) => {
      console.log('REFRESH RESPONSE: ');
      console.log(res);
      if (res.status === 200) {
        const auth_token = res.data;
        console.log(auth_token);
        dispatch(addToken(auth_token));
      } else {
        console.log('Refresh failed: res.status: ', res.status);
      }
    })
    .catch((e) => console.log('Error: ', e));
};

export const authenticateUser = () => {
  return {
    type: 'AUTHENTICATE_USER',
  };
}

export const setAsLoading = () => {
  return {
    type: 'SET_AS_LOADING',
  };
};

export const finishedLoading = () => {
  return {
    type: 'FINISHED_LOADING',
  };
};

export const toggleDarkMode = () => {};
