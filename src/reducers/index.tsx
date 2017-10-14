import { ChangeCustomers } from '../actions';
import { StoreState } from '../types';
import { CHANGE_CUSTOMERS } from '../constants';

export function customers(state: StoreState, action: ChangeCustomers): StoreState {
  switch (action.type) {
    case CHANGE_CUSTOMERS:
      return {...state, customers: action.payload.customers};
    default:
      return state;
  }
}