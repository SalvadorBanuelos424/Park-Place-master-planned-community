const { Home } = require('../models');

const homeData = [
    {
        address: '123 Street Lane',
    }
];

const seedHomes = () => Home.bulkCreate(homeData);
module.exports = seedHomes;