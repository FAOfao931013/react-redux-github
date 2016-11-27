import Immutable from 'immutable';
import * as actionTypes from './actionTypes';
import toImmutable from 'common/toImmutable';

const {
    Map,
    List
} = Immutable;

const {
    USER_REQUEST,
    USER_FAILURE,
    USER_ACTIVENAME,
    USER_INFO_SUCCESS,
    USER_REP_SUCCESS,
    USER_STARS_SUCCESS,
    USER_FOLLOWERS_SUCCESS,
    USER_FOLLOWINGS_SUCCESS,
} = actionTypes;

const initialState = Map({
    activeName: '',
    user: Map(),
    reps: List(),
    stars: List(),
    followers: List(),
    followings: List(),
    isFetching: false,
    error: ''
});

function sortNumber(reps) {
    reps.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
    });
    return reps;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return state.set('isFetching', action.isFetching);
        case USER_ACTIVENAME:
            return state.set('activeName', action.activeName);
        case USER_INFO_SUCCESS:
            return state
                .set('user', toImmutable(action.result))
                .set('isFetching', action.isFetching);
        case USER_REP_SUCCESS:
            const reps = sortNumber(action.result);
            return state
                .set('reps', toImmutable(reps))
                .set('isFetching', action.isFetching);
        case USER_STARS_SUCCESS:
            return state
                .set('stars', toImmutable(action.result))
                .set('isFetching', action.isFetching);
        case USER_FOLLOWERS_SUCCESS:
            return state
                .set('followers', toImmutable(action.result))
                .set('isFetching', action.isFetching);
        case USER_FOLLOWINGS_SUCCESS:
            return state
                .set('followings', toImmutable(action.result))
                .set('isFetching', action.isFetching);
        case USER_FAILURE:
            return state.set('error', action.error);
        default:
            return state;
    }
};