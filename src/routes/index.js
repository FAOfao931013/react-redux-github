import React from 'react';
import {
	Route,
	IndexRedirect,
} from 'react-router';
import rootNode from './rootNode';

const search = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('src/Search/containers').default);
  }, 'search');
};

const user = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('src/User/containers').default);
  }, 'user');
};

const routes = (
    <div>
		<Route path='/' component={rootNode}>
			<IndexRedirect to='search' />
			<Route path='search' getComponent={search} />
			<Route path='user/:name' getComponent={user} />
		</Route>
    </div>
);

export default routes;