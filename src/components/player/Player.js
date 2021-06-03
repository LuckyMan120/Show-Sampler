import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';


function Player({token, uriList}) {
  return (
    <SpotifyPlayer
      token={token}
      uris={uriList}
      // uris={"spotify:track:40riOy7x9W7GXjyGp4pjAv"}
      autoPlay={true}
      styles={playerStyle}
      callback={(state) => {
        console.log('player STATE:')
        console.log(state.status)
        // checkTokenExpiration();
        // if (state.status === 'ERROR') {
        //   console.log('Error state reached');
        //   dispatch(redirectToLogin());
        // }
      }}
    />
  )
}

const playerStyle = {
  bgColor: '#444',
  color: '#fff',
  loaderColor: '#fff',
  sliderColor: '#1cb954',
  savedColor: '#fff',
  trackArtistColor: '#ccc',
  trackNameColor: '#fff',
  height: '10rem',
};


export default Player
