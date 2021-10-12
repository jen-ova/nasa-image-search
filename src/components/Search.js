import React, { useState } from "react";
import "../styles/Search.css";

function Search() {
  const [value, setValue] = useState("");

  return (
    <>
      <form>
        <input
          className="search-input"
          type="text"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
