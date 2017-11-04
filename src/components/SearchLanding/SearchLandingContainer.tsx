import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { getCustomers } from '../../data/selectors/customers';
import { fetchCustomersByCompany } from '../../data/actions/customers';
import SearchLanding from './SearchLanding';

const mapStateToProps = (state: StoreState) => {
  return {
    resultItems: getCustomers(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchCustomersByCompany: (searchTerm: string) => dispatch(fetchCustomersByCompany(searchTerm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchLanding);
