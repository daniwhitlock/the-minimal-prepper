<<<<<<< HEAD
const { Model, DataTypes, Sequelize } = require('sequelize');
=======
const { Model, DataTypes, Sequel } = require('sequelize');
>>>>>>> d611c6596fed9785cd8bfb6c2c67bf8a88d4390f
const sequelize = require('../config/connection');

class Articles extends Model {}

Articles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          header: {
            type: DataTypes.STRING,
            allowNull: false
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          article_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isURL: true
            }
          },
          article_text: {
            type: DataTypes.TEXT,
            allowNull: false
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'articles'
    }
);

module.exports = Articles;