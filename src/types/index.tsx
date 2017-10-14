import Customer from '../models/Customer';
import Order from '../models/Order';
import Sample from '../models/Sample';

export interface StoreState {
  page: string;
  customers: Customer[];
  orders: Order[];
  samples: Sample[];
}