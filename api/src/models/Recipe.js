const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('recipe', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      summary: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: -1,
          max: 100,
        }
      },

      health_rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: -1,
          max: 100,
        }
      },
      
      steps: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },

      img: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true
        }
      }
  });
};




