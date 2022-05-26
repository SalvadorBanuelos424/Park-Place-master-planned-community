const router = require('express').Router();
const { Amenities, Events, Homes, Users } = require('../models');

const withAuth = require('../util/auth');

//get dashboard for logged in user
router.get('/dashboard', withAuth, async (req, res) => {
    
});