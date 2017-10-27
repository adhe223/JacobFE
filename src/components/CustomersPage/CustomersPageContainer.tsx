import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { fetchCustomers } from '../../actions/customers';
import CustomersPage from './CustomersPage';

const mapStateToProps = (state: StoreState) => {
  return {
    tableProps: {
      listItems: state.customers.listItems as any,
    },
    isFetching: state.customers.isFetching,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchCustomers: () => dispatch(fetchCustomers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);