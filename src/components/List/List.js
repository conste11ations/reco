import React, { useState } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
<<<<<<< HEAD:src/components/List/List.js
import DrawerItem from './../DrawerItem'
import RecommendationCard from './../RecommendationCard'
=======
import ListsDrawer from './ListsDrawer'
import RecommendationDrawer from './RecommendationDrawer'
>>>>>>> master:src/components/List.js

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

<<<<<<< HEAD:src/components/List/List.js
export default function ListSpace({ list, businesses, recommendations, business_listings }) {
=======
export default function ListSpace ({ description, businesses, recommendations, comments }) {
>>>>>>> master:src/components/List.js
  const [drawerState, setDrawer] = useState(false)

  const classes = useStyles();

  const bubbleColours = ['#6FCF97', '#2F80ED', '#F2C94C', '#56CCF2', '#27AE60', '#007065']

  const toggleDrawer = () => {
    setDrawer(prev => !prev)
  }

  const bubbles = businesses.map((business, index) => (
<<<<<<< HEAD:src/components/List/List.js
    {
      label: business.name,
      color: bubbleColours[index % 6],
      value: business_listings[index].upvotes - business_listings[index].downvotes
    }
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
=======
    {label: business.name, 
    color: bubbleColours[index%6], 
    value: recommendations[index].upvotes - recommendations[index].downvotes}
    ))

  return (
    <>
      <ListsDrawer 
        description={description}
        recommendations={recommendations} 
        businesses={businesses}/>
>>>>>>> master:src/components/List.js
      <main className={classes.content}>
        <BubbleChart
          width={1000}
          height={900}
          fontFamily="Arial"
          data={bubbles}
          showLegend={false}
          graph={{ zoom: .9 }}
          bubbleClickFun={(label) => toggleDrawer()}
          valueFont={{ color: 'none' }}
        />
      </main>
<<<<<<< HEAD:src/components/List/List.js
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
          commentsList={["everybody raves about st v or fairmount bagels, but this spot is the real deal. If you've never been, you don't know a Montreal bagel.", "this place is awesome"]}
          business={businesses[0]} />
      </Drawer>
      <button onClick={toggleDrawer}>toggle drawer</button>
=======
      <RecommendationDrawer
      drawerState={drawerState}
      // CLICK WILL DESIGNATE WHICH RECO and BUSINESS
      recommendation={recommendations[0]}
      business={businesses[0]}
      // NEED TO FILTER COMMENTS FOR GIVEN BUSINESS
      comments={comments}/>
      {/* <button onClick={toggleDrawer}>toggle drawer</button> */}
>>>>>>> master:src/components/List.js
    </>
  )
}