
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import Typography from '@material-ui/core/Typography';
import KeyWords from '../KeyWords/KeyWords';
import {useDispatch} from 'react-redux';

//actions
import {updateTitle} from '../../redux/actions/titles/titles';


const useStyles = makeStyles(() => ({
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
    var newTitle = {...title};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapterId){
        capitulo.articulos = capitulo.articulos.map(articulo => {
          if(articulo.id === articleId){
            articulo.literales = articulo.literales.map(literal => {
              if(literal.id === data.id){
                literal.titulo = value;
              }
              return literal;
            });

            articulo.paragrafos = articulo.paragrafos.map(paragrafo => {
              if(paragrafo.id === data.id){
                paragrafo.titulo = value;
              }
              return paragrafo;
            });

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
          if(articulo.id === articleId){
            articulo.literales = articulo.literales.map(literal => {
              if(literal.id === data.id){
                literal.descripcion = value;
              }
              return literal;
            });

            articulo.paragrafos = articulo.paragrafos.map(paragrafo => {
              if(paragrafo.id === data.id){
                paragrafo.descripcion = value;
              }
              return paragrafo;
            });

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
      <MarkdownInput onSave={onSaveTitle} labelText={"Item"} data={data.titulo} onDelete={()=>onDelete(data.id)} />
      <MarkdownInput onSave={onSaveDescription} labelText={"Descripción Item"}  multiline data={data.descripcion} />
      
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