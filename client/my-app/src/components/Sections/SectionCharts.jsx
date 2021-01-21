import { makeStyles } from '@material-ui/core/styles';

import LineChart from "../../components/Chart/LineChart.jsx";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    minWidth: 200,
    paddingTop:'30px',
  }
}));


export default function SectionTitle({title,showChildren}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LineChart labels={["Jan", "Feb", "March"]} datasets={[
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]} />
    </div>
  );
}