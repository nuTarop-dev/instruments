const { DataTypes } = require('sequelize');
const { sequelize } = require('../globals');
const Animal = require('./animal');
const Home = require('./home');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

User.hasMany(Home, { as: 'homes', foreignKey: 'userId' });
User.hasMany(Animal, { as: 'animals', foreignKey: 'userId' });
User.belongsTo(User, { as: 'parent' });

module.exports = User;
