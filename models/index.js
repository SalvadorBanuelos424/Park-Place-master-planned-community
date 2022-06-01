const User = require('./User');
const Home = require('./Home');
const Events = require('./Events');
const Reservations = require('./Reservations');

//home -> user connection
//each home only has one user, one to one
Home.hasOne(User, {
    foreignKey: 'home_id'
});
User.belongsTo(Home, {
    foreignKey: 'home_id',
    onDelete: 'SET NULL'
});

//user -> rsvp connection
//users can make multiple reservations, one to many
User.hasMany(Reservations, {
    foreignKey: 'user_id',
});
Reservations.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

//event -> rsvp connection
//each event can have multiple reservations, one to many
Events.hasMany(Reservations, {
    foreignKey: 'event_id',
});
Reservations.belongsTo(Events, {
    foreignKey: 'event_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Home, Events, Reservations };
