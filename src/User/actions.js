import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    USER_INFO,
    USER_REP,
    USER_ACTIVENAME,
    USER_STARS,
    USER_FOLLOWINGS,
    USER_FOLLOWERS,
} = actionTypes;

export function changeActiveName(activeName) {
    return {
        type: USER_ACTIVENAME,
        activeName
    };
}

function getUserAction(user) {
    return {
        type: USER_INFO,
        user,
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

function getUserRepAction(reps) {
    return {
        type: USER_REP,
        reps,
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

function getUserStarsAciton(stars) {
    return {
        type: USER_STARS,
        stars
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

function getUserFollowersAciton(followers) {
    return {
        type: USER_FOLLOWERS,
        followers
    };
}

export function getUserFollowers(name) {
    const req = new Request('https://api.github.com/users/' + name + '/followers');
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(async(res) => {
                const getFol = res.map(r => {
                    return fetch(r.url)
                        .then(_res => _res.json())
                        .then(_res => _res);
                });
                const result = await Promise.all(getFol);
                dispatch(getUserFollowersAciton(result));
            });
    };
}

function getUserFollowingsAction(followings) {
    return {
        type: USER_FOLLOWINGS,
        followings
    };
}

export function getUserFollowings(name) {
    const req = new Request('https://api.github.com/users/' + name + '/following');

    /**
     * async/await
     */
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(async(res) => {
                const getFol = res.map(r => {
                    return fetch(r.url)
                        .then(_res => _res.json())
                        .then(_res => _res);
                });
                const result = await Promise.all(getFol);
                dispatch(getUserFollowingsAction(result));
            });

        /**
         * promise
         */
        // let fol = [];
        // return fetch(req)
        //     .then(res => res.json())
        //     .then(res => {
        //         res.map(r => {
        //             fetch(r.url)
        //                 .then(_res => _res.json())
        //                 .then(_res => {
        //                     fol.push(_res);
        //                 })
        //                 .then(() => dispatch(getUserFollowingsAction(fol)));
        //         });
        //     });
    };
}