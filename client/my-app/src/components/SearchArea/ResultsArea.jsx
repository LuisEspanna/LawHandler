import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardTitle from '../CardResult/CardTitle.jsx';
import CardChapter from '../CardResult/CardChapter.jsx';

import { useSelector, useDispatch} from 'react-redux';

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
  
  /*
  useEffect(() => {
    if(results){      
        var localTitles = [];
        var localChapters = [];
        var localArticles = [];
        
        results.map(res => {
          console.log(res)
          if(res.data)
            if(res.data.tipo === 'Titulo')
              localTitles.push(res);
          return res;
        });

        //console.log(localTitles)
        setTitulos(localTitles);
      
      
      setCapitulos(results.filter(result => result.data.tipo === "Capitulo"));
      setArticulos(results.filter(result => result.data.tipo === "Articulo"));
    }

    console.log(results);
    console.log(titulos);
  }, [results, titulos]);*/

  const example = {
    "tipo":"Titulo",
    "titulo": "Título I",
    "descripcion": "GENERALIDADES",
    "id": "123456",
    "capitulos" : [
      {

        "tipo":"Capitulo",
        "titulo":"Capitulo I",
        "descripcion": "REQUISITOS PARA EJERCER LA INGENIERÍA, SUS PROFESIONES AFINES Y SUS PROFESIONES AUXILIARES.",
        "articulos" : [
          {
            "tipo":"Articulo",
            "titulo": "Titulo de artículo ejemplo",
            "descripcion": "Descripcion articulo ejemplo",
            "literales" : [
              {
                "literal" : "a",
                "descripcion": "Descripcion literal a",
                "estado":"tachado",
                "notas":[
                  "nota1 literal a",
                  "nota2 literal a"
                ],

                "keywords":[
                  "Keyword1",
                  "Keyword2"
                ]
              }
            ],
            "paragrafos" : [
              {
                "numero" : 1,
                "descripcion": "Descripcion ejm",
                "notas":[
                  "nota1 paragrafo",
                  "nota2 paragrafo"
                ],

                "keywords":[
                  "Keyword1",
                  "Keyword2"
                ]
              }
            ],
            "multimedia" : [
              {
                "tipo": "video",
                "url" : "www.videejemplo.com"
              }
            ]

          }
        ],
        "multimedia" : [
          {
            "tipo": "video",
            "url" : "www.videejemplo.com"
          },
          {
            "tipo": "imagen",
            "url" : "https://media.gettyimages.com/photos/the-palace-of-justice-of-colombia-during-the-mandatory-quarantine-in-picture-id1208429379?s=612x612"
          }
        ]
      }
    ]
    ,
    "multimedia" : [
      {
        "tipo": "video",
        "url" : "www.videejemplo.com"
      },
      {
        "tipo": "imagen",
        "url" : "https://wallpapercave.com/wp/wp6476165.jpg"
      }
    ]
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
                      <CardTitle serverData={res.data}/>
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
