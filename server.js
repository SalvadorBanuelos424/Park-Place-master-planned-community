const path = require('path');
const express = require('express');
const session = require('express-session');
const {create} = require('express-handlebars');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve files from public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/')));

const sess = {
  secret: 'classified stuff',
  cookie: {maxAge: 3600000, sameSite: 'none'},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

//handlebars
const helpers = require('./util/helpers');
const hbs = create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.get('*', (req, res) => {
  res.redirect('/');
  return;
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
