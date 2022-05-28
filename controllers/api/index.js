const router = require('express').Router();

const userRoutes = require('./user-routes');
const eventRoutes = require('./eventRoutes');
const amenityRoutes = require('./amenityRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/amenities', amenityRoutes);

module.exports = router;
