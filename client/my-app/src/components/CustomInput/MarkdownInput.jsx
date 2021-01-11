import  { useState } from 'react';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import CustomInput from "./CustomInput.js";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    textArea: {
      width: '100%'
    }
}));  

export default function MarkdownInput({multiline, labelText}){
    const classes = useStyles();
    const [value, setValue] = useState(`~~Texto tachado~~ el anterior es un ejemplo`);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
        <GridContainer>
            {
                !multiline?
                <GridItem xs={12} sm={12} md={4}>
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
                <GridItem xs={12} sm={12}>
                    <TextField
                        className={classes.textArea}
                        id="outlined-multiline-static"
                        label="Descripción"
                        multiline
                        variant="outlined"
                    />
                </GridItem>
            }
            
            
            <GridItem xs={12} sm={12}>
                <ReactMarkdown children={value} plugins={[[gfm, {singleTilde: false}]]}/>
            </GridItem>
        </GridContainer>
    );
}


