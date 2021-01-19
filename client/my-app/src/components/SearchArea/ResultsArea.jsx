import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardTitle from '../CardResult/CardTitle.jsx';
//import CardChapter from '../CardResult/CardChapter.jsx';

import { useSelector, useDispatch} from 'react-redux';

//Acciones
import {setCurrentResult} from '../../redux/actions/results/results';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'50px',
    paddingBottom:'50px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ResultsArea() {
  const classes = useStyles();

  const  results  = useSelector( state => state.results.results );

  const getTitles = () => {
    return results.filter(res => res.data.tipo === 'Titulo');
  }

  const dispatch = useDispatch();

  const handleShowResult = (res) => {
    dispatch(setCurrentResult(res));
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        {
          getTitles() &&
          getTitles().map((res, i)=>{
              return(
                  <Grid key ={i} item xs={12} sm={6} md={4}>
                      {console.log(res)}
                      <CardTitle serverData={res.data} onShowResult={()=>handleShowResult(res)} />
                  </Grid>
              )
          })               
        } 

        {/*
            capitulos &&
            capitulos.map((res, i)=>{
                return(
                    <Grid key ={i} item xs={12} sm={6} md={4}>
                        <CardChapter serverData={example.capitulos[0]} titleParent={example.titulo}/>
                    </Grid>
                )
            })       */        
        }

        {/*
            articulos &&
            articulos.map((res, i)=>{
                return(
                    <Grid key ={i} item xs={12} sm={6} md={4}>
                        <CardChapter serverData={example.capitulos[0]} titleParent={example.titulo}/>
                    </Grid>
                )
            }) */              
        }  
      </Grid>
    </div>
  );
}
