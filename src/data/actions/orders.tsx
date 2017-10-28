import Order from '../../models/Order';
import { FETCHING_ORDERS, FETCHED_ORDERS } from '../../constants';
import { Dispatch } from 'react-redux';
import { baseApiUrl } from '../../constants';

export interface FetchingOrders {
  type: FETCHING_ORDERS;
}

export interface FetchedOrders {
  type: FETCHED_ORDERS;
  payload: {
    orders: Order[],
  };
}

export type OrderAction = FetchingOrders | FetchedOrders;

export function fetchingOrders(): FetchingOrders {
  return {
    type: FETCHING_ORDERS
  };
}

export function fetchedOrders(orders: Order[]) {
  return {
    type: FETCHED_ORDERS,
    payload: {
      orders
    },
  };
}

export function fetchOrders() {
  return (dispatch: Dispatch<OrderAction>): void => {
    dispatch(fetchingOrders());

    const url = baseApiUrl + 'orders';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        return response.json();
      })
      .then((orders) => dispatch(fetchedOrders(orders)))
      .catch((err) => {
        console.log('Error fetching orders: ' + err.message);
      });
  };
}
