import { combineReducers } from 'redux';
import { customers } from './customers';
import { orders } from './orders';
import { samples } from './samples';
import { app } from './app';

export default combineReducers({
  customers,
  orders,
  samples,
  app,
});
