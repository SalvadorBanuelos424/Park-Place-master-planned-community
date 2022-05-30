const router = require('express').Router();

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const amenityRoutes = require('./amenityRoutes');
const reservationRoutes = require('./reservationRoutes');
const homeRoutes = require ('./homeRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/amenities', amenityRoutes);
router.use('/reservations', reservationRoutes);
router.use('/homes', homeRoutes);

module.exports = router;
