const router = require('express').Router();
const { Amenities, Events, Home, User, Reservations } = require('../models');
const sequelize = require('../config/connection');

const withAuth = require('../util/auth');

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

router.get('/login', async (req, res) => {
    console.log('===============SIGNUP================');       
    res.render('login', {
        loggedIn: req.session.loggedIn        
    });
});

router.get('/calendar', (req, res) => {
    res.render('calendar');
  });

//get dashboard for logged in user, get all amenities and events from db to display in calendar on template
router.get('/dashboard', withAuth, async (req, res) => {
    console.log('===============DASHBOARD================');
    const amenity = [];
    const event = [];

    // //get all amenities from db
    // Reservations.findAll({
    //     where: {
    //         //searches all amenities on db but only returns from today and out 30 days for the calendar
    //         reservation_date: {
    //             [sequelize.between]: [sequelize.literal('select curdate()'), sequelize.literal('select adddate(curdate(), interval 30 day)')]
    //         }
    //     },
    //     attributes: [
    //         'id',
    //         'attendance',
    //         'user_id',
    //         'reservation_date',
    //         'created_at'
    //     ],
    //     include: [
    //         {
    //             model: Amenities,                
    //             attributes: [
    //             'id',
    //             'amenity_name',
    //             'amenity_description',
    //             'reservation_id'
    //             ]                
    //         },
    //         {
    //             model: User,
    //             attributes: ['name']
    //         }
    //     ]
    // })
    // .then(amenityData => {
    //     amenity = amenityData.map(amenity => amenity.get({ plain: true}));
    // })
    // .catch(err => {console.log(err); res.status(500).json(err);});
    
    //get all events from db
    Events.findAll({
        attributes: [
            'id',
            'event_name',
            'event_description',
            'event_date'
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
        loggedIn: req.session.loggedIn
    });
});


//when user clicks calendar item display single event
router.get('/event/:id', withAuth, async (req, res) => {
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
    res.render('gallery', {
        loggedIn: req.session.loggedIn        
    });
});

router.get('/contact', async (req, res) => {
    res.render('contact', {
        loggedIn: req.session.loggedIn
    });
});

// // //not sure what to do for route to make reservation
// // //when user clicks calendar item displays single reservation
// // router.get('/reservation/:id', withAuth, async (req, res) => {
// //     Reservations.findOne({})
// //     .then()
// //     .catch(err => {
// //         console.log(err);
// //         res.status(500).json(err);
// //       });
// // });

module.exports = router;