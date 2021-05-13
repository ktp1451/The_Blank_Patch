//COLORS = CATEGORIES

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Color extends Model {}

Color.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'color',
  }
);

module.exports = Color;