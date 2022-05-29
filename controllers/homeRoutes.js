const router = require('express').Router();
const { Amenities, Events, Home, User, Rsvp, Reservations } = require('../models');
const sequelize = require('../config/connection');
//middleware
const withAuth = require('../util/auth');

//home page for login or signup, if user is already logged in will redirect to dashboard
router.get('/', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }    
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

//get dashboard for logged in user, get all amenities and events from db to display in calendar on template
router.get('/dashboard', withAuth, async (req, res) => {
    const amenity = [];
    const event = [];

    //get all amenities from db
    Reservations.findAll({
        
        attributes: [
            'id',
            'attendance',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: Amenities,
                where: {
                    //searches all amenities on db but only returns from today and out 30 days for the calendar
                    amenity_date: {
                        [sequelize.between]: [sequelize.literal('select curdate()'), sequelize.literal('select adddate(curdate(), interval 30 day)')]
                    }
                },
                attributes: [
                'id',
                'amenity_name',
                'amenity_description',
                'amenity_date',
                'reservation_id'
                ],
                
            },
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
    .then(amenityData => {
        amenity = amenityData.map(amenity => amenity.get({ plain: true}));
    })
    .catch(err => {console.log(err); res.status(500).json(err);});
    
    //get all events from db
    Events.findAll({
        attributes: [
            //fill in attr to get
        ]
    })
    .then(eventData => {
        event = eventData.map(event => event.get({ plain: true}));
    })
    .catch(err => {console.log(err); res.status(500).json(err);});

    //send events and amenities data to template
    res.render('dashboard', {
        amenity,
        event,
        loggedIn: true
    });
});







//when user clicks calendar item display single event
router.get('/event/:id', withAuth, async (req, res) => {
    Event.findOne({})
    .then()
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});
//when user clicks calendar item displays single amenity
router.get('/amenities/:id', withAuth, async (req, res) => {
    Amenities.findOne({})
    .then()
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;