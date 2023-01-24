const { DataTypes } = require('sequelize');
const { sequelize } = require('../globals');

const Animal = sequelize.define('animal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tag: { type: DataTypes.STRING, unique: true },
  dd: { type: DataTypes.INTEGER },
  mm: { type: DataTypes.INTEGER },
  yy: { type: DataTypes.INTEGER },
  momId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'animals',
      key: 'id'
    }
  },
  dadId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'animals',
      key: 'id'
    }
  },
});

Animal.belongsTo(Animal, { foreignKey: 'momId', as: 'mom' });
Animal.belongsTo(Animal, { foreignKey: 'dadId', as: 'dad' });

module.exports = Animal;
