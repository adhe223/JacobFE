import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import Customer from '../../models/Customer';
import { getCustomers } from '../../data/selectors/customers';
import { fetchCustomersByCompany, setCurrentCustomer } from '../../data/actions/customers';
import SearchLanding from './SearchLanding';

const mapStateToProps = (state: StoreState) => {
  return {
    resultItems: getCustomers(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchCustomersByCompany: (searchTerm: string) => dispatch(fetchCustomersByCompany(searchTerm)),
    setCurrentCustomer: (customer: Customer) => dispatch(setCurrentCustomer(customer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchLanding);
