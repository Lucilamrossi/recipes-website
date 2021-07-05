const { apiKeyNumber } = require('./config/index')

const BASE_URL =  'https://api.spoonacular.com/recipes';
const COMPLEX_URL = BASE_URL + '/complexSearch?addRecipeInformation=true';
const API_KEY = `apiKey=${apiKeyNumber}`;
const typesArray = ["gluten free", "ketogenic", "lacto ovo vegetarian", 
"vegan", "pescatarian", "paleolithic", "primal", "whole30", "dairy free"];


module.exports = { 
    BASE_URL,
    COMPLEX_URL, 
    API_KEY,
    typesArray
}