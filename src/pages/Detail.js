import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from '../Style/Style';
import { Grid, Paper,  CircularProgress } from '@material-ui/core';

const Detail = ({ match }) => {
    const classes = useStyles();
    const [state, setState] = useState({ isLoading: true, data: [] });

    useEffect(() => {
        function fdata() {
            axios.get(`https://www.googleapis.com/blogger/v3/blogs/4606092665974021629/posts/${match.params.id}?key=AIzaSyDci4ioLXX-x0SsC88MOQk399SO0PMPR14`)
                .then((res) => {
                    console.log(res);
                    setState((s) => ({ ...s, isLoading:false,   data: res.data }));
                });
        }
        fdata();
    }, [match.params.id])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Paper className={classes.container}>
                    {state.isLoading === true ? (
                        <div style={{ display: 'flex', minHeight:'80vh',justifyContent: 'center', alignItems: 'center', height: 'inherit', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                            <div>
                                <h1>{state.data.title}</h1>
                                <p>{state.data.updated}</p>
                                <div dangerouslySetInnerHTML={{__html:state.data.content}}></div>
                            </div>
                        )}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Detail;