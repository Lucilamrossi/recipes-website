import { LOADING, ERROR, NOT_ERROR } from './actions';

export const POST_RECIPE = 'POST_RECIPE';

export const postRecipe = function (recipe) {
    return function(dispatch) {
        dispatch({type: LOADING})
        dispatch({type: NOT_ERROR})
        return fetch('http://localhost:3001/recipe', {
            method: 'POST', 
            body: JSON.stringify(recipe),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({type: POST_RECIPE, payload: data})
            })
            .catch(() => {
                dispatch({type: ERROR})
            });
    };
};