import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Header from '../../components/Header/Header';
import Button from '../../components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';

//icons

import TitleIcon from '@material-ui/icons/PostAdd';
import ListIcon from '@material-ui/icons/ViewList';
import LawIcon from '@material-ui/icons/ViewQuilt';
import UsersIcon from '@material-ui/icons/Group';
import ChartIcon from '@material-ui/icons/InsertChart';

import ListSubheader from '@material-ui/core/ListSubheader';

import styles from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles1 = makeStyles(styles);

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width:'100%',
    position:'fixed',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    paddingTop:'50px',
  },
  content: {
    marginTop:'100px',
    padding: theme.spacing(3),
    flexGrow: 1,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const classes1 = useStyles1();

  return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.appBar}>
                <Header
                  brand="ADMIN PAGE"
                  color="info"
                  rightLinks={
                      <List className={classes1.list}>
                          <ListItem className={classes1.listItem}>
                              <Button
                                  className={classes1.navLink + " " + classes1.navLinkActive}
                                  color="transparent"
                              >
                                  Discover
                            </Button>
                          </ListItem>
                          <ListItem className={classes1.listItem}>
                              <Button
                                  
                                  className={classes1.navLink}

                                  color="transparent"
                              >
                                  Profile
                              </Button>
                          </ListItem>
                          <ListItem className={classes1.listItem}>
                              <Button
                                  
                                  className={classes1.navLink}

                                  color="transparent"
                              >
                                  Settings
                              </Button>
                          </ListItem>
                      </List>
                  }
              />
            </div>
        
            <Drawer
                 className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List 
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Contenido de la página
                    </ListSubheader>
                    }
                >
                    <ListItem button>
                        <ListItemIcon><TitleIcon /></ListItemIcon>
                        <ListItemText primary={"Agregar título"} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon><ListIcon /></ListItemIcon>
                        <ListItemText primary={"Listar títulos"} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon><LawIcon /></ListItemIcon>
                        <ListItemText primary={"Ver ley completa"} />
                    </ListItem>
                </List>
                <Divider />
                <List 
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Usuarios y permisos
                    </ListSubheader>
                    }
                >
                    <ListItem button>
                        <ListItemIcon><UsersIcon /></ListItemIcon>
                        <ListItemText primary={"Usuarios"} />
                    </ListItem>
                </List>

                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><ChartIcon /></ListItemIcon>
                        <ListItemText primary={"Estadísticas"} />
                    </ListItem>
                </List>
                
                </div>
            </Drawer>

            <main className={classes.content}>
                
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
            </main>



        </div>
  );
}
