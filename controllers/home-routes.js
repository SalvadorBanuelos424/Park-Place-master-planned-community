const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/calendar', (req, res) => {
  res.render('calendar');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;