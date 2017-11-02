import * as React from 'react';
import Customer from '../../models/Customer';

const SearchLandingResults = (props: {
  resultItems: Customer[],
}) => {
  const results = props.resultItems.map((result, index) => (
    <div key={index} className="search-landing-results-item">
      {result.companyName}
    </div>
  ));

  return (
    <div className="search-landing-results">
      {results}
    </div>
  );
};

export default SearchLandingResults;
