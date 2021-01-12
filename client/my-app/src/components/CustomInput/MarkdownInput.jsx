import  { useState } from 'react';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import CustomInput from "./CustomInput.js";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    textArea: {
      width: '100%'
    }, 
    button:{
        float:'right'
    }
}));  

export default function MarkdownInput({multiline, labelText, data, onDelete}){
    const classes = useStyles();
    const [value, setValue] = useState(data);
    const [edit, setEdit] = useState(false);
    const [width, setWidth] = useState(12);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleEdit = () => {
        setEdit(true);
        setWidth(6);
    };

    const handleSave = () => {
        setEdit(false);
        setWidth(12);
    };
    
    return (
        <GridContainer>
            {   edit?
                !multiline?
                <GridItem xs={width}>
                    <CustomInput
                        labelText={labelText}
                        id="float"
                        inputProps={{
                            value: value,
                            onChange:handleChange
                        }}
                        formControlProps={{
                            fullWidth: true
                        }}                        
                    />
                </GridItem>:
                <GridItem xs={width}>
                    <TextField
                        className={classes.textArea}
                        id="outlined-multiline-static"
                        label={labelText}
                        multiline
                        variant="outlined"
                        value={value}
                        onChange={handleChange}
                    />
                </GridItem>:<div></div>
            }
            
            
            <GridItem 
                xs 
                sm={(edit)?5:onDelete?10:11}>
                <ReactMarkdown children={value} plugins={[[gfm, {singleTilde: false}]]}/>
            </GridItem>

            {
                edit?
                <GridItem xs={1}>
                    <IconButton onClick={handleSave} className={classes.button}>
                        <SaveIcon />
                    </IconButton>
                </GridItem>:
                <GridItem xs={onDelete?2:1}>
                    {
                        onDelete?
                        <IconButton className={classes.button}>
                            <DeleteIcon />
                        </IconButton>:
                        <div></div>
                    }
                    <IconButton onClick={handleEdit} className={classes.button}>
                        <EditIcon />
                    </IconButton>
                    
                </GridItem>
            }
        </GridContainer>
    );
}


