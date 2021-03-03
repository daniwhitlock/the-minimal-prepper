const { Model, DataTypes } = require('sequelize');
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
            type: DataTypes.STRING,
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