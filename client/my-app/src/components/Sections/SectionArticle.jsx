
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import Button from '../CustomButtons/Button';
import Item from '../Article/Item.jsx';

import {useDispatch} from 'react-redux';

//actions
import {updateTitle} from '../../redux/actions/titles/titles';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function SectionArticle({article, chapterId, title}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onDeleteArticle = (id) =>{
    var newTitle = {...title};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapterId){
        capitulo.articulos = capitulo.articulos.filter(articulo => articulo.id !== id);
      }
      return capitulo;
    });

    dispatch(updateTitle(newTitle));
  }

  const onSaveTitle = (value) =>{
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

    dispatch(updateTitle(newTitle));
  }

  const onSaveDescription = (value) =>{
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
  }

  return (
    <div className={classes.root}>
      <MarkdownInput onSave={onSaveTitle} labelText={"Título artículo"} data={article.titulo} onDelete={() =>onDeleteArticle(article.id)}/>
      <MarkdownInput onSave={onSaveDescription} labelText={"Descripción artículo"}  multiline data={article.descripcion} />
            
      {
        article.literales &&
        article.literales.map((literal,i) => {
          return (<Item data={literal} key={i}/>)
        })
      }

      {
        article.paragrafos &&
        article.paragrafos.map((paragrafo,i) => {
          return (<Item data={paragrafo} key={i}/>)
        })
      }

      <Button color="primary">Agregar literal</Button>
      <Button color="primary">Agregar Parágrafo</Button>

    </div>
  );
}