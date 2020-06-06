import React from 'react';
import './App.css';

import BubbleChart from '@weknow/react-bubble-chart-d3';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className="App-intro">Any recommendations for jeans in Montreal?</h1>
        <br />
        <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={[
            { label: 'CRM', color: 'green', value: 1 },
            { label: 'API', color: 'green', value: 100 },
            { label: 'Data', value: 1 },
            { label: 'Commerce', value: 1 },
            { label: 'AI', value: 3 },
            { label: 'Management', value: 5 },
            { label: 'Testing', value: 6 },
            { label: 'Mobile', value: 9 },
            { label: 'Conversion', value: 9 },
            { label: 'Misc', value: 21 },
            { label: 'Databases', value: 22 },
            { label: 'DevOps', value: 22 },
            { label: 'Javascript', value: 23 },
            { label: 'Languages / Frameworks', value: 25 },
            { label: 'Front End', value: 26 },
            { label: 'Content', value: 26 },
            { label: 'CRM', color: 'green', value: 1 },
            { label: 'API', value: 1 },
            { label: 'Data', value: 1 },
            { label: 'Commerce', value: 1 },
            { label: 'AI', value: 3 },
            { label: 'Management', value: 5 },
            { label: 'Testing', value: 6 },
            { label: 'Mobile', value: 9 },
            { label: 'Conversion', value: 9 },
            { label: 'Misc', value: 21 },
            { label: 'Databases', value: 22 },
            { label: 'DevOps', value: 22 },
            { label: 'Javascript', value: 23 },
            { label: 'Languages / Frameworks', value: 25 },
            { label: 'Front End', value: 26 },
            { label: 'Content', value: 26 },
          ]}
        />
    </div>
  );
}

export default App;
