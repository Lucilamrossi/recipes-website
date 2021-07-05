const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {dbUser, dbPassword, dbHost, dbName} = require('./utils/config/index')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Recipe, Type } = sequelize.models;

Recipe.belongsToMany(Type, {through: 'recipe_type'});
Type.belongsToMany(Recipe, {through: 'recipe_type'});

module.exports = {
  ...sequelize.models, 
  conn: sequelize, 
};
