import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const saveState = (state) => {
  if (typeof state != 'undefined') {
    localStorage.setItem('state', JSON.stringify(state));
  }
};

const getState = () => {
  try {
    const s = localStorage.getItem('state');
    if (s === null) return undefined;
    return JSON.parse(s);
  } catch (e) {
    return undefined;
  }
};

const initialState = getState();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState({
    appReducer: store.getState().appReducer,
    playerReducer: store.getState().playerReducer,
  });
});

export default store;
