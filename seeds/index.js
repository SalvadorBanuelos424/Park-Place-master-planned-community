const seedEvents = require('./eventSeeds');
const seedUsers = require('./userSeeds');
const seedHomes = require('./homeSeeds');
const seedReservations = require('./reservationSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedEvents();
  console.log('--------------');  

  await seedHomes();
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedReservations();
  console.log('--------------');

  process.exit(0);
};

seedAll();
