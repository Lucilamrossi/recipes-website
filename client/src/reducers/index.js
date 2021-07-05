import { SET_QUERIES, UPLOAD_RECIPES, LOADING, ERROR, NOT_ERROR } from '../actions/actions';
import { GET_RECIPES } from '../actions/getRecipes';
import { GET_RECIPES_DETAILS } from '../actions/getRecipeDetail';
import { GET_TYPES } from '../actions/getTypes';
import { POST_RECIPE } from '../actions/postRecipe';
import { setPages } from '../utils/pages';

const initialState = {
    recipes: [],
    recipeDetails: {},
    recipeCreated: {},
    types: [],
    queries: '',
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: setPages(action.payload),
                loading: false,
            };

        case GET_RECIPES_DETAILS:
            return {
                ...state,
                recipeDetails: action.payload[0],
                loading: false,
            };
                
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
                loading: false,
            };
        
        case POST_RECIPE:
            return {
                ...state,
                recipeCreated: action.payload,
                loading: false,
            };
        
        case SET_QUERIES:
            return {
                ...state,
                queries: action.payload
            };

        case UPLOAD_RECIPES:
            return {
                ...state,
                recipes: [...setPages(action.payload)],
                loading: false
            };

        case LOADING:
            return {
                ...state,
                loading: true,
            };

        case ERROR:
            return {
                ...state,
                error: true
            };
        
        case NOT_ERROR:
            return {
                ...state,
                error: false
            };

        default:
            return state;
    };
};

export default reducer;