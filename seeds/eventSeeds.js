const { Events } = require('../models');

const eventData = [
    {
        event_name: 'movie night',
        event_description: 'watching the batman (2022)',
        event_date: '2022-06-20'
    }
];

const seedEvents = () => Events.bulkCreate(eventData);
module.exports = seedEvents;