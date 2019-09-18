import React,{ useContext } from 'react';
import {UserContext} from './../Context'

const Footer = () => {
    const con = useContext(UserContext)

    return (
        <div>
            2019@{con.state.profile.name}
        </div>
    )
}

export default Footer;