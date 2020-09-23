import React, { useState } from 'react';
import './App.css';
import USAMap from "react-usa-map";

function App() {
  const [mapConfig, setMapConfig] = useState({});

  const mapHandler = (event) => {
    const state = event.target.dataset.name;
    console.log("Clicked on " + state);

    const config = {};
    config[state] = { fill: "navy" };

    setMapConfig(config);
  };


  return (
    <div className="App">
      <h1>react-usa-map</h1>
      <USAMap customize={mapConfig} onClick={mapHandler} />
      <p>More information: <a href="http://github.com/gabidavila/react-usa-map">GitHub</a></p>
    </div>
  );
}

export default App;
