import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {Grid} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 300,
    marginTop:"10px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  border:{
      borderBottom:"4px solid #cc0c1b"
  }
});

export const Cards =()=>{
  const classes = useStyles();

  return ( 
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.border}>
        <Typography variant="h7" color="textPrimary" gutterBottom>
          No.of.people Inffected
        </Typography>
        <Typography variant="h4" component="h2">
                31311
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Monday 23 june 2020
        </Typography>
        <Typography variant="body2" component="p">
          Total numbers of people inffected by.
        </Typography>
      </CardContent>
    </Card>
  );
}
