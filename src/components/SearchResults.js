import React from "react";
import "../styles/SearchResults.css";

function SearchResults() {
  return (
    <>
      <p>Search Results</p>
      <div className="search-results__cards">
        <img
          className="card-image"
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="space-pic"
          data-testid="image"
        />
      </div>
    </>
  );
}

export default SearchResults;
