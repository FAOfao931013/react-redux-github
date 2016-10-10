import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import { hashHistory, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';

const routeMiddleware = routerMiddleware(hashHistory);

const middleware = [
    Thunk,
    routeMiddleware
];

const enhancer = applyMiddleware(...middleware);

export default function configureStore(initialState) {
    return createStore(reducers, initialState, enhancer);
};