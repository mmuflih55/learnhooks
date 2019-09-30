import React, { useEffect, useState } from 'react';
import { Grid, Paper, Card, CircularProgress, CardMedia, CardContent,ButtonBase,Input } from '@material-ui/core';
import axios from 'axios';
import useStyles from '../Style/Style';


const Home = ({history}) => {
    const [state, setState] = useState({ isLoading: true, data: [], nextPageToken: '' });
    const classes = useStyles();

    function loadMore(){
        setState({...state,nextPageToken:state.pagetoken})
    }

    useEffect(() => {
        function fdata() {
            // searchquery, save it for later update
            // https://www.googleapis.com/blogger/v3/blogs/4606092665974021629/posts/search?q=query

            axios.get(`https://www.googleapis.com/blogger/v3/blogs/4606092665974021629/posts?key=AIzaSyDci4ioLXX-x0SsC88MOQk399SO0PMPR14${state.nextPageToken === '' ? '' : '&pageToken=' + state.nextPageToken}&fetchImages=true`)
                .then((res) => {
                    setState((s) => ({ ...s, isLoading: false, data: [...s.data,...res.data.items],pagetoken: res.data.nextPageToken }));
                });
        }
        fdata();
    }, [state.nextPageToken]);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
                <Paper className={classes.container}>
                    <h1>Search</h1>
                    <Input></Input>
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper className={`${classes.container} ${classes.postlistcon}`}>
                    {state.isLoading === true ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit', padding: '10px' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                            <div>
                                <h1>Posts</h1>
                                {state.data.map((data, i) => (
                                    <Card 
                                    key={i} 
                                    style={
                                        {
                                            display: 'flex',
                                            padding: 10,
                                            margin: 5
                                        }
                                    }
                                    className={classes.btn}
                                    onClick={()=>{history.push(`/detail/${data.id}`)}}
                                    >
                                        <CardMedia
                                            style={{ width: 75, height: 75, }}
                                            image={data.images[0].url}
                                        />
                                        <CardContent>
                                            {data.title}
                                        </CardContent>
                                    </Card>
                                )
                                )}
                                {
                                    state.pagetoken==null?null:(
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit', padding: '10px' }}>
                                            <ButtonBase onClick={loadMore}>Load More</ButtonBase>
                                        </div>
                                    )
                                }
                            </div>
                        )}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home;