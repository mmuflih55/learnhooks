import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Container,CircularProgress} from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

const Blogs = lazy(() => import('./pages/Blogs'));
const Profile = lazy(() => import('./pages/Profile'));
const Detail = lazy(() => import('./pages/Detail'));

const MyRoute = () => {
    return (
        <Router>
            <Header />
            <Container style={{minHeight:'85vh',marginTop:'15px',display:'flex',justifyContent:'center'}}>
                <Suspense fallback={<CircularProgress  />}>
                    <Switch>
                        <Route path="/" exact component={() => <Profile />} />
                        <Route path="/blogs" component={(props) => <Blogs {...props} />} />
                        <Route path="/detail/:id" component={(props) => <Detail {...props} />} />
                    </Switch>
                </Suspense>
            </Container>
            <Footer />
        </Router>
    );
}

export default MyRoute;