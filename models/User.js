const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // needs to be unique
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        underseven: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        overSeven: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weeksPrep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagename: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cloudinary_id: {
            type: DataTypes.STRING,
            allowNull: true,
           
        },
        // diet: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;