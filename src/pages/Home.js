import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from '../Style/Style';

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
                <Paper className={classes.container}>
                    <h1>Panel1</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper className={classes.container}>
                    <h1>Panel2</h1>
                    <h1>Hello World</h1>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home;