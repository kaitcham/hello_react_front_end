import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greetings: greetReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
