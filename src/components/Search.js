import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
