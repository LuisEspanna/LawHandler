import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '../CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 170,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const [image] = useState(true);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {
            image?
            <CardMedia
                className={classes.media}
                image="https://www.teahub.io/photos/full/16-169722_court-of-law.jpg"
            />
            :<div></div>
        }  
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Pertenece a: Título I
            </Typography>
            <Typography variant="h5" component="h2">
                Capítulo 1
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Numero de artículos: 1
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Numero de Parágrafos: 4
            </Typography>
            <Typography variant="body2" component="p">
                REQUISITOS PARA EJERCER LA INGENIERÍA, SUS PROFESIONES AFINES Y SUS PROFESIONES AUXILIARES.
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
            <Button color="primary" simple>Leer más</Button>
      </CardActions>  
    </Card>
  );
}
