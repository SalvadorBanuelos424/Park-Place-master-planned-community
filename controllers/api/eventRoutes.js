const router = require('express').Router();
const { Events } = require('../../models');

const withAuth = require('../util/auth');
//home page for login or signup
router.get('/', async (req, res) => {
    
});
//get dashboard for logged in user
router.get('/dashboard', withAuth, async (req, res) => {
    
});
//get events page
router.get('/events', withAuth, async (req, res) => {

});
//get amenities page
router.get('/amenities', withAuth, async (req, res) => {

});
//get gallery
router.get('/gallery', withAuth, async (req, res) => {

});