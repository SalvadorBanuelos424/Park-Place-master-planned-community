const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const routes = require('./controllers/');


//express declaration
const app = express();
//port for sequelize
const PORT = process.env.PORT || 3001;
//express session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
//handlebars declaration
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.set(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});