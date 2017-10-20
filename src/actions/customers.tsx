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
      customers
    },
  };
}

export function fetchCustomers() {
  return (dispatch: any) => {
    dispatch(fetchingCustomers());

    const url = '';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // do something
        }
        return response;
      })
      .then((response) => response.json())
      .then((customers) => dispatch(fetchedCustomers(customers)))
      .catch(() => {});
  };
}
