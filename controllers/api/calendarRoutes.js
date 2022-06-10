const router = require('express').Router();
const { Events } = require('../../models');
const {  } = require('../../util/calendar');

router.get('/', (req, res) => {
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
        res.json(events);
    })
    .catch(err => {console.log(err); res.status(500).json(err);});
});

router.get('/prev', (req, res) => {
    
});

router.get('/next', (req, res) => {
    
});

module.exports = router;
