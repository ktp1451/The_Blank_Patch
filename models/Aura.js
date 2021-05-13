// AURA = TAG

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Aura extends Model {}

Aura.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'color',
  }
);

module.exports = Aura;