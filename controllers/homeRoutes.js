const router = require('express').Router();
const { Amenities, Events, Homes, Users } = require('../models');
//middleware
const withAuth = require('../util/auth');
//home page for login or signup
router.get('/', async (req, res) => {
    
});
//get dashboard for logged in user
router.get('/dashboard', withAuth, async (req, res) => {
    
});

module.exports = router;