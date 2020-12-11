import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleList';

const BaseRouter = () => (
    <div>
        <Route exact path='/api/people/' component={ArticleList} />
        <Route exact path='/api/people//detail/<int:id>/' component={ArticleList} />
    </div>
);

export default BaseRouter