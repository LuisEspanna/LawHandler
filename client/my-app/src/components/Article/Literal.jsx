
import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function Literal({literal}) {
  const classes = useStyles();

  const onDeleteLiteral = (id) =>{
    console.log("Delete literal: " + id);
  }


  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Literal"} data={literal.titulo} onDelete={onDeleteLiteral} />
      <MarkdownInput labelText={"Descripción Literal"}  multiline data={literal.descripcion} />
    </div>
  );
}