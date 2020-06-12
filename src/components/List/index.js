import React, { useState } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1000,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

export default function ListSpace ({ state, dispatch }) {
  const [drawerState, setDrawer] = useState({open: false, index: 0})

  const classes = useStyles();

  const toggleRecoDrawer = () => {
    setDrawer(prev => ({...prev, open: !prev.open}))
  }
  
  const findIndexByName = (businesses, label) => {
    const result = state.businesses.findIndex((business) => business.name === label)
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
      <Container className={classes.container}>
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
      </Container>
      {state.recommendations[drawerState.index] && <RecommendationDrawer
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