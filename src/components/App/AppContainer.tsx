import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { fetchCustomers } from '../../data/actions/customers';
import { fetchOrders } from '../../data/actions/orders';
import { fetchSamples } from '../../data/actions/samples';
import { getCustomers, customersFetching } from '../../data/selectors/customers';
import { getOrders, ordersFetching } from '../../data/selectors/orders';
import { getSamples, samplesFetching } from '../../data/selectors/samples';
import { getPage } from '../../data/selectors/app';
import { setPage } from '../../data/actions/app';
import { Page } from '../../constants';
import App from './App';

const mapStateToProps = (state: StoreState) => {
  return {
    customerData: {
      tableProps: {
        listItems: getCustomers(state),
      },
      isFetching: customersFetching(state),
    },
    orderData: {
      tableProps: {
        listItems: getOrders(state),
      },
      isFetching: ordersFetching(state),
    },
    sampleData: {
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
    customerData: {
      fetchData: () => dispatch(fetchCustomers())
    },
    orderData: {
      fetchData: () => dispatch(fetchOrders())
    },
    sampleData: {
      fetchData: () => dispatch(fetchSamples())
    },
    setPage: (page: Page) => {
      dispatch(setPage(page));
    }
  };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  const customerData = Object.assign(
    {},
    stateProps.customerData,
    dispatchProps.customerData,
    ownProps.customerData
  );
  const orderData = Object.assign(
    {},
    stateProps.orderData,
    dispatchProps.orderData,
    ownProps.orderData
  );
  const sampleData = Object.assign(
    {},
    stateProps.sampleData,
    dispatchProps.sampleData,
    ownProps.sampleData
  );

  return {
    customerData,
    orderData,
    sampleData,
    page: stateProps.page,
    setPage: dispatchProps.setPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);