import React from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {Register, SignIn} from './containers/auth';

import "./App.css";
import {Dashboard} from './containers/dashboard';

const App = () => {
    return (<Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route exact path="/auth/register/"
                component={Register}/>
            <Route exact path="/auth/signin/"
                component={SignIn}/>

            <Route exact path="/dashboard/"
                component={Dashboard}/>
        </Switch>
    </Router>);
}

export default App;
