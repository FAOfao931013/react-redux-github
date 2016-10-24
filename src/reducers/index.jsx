import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Search from 'src/Search';
import * as User from 'src/User';

export default combineReducers({
    [Search.constants.NAME]: Search.reducer,
    [User.constants.NAME]: User.reducer,
    routing: routerReducer
});