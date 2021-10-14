import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return null;
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
                alt="space-pic"
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
