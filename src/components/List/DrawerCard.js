import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 300
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

export default function ListCard({list}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    // what should happen?
  };

  return (
    <Card className={classes.root} square>
      <CardHeader
        title={list.name}
        subheader={list.location}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* ultimately, this should be randomized*/}
          {list.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          {/* ADD + ICON ? or some other button*/}
          <Button variant="outlined" color="secondary" size='large' disableElevation fullWidth>
            ADD RECOMMENDATION
          </Button>
      </CardActions>
    </Card>
  );
}