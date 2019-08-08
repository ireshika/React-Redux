import { SIGN_IN, SIGN_OUT, FETCH_USER, FETCH_FEEDS, FETCH_USERS, FETCH_IMAGES, FETCH_STATS } from './types';

import jsonPlaceholder from '../api/jsonplaceholder';
import history from '../history';

const userName = "emma";
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchUser = (id) => {
    return async function (dispatch, getState) {

        return await jsonPlaceholder.get(`/users/${userName}`).then(({ data }) => {
            dispatch({
                type: FETCH_USER,
                payload: data
            })
        })
            .catch((error) => {
                console.log("DELETE_ERROR: ");
            })
    };
};

export const fetchFeeds = (id) => {
    return async function (dispatch, getState) {
        return await jsonPlaceholder.get(`/users/${userName}/likes`).then(({ data }) => {
            dispatch({
                type: FETCH_FEEDS,
                payload: data
            })
            console.log(data);
        })
            .catch((error) => {
                console.log("DELETE_ERROR: ");
            })
    };
};

export const fetchUsers = (term) => {

    return async function (dispatch, getState) {
        return await jsonPlaceholder.get('/search/users', {
            params: { query: term.input }
        }).then(({ data }) => {
            dispatch({
                type: FETCH_USERS,
                payload: data
            })
            console.log(data);

            history.push('/streams/users');
        })
            .catch((error) => {
                console.log("DELETE_ERROR: ");
            })
    };
};

export const fetchImages = (term) => {

    return async function (dispatch, getState) {
        return await jsonPlaceholder.get('/search/photos', {
            params: { query: term.input }
        }).then(({ data }) => {
            dispatch({
                type: FETCH_IMAGES,
                payload: data
            })
        })
            .catch((error) => {
                console.log("DELETE_ERROR: ");
            })
    };
};

export const fetchStats = () => {

    return async function (dispatch, getState) {
        return await jsonPlaceholder.get(`/users/${userName}/statistics`).then(({ data }) => {
            dispatch({
                type: FETCH_STATS,
                payload: data
            })
        })
            .catch((error) => {
                console.log("DELETE_ERROR: ");
            })
    };
};
