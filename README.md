## Show Sampler App:

#### Currently under construction! 

### Explore upcoming shows using the Spotify Web SDK. 

#### High Level overview:

  - The user specifies a city name, date range (optional), genre filters (optional).
  - Ticket master API is used to find shows that fit the description.
  - Spotify API is used to generate ~10 song playlist for each event, built from the specified artists.
  - User is routed to an embedded music player, which autoplays first result. 
  - Top level navigation moves through the events, bottom navigation controls playback of the event's playlist.
  - The main viewport for the player will show the event information provided by ticketmaster:
      - Event promotional picture (maybe a courasel of pictures)
      - Event details such as artists, cost, tickets link, general information.
  - Additional functionality could be to allow users to click on an arist name, pulling up details / playlist for that particular artist. 
  
  
 #### Design Considerations:
 
 - Spotify offers 3 different Oauth options, I chose the one that uses auth / refresh token combination. 
 - All 3rd party API calls happen from the server, however the playback SDK needs a valid spotify auth token in the browser.
 - Auth token lasts 1 hour, with refresh token flow used to generate new auth tokens. 
 - Due to security concerns, the refresh token is never accessible to the browser. Instead we'll keep it in an html-only cookie.
 - Logged out users will enter Auth Flow from landing page, enforced through React-Router. 
 - Server puts refresh token in cookie, auth token is sent as param with a redirect to the Search page.
 - Token expiration will be checked before render of player component, and if we're close to expiration we'll trigger refresh flow. 
 
 - I'm currently using React to build the UI with Redux for global state management. 
 - Global state includes usage Token, isLoading/Error, current search data, player data. 
 - Relevent state will be persistant with use of local storage, pre-loaded as intial state of RootReducer. 
 - Local storage will be cleared on logout. 
 
 - Formik.js is used to create robust and re-usable form components. 
 - Optional feature would be using Google Places API to create an autofill for the City input field. 
 - React-Datepicker.js is used for calendar component. Default date range is the following week.
