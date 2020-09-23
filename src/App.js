import React, { useState } from 'react';
import './App.css';
import USAMap from "react-usa-map";

function App() {
  const [mapConfig, setMapConfig] = useState({});

  // next click event should reset map
  const [mapReset, setMapReset] = useState(false);
  

  const mapHandler = (event) => {
    const state = event.target.dataset.name;

    const config = {}
    config[state] = { fill: "navy" };

    console.log(config);
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
