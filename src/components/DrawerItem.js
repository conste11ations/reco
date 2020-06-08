import React, {Fragment, useState} from 'react';

// Material UI Components and Styling
import listThemes from '../constants/ListThemes';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function DrawerItem({business, upvotes, downvotes}){
  const [open, setOpen] = useState(false);

  const classes = listThemes();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button key={business.id} onClick={handleClick}>
        <ListItemText primary={`${business.name} (${upvotes - downvotes})`}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary={business.website} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ArrowUpwardIcon/>
            </ListItemIcon>
             <ListItemText primary={upvotes}/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ArrowDownwardIcon/>
            </ListItemIcon>
             <ListItemText primary={downvotes}/>
          </ListItem>
        </List>
        <Divider />
      </Collapse>
    </>
  )
}

