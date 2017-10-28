import { combineReducers } from 'redux';
import { customers } from './customers';
import { app } from './app';

export default combineReducers({
  customers,
  app,
});
