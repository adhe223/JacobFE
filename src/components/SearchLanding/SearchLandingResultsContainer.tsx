import { connect } from 'react-redux';
import { StoreState } from '../../types';
import { getCustomers } from '../../data/selectors/customers';
import SearchLandingResults from './SearchLandingResults';

const mapStateToProps = (state: StoreState) => {
  return {
    resultItems: getCustomers(state),
  };
};

export default connect(mapStateToProps)(SearchLandingResults);
