const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Amenities extends Model {}

Amenities.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        amenity_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
        amenity_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amenity_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'amenities',
    }
);

module.exports = Amenities;