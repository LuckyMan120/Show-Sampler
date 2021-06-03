import React, { useLayoutEffect, useState, useRef} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import EventNav from './EventNav';
import PlayerDisplay from './PlayerDisplay';
import { useDispatch, useSelector } from 'react-redux';
import './player.css';

import PropTypes from 'prop-types';
import {
  redirectToLogin,
  refreashToken,
  isTokenExpired,
} from '../../actions/appActions';

const PlayerContainer = () => {

  const dispatch = useDispatch();


  const index = useSelector((state) => state.playerReducer.event_index);
  const authToken = useSelector((state) => state.appReducer.auth_token);
  const { token, expiration } = authToken;
  const eventData = useSelector(
    (state) => state.playerReducer.total_event_data[index]
  );
  const uriList = eventData.playlist;
  const [playerDevice, setPlayerDevice] = useState('')
  const playerDeviceRef = useRef(playerDevice);
  playerDeviceRef.current = playerDevice

  useLayoutEffect(() => {
    checkTokenExpiration();
    const timer = checkDeviceError()
    return () => clearTimeout(timer);
  }, []);

  const checkTokenExpiration = () => {
    if (isTokenExpired(expiration)) {
      console.log('Refresh needed. Refreshing tokens.');
      dispatch(refreashToken());
    } else {
      console.log('no refresh needed');
      console.log((expiration - Date.now()) / 60000);
    }
  };

  // =================================================================
  //  React-spotify-web-playback has a bug regarding the SDK and device playback.
  //  It loads fine the first time it's mounted, but subsequent re-mounts due 
  //  to navigation cause it to lose track of the device it's playing on. 
  //  To work with this I created a timer to check for the presence of a 
  //  deviceId after a reasonable load time, and refresh the browser page if so. 
  // =================================================================

  const checkDeviceError = () => {
    const timer = setTimeout(() => {
      if ( playerDeviceRef.current === '') {
        window.location.reload(false);
      }
    }, 4000)
    return timer;
  }

  return (
    <div className='player-container'>
      <EventNav eventData={eventData} />
      <PlayerDisplay eventData={eventData} />
      {token && <SpotifyPlayer
        id="player"
        token={token}
        uris={uriList}
        magnifySliderOnHover={true}
        persistDeviceSelection={true}
        autoPlay={true}
        styles={playerStyle}
        callback={(state) => {
          checkTokenExpiration();
          setPlayerDevice(state.currentDeviceId)

          if (state.status === 'ERROR') {
            console.log('Error state reached');
            dispatch(redirectToLogin());
          }
        }}
      />}
    </div>
  );
};

const playerStyle = {
  bgColor: '#444',
  color: '#fff',
  loaderColor: '#fff',
  sliderColor: '#1cb954',
  savedColor: '#fff',
  trackArtistColor: '#ccc',
  trackNameColor: '#fff',
};

PlayerContainer.propTypes = {};

export default PlayerContainer;
