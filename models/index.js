const User = require('./User');
const Home = require('./Home');
const Events = require('./Events');
const Amenities = require('./Amenities');
const Reservations = require('./Reservations');

//user -> home connection
//each user only has one home, one to one
User.hasOne(Home, {
    foreignKey: 'user_id',
});
Home.belongsTo(User, {
    foreignKey: 'user_id',
});

//user -> rsvp connection
//users can make multiple reservations, one to many
User.hasMany(Reservations, {
    foreignKey: 'user_id',
});
Reservations.belongsTo(User, {
    foreignKey: 'user_id',
});

//rsvp -> amenity connection
//each reservation entry can only have one amenity, one to one
Reservations.hasOne(Amenities, {
    foreignKey: 'reservation_id',
});
Amenities.belongsTo(Reservations, {
    foreignKey: 'reservation_id',
});

//event -> rsvp connection
//each event can have multiple reservations, one to many
Events.hasMany(Reservations, {
    foreignKey: 'event_id',
});
Reservations.belongsTo(Events, {
    foreignKey: 'event_id',
})

module.exports = { User, Home, Events, Amenities, Reservations };