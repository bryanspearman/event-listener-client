import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from '../utils/local-storage';
import authReducer from './auth-reducer';
import eventReducer from './event-reducer';

import { setAuthToken, refreshAuthToken } from '../auth/auth-actions';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    event: eventReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
