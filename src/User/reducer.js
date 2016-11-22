import Immutable from 'immutable';
import * as actionTypes from './actionTypes';
import toImmutable from 'common/toImmutable';

const {
    Map,
    List
} = Immutable;

const {
    USER_INFO,
    USER_REP,
    USER_ACTIVENAME,
    USER_STARS,
    USER_FOLLOWINGS,
    USER_FOLLOWERS,
    REQUEST_POSTS,
} = actionTypes;

const initialState = Map({
    activeName: '',
    user: Map(),
    reps: List(),
    stars: List(),
    followers: List(),
    followings: List(),
    isFetching: false,
});

function sortNumber(reps) {
    reps.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
    });
    return reps;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return state.set('isFetching', action.isFetching);
        case USER_ACTIVENAME:
            return state.set('activeName', action.activeName);
        case USER_INFO:
            return state
                .set('user', toImmutable(action.user))
                .set('isFetching', action.isFetching);
        case USER_REP:
            const reps = sortNumber(action.reps);
            return state
                .set('reps', toImmutable(reps))
                .set('isFetching', action.isFetching);
        case USER_STARS:
            return state
                .set('stars', toImmutable(action.stars))
                .set('isFetching', action.isFetching);
        case USER_FOLLOWERS:
            return state
                .set('followers', toImmutable(action.followers))
                .set('isFetching', action.isFetching);
        case USER_FOLLOWINGS:
            return state
                .set('followings', toImmutable(action.followings))
                .set('isFetching', action.isFetching);
        default:
            return state;
    }
};