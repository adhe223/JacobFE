import Customer from '../models/Customer';
import Order from '../models/Order';
import Sample from '../models/Sample';
import { Pages } from '../constants';

export interface StoreState {
  app: {
    page: Pages;
  };
  customers: {
    listItems: Customer[],
    isFetching: boolean,
  };
  orders: {
    listItems: Order[],
    isFetching: boolean,
  };
  samples: {
    listItems: Sample[],
    isFetching: boolean,
  };
}