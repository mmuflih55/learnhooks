import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from './../Context'
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Slide, AppBar, Toolbar, useScrollTrigger, InputBase, Badge, IconButton } from '@material-ui/core';
import { More, Menu, Search, Mail, Notifications, AccountCircle } from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const MenuAppBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const menuId = 'primary-search-account-menu';

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
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Menu />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
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
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
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
    </React.Fragment>
  );
}


const CheckLogin = () => {
  const con = useContext(UserContext);
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const [state, setState] = useState({ username: '', password: '' })

  const handleChange = (v) => {
    let val = v.target.value;
    let name = v.target.name;
    setState({ ...state, [name]: val })
    // con.dispatch({ type: 'gantinama', val: val })
  }

  const login = () => {
    if (state.username.trim() !== '' && state.password.trim() !== '') {
      setCookie('token', 'udah ada token');
      window.location.reload()
    } else {
    }
  }

  const logout = () => {
    removeCookie('token');
    window.location.reload()
  }

  return cookies.token ? (
    <div>
      Ini Header {con.state.profile.name}
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div>
        <label>Username</label>
        <input name="username" placeholder="Username" type="text" onChange={handleChange}></input>
        <label>Password</label>
        <input name="password" placeholder="Password" type="text" onChange={handleChange}></input>
        <button onClick={login}>Login</button>
      </div>
    )
}

const Header = () => {
  // const setkukis = () => {
  //     // setCookie('token', con.state.profile.name);
  // }

  return (
    <div>
      <MenuAppBar />
      <CheckLogin />
      <br />
      <Link to="/"> Home</Link>
      <Link to="/profile"> Profile</Link>
      <Link to="/detail"> Detail</Link>
    </div>
  )
}

export default Header;