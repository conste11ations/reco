/* eslint-disable default-case */
import React, { useReducer, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'
import './App.css';
import Nav from './Nav';
import ListSpace from './List/';
import Main from './Main/Main';
import { New as NewList } from './List/New';
import useVisualMode from "../hooks/useVisualMode";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  bubbleContainer: {
    maxWidth: 1000,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// reducer dispatches
const SET_LIST = "SET_LIST";
const VOTE = 'VOTE';
const CREATE_COMMENT = 'CREATE_COMMENT';
const SET_RECOMMENDATION_ROOMS = 'SET_RECOMMENDATION_ROOMS'
const SET_ACTIVE_RECO_ROOM = 'SET_ACTIVE_RECO_ROOM'
const ADD_RECO_ROOM = 'ADD_RECO_ROOM'
const ADD_COMMENT_TO_ROOM = 'ADD_COMMENT_TO_ROOM'

function reducer(state, action) {
  switch (action.type) {
    case SET_LIST: {
      const result = {
        list: action.data.list,
        recommendations: action.data.recommendations,
        businesses: action.data.businesses,
        comments: action.data.comments
      }
      return {...state, list: result.list, recommendations: result.recommendations, businesses: result.businesses, comments: result.comments};
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
      return { ...state, comments: [...result] }
    }
    case SET_RECOMMENDATION_ROOMS: {
      return { ...state, recommendationRooms: action.data.recommendationRooms }
    }
    case SET_ACTIVE_RECO_ROOM: {
      return { ...state, activeRecoRoom: action.data.activeRecoRoom }
    }
    case ADD_RECO_ROOM: {
      return { ...state, recommendationRooms: [...state.recommendationRooms, action.data.recoRoom] }
    }
    case ADD_COMMENT_TO_ROOM: {
      const recommendationRooms = [...state.recommendationRooms];
      const recoRoom = recommendationRooms.find(
        recoRoom => recoRoom.id === action.data.comment.recommendation_id
      );
      recoRoom.comments = [...recoRoom.comments, action.data.comment];
      return { ...state, recommendationRooms: [...state.recommendationRooms, recoRoom] }
    }
    default: throw new Error('not a valid dispatch type')
  }
}

function App() {

  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, {
    list: {},
    businesses: [],
    recommendations: [],
    comments: [],
    recommendationRooms: [],
    // activeRecoRoom: {}
  })

  const [resultId, setResultId] = useState(null);
  const SHOW = "SHOW";
  const CREATE_LIST = "CREATE_LIST";
  const MAIN = "MAIN";

  const { mode, transition, back } = useVisualMode(MAIN);

  const BUBBLE = 'BUBBLE';
  // const COMMENT = 'COMMENT';
  // const RECOMMENDATION = 'RECOMMENDATION'

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
    <div className="App">
      {mode !== MAIN && state.list && <Nav
        name={state.list.name}
        location={state.list.location}
        resultId={resultId}
        setResultId={setResultId}
        transitionToCreateList={transitionToCreateList}
        transitionToMain={transitionToMain}
        getList={getList} />}

      {mode === MAIN && state.list && <Main
        resultId={resultId}
        setResultId={setResultId}
        getList={getList}
        resetList={resetList}
        transitionToShow={transitionToShow}
        transitionToCreateList={transitionToCreateList}></Main>}

      {mode === SHOW && state.recommendations && <ListSpace
        drawerState={drawerState}
        setDrawer={setDrawer}
        mode={listMode}
        transition={listTransition}
        dispatch={dispatch}
        getList={getList}
        state={state} />}

      <AnimatePresence exitBeforeEnter>
        {mode === CREATE_LIST &&
          <motion.div key={1} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} >
            <Container className={classes.bubbleContainer} style={{ paddingTop: '4em' }}>
              <NewList onSave={createList} getList={getList}></NewList>
            </Container>
          </motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default App;

