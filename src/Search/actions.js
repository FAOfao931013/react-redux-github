import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    SEARCH_ACTIVENAME,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} = actionTypes;

export function changeActiveName(activeName) {
    return {
        type: SEARCH_ACTIVENAME,
        activeName: activeName,
    };
}

export function getItems(query, type, page = 1) {
    const url = 'https://api.github.com/search/' + type + '?q=' + query + '&page=' + page;
    const req = new Request(url, {
        method: 'GET'
    });

    return {
        type: [
            SEARCH_REQUEST,
            SEARCH_SUCCESS,
            SEARCH_FAILURE,
        ],
        promise: fetch(req)
            .then(res => res.json())
            .then(async(res) => {
                if (type === 'users') {
                    const getUsers = res.items.map(r => {
                        return fetch(r.url)
                            .then(_res => _res.json())
                            .then(_res => _res);
                    });
                    const items = await Promise.all(getUsers);
                    return {
                        items: items,
                        totalCount: res.total_count,
                    };
                } else {
                    return {
                        items: res.items,
                        totalCount: res.total_count,
                    };
                }
            })
            .catch(error => error)
    };
}