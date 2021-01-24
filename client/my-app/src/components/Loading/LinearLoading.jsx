import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    bottom: theme.spacing(0),
    right: theme.spacing(0),
    zIndex: "4"
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();
  const loading    = useSelector( state => state.ui.main_loading );


  return (
          loading?
            <div className={classes.root}>
                <LinearProgress />
            </div>:null
  );
}
