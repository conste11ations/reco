/* eslint-disable default-case */
import React, { useReducer, useState } from 'react';
import './App.css';
import Nav from './Nav';
import ListSpace from './List/';
import Main from './Main/Main';
import { New as NewList } from './List/New';
import useVisualMode from "../hooks/useVisualMode";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// reducer dispatches
const SET_LIST = "SET_LIST";
const VOTE = 'VOTE';
const CREATE_COMMENT = 'CREATE_COMMENT';
const CREATE_RECOMMENDATION = 'CREATE_RECOMMENDATION';
const CREATE_BUSINESS = 'CREATE_BUSINESS';

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
    case CREATE_COMMENT: {
      const listsOfComments = [...state.comments]
      const result = listsOfComments.map(comments => {
        return comments[0].recommendation_id === action.data.recoID ? [action.data.comment, ...comments]
        : comments
      })
      return {...state, comments: [...result]}
    }
    case CREATE_RECOMMENDATION: {
      const recos = [...state.recommendations]
      console.log(recos)
      
      return {...state}
    }
    case CREATE_BUSINESS: {
      const businesses = [...state.businesses]
      console.log(businesses)
      return {...state}
    }

    default: throw new Error('not a valid dispatch type')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    list: {},
    businesses: [],
    recommendations: [],
    comments: []
  })
  const [resultId, setResultId] = useState(null);
  const SHOW = "SHOW";
  const CREATE_LIST = "CREATE_LIST";
  const MAIN = "MAIN";

  const { mode, transition, back } = useVisualMode(MAIN);

  const BUBBLE = 'BUBBLE';
  const COMMENT = 'COMMENT';
  const RECOMMENDATION = 'RECOMMENDATION'

  const { mode: listMode, transition: listTransition } = useVisualMode(BUBBLE)

  const [drawerState, setDrawer] = useState({ open: false, index: 0 })

  function resetList() {
    listTransition(BUBBLE)
    setDrawer({ open: false, index: 0 })
    transition(SHOW);
  }

  function transitionToCreateList() {
    transition(CREATE_LIST);
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
      },
        (error) => {
          console.log(error)
        }).then(res => { transitionToShow() })

  }

  return (
  <Router>
    <div className="App">
      <Switch>        
        
        <Route path='/lists/new'>
          <Nav
              name={state.list.name}
              location={state.list.location}
              resultId={resultId}
              setResultId={setResultId}
              transitionToCreateList={transitionToCreateList}
              transitionToMain={transitionToMain}
              getList={getList} />
          <NewList onSave={createList} getList={getList}></NewList>
        </Route>

        <Route path='/lists/:listId'>
          <>
            <Nav
            name={state.list.name}
            location={state.list.location}
            resultId={resultId}
            setResultId={setResultId}
            transitionToCreateList={transitionToCreateList}
            transitionToMain={transitionToMain}
            getList={getList} />
      
          <ListSpace
            getList={getList}
            drawerState={drawerState}
            setDrawer={setDrawer}
            mode={listMode}
            transition={listTransition}
            dispatch={dispatch}
            state={state} />
          </>
        </Route>

      {/* FOR EDIT OF LIST FUNCTIONALITY {mode === CREATE && <NewList onSave={(name, location, description) => createList(name, location, description)}></NewList>} */}

          <Route path="/">
            <Main
              resultId={resultId}
              setResultId={setResultId}
              getList={getList}
              transitionToShow={transitionToShow}
              transitionToCreateList={transitionToCreateList}></Main>
          </Route> 
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

