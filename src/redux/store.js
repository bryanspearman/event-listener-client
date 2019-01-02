import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from '../utils/local-storage';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import itemReducer from './item-reducer';
import { setAuthToken, refreshAuthToken } from '../auth/auth-actions';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    item: itemReducer
  }),
  applyMiddleware(thunk)
);

// Apply the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
