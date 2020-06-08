import React, {Fragment, useState} from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import DrawerItem from './DrawerItem'

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

export default function ListSpace ({ list, businesses, recommendations, business_listings }) {
  const [drawerState, setDrawer] = useState(true)
  
  const classes = useStyles();
  
  const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const toggleDrawer = () => {
    setDrawer(prev => !prev)
  }

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: business_listings[index].upvotes - business_listings[index].downvotes}
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
        open={drawerState}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {businesses.map((business, index) => (
              <DrawerItem 
              business={business}
              upvotes={business_listings[index].upvotes}
              downvotes={business_listings[index].downvotes}
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
          bubbleClickFun={(label) => toggleDrawer()}
          valueFont={{color: 'none'}}
        />
      </main>
      <button onClick={toggleDrawer}>toggle drawer</button>
    </>
  )
}

{/* <ul>{businesses.map((business, index) =>
  <Circle
    website={business.website}
    name={business.name}
    because={recommendations[index].because}
    upvotes={business_listings[index].upvotes}
    downvotes={business_listings[index].downvotes}>
  </Circle>
)}</ul> */}