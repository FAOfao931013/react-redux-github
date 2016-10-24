import {
    createSelector
} from 'reselect';
import * as actions from './actions';
import {
    NAME
} from './constants';

const {
    getUser
} = actions;

const _getUser = state => state[NAME].get('user');
// const _changeActiveName = state => state[NAME].get('activeName');
// const _getTotalPages = state => state[NAME].get('totalPages');
// const _resetPage = state => state[NAME].get('resetPage');

export const getSelector = createSelector(
    [_getUser],
    (user) => {
        return {
            user
        };
    }
);

export function mapStateToProps(state) {
    return {
        user: getSelector(state).user
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUser(name) {
            dispatch(getUser(name));
        }
    };
}
