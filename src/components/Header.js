import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from './../Context'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';


const MenuAppBar = () => {
  const trigger = useScrollTrigger();
  return (
    <React.Fragment>
      <CssBaseline />
        <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </React.Fragment>
  );
}


const CheckLogin = ()=>{
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
        if(state.username.trim()!==''&&state.password.trim()!==''){
            setCookie('token', 'udah ada token');
            window.location.reload()
        }else{
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
            <MenuAppBar/>
            <CheckLogin/>
            <br/>
            <Link to="/"> Home</Link>
            <Link to="/profile"> Profile</Link>
            <Link to="/detail"> Detail</Link>
        </div>
    )
}

export default Header;