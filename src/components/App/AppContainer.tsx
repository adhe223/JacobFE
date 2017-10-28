import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { fetchCustomers } from '../../data/actions/customers';
import { getCustomers, customersFetching } from '../../data/selectors/customers';
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
    page: getPage(state),
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
    page: stateProps.page,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);