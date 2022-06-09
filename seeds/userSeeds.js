const { User } = require('../models');

const userData = [
  {
    name: 'alec alec',
    email: 'test@test.com',
    password: 'password',
    address: '123 Street Lane',
    role: 'admin',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;
