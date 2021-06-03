import React from 'react';
import Routes from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar'
import { isTokenExpired, clearData, authenticateUser } from './actions/appActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.appReducer.auth_token) 
  console.log('AUTH', auth)
  if (auth) {
    const { expiration } = auth
    if (isTokenExpired(expiration)) {
      console.log('** token expired, clearing data **');
      dispatch(clearData());
    } else {
      console.log('** auth token in storage still valid **');
      dispatch(authenticateUser())
    }
  }

  return (
    <div className='App-container'>
      <Navbar/>
      <Routes />
    </div>
  );
}

export default App;
