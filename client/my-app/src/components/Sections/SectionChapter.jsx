import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import SectionArticle from './SectionArticle.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function SectionChapter({chapter}) {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título capítulo"} data={chapter.titulo}/>
      <MarkdownInput labelText={"Descripción capítulo"} data={chapter.descripcion} multiline/>

      {       
          chapter &&
          chapter.articulos.map((articulo,i) => {
              console.log(articulo)
              return (
                <SectionArticle article={articulo} key={i}/>
              )
          })
      }
    </div>
  );
}