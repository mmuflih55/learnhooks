import React, { useEffect, useState } from 'react';
import { Grid, Paper, Card, CircularProgress, CardMedia, CardContent } from '@material-ui/core';
import axios from 'axios';
import useStyles from '../Style/Style';

const Home = () => {
    const [state, setState] = useState({ isLoading: true, data: [] });
    const classes = useStyles();

    useEffect(() => {
        console.log("use effect run");
        function fdata() {
            console.log("test");
            axios.get('https://www.googleapis.com/blogger/v3/blogs/4606092665974021629/posts?key=AIzaSyDci4ioLXX-x0SsC88MOQk399SO0PMPR14&fetchImages=true')
                .then((res) => {
                    setState((s) => ({ ...s, isLoading: false, data: res.data.items }));
                });
        }
        fdata();
    }, []);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
                <Paper className={classes.container}>
                    <h1>Panel1</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper className={[classes.container,classes.postlistcon]}>
                    {state.isLoading === true ? (
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'inherit'}}>
                            <CircularProgress  />
                        </div>
                    ) : (
                            <div>
                                <h1>Panel2</h1>
                                {state.data.map((data, i) => (
                                    <Card key={i} style={{
                                        display: 'flex',
                                        padding: 10,
                                        margin: 5
                                      }}>
                                        <CardMedia
                                            style={{ width: 75, height: 75, }}
                                            image={data.images[0].url}
                                        />
                                        <CardContent>
                                            {data.title}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home;