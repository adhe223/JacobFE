import Customer from '../models/Customer';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS } from '../constants';

export interface CustomerState {
  customers: {
    listItems: Customer[];
    isFetching: boolean;
  };
}
const initialState = {
  customers: {
    listItems: [],
    isFetching: false
  }
};

export function customers(
  state: CustomerState = initialState,
  action: {
    type: string;
    payload: {
      customers: Customer[];
    };
  }
): CustomerState {
  switch (action.type) {
    case FETCHING_CUSTOMERS:
      return {
        customers: {
          ...state.customers,
          isFetching: true
        }
      };
    case FETCHED_CUSTOMERS:
      return {
        customers: {
          listItems: action.payload.customers,
          isFetching: false
        }
      };
    default:
      return state;
  }
}
