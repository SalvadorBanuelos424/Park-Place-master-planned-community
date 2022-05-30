const router = require('express').Router();
const { User } = require('../../models');

router.get('/:email', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      email: req.params.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this email' });
      return;
    }
    res.json(dbUserData).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });
});

router.post('/', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      req.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    const validPassword = dbUserData.checkPassowrd(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password! ' });
      return;
    }

    req.session.user_id = dbUserData.id;
    req.session.address = dbUserData.address;
    req.session.loggedIn = true;

    res.json({ user: dbUserData, message: 'You are now logged in! ' });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
