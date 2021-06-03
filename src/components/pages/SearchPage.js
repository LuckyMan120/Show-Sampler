import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputForm from '../input/InputForm';
import parseISO from 'date-fns/parseISO';
import {
  setAsLoading,
  finishedLoading,
  addToken,
  authenticateUser,
} from '../../actions/appActions';
import { initializeEventData } from '../../actions/playerActions';
import { generateError } from '../../actions/errorActions';
import { fetchShows } from '../../api';
import LoadingPage from './LoadingPage';
import ErrorContainer from '../error/ErrorContainer';
import './SearchPage.css';

const SearchPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const params = new URLSearchParams(document.location.search.substring(1));
  const auth = params.get('access_token');
  const expiration = params.get('expiration');
  if (auth && expiration) {
    dispatch(addToken({ token: auth, expiration }));
    dispatch(authenticateUser())
    history.replace('/search');
  }
  const { token } = useSelector((state) => state.appReducer.auth_token);
  const isLoading = useSelector((state) => state.appReducer.is_loading);

  //Input of date-picker is Date(), output is String.
  //If we want to re-populate form with past data, we need to parse it.
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    // console.log('formData')
    // console.log(formData.date[0])
    console.log((new Date()).toISOString())
    formData.date[0] = parseISO(formData.date[0]);
    formData.date[1] = parseISO(formData.date[1]);
  }

  const clickHandler = async (values) => {
    const { city } = values;
    dispatch(setAsLoading());
    localStorage.setItem('formData', JSON.stringify(values));
    const data = await fetchShows(city, token);
    dispatch(finishedLoading());
    if (data.error) {
      dispatch(generateError(data.error));
      console.log('Search error: ', data.error.msg);
    } else {
      dispatch(initializeEventData(data));
      history.push('/playback');
    }
  };

  return (
    <div className='search-container'>
      {!isLoading && (
        <InputForm callback={clickHandler} savedValues={formData} />
      )}
      {isLoading && <LoadingPage />}
      <ErrorContainer />
    </div>
  );
};

export default SearchPage;
