const path = require('path');
const express = require('express');
// const session = require('express-session');
const {create} = require('express-handlebars');
// const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(routes);

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

const helpers = require('./util/helpers');

const hbs = create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//express middleware
app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
//
app.set(express.static(path.join(__dirname, 'public')));
=======
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 5ad8c4e923e4ea70803b0434ed8892860f249f2d

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
  
// });

app.listen(PORT, () => {
  console.log('Now listening');
});
