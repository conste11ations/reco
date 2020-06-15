import React from 'react';
import RecommendationCard from './RecommendationCard'

// Material UI Components and Styling
import { makeStyles } from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

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

export default function RecommendationDrawer({ handleReceivedComment, state, transition, dispatch, drawerState, toggleRecoDrawer, recommendation, business, comments }) {

  const classes = useStyles();

  return (
    <>
      {recommendation && <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'
        open={drawerState.open}>
        <Toolbar />
        <RecommendationCard
          handleReceivedComment={handleReceivedComment}
          state={state}
          key={recommendation.id}
          transition={transition}
          dispatch={dispatch}
          drawerState={drawerState}
          toggleRecoDrawer={toggleRecoDrawer}
          recommendation={recommendation}
          business={business}
          comments={comments} />
      </Drawer>}
    </>
  )
}