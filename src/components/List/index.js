import React, { useEffect, useState } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../../constants/index.js';
import Cable from './Cables';
import { findActiveRecoRoom, mapRecommendationRooms, findRecoRoomByBusinessAndList, findBusinessIdByLabel } from '../../helpers/recoRoomHelpers'
import { motion, AnimatePresence } from 'framer-motion'
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'
import CommentForm from './CommentForm'
import RecommendationForm from './RecommendationForm'

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  bubbleContainer: {
    maxWidth: 1000,
    display: 'flex',
    justifyContent: 'center',
  },
  commentContainer: {
    maxWidth: 1000,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10em'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

const BUBBLE = 'BUBBLE';
const COMMENT = 'COMMENT';
const RECOMMENDATION = 'RECOMMENDATION';

export default function ListSpace({ drawerState, setDrawer, mode, transition, state, dispatch, getList }) {

  useEffect(() => {
    fetch(`${API_ROOT}/recommendations`)
      .then(res => res.json())
      .then(res => dispatch({ type: 'SET_RECOMMENDATION_ROOMS', data: { recommendationRooms: res } }))
  }, [])

  const changeRecoRoom = id => {
    dispatch({ type: 'SET_ACTIVE_RECO_ROOM', data: { activeRecoRoom: id } })
  };

  // to do later
  const handleReceivedRecoRoom = response => {

    let temp = {}
    const { recoRoom } = response;
    fetch(`${API_ROOT}/recommendations`)
    .then(res => res.json())
    .then(res => temp = res)
    .then(res =>     dispatch({ type: 'ADD_RECO_ROOM', data: { recoRoom: temp[temp.length-1] } }))
  };

  const handleReceivedComment = response => {
    const { comment } = response;
    const currentRecommendationId = comment.recommendation_id - 1
    if (state.recommendationRooms[currentRecommendationId].comments.find(
      item => item.id === comment.id
    )) {
    } else {
      dispatch({ type: 'ADD_COMMENT_TO_ROOM', data: { comment } })
    }
  };

  const classes = useStyles();

  const toggleRecoDrawer = () => {
    setDrawer(prev => ({ ...prev, open: !prev.open }))
  }

  const findIndexByName = (businesses, label) => {
    const result = businesses.findIndex((business) => business.name === label)
    return result
  }

  const bubbles = state.businesses.map((business, index) => (
    {
      label: business.name,
      color: bubbleColours[index % 6],
      value: state.recommendations[index].upvotes - state.recommendations[index].downvotes
    }
  ))


  console.log("state", state)

  return (
    <>

      <ActionCableConsumer
        channel={{ channel: 'RecommendationsChannel' }}
        onReceived={handleReceivedRecoRoom}
        onConnected={e => console.log(e, "connected")}
      />

      {state.recommendationRooms.length ? (
        <Cable
          recommendationRooms={state.recommendationRooms}
          handleReceivedComment={handleReceivedComment}
        />
      ) : null}

      <ListsDrawer
        state={state}
        toggleRecoDrawer={toggleRecoDrawer}
        setRecoDrawer={setDrawer}
        recoDrawerState={drawerState}
        transition={transition}
      />
      <AnimatePresence exitBeforeEnter>
        {mode === BUBBLE && <motion.div key={1} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} ><Container className={classes.bubbleContainer} style={{ paddingTop: '4em' }}>
          <BubbleChart
            width={1000}
            height={900}
            fontFamily="Arial"
            data={bubbles}
            showLegend={false}
            graph={{ zoom: .9 }}
            padding={8}
            bubbleClickFun={(label) => {
              if (!drawerState.open) { toggleRecoDrawer() }
              const result = findIndexByName(state.businesses, label)
              setDrawer(prev => ({ ...prev, index: result }))
              // we need the id of the business that bubble is presenting and we need to plug in that id to a recommendation it belongs to
              // console.log("findBusinessId", findBusinessIdByLabel(label, state.businesses))
              // console.log("findRecoByBandL", findRecoRoomByBusinessAndList(state.recommendationRooms, state.list.id, findBusinessIdByLabel(label, state.businesses)))
              changeRecoRoom(findRecoRoomByBusinessAndList(state.recommendationRooms, state.list.id, findBusinessIdByLabel(label, state.businesses)))
            }}
            valueFont={{ color: 'none' }}
          />
        </Container></motion.div>}

        {mode === COMMENT && <motion.div key={2} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} ><CommentForm
          handleReceivedComment={handleReceivedComment}
          state={state}
          dispatch={dispatch}
          recommendation={state.recommendations[drawerState.index]}
          business={state.businesses[drawerState.index]}
          transition={transition} /></motion.div>}


        {mode === RECOMMENDATION && <motion.div key={3} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} ><RecommendationForm
          state={state}
          dispatch={dispatch}
          list={state.list}
          getList={getList}
          business={state.businesses[drawerState.index]}
          transition={transition} /></motion.div>}
      </AnimatePresence>

      {state.activeRecoRoom && <RecommendationDrawer
        handleReceivedComment={handleReceivedComment}
        state={state}
        transition={transition}
        dispatch={dispatch}
        drawerState={drawerState}
        toggleRecoDrawer={toggleRecoDrawer}
        list={state.list}
        recommendation={state.recommendations[drawerState.index]}
        business={state.businesses[drawerState.index]}
        comments={state.comments[drawerState.index]} />}
    </>
  )
}
