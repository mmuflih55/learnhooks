import React, { useContext } from 'react';
import { UserContext } from './../Context';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const Footer = () => {
    const con = useContext(UserContext)
    // const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                2019@{con.state.profile.name}
            </Grid>
        </Grid>
    )
}

export default Footer;