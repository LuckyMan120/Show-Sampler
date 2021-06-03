import axios from 'axios';
import keys from '../config/keys';

export const fetchShows = async (city, token) => {
  try {
    console.log('Fetching: ', city, ' auth ', token);
    const { data } = await axios.get(keys.URL + `events`, {
      params: {
        city: city,
      },
    });
    if (data.error) {
      return data;
    } else {
      const filtered = await generatePlaylists(data, token);
      console.log(filtered);
      return filtered;
    }
  } catch (error) {
    console.log(error);
    return { error: { msg: error } };
  }
};

// For each event returned by ticketmaster, generate a playlist and add it to event object.
// If spotify fails to generate playlist, exclude event from list.
const generatePlaylists = async (eventData, token) => {
  const promises = eventData.map(async (event) => {
    const playlist = await artistsToPlayist(event.artist_list, token);
    return { ...event, playlist: playlist };
  });

  return await Promise.all(promises)
    .then((responses) => {
      const filtered = responses.filter((event) => {
        return event.playlist.length > 0;
      });
      return filtered;
    })
    .catch((e) => console.log(e));
};

export const searchArtist = async (artist, accessToken) => {
  try {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=artist:${artist}`,
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );
    console.log(data);
    const track = data.tracks.items[0];
    console.log(track);
    return track;
  } catch (error) {
    console.log(error);
  }
};

// artistsToPlayist takes an array of artist names, returns playlist of URI tracks:
//Input: Array of strings
//Output: Array of strings

export const artistsToPlayist = async (artists, accessToken) => {
  try {
    const n = Math.ceil(10 / artists.length);
    let playlist = await Promise.all(
      artists.map(async (artist) => {
        try {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/search?q=artist:"${artist}"&type=track&limit=${n}`,
            {
              headers: { Authorization: 'Bearer ' + accessToken },
            }
          );
          const uri_list = data.tracks.items.map(({ uri }) => uri);
          return uri_list;
        } catch (e) {
          console.log(e);
          return null;
        }
      })
    );
    const filtered_list = playlist.flat().filter((artist) => artist !== null);
    return filtered_list;
  } catch (error) {
    console.log(error);
  }
};
