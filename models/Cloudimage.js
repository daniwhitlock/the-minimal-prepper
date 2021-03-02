const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

class Cloudimage extends Model {

}

Cloudimage.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            
        },
        avatar: {
            type: DataTypes.STRING,
            
        },
        cloudinary_id: {
            type: DataTypes.STRING,
           
        },
        // underseven: {
        //     type: DataTypes.STRING,
        //     allowNull: false,

        // },
        // overSeven: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // weeksPrep: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // diet: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

    },
    // {
    //     hooks: {
    //         // set up beforeCreate lifecycle "hook" functionality
    //         async beforeCreate(newUserData) {
    //             newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //             return newUserData;
    //         },

    //         async beforeUpdate(updatedUserData) {
    //             updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //             return updatedUserData;
    //         }
    //     },
    //     sequelize,
    //     timestamps: false,
    //     freezeTableName: true,
    //     underscored: true,
    //     modelName: 'user'
    // }
);

module.exports = Cloudimage;