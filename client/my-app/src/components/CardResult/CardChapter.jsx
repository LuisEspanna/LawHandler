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

export default function SimpleCard({serverData, titleParent}) {
    const classes = useStyles();

    const [data, setData] = useState(0);

    useEffect(() => {
        
        var titulo = serverData.titulo;
        var descripcion = serverData.descripcion;
        var articulos = ("Artículos: " + serverData.articulos.length);
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
            articulos,
            imagen,
        });
    }, [serverData.titulo, serverData.descripcion, serverData.articulos.length, serverData.multimedia, data.multimedia]);

    return (
        <Card className={classes.root}>
        <CardActionArea>
            {
                data.imagen?
                <CardMedia
                    className={classes.media}
                    image={data.imagen}
                />
                :<div></div>
            }  
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Pertenece a: {titleParent}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {data.titulo}
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    {data.descripcion}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                    {data.articulos}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
                <Button color="primary" simple>Leer más</Button>
        </CardActions>  
        </Card>
    );
}
