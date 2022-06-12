const router = require('express').Router();
const { Events, Home, User, Reservations } = require('../models');
const sequelize = require('../config/connection');

const withAuth = require('../util/auth');
const { headers, month } = require('../util/calendar');

//home page for login or signup, if user is already logged in will redirect to dashboard
router.get('/', async (req, res) => {
    console.log('===============HOMEPAGE================');
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }    
    res.render('homepage', {
        loggedIn: req.session.loggedIn        
    });
});

router.get('/signup', async (req, res) => {
    console.log('===============SIGNUP================');       
    res.render('signup', {
        loggedIn: req.session.loggedIn        
    });
});

//get dashboard for logged in user, get all amenities and events from db to display in calendar on template
router.get('/dashboard', async (req, res) => {
    console.log('===============DASHBOARD================');
    Events.findAll({
        attributes: [
            'id',
            'event_name',
            'event_description',
            'event_date'
        ]        
    })
    .then(eventData => {
        const events = eventData.map(event => event.get({ plain: true}));        
        if(window.screen.width >= 640) {
            res.render('calendar', {
                headers,
                month,
                events,
                loggedIn: req.session.loggedIn,
    
            });
        }
    })
    .catch(err => {console.log(err); res.status(500).json(err);});
});


//when user clicks calendar item display single event
router.get('/event/:id', async (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'event_name',
            'event_description',
            'event_date'
        ],
        include: [
            {
                model: Reservations,
                attributes: [
                    'id',
                    'attendance',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then()
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});

router.get('/gallery', async (req, res) => {
    console.log('===============GALLERY================');
    res.render('gallery', {
        loggedIn: req.session.loggedIn        
    });
});

router.get('/contact', async (req, res) => {
    console.log('===============CONTACT================');
    res.render('contact', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;