import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Detail = lazy(() => import('./pages/Detail'));

const MyRoute = () => {
    return (
        <Router>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                <Route path="/" exact component={()=><Home/>} />
                <Route path="/profile" component={()=><Profile/>} />
                <Route path="/detail" component={()=><Detail/>} />
                </Switch>
            </Suspense>
            <Footer/>
        </Router>
    );
  }
  
  export default MyRoute;