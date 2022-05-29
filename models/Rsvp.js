const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rsvp extends Model {}

Rsvp.init(
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
        },
        amenity_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'amenities',
                key: 'id'
            }
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
        modelName: 'rsvp',
    }
);

module.exports = Rsvp;