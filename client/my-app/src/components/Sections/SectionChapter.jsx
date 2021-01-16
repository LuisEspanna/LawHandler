import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import SectionArticle from './SectionArticle.jsx';
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


export default function SectionChapter({chapter, parent}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onDeleteChapter = (id) =>{
    var title = {...parent};
    title.capitulos = parent.capitulos.filter(chapter => chapter.id !== id);
    dispatch(updateTitle(title));
  }

  const onSaveTitle = (value) =>{
    var title = {...parent};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapter.id){
        capitulo.titulo = value;
      }
      return capitulo;
    });
    
    dispatch(updateTitle(title));
  }

  const onSaveDescription = (value) =>{
    var title = {...parent};

    title.capitulos.map(capitulo => {
      if(capitulo.id === chapter.id){
        capitulo.descripcion = value;
      }
      return capitulo;
    });
    
    dispatch(updateTitle(title));
  }

  const onEditKeyWords = (keywords) =>{
    var title = {...parent};
    console.log(keywords)
    title.capitulos.map(capitulo => {
      if(capitulo.id === chapter.id){
        capitulo.keywords = keywords;
      }
      return capitulo;
    });
    
    dispatch(updateTitle(title));
  }


  return (
    <div className={classes.root}>
      <MarkdownInput onSave={onSaveTitle} labelText={"Título capítulo"} data={chapter.titulo} onDelete={() => onDeleteChapter(chapter.id)}/>
      <MarkdownInput onSave={onSaveDescription} labelText={"Descripción capítulo"} data={chapter.descripcion} multiline/>
      <KeyWords onChange={onEditKeyWords} data={chapter.keywords}/>

      {       
          chapter &&
          chapter.articulos.map((articulo,i) => {
              return (
                <SectionArticle article={articulo} key={i}/>
              )
          })
      }
    </div>
  );
}