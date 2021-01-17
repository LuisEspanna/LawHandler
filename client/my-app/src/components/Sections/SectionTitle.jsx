import { makeStyles } from '@material-ui/core/styles';
import MarkdownInput from '../CustomInput/MarkdownInput.jsx';
import SectionChapter from './SectionChapter.jsx';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../CustomButtons/Button';
import {templateChapter} from '../../utils';

//actions
import {removeTitle, updateTitle} from '../../redux/actions/titles/titles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    minWidth: 200,
    paddingTop:'30px',
    width:'100%',
  }
}));


export default function SectionTitle({title,showChildren}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const  {admin}  = useSelector( state => state.users );

  const onDeleteTitle = (id) =>{
    dispatch(removeTitle(id));
  }

  const onSaveTitle = (value) =>{
    var updatedTitle = {...title};
    updatedTitle.titulo = value;    
    dispatch(updateTitle(updatedTitle));
  }

  const onSaveDescription = (value) =>{
    var updatedTitle = {...title};
    updatedTitle.descripcion = value;
    dispatch(updateTitle(updatedTitle));
  }

  const onNewChapter = () =>{
    var newTitle = {...title};
    newTitle.capitulos = [...newTitle.capitulos, templateChapter()];
    dispatch(updateTitle(newTitle));
  }

  return (
    <div className={classes.root}>
      <MarkdownInput onSave={onSaveTitle} labelText={"Título"} data={title.titulo} onDelete={() => onDeleteTitle(title.id)}/>
      <MarkdownInput onSave={onSaveDescription} labelText={"Descripción Título"} data={title.descripcion} multiline/>
      {
        admin?
        <>
          <Button color="primary" onClick={onNewChapter}>Agregar capítulo</Button>
        </>:
        null
      }

      {          
        title && showChildren &&
        title.capitulos.map((chapter,i) => {
              return (
                <SectionChapter chapter={chapter} parent={title} key={i} showChildren={showChildren}/>
              )
          })
      }
    </div>
  );
}