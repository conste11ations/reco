import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import ListSpace from './List';
import { list, businesses, recommendations, comments } from '../fixtures';

function App() {

  return (
    <div className="App">
      <Nav name={list.name} location={list.location} ></Nav>
      <ListSpace
        description={list.description}
        businesses={businesses}
        business_listings={recommendations}
        recommendations={comments} />
    </div>
  );
}

export default App;