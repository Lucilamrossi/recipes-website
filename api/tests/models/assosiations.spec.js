const { Recipe, Type, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const { expect } = require('chai');
var chaiAsPromised = require("chai-as-promised");
var chai = require("chai");

chai.use(chaiAsPromised);
chai.should()

describe('Models', () => {
    before(() => conn.authenticate()
        .catch((err) => {
        console.error('Unable to connect to the database:', err);
        }));

    describe('Assosiations', () => {
        before(() => conn.sync({ force: true })) 
        //Testing Tyoe Model:
        describe('Assosiating a Recipe to a Type', () => {
            before(async() => {
                const newRecipe = await Recipe.create({
                    name: 'pizza', 
                    summary: 'valid summary',
                    id: uuidv4() 
                });
                const newType = await Type.create({name: 'Italian'});
                await newRecipe.addType(newType.dataValues.id);
            })
            xit('recipe should have its type', async () => {
                const recipeFound = await Recipe.findAll({
                    include: Type,
                    where: {
                        name: 'pizza'
                    }
                });
                return expect(recipeFound[0].dataValues.types[0].name).to.equal('Italian');
            });
            xit('type should have its recipe', async () => {
                const typeFound = await Type.findAll({
                    include: Recipe,
                    where: {
                        name: 'Italian'
                    }
                });
                return expect(typeFound[0].dataValues.recipes[0].name).to.equal('pizza');
            });
        });
    })
})