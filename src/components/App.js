import React from 'react';
import './App.css';
import Nav from './Nav';
import List from './List';
import { list, businesses, business_listings, recommendations } from '../fixtures';
import Search from './Search';


function App() {
  return (
    <div className="App">
      <Nav name={list.name} location={list.location} ></Nav>

      <List
        description={list.description}
        businesses={businesses}
        business_listings={business_listings}
        recommendations={recommendations} />
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