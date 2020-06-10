import React, {Fragment, useState} from 'react';

// Material UI Components and Styling
import listThemes from '../constants/ListThemes';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function DrawerItem({business, upvotes, downvotes, recoDrawerState, toggleRecoDrawer, showReco}){
  // const [open, setOpen] = useState(false);

  const classes = listThemes();

  const handleClick = () => {
    if (!recoDrawerState.open) {toggleRecoDrawer()}
    showReco()
  };
  return (
    <>
      <ListItem button key={business.id} onClick={handleClick}>
        <ListItemText primary={business.name}/>
        <ListItemText align='right' primary={` +${upvotes}`}/>
        <ListItemText align='right' primary={` -${downvotes}`}/>
      </ListItem>
    </>
  )
}

