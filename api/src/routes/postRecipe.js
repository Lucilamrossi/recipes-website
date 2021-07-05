const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { Recipe, Type } = require('../db');

var router = express.Router();
module.exports = router;

router.post('/', async (req, res) => {
    const { name, summary, rating, health_rating, steps, img, types } = req.body

    try {
        let newRecipe = {
            id: uuidv4(),
            name,
            summary,
            rating: rating || -1,
            health_rating: health_rating || -1,
            steps: steps || [],
            img: img || null
        }

        newRecipe = await Recipe.create(newRecipe);

        if(types) {
            let promisifiedTypes = types.map(type => {
                let promise = Type.findOrCreate({
                    where: {
                        name: type
                    }
                }).then(type => {
                    newRecipe.addType(type[0])
                })
                return promise;
            })
            Promise.all(promisifiedTypes)
        }
        
        const recipeFounded = await Recipe.findByPk(newRecipe.id, {
            include: Type
        });
        
        if (recipeFounded) return res.send(recipeFounded);
        
        else return res.sendStatus(404);
    } catch (error) {
        res.sendStatus(404);
    };
})
