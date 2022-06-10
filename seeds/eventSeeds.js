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
        event_name: `test`,
        event_description: 'something',
        event_date: '2022-06-28'
    },{
        event_name: `hi`,
        event_description: 'what',
        event_date: '2022-07-01'
    },{
        event_name: `aaaaaaa`,
        event_description: 'why',
        event_date: '2022-06-15'
    },{
        event_name: `wwwwwwww`,
        event_description: 'wwwwwwww',
        event_date: '2022-06-05'
    },{
        event_name: `whatwhat`,
        event_description: 'hahahahahah',
        event_date: '2022-06-09'
    }
];

const seedEvents = () => Events.bulkCreate(eventData);
module.exports = seedEvents;