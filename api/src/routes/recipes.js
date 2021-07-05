const express = require('express');
const axios = require('axios');
const validator = require('validator');

const { Recipe, Type } = require('../db');
const { API_KEY, BASE_URL } = require('../utils/constants');
const { dbHandler, apiHandler } = require('../utils/recipeHandlers/api-dbHandler');
const { ratingFilter, healthRatingFilter, typesFilter } = require('../utils/recipeHandlers/filtersHandler')
const { recipeSeeker } = require('../utils/recipeHandlers/recipeSeeker')
const { randomSeeker } = require('../utils/recipeHandlers/randomSeeker')

var router = express.Router();
module.exports = router;

router.get('/', async (req, res) => {
    const {
        name, 
        minRating, 
        maxRating, 
        minHrating, 
        maxHrating, 
        types,
    } = req.query;
    
    try {
        if (name) {
            var [dbRecipes, apiRecipes] = await recipeSeeker(name)
        } 
        else {
            var [dbRecipes, apiRecipes] = await randomSeeker()
        }
            let handledDbRecipes = dbHandler(dbRecipes);
            let handledApiRecipes = apiHandler(apiRecipes);
            
            //All recipes
            let response = [...handledDbRecipes, ...handledApiRecipes];

            //Adding filters
            if(minRating && maxRating) response = ratingFilter(response, minRating, maxRating);
            if(minHrating && maxHrating) response = healthRatingFilter(response, minHrating, maxHrating);
            if(types) response = typesFilter(response, types);

            return response.length > 0 ? res.send(response) : res.sendStatus(404);

    } catch (error) {
        res.sendStatus(404);
    };
})

router.get('/:idRecipe', async (req, res) => {
    const { idRecipe } = req.params;
    
    try {
        if(validator.isUUID(idRecipe)) {
            const recipeDB = await Recipe.findByPk(idRecipe, {
                include: Type
            });
        
        if (recipeDB) return res.send(dbHandler([recipeDB]));
    
        } else {
            const recipeAPI = await axios
                .get(`${BASE_URL}/${idRecipe}/information?${API_KEY}`);
            
            if(recipeAPI.data) return res.send(apiHandler([recipeAPI.data]));
            
            else res.status(404).send('Error');
        }
    } catch (error) {
        res.sendStatus(404);
    };
})
