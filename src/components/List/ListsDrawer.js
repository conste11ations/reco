import React from 'react';
import useVisualMode from "../../hooks/useVisualMode";
import {sortAlphabetical, sortUpVotes, sortDownVotes, sortRecentRecos} from '../../helpers/sorters.js'
import DrawerCard from './DrawerCard'
import DrawerItem from './DrawerItem'

// Material UI Components and Styling
import {makeStyles} from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  drawer: {
    zIndex: 900
  },
  drawerPaper: {
    zIndex: 900
  },
  drawerContainer: {
    maxWidth: 340,
  }
}));

const DEFAULT = 'DEFAULT';
const AZ = 'AZ';
const UPVOTES = 'UPVOTES';
const DOWNVOTES = 'DOWNVOTES';
const RECENTLY_RECOED = 'RECENTLY_RECOED';

export default function ListDrawer({list, businesses, recommendations, comments, recoDrawerState, toggleRecoDrawer, setRecoDrawer }) {
  const {mode, transition, back} = useVisualMode(DEFAULT)

  const businessList = businesses.map((business, index) => (
    <DrawerItem
    key={business.id} 
    business={business}
    comments={comments[index]}
    upvotes={recommendations[index].upvotes}
    downvotes={recommendations[index].downvotes}
    showReco={() => setRecoDrawer(prev => ({...prev, index}))}
    recoDrawerState={recoDrawerState}
    toggleRecoDrawer={toggleRecoDrawer}
    />
  ))

  const classes = useStyles();
  return (
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
        <DrawerCard list={list}></DrawerCard>
        <List>
          <ListItem style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <Typography style={{marginBottom: '1em'}}>order by:</Typography>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transition(AZ)}>a-z</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transition(UPVOTES)}>most upvotes</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transition(DOWNVOTES)}>least downvotes</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transition(RECENTLY_RECOED)}>first reco'd</Button>
          </ListItem>
          {/* ORDER BY - alphabetical,  */}
          {mode === DEFAULT && businessList}
          {mode === AZ && sortAlphabetical(businessList)}
          {mode === UPVOTES && sortUpVotes(businessList)}
          {mode === DOWNVOTES && sortDownVotes(businessList)}
          {mode === RECENTLY_RECOED && sortRecentRecos(businessList, comments)}
        </List>  
      </div>
    </Drawer>
  )
}