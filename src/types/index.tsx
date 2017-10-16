import Customer from '../models/Customer';
import Order from '../models/Order';
import Sample from '../models/Sample';

export interface StoreState {
  page: string;
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