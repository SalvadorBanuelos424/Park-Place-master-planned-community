const User = require('./User');
const Home = require('./Home');
const Events = require('./Events');
const Amenities = require('./Amenities');
const Reservations = require('./Reservations');

//user -> home connection
//each user only has one home
User.hasOne(Home, {
    foreignKey: 'user_id',
});
Home.belongsTo(User, {
    foreignKey: 'user_id',
});

//user -> rsvp connection
//users can make multiple reservations
User.hasMany(Reservations, {
    foreignKey: 'user_id',
});
Reservations.belongsTo(User, {
    foreignKey: 'user_id',
});

//amenity -> rsvp connection
//each amenity entry can only have one reservation
Amenities.hasOne(Reservations, {
    foreignKey: 'amenity_id',
});
Reservations.belongsTo(Amenities, {
    foreignKey: 'amenity_id',
});

//event -> rsvp connection
//each event can have multiple reservations
Events.hasMany(Reservations, {
    foreignKey: 'event_id',
});
Reservations.belongsTo(Events, {
    foreignKey: 'event_id',
})

module.exports = { User, Home, Events, Amenities, Reservations };