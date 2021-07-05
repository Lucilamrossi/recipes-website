var express = require('express');
const { Type } = require('../db')

var router = express.Router();
module.exports = router;

router.get('/', async (req, res) => {
    try {
        const types = await Type.findAll();
        const typeNames = types.map(type => {
            return type.name
        });
        
        if (typeNames) return res.send(typeNames);
        else return res.status(404).send('Types not founded')
    } catch (error) {
        res.status(500).send(error);
    };
})

// router.get('/', async (req, res, next) => {

//         Type.findAll()
//         .then(types => {
//             const typeNames = types.map(type => {
//                 return type.name
//             });
//             if (typeNames) return res.send(typeNames);
//             else return res.status(404).send('Types not founded')
//         })
//         .catch(error => {
//             next(error);
//         })
// })