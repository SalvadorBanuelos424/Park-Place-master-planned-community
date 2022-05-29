const User = require('./User');
const Home = require('./Home');
const Events = require('./Events');
const Amenities = require('./Amenities');
const Reservations = require('./Reservations');

//home -> user connection
//each home only has one user, one to one
Home.hasOne(User, {
    foreignKey: 'user_id',
});
User.belongsTo(Home, {
    foreignKey: 'user_id',
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

//rsvp -> amenity connection
//each reservation entry can only have one amenity, one to one
Amenities.hasOne(Reservations, {
    foreignKey: 'amenity_id',
});
Reservations.belongsTo(Amenities, {
    foreignKey: 'amenity_id',
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

module.exports = { User, Home, Events, Amenities, Reservations };