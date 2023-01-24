const { DataTypes } = require('sequelize');
const { sequelize } = require('../globals');

const Instrument = sequelize.define("instrument", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    symbol: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    test: { type: DataTypes.STRING },
    usd_price: { type: DataTypes.FLOAT },
    updated_at: { type: DataTypes.DATE },
    created_at: { type: DataTypes.DATE }
}, {
    timestamps: false
});

module.exports = Instrument;