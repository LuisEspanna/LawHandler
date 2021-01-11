import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    minWidth: 120,
    paddingTop:'30px',
  }
}));




export default function SectionArticle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título"}/>
      <MarkdownInput labelText={"Descripción"} multiline/>
    </div>
  );
}