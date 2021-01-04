import React from 'react';
import { Route } from 'react-router-dom';
import ClientDetail from './containers/ClientDetailView';
import ClientList from './containers/ClientListView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/api/people/' component={ClientList} />
        <Route exact path='/api/people/:clientID' component={ClientDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
);

export default BaseRouter