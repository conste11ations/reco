import React, {Fragment, useState} from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import DrawerItem from './DrawerItem'
import RecommendationCard from './RecommendationCard'

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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
        open={true}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {businesses.map((business, index) => (
              <DrawerItem 
              business={business}
              upvotes={recommendations[index].upvotes}
              downvotes={recommendations[index].downvotes}
              />
            ))}
          </List>  
        </div>
      </Drawer>
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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'
        open={drawerState}>
      <Toolbar />
      <RecommendationCard 
        business={businesses[0]}/>
      </Drawer>
      <button onClick={toggleDrawer}>toggle drawer</button>
    </>
  )
}