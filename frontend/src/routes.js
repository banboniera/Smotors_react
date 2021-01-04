import React from 'react';
import { Route } from 'react-router-dom';
import ClientDetail from './containers/ClientDetailView';
import ClientList from './containers/ClientListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/api/people/' component={ClientList} />
        <Route exact path='/api/people/:clientID' component={ClientDetail} />
    </div>
);

export default BaseRouter