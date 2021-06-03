// App reducer will store general application data such as:
//  - Auth Token
//  - Search history
//  - Color scheme

const initialState = {
  auth_token: null,
  color_scheme: 'light',
  is_authenticated: false,
  is_loading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      const auth = action.payload;

      return {
        ...state,
        auth_token: auth,
      };

    case 'LOG_OUT_USER':
    case 'AUTH_ERROR':
    case 'CLEAR_APP_DATA':
      return {
        auth_token: null,
        is_authenticated: false,
        is_loading: false,
      };

    case 'SET_AS_LOADING':
      return { ...state, is_loading: true };

    case 'FINISHED_LOADING':
      return { ...state, is_loading: false };

    case 'AUTHENTICATE_USER':
      return { ...state, is_authenticated: true };

    default:
      return state;
  }
};

export default appReducer;
