
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function Item({data}) {
  const classes = useStyles();

  const onDeleteLiteral = (id) =>{
    console.log("Delete literal: " + id);
  }


  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Literal"} data={data.titulo} onDelete={onDeleteLiteral} />
      <MarkdownInput labelText={"Descripción Literal"}  multiline data={data.descripcion} />
      
      <Typography variant="h6" gutterBottom>
        Notas
      </Typography>

      {
        data.notas && 
        data.notas.map((nota, i) => {
          return (<MarkdownInput key={i} labelText={"Nota"} data={nota} onDelete={onDeleteLiteral} />)
        })
      }
    </div>
  );
}