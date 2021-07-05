const axios = require('axios');
const { Recipe, Type } = require('../../db');
const { API_KEY, BASE_URL } = require('../constants');

async function randomSeeker() {
    //Database recipes
    var dbRecipes = await Recipe.findAll({
        include: Type,
    });

    //Api recipes
    var apiRecipes = await axios
        .get(`${BASE_URL}/random?number=100&${API_KEY}`);

    apiRecipes = apiRecipes.data.recipes;
    
    return [dbRecipes, apiRecipes];
}

module.exports = {randomSeeker}