const router = require('express').Router();
const { Reservations } = require('../../models');
const withAuth = require('../../util/auth');

//get

//post
router.post('/', withAuth, (req, res) => {
    Reservations.create({
        attendance: req.body.attendance,
        
    })
    .then(rsvpData => res.json(rsvpData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;