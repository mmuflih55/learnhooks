import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Slide, AppBar, Toolbar, useScrollTrigger, IconButton, ButtonBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../Style/Style';

const MenuAppBar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
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