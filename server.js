const express = require('express');
// const path = require('path');
// const session = require('express-session');
const {engine} = require('express-handlebars');
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

// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({});

app.engine('handlebars', engine({defaultLayout: 'main'}));
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('homepage');
});



// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
  
// });

app.listen(PORT, () => console.log('Now listening'));
