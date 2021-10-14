import React from "react";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        <div className="search-results__cards">
          {results.map((image) => (
            <a href={image} target="_blank" rel="noreferrer" key={image}>
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

export default SearchResults;
