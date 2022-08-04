const { DataTypes } = require('sequelize');
const { sequelize } = require('../globals');

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    instruments_access: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = User;