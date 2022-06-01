const { User } = require('../models');

const userData = [
    {
        name: 'alec alec',
        email: 'test@test.com',
        password: 'password',
        home_id: 1
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;