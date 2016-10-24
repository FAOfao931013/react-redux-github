import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import * as Search from 'src/Search';
import * as User from 'src/User';

let routes = (
    <div>
        <Route path='/' component={rootNode}>
            <Route path='search' component={Search.containers} />
            <Route path='user/:name' component={User.containers} />
        </Route>
    </div>
);

export default routes;