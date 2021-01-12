
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import Button from '../CustomButtons/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));




export default function SectionArticle({article}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título artículo"} data={article.titulo}/>
      <MarkdownInput labelText={"Descripción artículo"}  multiline data={article.descripcion} />
            
      <Button color="primary">Agregar literal</Button>
      <Button color="primary">Agregar Parágrafo</Button>

    </div>
  );
}