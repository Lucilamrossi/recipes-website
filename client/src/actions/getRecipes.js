import { LOADING, ERROR, NOT_ERROR } from './actions';

export const GET_RECIPES = 'GET_RECIPES';

export const getRecipes = function (query) {
    return function(dispatch) {
        dispatch({type: LOADING})
        dispatch({type: NOT_ERROR})
        return fetch("http://localhost:3001/recipes" + (query ? query : ''))
            .then(response => response.json())
            .then(payload => {
                dispatch({ type: GET_RECIPES, payload});
            })
            .catch(() => {
                dispatch({type: ERROR})
            });
    };
};