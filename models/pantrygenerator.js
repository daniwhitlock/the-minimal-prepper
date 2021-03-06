const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Pantry extends Model { }

Pantry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        kids: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adults: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        goal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grainsAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        legumesAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        milkAmount:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        sugarAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        fatsAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        fruitsVeggiesAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        saltAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        waterAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = Pantry;