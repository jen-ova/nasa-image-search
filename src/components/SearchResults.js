import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

function SearchResults({ results, hasSearched }) {
  if (results.length === 0 && hasSearched === false) {
    return null;
  }
  if (results.length === 0 && hasSearched === true) {
    return (
      <p className="search-results__no-results">
        Sorry, no results exist for this search! Please try again.
      </p>
    );
  } else {
    return (
      <>
        <div className="search-results__cards">
          {results.map((image, index) => (
            <a href={image} target="_blank" rel="noreferrer" key={index}>
              <img
                key={image}
                className="card-image"
                src={image}
                alt={image}
                data-testid="image"
              />
            </a>
          ))}
        </div>
      </>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
