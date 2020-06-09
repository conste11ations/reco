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
    Promise.all([
      Promise.resolve(axios.get('http://localhost:3001/api/lists')),
      // Promise.resolve(axios.get('/api/recommendations')),
      // Promise.resolve(axios.get('/api/businesses')),
      // Promise.resolve(axios.get('/api/comments'))
    ]
    )
    .then(all => {
      console.log(all[0].data)
      // console.log(all[1].data)
      // console.log(all[2].data)
      // console.log(all[3].data)
      dispatch({type: SET_LIST, data: formattedFixtures})
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