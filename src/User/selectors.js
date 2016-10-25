import {
    createSelector
} from 'reselect';
import * as actions from './actions';
import {
    NAME
} from './constants';

const {
    getUser,
    getUserRep
} = actions;

const _getUser = state => state[NAME].get('user');
const _getUserRep = state => state[NAME].get('reps');
// const _changeActiveName = state => state[NAME].get('activeName');

export const getSelector = createSelector(
    [_getUser, _getUserRep],
    (user, reps) => {
        return {
            user,
            reps
        };
    }
);

export function mapStateToProps(state) {
    return {
        user: getSelector(state).user,
        reps: getSelector(state).reps
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUser(name) {
            dispatch(getUser(name));
        },
        getUserRep(name) {
            dispatch(getUserRep(name));
        }
    };
}
