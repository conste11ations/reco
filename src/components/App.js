import React, { useEffect, useReducer } from 'react';
import './App.css';
import Nav from './Nav';
import ListSpace from './List';
import formattedFixtures from '../formattedFixtures.js';
import Search from './Search';
import axios from 'axios'

const SET_LIST = "SET_LIST";

function reducer(state, action){
  if (action.type === SET_LIST) {
    const result = { 
      list: action.data.list, 
      recommendations: action.data.recommendations, 
      businesses: action.data.businesses, 
      comments: action.data.comments }
    return result;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    axios.get(`/api/lists/1`)
    .then(res => {
      const list = res.data[0]
      const recommendations = res.data[1]
      const businesses = res.data[2]
      const comments = res.data[3]
      dispatch({type: SET_LIST, 
        data: {list, recommendations, businesses, comments}})
    },
    (error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      {state.list ? <Nav name={state.list.name} location={state.list.location} /> : 'LOADING'}

      {state.recommendations ? <ListSpace
        description={state.list.description}
        businesses={state.businesses}
        recommendations={state.recommendations}
        comments={state.comments}/> : 'LOADING'}
    </div>
  );
}

export default App;

// {
//   list: {},
//   recommendations: [],
//   businesses: [],
//   comments: []
// }