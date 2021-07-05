const { Router } = require('express');

const recipes = require('./recipes')
const types = require('./types')
const postRecipe = require('./postRecipe')

const router = Router();

router.use('/recipes', recipes)
router.use('/types', types)
router.use('/recipe', postRecipe)

module.exports = router;
