import Customer from '../models/Customer';
import Order from '../models/Order';
import Sample from '../models/Sample';
import { Page } from '../constants';

export interface StoreState {
  app: {
    page: Page;
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