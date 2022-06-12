const router = require('express').Router();

const userRoutes = require('./userRoutes');
const calendarRoutes = require('./calendarRoutes');
const reservationRoutes = require('./reservationRoutes');
const homeRoutes = require('./homeRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/users', userRoutes);
router.use('/calendar', calendarRoutes);
router.use('/reservations', reservationRoutes);
router.use('/homes', homeRoutes);
router.use('/event', eventRoutes);

module.exports = router;
