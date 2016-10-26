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
    USER_FOLLOWINGS
} = actionTypes;

const initialState = Map({
    user: Map(),
    reps: List(),
    activeName: '',
    stars: List(),
    // followings: List()
});

function sortNumber(reps) {
    reps.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
    });
    return reps;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            return state.set('user', toImmutable(action.user));
        case USER_REP:
            const reps = sortNumber(action.reps);
            return state.set('reps', toImmutable(reps));
        case USER_ACTIVENAME:
            return state.set('activeName', action.activeName);
        case USER_STARS:
            return state.set('stars', toImmutable(action.stars));
        case USER_FOLLOWINGS:
            return state.set('followings', toImmutable(action.followings));
        default:
            return state;
    }
};
