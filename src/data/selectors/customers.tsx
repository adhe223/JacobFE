import { StoreState } from '../../types';

const getCustomers = (state: StoreState) => {
    return state.customers.listItems;
};

const getCurrentCustomer = (state: StoreState) => {
    return state.customers.currentCustomer;
};

const customersFetching = (state: StoreState) => {
    return state.customers.isFetching;
};

export {
    getCustomers,
    customersFetching,
    getCurrentCustomer,
};
