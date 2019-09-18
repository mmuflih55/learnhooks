import React,{ useContext } from 'react';
import {UserContext} from './../Context'

const Footer = () => {
    const con = useContext(UserContext)

    return (
        <div>
            Ini Footer {con.state.profile.name}
        </div>
    )
}

export default Footer;