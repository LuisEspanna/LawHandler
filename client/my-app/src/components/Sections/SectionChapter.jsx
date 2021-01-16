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

    console.log(title);
    dispatch(updateTitle(title));
  }

  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título capítulo"} data={chapter.titulo} onDelete={() => onDeleteChapter(chapter.id)}/>
      <MarkdownInput labelText={"Descripción capítulo"} data={chapter.descripcion} multiline/>
      <KeyWords data={chapter.keywords}/>

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