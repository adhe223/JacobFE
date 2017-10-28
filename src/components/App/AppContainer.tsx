import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { fetchCustomers } from '../../data/actions/customers';
import { fetchOrders } from '../../data/actions/orders';
import { getCustomers, customersFetching } from '../../data/selectors/customers';
import { getOrders, ordersFetching } from '../../data/selectors/orders';
import { getPage } from '../../data/selectors/app';
import App from './App';

const mapStateToProps = (state: StoreState) => {
  return {
    customerProps: {
      tableProps: {
        listItems: getCustomers(state),
      },
      isFetching: customersFetching(state),
    },
    orderProps: {
      tableProps: {
        listItems: getOrders(state),
      },
      isFetching: ordersFetching(state),
    },
    page: getPage(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    customerProps: {
      fetchCustomers: () => dispatch(fetchCustomers())
    },
    orderProps: {
      fetchOrders: () => dispatch(fetchOrders())
    },
  };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  const customerProps = Object.assign(
    {},
    stateProps.customerProps,
    dispatchProps.customerProps,
    ownProps.customerProps
  );
  const orderProps = Object.assign(
    {},
    stateProps.orderProps,
    dispatchProps.orderProps,
    ownProps.orderProps
  );

  return {
    customerProps,
    orderProps,
    page: stateProps.page,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);