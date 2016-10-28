import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    USER_INFO,
    USER_REP,
    USER_ACTIVENAME,
    USER_STARS,
    USER_FOLLOWINGS
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

export function getUserRepAction(reps) {
    return {
        type: USER_REP,
        reps: reps,
    };
}

export function getUserRep(name) {
    const req = new Request('https://api.github.com/users/' + name + '/repos');
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(res => {
                dispatch(getUserRepAction(res));
            });
    };
}


export function changeActiveName(activeName) {
    return {
        type: USER_ACTIVENAME,
        activeName: activeName
    };
}

export function getUserStarsAciton(stars) {
    return {
        type:USER_STARS,
        stars:stars
    };
}

export function getUserStars(name) {
    const req = new Request('https://api.github.com/users/' + name + '/starred');
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(res => {
                dispatch(getUserStarsAciton(res));
            });
    };
}

export function getUserFollowingsAction(followings) {
    return {
        type:USER_FOLLOWINGS,
        followings:followings
    };
}

export function getUserFollowings(name) {
    const req = new Request('https://api.github.com/users/' + name + '/following');
    let fol = [];
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(res => {
                res.map(r => {
                    fetch(r.url)
                    .then(_res => _res.json())
                    .then(_res => {
                        fol.push(_res);
                    })
                    .then(() => dispatch(getUserFollowingsAction(fol)));
                });
            });
    };
}
