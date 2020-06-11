import React from 'react';
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
    maxWidth: 380,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

export default function ListDrawer({list, businesses, recommendations, recoDrawerState, toggleRecoDrawer, setRecoDrawer }) {

  const businessList = businesses.map((business, index) => (
    <DrawerItem
    key={business.id} 
    business={business}
    upvotes={recommendations[index].upvotes}
    downvotes={recommendations[index].downvotes}
    showReco={() => setRecoDrawer(prev => ({...prev, index}))}
    recoDrawerState={recoDrawerState}
    toggleRecoDrawer={toggleRecoDrawer}
    />
  ))

  const sortAlphabetical = () => {
    businessList.sort((a, b) => {
      if (a.props.business.name < b.props.business.name) {
        return -1;
      }
      if (a.props.business.name > b.props.business.name) {
        return 1;
      }
  
      return 0
    })
  }
  

  // businessList.sort((a, b) => {
  //   return b.props.upvotes - a.props.upvotes
  // })

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
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} onClick={() => sortAlphabetical()}>a-z</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}} >upvotes</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}}>most reco'd</Button>
            <Button color='primary' variant='contained' size='small'style={{marginBottom: '1em'}}>recently reco'd</Button>
          </ListItem>
          {/* ORDER BY - alphabetical,  */}
          {businessList}
        </List>  
      </div>
    </Drawer>
  )
}