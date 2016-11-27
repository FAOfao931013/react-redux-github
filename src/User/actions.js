import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    USER_ACTIVENAME,
    USER_REQUEST,
    USER_FAILURE,
    USER_INFO_SUCCESS,
    USER_REP_SUCCESS,
    USER_STARS_SUCCESS,
    USER_FOLLOWERS_SUCCESS,
    USER_FOLLOWINGS_SUCCESS,
} = actionTypes;

export function changeActiveName(activeName) {
    return {
        type: USER_ACTIVENAME,
        activeName,
    };
}

export function getUser(name) {
    const req = new Request('https://api.github.com/users/' + name);
    return {
        type: [
            USER_REQUEST,
            USER_INFO_SUCCESS,
            USER_FAILURE,
        ],
        promise: fetch(req)
            .then(res => res.json())
            .then(res => res)
    };
}

export function getUserRep(name) {
    const req = new Request('https://api.github.com/users/' + name + '/repos');
    return {
        type: [
            USER_REQUEST,
            USER_REP_SUCCESS,
            USER_FAILURE,
        ],
        promise: fetch(req)
            .then(res => res.json())
            .then(res => res)
    };
}

export function getUserStars(name) {
    const req = new Request('https://api.github.com/users/' + name + '/starred');
    return {
        type: [
            USER_REQUEST,
            USER_STARS_SUCCESS,
            USER_FAILURE,
        ],
        promise: fetch(req)
            .then(res => res.json())
            .then(res => res)
    };
}

export function getUserFollowers(name) {
    const req = new Request('https://api.github.com/users/' + name + '/followers');
    return {
        type: [
            USER_REQUEST,
            USER_FOLLOWERS_SUCCESS,
            USER_FAILURE,
        ],
        promise: fetch(req)
            .then(res => res.json())
            .then(async(res) => {
                const getFol = res.map(r => {
                    return fetch(r.url)
                        .then(_res => _res.json())
                        .then(_res => _res);
                });
                const result = await Promise.all(getFol);
                return result;
            })
    };
}

export function getUserFollowings(name) {
    const req = new Request('https://api.github.com/users/' + name + '/following');
    return {
        type: [
            USER_REQUEST,
            USER_FOLLOWINGS_SUCCESS,
            USER_FAILURE,
        ],
        promise: fetch(req)
            .then(res => res.json())
            .then(async(res) => {
                const getFol = res.map(r => {
                    return fetch(r.url)
                        .then(_res => _res.json())
                        .then(_res => _res);
                });
                const result = await Promise.all(getFol);
                return result;
            })
    };
}