import {
    createSelector
} from 'reselect';
import * as actions from './actions';
import {
    NAME
} from './constants';
import {
    push
} from 'react-router-redux';

const {
    getItems,
    changeActiveName
} = actions;

const _getItems = state => state[NAME].get('items');
const _changeActiveName = state => state[NAME].get('activeName');
const _getTotalPages = state => state[NAME].get('totalPages');
const _resetPage = state => state[NAME].get('resetPage');
const _getIsFetching = state => state[NAME].get('isFetching');

export const getSelector = createSelector(
    [
        _getItems,
        _changeActiveName,
        _getTotalPages,
        _resetPage,
        _getIsFetching
    ],
    (
        items,
        activeName,
        totalPages,
        resetPage,
        isFetching
    ) => {
        return {
            items,
            activeName,
            totalPages,
            resetPage,
            isFetching,
        };
    }
);

export function mapStateToProps(state) {
    state = state.components;
    return {
        items: getSelector(state).items,
        activeName: getSelector(state).activeName,
        totalPages: getSelector(state).totalPages,
        resetPage: getSelector(state).resetPage,
        isFetching: getSelector(state).isFetching,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        changeActiveName(activeName) {
            dispatch(changeActiveName(activeName));
        },
        getItems(query, type, page) {
            if (query !== '') dispatch(getItems(query, type, page));
        },
        gotoUser(name) {
            dispatch(push('user/' + name));
        }
    };
}