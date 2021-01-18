import React, { useEffect } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/components.js";

import imageBackground from "../../assets/img/bg4.jpg";

import {useDispatch, useSelector } from 'react-redux';

import SectionTitle from '../../components/Sections/SectionTitle.jsx';

//actions
import {startLoadingTitles, loadTitles} from '../../redux/actions/titles/titles.js';

const useStyles = makeStyles(styles);


export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const dispatch = useDispatch();
  
  const  titulos  = useSelector( state => state.titulos );
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
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={imageBackground}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Ley 842 de 2003</h1>
                <h3 className={classes.subtitle}>
                  Descripción
                </h3>
                <p>
                  Ley 842 de 2003, octubre 9 de 2003, por la cual se modifica la reglamentación del ejercicio de la ingeniería, de sus profesiones afines y de sus profesiones auxiliares, se adopta el Código de Ética Profesional y se dictan otras disposiciones, Diario Oficial No. 45.340, de 14 de octubre de 2003.
                </p>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        
        {
          titulos && 
          titulos.map((titulo, i) => {
            return (
              <SectionTitle title={titulo} key={i} showChildren={true}/>
            )
          })
        }

      </div>
      <Footer />
    </div>
  );
}
