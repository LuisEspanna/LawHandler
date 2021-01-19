import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

import TitleIcon from '@material-ui/icons/Title';
import ChapterIcon from '@material-ui/icons/Class';
import ArticleIcon from '@material-ui/icons/FontDownload';

import SearchMenu from './SearchMenu.jsx';

import {search} from '../../redux/actions/results/results';
import { useSelector, useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [type, setType] = useState("Chapter");
  const [value, setValue] = useState("dsd");
  const dispatch = useDispatch();

  const  titulos  = useSelector( state => state.titulos );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onMenuItemSelect = (itemSelected) => {
    setType(itemSelected);
  }

  const onSearch = () =>{
      dispatch(search(titulos, value));
  }

  return (
    <Paper component="form" className={classes.root}>
      
      <SearchMenu onSelect={onMenuItemSelect} />

      <InputBase
        onChange={handleChange}
        className={classes.input}
        placeholder="Búsqueda"        
      />
      <IconButton className={classes.iconButton} onClick={onSearch}>
        <SearchIcon />
      </IconButton>

      <Divider className={classes.divider} orientation="vertical" />
      
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        
        {
          (type === "Titles")?(
            <TitleIcon/>
          ):(type === "Chapters")?(
            <ChapterIcon/>
          ):(type === "Articles")?(
            <ArticleIcon/>
          ):<div></div>

        }
      </IconButton>
    </Paper>
  );
}
