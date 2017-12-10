import Customer from '../../models/Customer';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS, SET_CURRENT_CUSTOMER } from '../../constants';

export interface CustomerState {
  listItems: Customer[];
  isFetching: boolean;
  currentCustomer: Customer | null;
}
const initialState = {
  listItems: [],
  isFetching: false,
  currentCustomer: null,
};

export function customers(
  state: CustomerState = initialState,
  action: {
    type: string;
    payload: {
      // How to structure this so that not all customer actions have to have the same payloads?
      customers: Customer[];
      customer: Customer;
    };
  }
): CustomerState {
  switch (action.type) {
    case FETCHING_CUSTOMERS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHED_CUSTOMERS:
      return {
        ...state,
        listItems: action.payload.customers,
        isFetching: false
      };
    case SET_CURRENT_CUSTOMER:
      return {
        ...state,
        currentCustomer: action.payload.customer,
      };
    default:
      return state;
  }
}
