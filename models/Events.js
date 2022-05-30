const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Events extends Model {}

Events.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
        event_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'gallery',
    }
);

module.exports = Events;