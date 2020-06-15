import React, { useState } from 'react';
import axios from 'axios';
import { ActionCable } from 'react-actioncable-provider';
import { findActiveRecoRoom, mapRecommendationRooms, findRecoRoomByBusinessAndList, findBusinessIdByLabel } from '../../helpers/recoRoomHelpers'
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, List, ListItem, Link, Button } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 380
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecommendationCard({ handleReceivedComment, state, transition, dispatch, toggleRecoDrawer, list, recommendation, business, comments }) {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const upvote = (recoID) => {
    axios
      .put(`/api/recommendations/${recoID}`, { type: 'upvote' })
      .then(res => dispatch({ type: 'VOTE', data: res.data }))
      .catch(e => console.log(e))
  }

  const downvote = (recoID) => {
    axios
      .put(`/api/recommendations/${recoID}`, { type: 'downvote' })
      .then(res => dispatch({ type: 'VOTE', data: res.data }))
      .catch(e => console.log(e))
  }


  return (
    <>
      {/* <ActionCable
        channel={{ channel: 'CommentsChannel', recommendation: state.activeRecoRoom }}
        onReceived={handleReceivedComment}
      /> */}
      <List>
        <IconButton style={{ display: 'flex' }} onClick={() => toggleRecoDrawer()}>
          <HighlightOffIcon button='true' style={{ color: '#FF7373' }} />
        </IconButton>
        <Card className={classes.root} square elevation={0}>
          <CardHeader
            title={business.name}
            subheader={<Link href={`${business.website}`} target="_blank" color='secondary'>{business.website}</Link>}
          />
          <CardMedia
            className={classes.media}
            image={business.image}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* ultimately, this should be randomized, maybe also carousel?*/}
              {/* {`"${comments[0].because}"`} */}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="upvote" style={{ color: '#27AE60' }} onClick={() => upvote(recommendation.id)}>
              <ArrowUpwardIcon />
              <h4>{recommendation.upvotes}</h4>
            </IconButton>
            <IconButton aria-label="downvote" style={{ color: '#FF7373' }} onClick={() => downvote(recommendation.id)}>
              <ArrowDownwardIcon />
              <h4>{recommendation.downvotes}</h4>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{ backgroundColor: '#FFF3DD' }}>
              {/* on click, transition to show circle */}
              <Button variant='outlined' color="secondary" size='large' disableElevation fullWidth onClick={() => transition('COMMENT')}>
                boost this business
          </Button>
              <List>
                {state.activeRecoRoom && state.activeRecoRoom.comments.map(comment => {
                  return <ListItem key={comment.id}>
                    <Typography paragraph color='secondary'>{comment.because}</Typography>
                  </ListItem>
                }
                )

                }
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </List>
    </>
  );
}