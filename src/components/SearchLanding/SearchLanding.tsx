import * as React from 'react';
import './SearchLanding.css';
import SearchLandingResults from './SearchLandingResultsContainer';
import Customer from '../../models/Customer';

export interface SearchLandingState {
  searchTerm: string;
  searchResults: Customer[];
}

export default class SearchLanding extends React.Component<{
  fetchCustomersByCompany: (searchTerm: string) => void,
}, SearchLandingState> {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      searchResults: [],
    };
  }

  render() {
    return (
      <div className="search-landing">
        <img
          className="search-image"
          width="40px"
          height="80px"
          src={require('./magnifying-glass.svg')}
          alt="Magnifying Glass"
        />
        <input type="text" onChange={this.onSearchChange} />
        <SearchLandingResults />
      </div>
    );
  }

  private onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = evt.currentTarget.value;
    this.setState({
      searchTerm,
    });
    this.fetchResults(searchTerm);
  }

  private fetchResults(searchTerm: string) {
    this.props.fetchCustomersByCompany(searchTerm);
  }
}
