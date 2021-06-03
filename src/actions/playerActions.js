import axios from 'axios';
import { artistsToPlayist, fetchShows } from '../api/';

export const setCurrentEvent = (data) => {
  return {
    type: 'SET_CURRENT_EVENT',
    payload: data,
  };
};

export const setPlaylist = (data) => {
  return {
    type: 'SET_PLAYLIST',
    payload: data,
  };
};

export const initializeEventData = (data) => {
  console.log('initializing data:');
  console.log(data);
  return {
    type: 'INITIALIZE_EVENT_DATA',
    payload: data,
  };
};

export const clearPlayerData = () => {
  return {
    type: 'CLEAR_PLAYER_DATA',
  };
};

export const isLoading = () => {
  return {
    type: 'SET_AS_LOADING',
  };
};

export const isFinishedLoading = () => {
  return {
    type: 'SET_AS_NOT_LOADING',
  };
};
