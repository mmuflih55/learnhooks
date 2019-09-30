import React, { useEffect, useState } from 'react';
import { Grid, Paper, Card, CircularProgress, CardMedia, CardContent, ButtonBase, Input } from '@material-ui/core';
import axios from 'axios';
import useStyles from '../Style/Style';


const Home = ({ history }) => {
    const [state, setState] = useState({ isLoading: true, data: [], nextPageToken: '', search: '' });
    const classes = useStyles();

    function loadMore() {
        setState({ ...state, nextPageToken: state.pagetoken })
    }

    function search(v) {
        if (v.key === 'Enter') {
            let val = v.target.value;
            setState({ ...state, search: val })
        }
    }

    function checkImage(v) {
        if (v.images == null) {
            const parser = new DOMParser();
            let c = parser.parseFromString(v.content, 'text/html');
            let sel = c.querySelector('img')
            console.log("checkimage")
            if(sel===null){
                return null;
            }else{
                return sel.src;
            }
        } else {
            return v.images[0].url;

        }
    }

    useEffect(() => {
        function fdata() {
            console.log("init data")
            axios.get(`https://www.googleapis.com/blogger/v3/blogs/4606092665974021629/posts?key=AIzaSyDci4ioLXX-x0SsC88MOQk399SO0PMPR14${state.nextPageToken === '' ? '' : '&pageToken=' + state.nextPageToken}&fetchImages=true`)
                .then((res) => {
                    setState((s) => ({ ...s, isLoading: false, data: [...s.data, ...res.data.items], pagetoken: res.data.nextPageToken }));
                });
        }

        function searchData() {
            console.log("search data")
            axios.get(`https://www.googleapis.com/blogger/v3/blogs/4606092665974021629/posts/search?q=${state.search}&key=AIzaSyDci4ioLXX-x0SsC88MOQk399SO0PMPR14${state.nextPageToken === '' ? '' : '&pageToken=' + state.nextPageToken}&fetchImages=true`)
                .then((res) => {
                    console.log("search result");
                    console.log(res);
                    setState((s) => ({ ...s, isLoading: false, data: res.data.items, pagetoken: res.data.nextPageToken }));
                });
        }

        if (state.search === '') {
            fdata();
        } else {
            searchData();
        }
    }, [state.nextPageToken, state.search]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
                <Paper className={classes.container}>
                    <h1>Search</h1>
                    <Input onKeyDown={search} />
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
                                {state.data == null ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit', padding: '10px' }}>
                                        <h1>No Data</h1>
                                    </div>
                                ) : state.data.map((data, i) => (
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
                                        onClick={() => { history.push(`/detail/${data.id}`) }}
                                    >
                                        <CardMedia
                                            style={{ width: 75, height: 75, }}
                                            image={checkImage(data)}
                                        />
                                        <CardContent>
                                            {data.title}
                                        </CardContent>
                                    </Card>
                                )
                                )}
                                {
                                    state.pagetoken == null ? null : (
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