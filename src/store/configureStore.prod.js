import { createStore, applyMiddleware } from 'redux';
// import Thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';
import promiseMiddleware from 'middleware/promiseMiddleware';

const routeMiddleware = routerMiddleware(hashHistory);

const middleware = [
    // Thunk,
    routeMiddleware,
    promiseMiddleware,
];

const enhancer = applyMiddleware(...middleware);

export default function configureStore(initialState) {
    return createStore(reducers, initialState, enhancer);
};