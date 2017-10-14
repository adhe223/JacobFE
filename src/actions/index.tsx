import Customers from '../models/Customer';
import { CHANGE_CUSTOMERS } from '../constants';

export interface ChangeCustomers {
  type: CHANGE_CUSTOMERS;
  payload: {
    customers: Customers[];
  };
}

export type TableDataChange = ChangeCustomers;

export function changeCustomers(customers: Customers[]): ChangeCustomers {
  return {
    type: CHANGE_CUSTOMERS,
    payload: {customers},
  };
}