
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import Button from '../CustomButtons/Button';
import Item from '../Article/Item.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function SectionArticle({article}) {
  const classes = useStyles();

  const onDeleteArticle = (id) =>{
    console.log("Delete article: " + id);
  }


  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título artículo"} data={article.titulo} onDelete={onDeleteArticle}/>
      <MarkdownInput labelText={"Descripción artículo"}  multiline data={article.descripcion} />
            
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