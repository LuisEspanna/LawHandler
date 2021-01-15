import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

const useStyles = makeStyles((theme) => ({
  root: {
    
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },

  box: {
    display:'inline-block'
  },
  floatButton:{
      float:'left',
      position:'relative'
  }
}));

export default function KeyWords() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
      <GridContainer>
        <GridItem xs={11}>
            {chipData.map((data) => {
                let icon;

                if (data.label === 'React') {
                icon = <TagFacesIcon />;
                }

                return (
                <div key={data.key} className={classes.box}>
                    <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        className={classes.chip}
                    />
                </div>
                );
            })}
        </GridItem>

        <GridItem xs={1}>
            <Fab color="primary" aria-label="add" className={classes.floatButton}>
                <AddIcon />
            </Fab>
        </GridItem>
      </GridContainer>
  );
}
