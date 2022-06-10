const { Events } = require('../models');

const eventData = [
    {
        event_name: 'movie night',
        event_description: 'watching the batman (2022)',
        event_date: '2022-06-20'
    },{
        event_name: 'movie night',
        event_description: 'watching the batman (2022)',
        event_date: '2022-05-28'
    },{
        event_name: 'movie night',
        event_description: 'watching the batman (2022)',
        event_date: '2022-06-03'
    },{
        event_name: `kyle's bday`,
        event_description: 'happy birthday',
        event_date: '2022-06-01'
    }
];

const seedEvents = () => Events.bulkCreate(eventData);
module.exports = seedEvents;