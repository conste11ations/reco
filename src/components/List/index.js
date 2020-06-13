import React, {useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'
import CommentForm from './CommentForm'
import RecommendationForm from './RecommendationForm'

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'

import {useParams} from "react-router-dom";

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

export default function ListSpace({ getList, drawerState, setDrawer, mode, transition, state, dispatch }) {
  let { listId } = useParams();

  useEffect(() => {
    getList(listId)
  }, [])

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

  return (
    <>
      <ListsDrawer
        state={state}
        toggleRecoDrawer={toggleRecoDrawer}
        setRecoDrawer={setDrawer}
        recoDrawerState={drawerState}
        transition={transition}
      />
      <AnimatePresence exitBeforeEnter>
      {mode === BUBBLE && <motion.div key={1} initial={{scale: 0}} animate={{ scale: 1 }} exit={{ scale: 0}} ><Container className={classes.bubbleContainer} style={{ paddingTop: '4em' }}>
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
          }}
          valueFont={{ color: 'none' }}
        />
      </Container></motion.div>}

      {mode === COMMENT && <motion.div key={2} initial={{ scale: 0}} animate={{ scale: 1 }} exit={{ scale: 0}} ><CommentForm
      state={state} 
      dispatch={dispatch}
      recommendation={state.recommendations[drawerState.index]}
      business={state.businesses[drawerState.index]}
      transition={transition}/></motion.div>}
      

      {mode === RECOMMENDATION && <motion.div key={3} initial={{ scale: 0}} animate={{ scale: 1 }} exit={{ scale: 0}} ><RecommendationForm
        list={state.list}
        business={state.businesses[drawerState.index]}
        transition={transition} /></motion.div>}
      </AnimatePresence>

      {state.recommendations[drawerState.index] && <RecommendationDrawer
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