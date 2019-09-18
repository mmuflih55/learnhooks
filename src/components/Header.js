import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from './../Context'
import { Link } from "react-router-dom";

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
            <CheckLogin/>
            <br/>
            <Link to="/"> Home</Link>
            <Link to="/profile"> Profile</Link>
            <Link to="/detail"> Detail</Link>
        </div>
    )
}

export default Header;