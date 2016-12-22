import React from 'react';
import {
	Route,
	IndexRedirect,
} from 'react-router';
import rootNode from './rootNode';
import * as Search from 'src/Search';
import * as User from 'src/User';

const routes = (
    <div>
		<Route path='/' component={rootNode}>
			<IndexRedirect to='search' />
			<Route path='search' component={Search.containers} />
			<Route path='user/:name' component={User.containers} />
		</Route>
    </div>
);

export default routes;