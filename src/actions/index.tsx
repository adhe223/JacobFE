import Customer from '../models/Customer';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS } from '../constants';

export interface FetchingCustomers {
  type: FETCHING_CUSTOMERS;
}

export interface FetchedCustomers {
  type: FETCHED_CUSTOMERS;
  payload: {
    customers: Customer[],
  };
}

export type CustomerAction = FetchingCustomers | FetchedCustomers;

export function fetchingCustomers() {
  return {
    type: FETCHING_CUSTOMERS
  };
}

export function fetchedCustomers(customers: Customer[]) {
  return {
    type: FETCHED_CUSTOMERS,
    payload: {
      customers,
    },
  };
}
