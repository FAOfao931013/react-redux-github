import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import * as Search from 'src/Search';

let routes = (
    <div>
        <Route path='/' component={rootNode}>
            <Route path='search' component={Search.containers} />
        </Route>
    </div>
);

export default routes;