const { Recipe, conn } = require('../../src/db.js');
// const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');
var chaiAsPromised = require("chai-as-promised");
var chai = require("chai");

chai.use(chaiAsPromised);
chai.should()

describe('Models', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Recipe', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    //Testing Recipe Model:
    describe('Recipe atributes', () => {

      describe('name', () => {
        xit('should be rejected if name is null', () => {
          return Recipe.create({
            summary: 'valid summary', 
            id: uuidv4() 
          }).should.be.rejected;
        });
        xit('should work when its a valid name', () => {
          return Recipe.create({
            name: 'Milanesa', 
            summary: 'valid summary', 
            id: uuidv4() 
          }).should.be.fulfilled;
        });
      });

      describe('summary', () => {
        xit('should be rejected if summary is null', () => {
          return Recipe.create({
            name: 'Pizza',
            id: uuidv4() 
          }).should.be.rejected;
        });
        xit('should work when its a valid summary', () => {
          return Recipe.create({
            name: 'Pizza', 
            summary: 'valid summary', 
            id: uuidv4() 
          }).should.be.fulfilled;
        });
      })

      describe('id', () => {
        xit('should be rejected if id is null', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary' 
          }).should.be.rejected;
        });
        xit('should work when its a valid id', () => {
          return Recipe.create({
            name: 'Pizza', 
            summary: 'valid summary', 
            id: uuidv4() 
          }).should.be.fulfilled;
        });
      })

      describe('rating', () => {
        xit('should be rejected if rating is < 0', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary',
            rating: -5 
          }).should.be.rejected;
        });
        xit('should be rejected if rating is > 100', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary',
            rating: 140 
          }).should.be.rejected;
        });
        xit('should work when its a valid rating', () => {
          return Recipe.create({
            name: 'Pizza', 
            summary: 'valid summary', 
            id: uuidv4(),
            rating: 80 
          }).should.be.fulfilled;
        });
      })

      describe('healt rating', () => {
        xit('should be rejected if health rating is < 0', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary',
            health_rating: -5 
          }).should.be.rejected;
        });
        xit('should be rejected if health rating is > 100', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary',
            health_rating: 140 
          }).should.be.rejected;
        });
        xit('should work when its a valid health rating', () => {
          return Recipe.create({
            name: 'Pizza', 
            summary: 'valid summary', 
            id: uuidv4(),
            health_rating: 80 
          }).should.be.fulfilled;
        });
      })

      describe('steps', () => {
        xit('should be rejected if steps is not an array', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary',
            steps: 'hello Im a step' 
          }).should.be.rejected;
        });
        xit('should work when its a valid step', () => {
          return Recipe.create({
            name: 'Pizza', 
            summary: 'valid summary', 
            id: uuidv4(),
            steps: [] 
          }).should.be.fulfilled;
        });
      })

      describe('img', () => {
        xit('should be rejected if img is not an URL', () => {
          return Recipe.create({
            name: 'Pizza',
            summary: 'valid summary',
            img: 'hello Im a step' 
          }).should.be.rejected;
        });
        xit('should work when its a valid img', () => {
          return Recipe.create({
            name: 'Pizza', 
            summary: 'valid summary', 
            id: uuidv4(),
            img: 'http://image.jpg' 
          }).should.be.fulfilled;
        });
      })
    })
  });
});
