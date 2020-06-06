import React from 'react';
import './App.css';
import Nav from './Nav';
import List from './List';

import BubbleChart from '@weknow/react-bubble-chart-d3';

const list = {
  id: 1,
  location: "Montreal, QC",
  name: "Black Owned MTL Restaurants",
  created_at: "2020-06-06T17:24:29.293Z",
  updated_at: "2020-06-06T17:24:29.293Z",
  description: "Support local black owned businesses! Where possible, order directly with restaurants and not via UberEats, SkipTheDishes, etc, to ensure restaurants receive as much money as possible."
  }

function App() {
  return (
    <div className="App">
      <Nav name={list.name} location={list.location}></Nav>

    <List description={list.description}/>
    </div>
  );
}

export default App;

/* <h1 className="App-intro">Any recommendations for jeans in Montreal?</h1>
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
        /> */