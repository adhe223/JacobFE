import { connect, Dispatch } from 'react-redux';
import { fetchCustomers } from '../actions/customers';
import App from '../components/App/App';
import { StoreState } from '../types';

const mapStateToProps = (state: StoreState) => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
  return {
    fetchCustomers: () => dispatch(fetchCustomers())
  };
};

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(App);
