import React, { useState } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'
import useVisualMode from '../../hooks/useVisualMode';
import Circle from '../Circle'
import CommentForm from './CommentForm'

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

export default function ListSpace ({ drawerState, setDrawer, mode, transition, state, dispatch }) {

  const classes = useStyles();

  const toggleRecoDrawer = () => {
    setDrawer(prev => ({...prev, open: !prev.open}))
  }
  
  const findIndexByName = (businesses, label) => {
    const result = businesses.findIndex((business) => business.name === label)
    return result
  }

  const bubbles = state.businesses.map((business, index) => (
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: state.recommendations[index].upvotes - state.recommendations[index].downvotes}
    ))

  return (
    <>
      <ListsDrawer 
        state={state}
        toggleRecoDrawer={toggleRecoDrawer}
        setRecoDrawer={setDrawer}
        recoDrawerState={drawerState}
        />

      {mode === BUBBLE && <Container className={classes.bubbleContainer} style={{paddingTop: '4em'}}>
      <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={false}
          graph={{zoom: .9}}
          padding={8}
          bubbleClickFun={(label) => {
            if (!drawerState.open) {toggleRecoDrawer()}
            const result = findIndexByName(state.businesses, label)
            setDrawer(prev => ({...prev, index: result}))
          }}
          valueFont={{color: 'none'}}
          />
      </Container>}

      {mode === COMMENT && <CommentForm 
      list={state.list} 
      business={state.businesses[drawerState.index]}
      transition={transition}/>}

      {state.recommendations[drawerState.index] && <RecommendationDrawer
      transition={transition}
      dispatch={dispatch}
      drawerState={drawerState}
      toggleRecoDrawer={toggleRecoDrawer}
      list={state.list}
      recommendation={state.recommendations[drawerState.index]}
      business={state.businesses[drawerState.index]}
      comments={state.comments[drawerState.index]}/>}
    </>
  )
}