import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    SEARCH_ITEMS,
    SEARCH_ACTIVENAME,
    REQUEST_POSTS,
} = actionTypes;

export function getItemsAction(items, totalCount) {
    return {
        type: SEARCH_ITEMS,
        items: items,
        totalCount: totalCount,
        isFetching: false,
    };
}

export function changeActiveName(activeName) {
    return {
        type: SEARCH_ACTIVENAME,
        activeName: activeName,
    };
}

export function requestPosts() {
    return {
        type: REQUEST_POSTS,
        isFetching: true,
    };
}

export function getItems(query, type, page = 1) {
    const url = 'https://api.github.com/search/' + type + '?q=' + query + '&page=' + page;
    const req = new Request(url, {
        method: 'GET'
    });

    return dispatch => {
        dispatch(requestPosts());
        return fetch(req)
            .then(res => res.json())
            .then(async(res) => {
                if (type === 'users') {
                    const getUsers = res.items.map(r => {
                        return fetch(r.url)
                            .then(_res => _res.json())
                            .then(_res => _res);
                    });
                    const result = await Promise.all(getUsers);
                    dispatch(getItemsAction(result, res.total_count));
                } else {
                    dispatch(getItemsAction(res.items, res.total_count));
                }
            });
    };
}