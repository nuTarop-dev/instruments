const { Sequelize } = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(config.get('db'));

const init = function () {
  return sequelize.authenticate().then(() => {
    const { User, Home, Animal, Instrument } = require('../models');
    return Promise.all([
      User.sync({ alter: true }),
      Home.sync({ alter: true }),
      Instrument.sync({ alter: true }),
      Animal.sync({ alter: true }),
    ]);
  });
};

module.exports = { sequelize, init };
