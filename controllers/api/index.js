const router = require('express').Router();

<<<<<<< HEAD
// const userRoutes = require('./userRoutes');
// const eventRoutes = require('./eventRoutes');
// const amenityRoutes = require('./amenityRoutes');
// const reservationRoutes = require('./reservationRoutes');
const homeRoutes = require ('./homeRoutes');

// router.use('/users', userRoutes);
// router.use('/events', eventRoutes);
// router.use('/amenities', amenityRoutes);
// router.use('/reservations', reservationRoutes);
=======
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const reservationRoutes = require('./reservationRoutes');
const homeRoutes = require ('./homeRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/reservations', reservationRoutes);
>>>>>>> 5a05ed85c648a2f257a40e8caa498a6155e6f2cc
router.use('/homes', homeRoutes);

module.exports = router;
