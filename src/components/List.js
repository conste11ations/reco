import React, {Fragment, useState} from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 900
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ListSpace ({ list, businesses, recommendations, business_listings }) {
  const [drawerState, setDrawer] = useState(false)
  const classes = useStyles();
  const colorOptions = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const toggleDrawer = () => {
    setDrawer(prev => !prev)
  }

  const bubbles = businesses.map((business, index) => (
    {label: business.name, 
    color: colorOptions[index%6], 
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
        open={drawerState}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {businesses.map((business, index) => (
              <ListItem button key={business.id}>
                <ListItemText primary={business.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={false}
          bubbleClickFun={(label) => console.log(`our custom click functions for...${label}`)}
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