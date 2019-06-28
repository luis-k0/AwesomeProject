import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose;

// __DEV__ global variable exposed by react native
// indicating that is the development enviroment
// this variable will be false in production
// and won't load the bundle in production with redux devtools
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
