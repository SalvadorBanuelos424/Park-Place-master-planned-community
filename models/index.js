const User = require('./User');
const Home = require('./Home');
const Events = require('./Events');
const Amenities = require('./Amenities');

User.hasOne(Home, {
    foreignKey: 'user_id',
});

Home.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Home, Events, Amenities };