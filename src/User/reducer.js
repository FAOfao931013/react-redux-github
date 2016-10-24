import Immutable from 'immutable';
import * as actionTypes from './actionTypes';
import toImmutable from 'common/toImmutable';

const {
    Map,
    List
} = Immutable;

const {
    USER_INFO
} = actionTypes;

const initialState = Map({
    user: Map()
});

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            return state.set('user', toImmutable(action.user));
        default:
            return state;
    }
};
