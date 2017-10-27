import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { fetchCustomers } from '../../actions/customers';
import App from './App';

const mapStateToProps = (state: StoreState) => {
  return {
    customerProps: {
      tableProps: {
        listItems: state.customers.listItems as any,
      },
      isFetching: state.customers.isFetching,
    },
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    customerProps: {
      fetchCustomers: () => dispatch(fetchCustomers())
    }
  };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  const customerProps = Object.assign(
    {},
    stateProps.customerProps,
    dispatchProps.customerProps,
    ownProps.customerProps
  );

  return {
    customerProps,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);