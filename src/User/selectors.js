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
    changeActiveName
} = actions;

const _getUser = state => state[NAME].get('user');
const _getUserRep = state => state[NAME].get('reps');
const _changeActiveName = state => state[NAME].get('activeName');

export const getSelector = createSelector(
    [_getUser, _getUserRep, _changeActiveName],
    (user, reps, activeName) => {
        return {
            user,
            reps,
            activeName
        };
    }
);

export function mapStateToProps(state) {
    return {
        user: getSelector(state).user,
        reps: getSelector(state).reps,
        activeName: getSelector(state).activeName,
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
    };
}
