import React from 'react';
import './App.css';
import Nav from './Nav';
import ListSpace from './List';
import { list, businesses, business_listings, recommendations } from '../fixtures';
import Search from './Search';


function App() {
  return (
    <div className="App">
      <Nav name={list.name} location={list.location} ></Nav>

      <ListSpace
        description={list.description}
        businesses={businesses}
        business_listings={business_listings}
        recommendations={recommendations} />
    </div>
  );
}

export default App;