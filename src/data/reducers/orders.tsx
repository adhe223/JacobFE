import Order from '../../models/Order';
import { FETCHING_ORDERS, FETCHED_ORDERS } from '../../constants';

export interface OrderState {
  listItems: Order[];
  isFetching: boolean;
}
const initialState = {
  listItems: [],
  isFetching: false
};

export function orders(
  state: OrderState = initialState,
  action: {
    type: string;
    payload: {
      orders: Order[];
    };
  }
): OrderState {
  switch (action.type) {
    case FETCHING_ORDERS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHED_ORDERS:
      return {
        listItems: action.payload.orders,
        isFetching: false
      };
    default:
      return state;
  }
}
