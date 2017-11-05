import Customer from '../../models/Customer';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS, SET_CURRENT_CUSTOMER } from '../../constants';
import { Dispatch } from 'react-redux';
import { baseApiUrl } from '../../constants';

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

export function setCurrentCustomer(customer: Customer) {
  return {
    type: SET_CURRENT_CUSTOMER,
    payload: {customer},
  };
}

export function fetchCustomers() {
  return (dispatch: Dispatch<any>): void => {
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

export function fetchCustomersByCompany(searchTerm: string) {
  return (dispatch: Dispatch<any>): void => {
    dispatch(fetchingCustomers());

    const url = baseApiUrl + 'customers/search-by-company?searchTerm=' + searchTerm;
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
