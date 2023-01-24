const { DataTypes } = require('sequelize');
const { sequelize } = require('../globals');
const Animal = require('./animal');

const Home = sequelize.define('home', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tag: { type: DataTypes.STRING, unique: true },
});

Home.hasMany(Animal, { as: 'animals', foreignKey: 'homeId' });

module.exports = Home;