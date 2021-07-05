import { LOADING, ERROR, NOT_ERROR } from './actions';

export const GET_TYPES = 'GET_TYPES';

export const getTypes = function () {
    return function(dispatch) {
        dispatch({type: LOADING})
        dispatch({type: NOT_ERROR})
        return fetch('http://localhost:3001/types')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: GET_TYPES, payload: data });
            })
            .catch(() => {
                dispatch({type: ERROR})
            });
    };
};