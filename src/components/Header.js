import React, { useState,useContext } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from './../Context'
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Slide, AppBar, Toolbar, useScrollTrigger, InputBase, Badge, IconButton, MenuItem, Menu, Button, ButtonBase } from '@material-ui/core';
import { More, Search, Mail, Notifications, AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../Style/Style';


const MenuAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const con = useContext(UserContext);
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const [state, setState] = useState({ username: '', password: '' })
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleChange = (v) => {
    let val = v.target.value;
    let name = v.target.name;
    setState({ ...state, [name]: val })
    // con.dispatch({ type: 'gantinama', val: val })
  }

  const openAlert = (isOpen,msg,title,type)=>{
    let val = {
      isAlertOpen: isOpen,
      alertMsg: msg,
      alertTitle: title,
      alertType: type, 
    }
    con.dispatch({ type: 'setAlert', val: val })
  }

  const login = () => {
    if (state.username.trim() !== '' && state.password.trim() !== '') {
      setCookie('token', 'udah ada token');
      window.location.reload()
    } else {
      openAlert(true,"Mohon masukan username dan password terlebih dahulu","Login Error","error");
    }
  }

  const logout = () => {
    removeCookie('token');
    window.location.reload()
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {cookies.token ? (
        <div className={classes.loginContainer}>
          <MenuItem component={Link} to="/blogs">
              Blogs
          </MenuItem>
          <Button
            onClick={logout}
            className={classes.loginBtn}>logout</Button>
        </div>
      ) : (
          <div className={classes.loginContainer}>
            <label>Username :</label>
            <InputBase
              placeholder="Username"
              name="username"
              className={classes.inputLogin}
              onChange={handleChange}
            />
            <label>Password :</label>
            <InputBase
              className={classes.inputLogin}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <Button
              onClick={login}
              className={classes.loginBtn}>Login</Button>
          </div>
        )}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {cookies.token ? (
        <div>
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </div>
      ) : (
          <div>
            <MenuItem>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
              <p>Messages</p>
            </MenuItem>
            <MenuItem>
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Profile</p>
            </MenuItem>
          </div>
        )}
    </Menu>
  );

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

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
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              {cookies.token ? (<div><IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <Notifications />
                  </Badge>
                </IconButton></div>) : null}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <More />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
      {renderMenu}
      {renderMobileMenu}
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