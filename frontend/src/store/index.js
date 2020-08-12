import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tranimReducer from './tranim/reducer';
import sevevReducer from './sevev/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  tranimApp: tranimReducer,
  sevevApp: sevevReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
