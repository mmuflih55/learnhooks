import React,{ useContext,useState } from 'react';
import { useCookies } from 'react-cookie';
import {UserContext} from './../Context'

const Header = () => {
    const con = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    const [state,setState] = useState({username:'',password:''})
    // const setkukis = () => {
    //     // setCookie('token', con.state.profile.name);
    // }
    const handleChange = (v) => {
        let val = v.target.value;
        let name = v.target.name;
        setState({...state,[name]:val})
        // con.dispatch({ type: 'gantinama', val: val })
    }

    const login = () =>{
        setCookie('token', 'udah ada token');
    }

    const logout = () =>{
        removeCookie('token');
    }

    return cookies.token?(
        <div>
            {/* <input type="text" onChange={handleChange}></input> */}
            Ini Header {con.state.profile.name}
            {/* Ini Header {JSON.stringify(con)} */}
            <button onClick={logout}>Log Out</button>
        </div>
    ):(
        <div>
            <label>{JSON.stringify(state)}</label>
            <br/>
            <label>Username</label>
            <input name="username" placeholder="Username" type="text" onChange={handleChange}></input>
            <label>Username</label>
            <input name="password" placeholder="Password" type="text" onChange={handleChange}></input>
            <button onClick={login}>Login</button>
           </div>
    )
}

export default Header;