const { Op } = require("sequelize");
const axios = require('axios');
const { Recipe, Type } = require('../../db');
const { COMPLEX_URL, API_KEY } = require('../constants');

async function recipeSeeker (name) {
    //Database recipes
    var dbRecipes = await Recipe.findAll({
        include: Type,
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        }
    });

    //Api recipes
    var apiRecipes = await axios
        .get(`${COMPLEX_URL}&query=${name}&number=100&${API_KEY}`);
    apiRecipes = apiRecipes.data.results;

    return [dbRecipes, apiRecipes];
}

module.exports = {recipeSeeker}