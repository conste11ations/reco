import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

export default function RecipeReviewCard({commentsList, business}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} square>
      <CardHeader
        title={business.name}
        subheader={business.website}
      />
      <CardMedia
        className={classes.media}
        image="https://www.thespruceeats.com/thmb/_i6XSGjRXDBhOaQ4gqpfi7dbaIk=/4486x2523/smart/filters:no_upscale()/mango-at-the-market-506813675-587e60f53df78c17b6967f5e.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* ultimately, this should be randomized*/}
          {`"${commentsList[0]}"`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="upvote">
          <ArrowUpwardIcon/>
          <h4>52</h4>
        </IconButton>
        <IconButton aria-label="downvote">
          <ArrowDownwardIcon/>
          <h4>2</h4>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {commentsList.map(comment => <li>{comment}</li>)}
        </CardContent>
      </Collapse>
    </Card>
  );
}