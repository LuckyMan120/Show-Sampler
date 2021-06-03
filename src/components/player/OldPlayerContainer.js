import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from './PlayerContainer';

export default function PlayerContainer() {
  // const index = useSelector((state) => state.playerReducer.event_index);
  // const auth = useSelector((state) => state.appReducer.auth_token);
  // const eventData = useSelector(
  //   (state) => state.playerReducer.total_event_data[index]
  // );

  // const [uriList, setUriList] = useState([
  // ]);

  // const [playlistCache, setPlaylistCache] = useState(
  //   new Array(eventCount).fill(null)
  // );

  // const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   // If playlist at index is in cache, set as playlist.
  //   // Else fetch playlist, add to cache, set as playlist.

  //   const { artist_list } = eventData;
  //   const generatePlaylist = async (artist_list) => {
  //     if (playlistCache[index]) {
  //       setUriList(playlistCache[index]);
  //     } else {
  //       const playlist = await artistsToPlayist(artist_list, token);
  //       if (playlist) {
  //         setUriList(playlist);
  //         const newCache = playlistCache;
  //         newCache[index] = playlist;
  //         setPlaylistCache(newCache);
  //       } else {
  //         console.log('playlist not found');
  //       }
  //     }
  //   };

  //   generatePlaylist(artist_list);
  // }, [index]);

  return (
    <Player
    // authToken={auth}
    // uriList={eventData.playlist}
    // eventData={eventData}
    />
  );
}
