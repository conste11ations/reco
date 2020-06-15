import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { findActiveRecoRoom, mapRecommendationRooms, findRecoRoomByBusinessAndList, findBusinessIdByLabel } from '../../helpers/recoRoomHelpers'


export default function DrawerItem({state, business, upvotes, downvotes, recoDrawerState, toggleRecoDrawer, showReco, changeRecoRoom}){

  const handleClick = () => {
    changeRecoRoom(findRecoRoomByBusinessAndList(state.recommendationRooms, state.list.id, business.id))
    if (!recoDrawerState.open) {toggleRecoDrawer()}
    showReco()
  };
  return (
    <>
      <ListItem button key={business.id} onClick={handleClick} style={{display: 'flex'}}>
        <ListItemText primary={` +${upvotes}`} style={{color: '#27AE60'}}/>
        <ListItemText primary={business.name} align='center'/>
        {downvotes === 0 && <ListItemText align='right' primary={downvotes} style={{color: '#E0E0E0'}}/>}
        {downvotes > 0 && <ListItemText align='right' primary={` -${downvotes}`} style={{color: '#FF7373'}}/>}
      </ListItem>
    </>
  )
}

