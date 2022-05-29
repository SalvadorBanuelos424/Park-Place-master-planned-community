const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservations extends Model {}

Reservations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        attendance: {
            type: DataTypes.STRING,
            allowNull: false,
        },                        
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'events',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservations',
    }
);

module.exports = Reservations;