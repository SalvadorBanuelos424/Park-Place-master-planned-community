const router = require('express').Router();
const { Events } = require('../../models');
const { authUser } = require('../../util/helpers');

//get
router.get('/test', authUser(['admin']), (req, res) => {
  res.json('You have permission');
});

router.post('/test/event', authUser(['admin']), (req, res) => {
  Events.create({
    title: req.body.title,
    desc: req.body.desc,
    date: req.body.date,
    time: req.body.time,
  })
    .then((dbEventData) => {
      req.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
