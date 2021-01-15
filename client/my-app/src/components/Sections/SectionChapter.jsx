import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import SectionArticle from './SectionArticle.jsx';
import KeyWords from '../KeyWords/KeyWords';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function SectionChapter({chapter}) {
  const classes = useStyles();

  const onDeleteChapter = (id) =>{
    console.log("Delete chapter: " + id);
  }

  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título capítulo"} data={chapter.titulo} onDelete={onDeleteChapter}/>
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