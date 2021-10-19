import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/Search.css";

function Search({ setSearchResults, setHasSearched }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
    setHasSearched(true);
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(event) => setValue(event.target.value)}
          data-testid="search__input"
        />
        <button
          type="submit"
          className="search-button"
          data-testid="search__button">
          Go!
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
