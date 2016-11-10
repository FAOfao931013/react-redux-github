import {
	Route
} from 'react-router';
import rootNode from './rootNode';
import * as Search from 'src/Search';
import * as User from 'src/User';

// const routes = (
//     <div>
//         <Route path='/' component={rootNode}>
//             <Route path='search' component={Search.containers} />
//             <Route path='user/:name' component={User.containers} />
//         </Route>
//     </div>
// );

const routes = {
	path: '/',
	component: rootNode,
	indexRoute: { onEnter: (nextState, replace) => replace('search') },
	childRoutes: [{
		path: 'search',
		component: Search.containers
	}, {
		path: 'user/:name',
		component: User.containers
	}, ]
};

export default routes;