import { StoreState } from '../types';
import { FETCHING_CUSTOMERS, FETCHED_CUSTOMERS } from '../constants';

const initialState = {
  page: '',
  customers: {
    listItems: [],
    isFetching: false
  },
  orders: {
    listItems: [],
    isFetching: false
  },
  samples: {
    listItems: [],
    isFetching: false
  }
};

export function customers(state: StoreState = initialState, action: any): StoreState {
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
