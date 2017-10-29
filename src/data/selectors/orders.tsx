import { StoreState } from '../../types';

const getOrders = (state: StoreState) => {
    return state.orders.listItems;
};

const ordersFetching = (state: StoreState) => {
    return state.orders.isFetching;
};

export {
  getOrders,
  ordersFetching,
};