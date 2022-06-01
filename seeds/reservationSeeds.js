const { Reservations } = require('../models');

const reservationData = [

];

const seedReservations = () => Reservations.bulkCreate(reservationData);
module.exports = seedReservations;