const User = require('./User');
const Home = require('./Home');
const Events = require('./Events');
const Amenities = require('./Amenities');
const Rsvp = require('./Rsvp');

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
User.hasMany(Rsvp, {
    foreignKey: 'user_id',
});
Rsvp.belongsTo(User, {
    foreignKey: 'user_id',
});

//amenity -> rsvp connection
//each amenity entry can only have one reservation
Amenities.hasOne(Rsvp, {
    foreignKey: 'amenity_id',
});
Rsvp.belongsTo(Amenities, {
    foreignKey: 'amenity_id',
});

//event -> rsvp connection
//each event can have multiple reservations
Events.hasMany(Rsvp, {
    foreignKey: 'event_id',
});
Rsvp.belongsTo(Events, {
    foreignKey: 'event_id',
})

module.exports = { User, Home, Events, Amenities, Rsvp };