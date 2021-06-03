const initialState = {
  event_index: 0,
  total_event_data: null,
  event_count: 0,
  is_loading: false,
};

const playerReducer = (state = initialState, action) => {
  const { event_count, event_index } = state;

  switch (action.type) {
    case 'INCREMENT_EVENT':
      const i = event_index < event_count - 1 ? event_index + 1 : 0;
      return {
        ...state,
        event_index: i,
      };

    case 'DECREMENT_EVENT':
      const d = event_index > 0 ? event_index - 1 : event_count - 1;
      return {
        ...state,
        event_index: d,
      };
    // case 'SET_CURRENT_EVENT':
    //   return { ...state, current_event_data: action.payload };
    case 'SET_TOTAL_EVENT_DATA':
      return { ...state, total_event_data: action.payload };
    case 'SET_PLAYLIST':
      return { ...state, playlist: action.payload };
    case 'SET_AS_LOADING':
      return { ...state, is_loading: true };
    case 'SET_AS_NOT_LOADING':
      return { ...state, is_loading: false };
    case 'INITIALIZE_EVENT_DATA':
      return {
        ...state,
        total_event_data: action.payload,
        // current_event_data: action.payload[0],
        event_index: 0,
        event_count: action.payload.length,
      };

    case 'CLEAR_PLAYER_DATA':
      return initialState;

    default:
      return state;
  }
};

export default playerReducer;
