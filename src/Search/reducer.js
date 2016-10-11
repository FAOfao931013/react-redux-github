import Immutable from 'immutable';
import * as actionTypes from './actionTypes';
import toImmutable from 'common/toImmutable';

const {
    Map,
    List
} = Immutable;

const {
    SEARCH_ITEMS,
    SEARCH_ACTIVENAME
} = actionTypes;

const initialState = Map({
    items: List(),
    activeName: '',
    totalPages: 0,
    resetPage: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ITEMS:
            let totalPages;
            if (state.get('totalPages') === 0) {
                if (action.totalCount === action.items.length) {
                    totalPages = 1;
                } else {
                    totalPages = Number((action.totalCount / action.items.length).toFixed(0)) + 1;
                }
            } else {
                totalPages = state.get('totalPages');
            }

            return state
                .set('items', toImmutable(action.items))
                .set('totalPages', totalPages)
                .set('resetPage', false);
        case SEARCH_ACTIVENAME:
            return state
                .set('activeName', action.activeName)
                .set('totalPages', 0)
                .set('resetPage', true);
        default:
            return state;
    }
};
