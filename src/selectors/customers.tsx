import { StoreState } from '../types';

const getCustomers = (state: StoreState) => {
    return state.customers.listItems;
};

const customersFetching = (state: StoreState) => {
    return state.customers.isFetching;
};

export {
    getCustomers,
    customersFetching,
};