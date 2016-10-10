import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Search from 'src/Search';

export default combineReducers({
    [Search.constants.NAME]: Search.reducer,
    routing: routerReducer
});