import React, {Fragment, useState} from 'react';

// Material UI Components and Styling
import listThemes from '../../constants/ListThemes';

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
      <ListItem button key={business.id} onClick={handleClick} style={{display: 'flex'}}>
        <ListItemText primary={business.name}/>
        <ListItemText align='right' primary={` +${upvotes}`} style={{color: '#27AE60'}}/>
        {downvotes === 0 && <ListItemText align='right' primary={downvotes} style={{color: '#E0E0E0'}}/>}
        {downvotes > 0 && <ListItemText align='right' primary={` -${downvotes}`} style={{color: '#FF7373'}}/>}
      </ListItem>
    </>
  )
}
