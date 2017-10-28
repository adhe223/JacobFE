import Customer from '../../models/Customer';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS } from '../../constants';
import { Dispatch } from 'react-redux';
import { baseApiUrl } from '../../constants';

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

export function fetchingCustomers(): FetchingCustomers {
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
  return (dispatch: Dispatch<CustomerAction>): void => {
    dispatch(fetchingCustomers());

    const url = baseApiUrl + 'customers';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        return response.json();
      })
      .then((customers) => dispatch(fetchedCustomers(customers)))
      .catch((err) => {
        console.log('Error fetching customers: ' + err.message);
      });
  };
}
