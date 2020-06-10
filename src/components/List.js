import React, {Fragment, useState} from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'

// Material UI Components and Styling
import {makeStyles} from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ListSpace ({ description, businesses, recommendations, comments }) {
  const [drawerState, setDrawer] = useState({open: false, index: 0})
  
  const classes = useStyles();
  
  const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const toggleDrawer = () => {
    setDrawer(prev => ({...prev, open: !prev.open}))
  }

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: recommendations[index].upvotes - recommendations[index].downvotes}
    ))
  
  const findIndexByLabel = (businesses, label) => {
    const result = businesses.findIndex((business) => business.name === label)
    return result
  }

  return (
    <>
      <ListsDrawer 
        description={description}
        recommendations={recommendations} 
        businesses={businesses}/>
      <main className={classes.content}>
        <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={false}
          graph={{zoom: .9}}
          bubbleClickFun={(label) => {
            if (!drawerState.open) {toggleDrawer()}
            const result = findIndexByLabel(businesses, label)
            setDrawer(prev => ({...prev, index: result}))
          }}
          valueFont={{color: 'none'}}
        />
      </main>
      <RecommendationDrawer
      drawerState={drawerState.open}
      // CLICK WILL DESIGNATE WHICH RECO and BUSINESS
      recommendation={recommendations[drawerState.index]}
      business={businesses[drawerState.index]}
      // NEED TO FILTER COMMENTS FOR GIVEN BUSINESS
      comments={comments[drawerState.index]}/>
      
      <button onClick={toggleDrawer}>toggle drawer</button>
    </>
  )
}