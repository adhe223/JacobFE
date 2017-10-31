import * as React from 'react';
import './SearchLanding.css';

const SearchLanding = (
  props: {
    searchTerm: string,
    image: string,
  }
) => {
  return (
    <div className="search-landing">
      <img className="search-image" width="40px" height="80px" src={props.image} alt="Magnifying Glass" />
      <div className="search-text" contentEditable={true}>{props.searchTerm}</div>
    </div>
  );
};

export default SearchLanding;