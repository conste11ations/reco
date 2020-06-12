/* eslint-disable default-case */
import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import Nav from './Nav';
import ListSpace from './List/';
import Main from './Main/Main';
import { New as NewList } from './List/New';
import useVisualMode from "../hooks/useVisualMode";
import axios from 'axios'

// reducer dispatches
const SET_LIST = "SET_LIST";
const VOTE = 'VOTE';

function reducer(state, action) {
  switch (action.type) {
    case SET_LIST: {
      const result = {
        list: action.data.list,
        recommendations: action.data.recommendations,
        businesses: action.data.businesses,
        comments: action.data.comments
      }
      return result;
    }
    case VOTE: {
      const recos = [...state.recommendations]
      const result = recos.map(reco => {
        return reco.id === action.data.id ? action.data
          : reco
      })
      return { ...state, recommendations: [...result] }
    }
    default: throw new Error('not a valid dispatch type')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {})
  const [resultId, setResultId] = useState(null);
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const MAIN = "MAIN";

  const { mode, transition, back } = useVisualMode(MAIN);

  const BUBBLE = 'BUBBLE';
  const COMMENT = 'COMMENT';

  const { mode: listMode, transition: listTransition } = useVisualMode(BUBBLE)

  const [drawerState, setDrawer] = useState({ open: false, index: 0 })

  function resetList() {
    listTransition(BUBBLE)
    setDrawer({ open: false, index: 0 })
    transition(SHOW);
  }

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
        }).then(res => { transitionToShow() })
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
      {mode !== MAIN && state.list && <Nav
        name={state.list.name}
        location={state.list.location}
        resultId={resultId}
        setResultId={setResultId}
        transitionToCreate={transitionToCreate}
        transitionToShow={transitionToShow}
        transitionToMain={transitionToMain}
        getList={getList} />}

      {mode === MAIN && state.list && <Main
        name={state.list.name}
        location={state.list.location}
        resultId={resultId}
        setResultId={setResultId}
        getList={getList}
        transitionToShow={transitionToShow}
        transitionToCreate={transitionToCreate}></Main>}

      {mode === SHOW && state.recommendations && <ListSpace
        drawerState={drawerState}
        setDrawer={setDrawer}
        mode={listMode}
        transition={listTransition}
        dispatch={dispatch}
        state={state} />}

      {/* FOR EDIT OF LIST FUNCTIONALITY {mode === CREATE && <NewList onSave={(name, location, description) => createList(name, location, description)}></NewList>} */}
      {mode === CREATE && <NewList onSave={createList} getList={getList}></NewList>}
    </div>
  );
}

export default App;

