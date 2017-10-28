import Customer from '../../models/Customer';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS } from '../../constants';

export interface CustomerState {
  listItems: Customer[];
  isFetching: boolean;
}
const initialState = {
  listItems: [],
  isFetching: false
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
        ...state,
        isFetching: true
      };
    case FETCHED_CUSTOMERS:
      return {
        listItems: action.payload.customers,
        isFetching: false
      };
    default:
      return state;
  }
}
