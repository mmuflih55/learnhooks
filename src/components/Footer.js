import React, { useContext } from 'react';
import { UserContext } from './../Context';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    const con = useContext(UserContext)
    return (
        <Grid container>
            <Grid item xs={12} md={12} style={{padding:'15px'}}>
                2019@{con.state.profile.name}
            </Grid>
        </Grid>
    )
}

export default Footer;