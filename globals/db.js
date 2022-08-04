const { Sequelize } = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(config.get("db"));

const init = function () {
    return sequelize.authenticate()
        .then(() => {
            const { Instrument } = require("../models");
            const { User } = require("../models");
            return Promise.all([Instrument.sync({alter: true}), User.sync({alter: true})]);
        });
}

module.exports = { sequelize, init };