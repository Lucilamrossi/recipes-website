export const SET_QUERIES = 'SET_QUERIES';
export const UPLOAD_RECIPES = 'UPLOAD_RECIPES'
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const NOT_ERROR = 'NOT_ERROR'

export const setQueries = function (query) {
    return {
        type: SET_QUERIES,
        payload: query
    };
};

export const uploadRecipes = function (recipes) {
    return function(dispatch) {
        dispatch({type: UPLOAD_RECIPES, payload: recipes})
    };
};



