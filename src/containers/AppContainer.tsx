import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customers';
import App from '../components/App/App';

const mapStateToProps = (state: any) => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch: any) => {
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
