const { Type, conn } = require('../../src/db.js');
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

  describe('Type', () => {
    beforeEach(() => Type.sync({ force: true }));
    //Testing Tyoe Model:
    describe('Type atributes', () => {
      describe('name', () => {
          xit('should be rejected if name is null', () => {
            return Type.create({})
              .should.be.rejected;
          });
          xit('should work when its a valid name', () => {
            return Type.create({name: 'Ligth'})
              .should.be.fulfilled;
          });
      });

      describe('id', () => {
          xit('should have an id after its created', async () => {
            const newType = await Type.create({name: 'Ligth'})
              return expect(newType.id).not.to.be.null;
          });
      });
    })
  })
})
