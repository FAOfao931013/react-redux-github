import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import { hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import reducers from 'reducers';
import DevTools from 'src/DevTools';

const routeMiddleware = routerMiddleware(hashHistory);

const middleware = [
    Thunk,
    routeMiddleware
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