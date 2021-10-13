import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

function Search() {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const images = await getImages(value);
    return images;
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
