import { LOADING, ERROR, NOT_ERROR } from './actions';
export const GET_RECIPES_DETAILS = 'GET_RECIPES_DETAILS';

export const getRecipeDetail = function (recipeId) {
    return function(dispatch) {
        dispatch({type: LOADING})
        dispatch({type: NOT_ERROR})
        return fetch(`http://localhost:3001/recipes/${recipeId}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: GET_RECIPES_DETAILS, payload: data });
            })
            .catch(() => {
                dispatch({type: ERROR})
            });
    };
};