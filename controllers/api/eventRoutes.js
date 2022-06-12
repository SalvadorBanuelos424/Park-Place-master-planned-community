const router = require('express').Router();
const { Events } = require('../../models');
const { authUser } = require('../../util/helpers');

//get
router.get('/', (req, res) => {
  Events.findAll({
    attributes: ['id', 'event_name', 'event_description', 'event_date'],
  })
    .then((eventData) => {
      const events = eventData.map((event) => event.get({ plain: true }));
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Events.create({
    event_name: req.body.event_name,
    event_description: req.body.event_description,
    event_date: req.body.event_date,
  })
    .then((dbEventData) => {
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
