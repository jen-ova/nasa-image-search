import React from "react";
import Search from "./Search";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASAlogo"
      />
      <Search className="search" />
    </div>
  );
}

export default App;
