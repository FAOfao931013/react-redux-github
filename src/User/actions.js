import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    USER_INFO
} = actionTypes;

export function getUserAction(user) {
    return {
        type: USER_INFO,
        user: user,
    };
}

export function getUser(name) {
    const req = new Request('https://api.github.com/users/' + name);
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(res => {
                dispatch(getUserAction(res));
            });
    };
}
