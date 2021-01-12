import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import SectionChapter from './SectionChapter.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function SectionTitle({title}) {
  const classes = useStyles();

  const onDeleteTitle = (id) =>{
    console.log("Delete title: " + id);
  }


  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título"} data={title.titulo} onDelete={onDeleteTitle}/>
      <MarkdownInput labelText={"Descripción Título"} data={title.descripcion} multiline/>

      {          
        title &&
        title.capitulos.map((chapter,i) => {
              return (
                <SectionChapter chapter={chapter} key={i}/>
              )
          })
      }
    </div>
  );
}