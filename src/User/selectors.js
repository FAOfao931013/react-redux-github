import {
    createSelector
} from 'reselect';
import * as actions from './actions';
import {
    NAME
} from './constants';

const {
    getUser,
    getUserRep,
    changeActiveName,
    getUserStars,
    getUserFollowings
} = actions;

const _getUser = state => state[NAME].get('user');
const _getUserRep = state => state[NAME].get('reps');
const _changeActiveName = state => state[NAME].get('activeName');
const _getUserStars = state => state[NAME].get('stars');
const _getUserFollowings = state => state[NAME].get('followings');

export const getSelector = createSelector(
    [_getUser, _getUserRep, _changeActiveName, _getUserStars, _getUserFollowings],
    (user, reps, activeName, stars, followings) => {
        return {
            user,
            reps,
            activeName,
            stars,
            followings
        };
    }
);

export function mapStateToProps(state) {
    return {
        user: getSelector(state).user,
        reps: getSelector(state).reps,
        activeName: getSelector(state).activeName,
        stars: getSelector(state).stars,
        followings: getSelector(state).followings,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUser(name) {
            dispatch(getUser(name));
        },
        getUserRep(name) {
            dispatch(getUserRep(name));
        },
        changeActiveName(activeName) {
            dispatch(changeActiveName(activeName));
        },
        getUserStars(name) {
            dispatch(getUserStars(name));
        },
        getUserFollowings(name) {
            dispatch(getUserFollowings(name));
        }
    };
}
