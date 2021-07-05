const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);

const recipe = {
  name: 'Milanesa a la napolitana',
  id: uuidv4(),
  summary: 'valid summary'
};

describe('Recipe routes', () => {
  
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => conn.sync({ force: true })
    .then(() => Recipe.create(recipe))
    );

  describe('GET /recipes', () => {
    xit('should get 200', async () => {
      await agent.get('/recipes').expect(200)
    });

    xit('should responde with a json element', async () => {
      await agent.get('/recipes').expect('Content-Type', /json/)
    });

    xit('should find more than 9 recipes if no query is given', () =>
      agent.get('/recipes')
      .then((res) => {
        expect(res.body).to.have.lengthOf.above(9)
      })
    );
  });

  describe('GET /recipes with queries', (done) => {
    xit('should get 200', async () =>{
      await agent.get('/recipes/?name=Milanesa').expect(200)
    });
    xit('should find the created recipe "Milanesa a la napolitana"', (done) => {
      agent.get('/recipes/?name=Milanesa')
      .then((res) => {
        expect(res.body[0].name).to.equal('Milanesa a la napolitana')
        done()
      })
    });
    xit('should NOT find the created recipe "Milanesa a la napolitana"', () =>
      agent.get('/recipes/?name=pasta')
      .then((res) => {
        expect(res.body[0].name).to.not.equal('Milanesa a la napolitana')
      })
    );
  });

  describe('GET /recipes with wrong query', () => {
    xit('should get 404', async() =>
      await agent.get('/recipes/?name=aaaaaaaaaaaaa').expect(404)
    );
  });

  describe('GET /recipes/:idRecipe', () => {
    xit('should get 200', (done) =>
      agent.get(`/recipes/${recipe.id}`).expect(200)
      .then(done())
    );
    xit('should get the right recipe', () =>
      agent.get(`/recipes/${recipe.id}`)
      .then((res) => {
        expect(res.body[0].name).to.equal('Milanesa a la napolitana')
      })
    );
  });
});