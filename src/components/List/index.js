import React, { useState } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'

// Material UI Components and Styling
import { makeStyles } from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ListSpace ({ list, businesses, recommendations, comments }) {
  const [drawerState, setDrawer] = useState({open: false, index: 0})

  const classes = useStyles();

  const toggleRecoDrawer = () => {
    setDrawer(prev => ({...prev, open: !prev.open}))
  }
  
  const findIndexByName = (businesses, label) => {
    const result = businesses.findIndex((business) => business.name === label)
    return result
  }
  
  const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: recommendations[index].upvotes - recommendations[index].downvotes}
    ))

  return (
    <>
      <ListsDrawer 
        list={list}
        recommendations={recommendations} 
        businesses={businesses}
        toggleRecoDrawer={toggleRecoDrawer}
        setRecoDrawer={setDrawer}
        recoDrawerState={drawerState}
        />
      <main className={classes.content}>
        <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={false}
          graph={{zoom: .9}}
          bubbleClickFun={(label) => {
            if (!drawerState.open) {toggleRecoDrawer()}
            const result = findIndexByName(businesses, label)
            setDrawer(prev => ({...prev, index: result}))
          }}
          valueFont={{color: 'none'}}
        />
      </main>
      <RecommendationDrawer
      drawerState={drawerState.open}
      recommendation={recommendations[drawerState.index]}
      business={businesses[drawerState.index]}
      comments={comments[drawerState.index]}/>
      
      <button onClick={toggleRecoDrawer}>toggle drawer</button>
    </>
  )
}