import * as React from 'react';
import Customer from '../../models/Customer';
import './SearchLandingResults.css';

const SearchLandingResults = (props: {
  resultItems: Customer[],
  onSelectCustomer: (customer: Customer) => void; // Should this be passed a generic as the argument?
}) => {
  const onSelect = (evt: React.MouseEvent<HTMLLIElement>) => {
    let resultIndex = evt.currentTarget.getAttribute('data-result-index') as any;
    const result = props.resultItems[resultIndex];
    props.onSelectCustomer(result);
  };

  const results = props.resultItems.map((result, index) => {
    const colorClass = (index % 2 === 1) ? 'alt-bg' : 'primary-bg';
    return (
      <li
        key={index}
        className={'search-landing-results--item ' + colorClass}
        onClick={onSelect}
        data-result-index={index}
      >
        {result.companyName}
      </li>
    );
  });

  return (
    <ul className="search-landing-results">
      {results}
    </ul>
  );
};

export default SearchLandingResults;
