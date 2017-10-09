import {
    createSelector
} from 'reselect';
import * as actions from './actions';
import {
    NAME
} from './constants';

const {
    changeActiveName,
    getUser,
    getUserRep,
    getUserStars,
    getUserFollowings,
    getUserFollowers,
} = actions;

const _changeActiveName = state => state[NAME].get('activeName');
const _getUser = state => state[NAME].get('user');
const _getUserRep = state => state[NAME].get('reps');
const _getUserStars = state => state[NAME].get('stars');
const _getUserFollowings = state => state[NAME].get('followings');
const _getUserFollowers = state => state[NAME].get('followers');
const _getIsFetching = state => state[NAME].get('isFetching');

export const getSelector = createSelector(
    [
        _changeActiveName,
        _getUser,
        _getUserRep,
        _getUserStars,
        _getUserFollowings,
        _getUserFollowers,
        _getIsFetching,
    ],
    (
        activeName,
        user,
        reps,
        stars,
        followings,
        followers,
        isFetching,
    ) => {
        return {
            activeName,
            user,
            reps,
            stars,
            followings,
            followers,
            isFetching,
        };
    }
);

export function mapStateToProps(state) {
    state = state.components;
    return {
        activeName: getSelector(state).activeName,
        user: getSelector(state).user,
        reps: getSelector(state).reps,
        stars: getSelector(state).stars,
        followers: getSelector(state).followers,
        followings: getSelector(state).followings,
        isFetching: getSelector(state).isFetching,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        changeActiveName(activeName) {
            dispatch(changeActiveName(activeName));
        },
        getUser(name) {
            dispatch(getUser(name));
        },
        getUserRep(name) {
            dispatch(getUserRep(name));
        },
        getUserStars(name) {
            dispatch(getUserStars(name));
        },
        getUserFollowers(name) {
            dispatch(getUserFollowers(name));
        },
        getUserFollowings(name) {
            dispatch(getUserFollowings(name));
        },
    };
}