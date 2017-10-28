import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { fetchCustomers } from '../../data/actions/customers';
import { fetchOrders } from '../../data/actions/orders';
import { fetchSamples } from '../../data/actions/samples';
import { getCustomers, customersFetching } from '../../data/selectors/customers';
import { getOrders, ordersFetching } from '../../data/selectors/orders';
import { getSamples, samplesFetching } from '../../data/selectors/samples';
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
    sampleProps: {
      tableProps: {
        listItems: getSamples(state),
      },
      isFetching: samplesFetching(state),
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
    sampleProps: {
      fetchSamples: () => dispatch(fetchSamples())
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
  const sampleProps = Object.assign(
    {},
    stateProps.sampleProps,
    dispatchProps.sampleProps,
    ownProps.sampleProps
  );

  return {
    customerProps,
    orderProps,
    sampleProps,
    page: stateProps.page,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);