const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./home-routes');
=======
const homeRoutes = require('./homepageRoutes');
>>>>>>> 5a05ed85c648a2f257a40e8caa498a6155e6f2cc

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;