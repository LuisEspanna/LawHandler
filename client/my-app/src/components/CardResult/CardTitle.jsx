import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../CustomButtons/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 170,
  },
});

export default function CardTitle({serverData}) {
  const classes = useStyles();
  const [data, setData] = useState(0);

  useEffect(() => {
      
      var titulo = serverData.titulo;
      var descripcion = serverData.descripcion;
      var capitulos = ("Capitulos: " + serverData.capitulos.length);
      var imagen = undefined;

      if(serverData.multimedia){
          for (let i = 0; i < serverData.multimedia.length; i++) {
              if(serverData.multimedia[i].tipo === "imagen"){
                  imagen = serverData.multimedia[i].url;
                  break;
              }            
          }
      }

      setData({
          titulo,
          descripcion,
          capitulos,
          imagen
      });
    }, [serverData.titulo, serverData.descripcion, serverData.capitulos.length, serverData.multimedia, data.multimedia]);


  return (
    <Card className={classes.root}>
      <CardActionArea>
        {
          data.imagen ? 
            <CardMedia
              className={classes.media}
              image={data.imagen}
            />:<div></div>
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.descripcion}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.capitulos}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" simple>Leer más</Button>
      </CardActions>
    </Card>
  );
}
