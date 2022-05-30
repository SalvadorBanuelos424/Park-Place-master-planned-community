const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Home extends Model {}

Home.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        address: {
            type: DataTypes.STRING,
            allowNull: false,            
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'home',
    }
);

module.exports = Home;
