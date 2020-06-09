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
  drawer: {
    zIndex: 900
  },
  drawerPaper: {
    zIndex: 900
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ListSpace ({ businesses, recommendations, comments }) {
  const [drawerState, setDrawer] = useState(false)
  
  const classes = useStyles();
  
  const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const toggleDrawer = () => {
    setDrawer(prev => !prev)
  }

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: recommendations[index].upvotes - recommendations[index].downvotes}
    ))

  return (
    <>
      <ListsDrawer 
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
          bubbleClickFun={(label) => toggleDrawer()}
          valueFont={{color: 'none'}}
        />
      </main>
      <RecommendationDrawer
      drawerState={drawerState}
      // CLICK WILL DESIGNATE WHICH RECO and BUSINESS
      recommendation={recommendations[0]}
      business={businesses[0]}
      // NEED TO FILTER COMMENTS FOR GIVEN BUSINESS
      comments={comments}/>
      {/* <button onClick={toggleDrawer}>toggle drawer</button> */}
    </>
  )
}