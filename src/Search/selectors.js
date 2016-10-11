import {
    createSelector
} from 'reselect';
import * as actions from './actions';
import {
    NAME
} from './constants';

const {
    getItems,
    changeActiveName
} = actions;

const _getItems = state => state[NAME].get('items');
const _changeActiveName = state => state[NAME].get('activeName');
const _getTotalPages = state => state[NAME].get('totalPages');
const _resetPage = state => state[NAME].get('resetPage');

export const getSelector = createSelector(
    [_getItems, _changeActiveName, _getTotalPages, _resetPage],
    (items, activeName, totalPages, resetPage) => {
        return {
            items,
            activeName,
            totalPages,
            resetPage
        };
    }
);

export function mapStateToProps(state) {
    return {
        items: getSelector(state).items,
        activeName: getSelector(state).activeName,
        totalPages: getSelector(state).totalPages,
        resetPage: getSelector(state).resetPage,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        changeActiveName(activeName) {
            dispatch(changeActiveName(activeName));
        },
        getItems(query, type, page) {
            if (query !== '') dispatch(getItems(query, type, page));
        }
    };
}
