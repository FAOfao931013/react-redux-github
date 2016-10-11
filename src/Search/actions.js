import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    SEARCH_ITEMS,
    SEARCH_ACTIVENAME
} = actionTypes;

export function getItemsAction(items, totalCount) {
    return {
        type: SEARCH_ITEMS,
        items: items,
        totalCount:totalCount
    };
}

export function changeActiveName(activeName) {
    return {
        type: SEARCH_ACTIVENAME,
        activeName: activeName
    };
}

export function getItems(query, type, page = 1) {
    return dispatch => {
        return fetch('https://api.github.com/search/' + type + '?q=' + query + '&page=' + page)
            .then(res => res.json())
            .then(res => {
                dispatch(getItemsAction(res.items, res.total_count));
            });
    };
}