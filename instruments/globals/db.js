const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:password@localhost:5432/instruments');

const init = function () {
    return sequelize.authenticate()
        .then(() => {
            const { Instrument } = require("../models");
            return Promise.all([Instrument.sync({alter: true})]);
        });
}

module.exports = { sequelize, init };