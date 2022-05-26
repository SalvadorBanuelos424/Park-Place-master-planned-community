const seedAmenities = require('./amenityData');
const seedEvent = require('./eventData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedAmenities();
  console.log('--------------');

  await seedEvent();
  console.log('--------------');

  process.exit(0);
};

seedAll();
