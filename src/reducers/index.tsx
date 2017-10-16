import { StoreState } from '../types';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS } from '../constants';
import { CustomerAction } from '../actions';

export function customers(state: StoreState, action: CustomerAction): StoreState {
  switch (action.type) {
    case FETCHING_CUSTOMERS:
      return {
        ...state,
        customers: {
          ...state.customers,
          isFetching: true,
        },
      };
    case FETCHED_CUSTOMERS:
      return {
        ...state,
        customers: {
          listItems: action.payload.customers,
          isFetching: false,
        },
      };
    default:
      return state;
  }
}