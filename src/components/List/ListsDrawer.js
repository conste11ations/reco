import React from 'react';
import useVisualMode from "../../hooks/useVisualMode";
import DrawerCard from './DrawerCard'
import DrawerItem from './DrawerItem'
import {sortAlphabetical, sortUpVotes, sortDownVotes, sortRecentRecos} from '../../helpers/sorters.js'

// Material UI Components and Styling
import {makeStyles} from "@material-ui/core/styles";
import {Drawer, Toolbar, List, ListItem, Button, Typography} from '@material-ui/core';

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

export default function ListDrawer({state, recoDrawerState, toggleRecoDrawer, setRecoDrawer, transition, changeRecoRoom }) {
  const {mode: businessListMode, transition: transitionBusinesses} = useVisualMode(DEFAULT)

  const businessList = state.businesses.map((business, index) => (
    <DrawerItem
    key={business.id} 
    state={state}
    business={business}
    comments={state.comments[index]}
    upvotes={state.recommendations[index].upvotes}
    downvotes={state.recommendations[index].downvotes}
    showReco={() => setRecoDrawer(prev => ({...prev, index}))}
    recoDrawerState={recoDrawerState}
    toggleRecoDrawer={toggleRecoDrawer}
    changeRecoRoom={changeRecoRoom}
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
        <DrawerCard list={state.list} transition={transition}></DrawerCard>
        <List>
          <ListItem style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <Typography style={{marginBottom: '1em'}}>order by:</Typography>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transitionBusinesses(AZ)}>a-z</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transitionBusinesses(UPVOTES)}>most upvotes</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transitionBusinesses(DOWNVOTES)}>least downvotes</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => transitionBusinesses(RECENTLY_RECOED)}>recently reco'd</Button>
          </ListItem>
          {/* ORDER BY - alphabetical,  */}
          {businessListMode === DEFAULT && businessList}
          {businessListMode === AZ && sortAlphabetical(businessList)}
          {businessListMode === UPVOTES && sortUpVotes(businessList)}
          {businessListMode === DOWNVOTES && sortDownVotes(businessList)}
          {businessListMode === RECENTLY_RECOED && sortRecentRecos(businessList, state.comments)}
        </List>  
      </div>
    </Drawer>
  )
}