import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import SectionChapter from './SectionChapter.jsx';
import {useDispatch} from 'react-redux';

//actions
import {removeTitle} from '../../redux/actions/titles/titles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    minWidth: 120,
    paddingTop:'30px',
  }
}));


export default function SectionTitle({title}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onDeleteTitle = (id) =>{
    console.log("Delete title: " + id);
    dispatch(removeTitle(id));
  }


  return (
    <div className={classes.root}>
      <MarkdownInput labelText={"Título"} data={title.titulo} onDelete={() => onDeleteTitle(title.id)}/>
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