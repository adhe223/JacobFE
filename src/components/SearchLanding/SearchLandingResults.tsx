import * as React from 'react';
import Customer from '../../models/Customer';
import './SearchLandingResults.css';

const SearchLandingResults = (props: {
  resultItems: Customer[],
}) => {
  const results = props.resultItems.map((result, index) => (
    <li key={index} className="search-landing-results--item">
      {result.companyName}
    </li>
  ));

  return (
    <ul className="search-landing-results">
      {results}
    </ul>
  );
};

export default SearchLandingResults;
