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
  return (dispatch: (arg: any) => null) => {
    dispatch(fetchingCustomers());

    const testCustomers = [
      {
        customerId: 1,
        firstName: 'Alex',
        lastName: 'Henry',
        companyName: 'AH',
        streetAddress: '123 Street',
        streetAddress2: 'Apt 123',
        city: 'Seattle',
        state: 'WA',
        zip: '99999',
        phoneNumber: '123-456-7890',
      }, {
        customerId: 2,
        firstName: 'Cindy',
        lastName: 'Han',
        companyName: 'CH',
        streetAddress: '123 Street',
        streetAddress2: 'Apt 123',
        city: 'Seattle',
        state: 'WA',
        zip: '99999',
        phoneNumber: '123-456-7890',
      }
    ];
    return dispatch(fetchedCustomers(testCustomers));

    // const url = '';
    // fetch(url)
    //   .then((response) => {
    //     if (!response.ok) {
    //       // do something
    //     }
    //     return response;
    //   })
    //   .then((response) => response.json())
    //   .then((customers) => dispatch(fetchedCustomers(customers)))
    //   .catch(() => {});
  };
}
