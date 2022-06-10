const router = require('express').Router();

const userRoutes = require('./userRoutes');
const calendarRoutes = require('./calendarRoutes');
const reservationRoutes = require('./reservationRoutes');
const homeRoutes = require ('./homeRoutes');

router.use('/users', userRoutes);
router.use('/calendar', calendarRoutes);
router.use('/reservations', reservationRoutes);
router.use('/homes', homeRoutes);

module.exports = router;
