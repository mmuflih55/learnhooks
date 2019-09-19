import React from 'react';
import {Grid,Card} from '@material-ui/core';

const Home = ()=>(
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Card>
                <h1>Panel1</h1>
            </Card>
        </Grid>
        <Grid item xs={12} md={8}>
            <Card>
                <h1>Panel2</h1>
                <h1>Hello World</h1>                
            </Card>
        </Grid>
    </Grid>
)

export default Home;