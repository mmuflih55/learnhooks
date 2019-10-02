import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Slide, AppBar, Toolbar, useScrollTrigger, IconButton, ButtonBase,List,ListItem,SwipeableDrawer,ListItemIcon,ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Home,Edit} from '@material-ui/icons';
import useStyles from '../Style/Style';

 

const MenuAppBar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const [state,setState] = useState({openDrawer:false})

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ openDrawer:open });
  };

  function Drawer() {  
    const sideList = () => (
        <div
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{width:250}}
          >
          <List>
            {[{icon:<Home/>,text:'Home',url:'/'},{icon:<Edit/>,text:'Blogs',url:'blogs'}].map((item,i) => (
              <ListItem button key={i} component={Link} to={item.url}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    
      return (
        <div>
          <SwipeableDrawer
            open={state.openDrawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {sideList()}
          </SwipeableDrawer>
        </div>
      );
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            </div>
            <div className={classes.sectionDesktop}>
              <ButtonBase disableRipple component={Link} to="/">
                <Typography className={classes.tab} noWrap>
                  Home
                </Typography>
              </ButtonBase>
              <ButtonBase disableRipple component={Link} to="/blogs">
                <Typography className={classes.tab} noWrap>
                  Blogs
                </Typography>
              </ButtonBase>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
      {Drawer()}
    </React.Fragment>
  );
}


const Header = () => {
  return (
    <div>
      <MenuAppBar />
    </div>
  )
}

export default Header;