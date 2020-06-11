import React, { useEffect, useReducer } from 'react';
import './App.css';
import Nav from './Nav';
import ListSpace from './List/';
import Main from './Main';
import { New as NewList } from './List/New';
import formattedFixtures from '../formattedFixtures.js';
import useVisualMode from "../hooks/useVisualMode";
import axios from 'axios'

const SET_LIST = "SET_LIST";

function reducer(state, action) {
  if (action.type === SET_LIST) {
    const result = {
      list: action.data.list,
      recommendations: action.data.recommendations,
      businesses: action.data.businesses,
      comments: action.data.comments
    }
    return result;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {})
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const MAIN = "MAIN";

  // rudimentary toggle (set to true or false) to see different modes
  const { mode, transition, back } = useVisualMode(
    // true ? SHOW : CREATE
    MAIN
  );

  // i wonder if there is a better way to implement this?
  function transitionToCreate() {
    transition(CREATE);
  }

  function transitionToShow() {
    transition(SHOW);
  }

  function transitionToMain() {
    transition(MAIN);
  }

  function getList(id) {
    axios.get(`/api/lists/${id}`)
      .then(res => {
        const list = res.data[0]
        const recommendations = res.data[1]
        const businesses = res.data[2]
        const comments = res.data[3]
        dispatch({
          type: SET_LIST,
          data: { list, recommendations, businesses, comments }
        })
      },
        (error) => {
          console.log(error)
        })
  }

  function createList(name, location, description) {
    axios.post(`/api/lists/`,
      {
        name,
        location,
        description
      })
      .then(res => {
        getList(res.data.id);
        transitionToShow();
      },
        (error) => {
          console.log(error)
        })
  }

  useEffect(() => {
    getList(1)
  }, [])

  return (
    <div className="App">
      {mode !== MAIN && <Nav
        name={state.list.name}
        location={state.list.location}
        transitionToCreate={transitionToCreate}
        transitionToShow={transitionToShow} 
        transitionToMain={transitionToMain} 
        getList={getList} />}

      {mode === MAIN && <Main></Main>}

      {mode === SHOW && state.recommendations ? <ListSpace
        list={state.list}
        businesses={state.businesses}
        recommendations={state.recommendations}
        comments={state.comments} /> : 'LOADING'}

      {/* FOR EDIT OF LIST FUNCTIONALITY {mode === CREATE && <NewList onSave={(name, location, description) => createList(name, location, description)}></NewList>} */}
      {mode === CREATE && <NewList onSave={createList} getList={getList}></NewList>}
      <button onClick={() => getList(2)}>GET_LIST 2</button>
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