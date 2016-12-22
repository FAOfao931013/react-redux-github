import { createStore, applyMiddleware, compose } from 'redux';
// import Thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import reducers from 'reducers';
import DevTools from 'src/DevTools';
import promiseMiddleware from 'middleware/promiseMiddleware';

const routeMiddleware = routerMiddleware(browserHistory);

const middleware = [
    // Thunk,
    routeMiddleware,
    promiseMiddleware,
];

const enhancer = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
);


function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(initialState) {
    return createStore(reducers, initialState, enhancer);
};