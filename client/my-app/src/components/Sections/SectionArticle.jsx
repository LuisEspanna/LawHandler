import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    minWidth: 120,
    paddingTop:'30px',
  }
}));


const markdown = `
~~Texto tachado~~`;

export default function SectionArticle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactMarkdown children={markdown} plugins={[[gfm, {singleTilde: false}]]}/>
    </div>
  );
}