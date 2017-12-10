import * as React from 'react';
import './SearchLanding.css';
import SearchLandingResults from './SearchLandingResults';
import Customer from '../../models/Customer';

export interface SearchLandingProps {
  resultItems: Customer[];
  fetchCustomersByCompany: (searchTerm: string) => void;
  setCurrentCustomer: (customer: Customer) => void;
}

const SearchLanding = (props: SearchLandingProps) => {
  const fetchResults = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const searchInput = document.getElementsByClassName('search-landing--input')[0] as HTMLInputElement;
    const searchTerm = searchInput.value;

    props.fetchCustomersByCompany(searchTerm);
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const searchTerm = evt.currentTarget.value;

    switch (evt.key) {
      case 'Enter':
        props.fetchCustomersByCompany(searchTerm);
        break;
      default:
    }
  };

  return (
    <div className="search-landing">
      <img
        className="search-image"
        width="40px"
        height="80px"
        src={require('./magnifying-glass.svg')}
        alt="Magnifying Glass"
      />
      <input className="search-landing--input" type="text" onKeyUp={handleKeyUp} />
      <button className="search-landing--confirm" onClick={fetchResults}>Go!</button>
      <div className="search-landing--results">
        <SearchLandingResults resultItems={props.resultItems} onSelectCustomer={props.setCurrentCustomer}/>
      </div>
    </div>
  );
};

export default SearchLanding;
