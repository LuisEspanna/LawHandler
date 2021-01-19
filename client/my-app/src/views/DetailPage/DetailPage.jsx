import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import {useDispatch, useSelector } from 'react-redux';
import SectionTitle from '../../components/Sections/SectionTitle.jsx';

//actions
import {startLoadingTitles, loadTitles} from '../../redux/actions/titles/titles.js';

const useStyles = makeStyles(styles);


export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const dispatch = useDispatch();
  
  const  result  = useSelector( state => state.results.current_result);
  const  {user}  = useSelector( state => state.users );

  useEffect(() => {
    dispatch(loadTitles([]));
    dispatch(startLoadingTitles());
  },[dispatch]);

  return (
    <div>
      <Header
        brand="Law Handler"
        rightLinks={<HeaderLinks user={user}/>}
        fixed
        color="primary"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
      <div className={classes.main}>
        {
            (result.data.tipo === "Titulo")?<SectionTitle title={result.data} showChildren={true}/>:null 
        }

      </div>
      <Footer />
    </div>
  );
}
