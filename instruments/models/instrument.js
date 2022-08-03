const { DataTypes } = require('sequelize');
const { sequelize } = require('../globals');

const Instrument = sequelize.define("instrument", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    symbol: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    usd_price: { type: DataTypes.FLOAT }
});

module.exports = Instrument;