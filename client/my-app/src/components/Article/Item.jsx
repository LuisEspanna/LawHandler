
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import Typography from '@material-ui/core/Typography';
import KeyWords from '../KeyWords/KeyWords';
import {useDispatch} from 'react-redux';

//actions
import {updateTitle} from '../../redux/actions/titles/titles';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function Item({data, title, chapterId, articleId}) {
  const classes = useStyles();
  const dispatch = useDispatch();


  const onDelete = (id) =>{
    console.log("Delete item: " + id);

    var newTitle = {...title};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapterId){
        capitulo.articulos = capitulo.articulos.map(articulo => {
          if(articulo.id === articleId){
            articulo.literales = articulo.literales.filter(literal => literal.id !== id);
            articulo.paragrafos = articulo.paragrafos.filter(paragrafo => paragrafo.id !== id);
          }
          return articulo;
        });
      }
      return capitulo;
    });

    dispatch(updateTitle(newTitle));
  }


  const onSaveTitle = (value) =>{
    /*
    var newTitle = {...title};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapterId){
        capitulo.articulos = capitulo.articulos.map(articulo => {

          if(articulo.id === article.id){
            articulo.titulo = value;
          }

          return articulo;
        });
      }
      return capitulo;
    });

    dispatch(updateTitle(newTitle));*/
  }

  const onSaveDescription = (value) =>{
    /*
    var newTitle = {...title};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapterId){
        capitulo.articulos = capitulo.articulos.map(articulo => {

          if(articulo.id === article.id){
            articulo.descripcion = value;
          }

          return articulo;
        });
      }
      return capitulo;
    });

    dispatch(updateTitle(newTitle));
    */
  }


  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Literal"} data={data.titulo} onDelete={()=>onDelete(data.id)} />
      <MarkdownInput labelText={"Descripción Literal"}  multiline data={data.descripcion} />
      
      <Typography variant="h6" gutterBottom>
        Notas:
      </Typography>

      {
        data.notas && 
        data.notas.map((nota, i) => {
          return (<MarkdownInput key={i} labelText={"Nota"} data={nota} onDelete={onDelete} />)
        })
      }

    <KeyWords data={data.keywords}/>

    </div>
  );
}