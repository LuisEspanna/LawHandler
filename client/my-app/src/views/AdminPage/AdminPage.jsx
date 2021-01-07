import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
//icons

import TitleIcon from '@material-ui/icons/PostAdd';
import ListIcon from '@material-ui/icons/ViewList';
import LawIcon from '@material-ui/icons/ViewQuilt';
import UsersIcon from '@material-ui/icons/Group';
import ChartIcon from '@material-ui/icons/InsertChart';

import ListSubheader from '@material-ui/core/ListSubheader';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
              
          <Typography variant="h6" noWrap>
            Law handler
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Toolbar />
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
