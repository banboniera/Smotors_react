import React from 'react';
import { Route } from 'react-router-dom';
import ClientList from './containers/ClientList';

const BaseRouter = () => (
    <div>
        <Route exact path='/api/people/' component={ClientList} />
        <Route exact path='/api/people//detail/<int:id>/' component={ClientList} />
    </div>
);

export default BaseRouter