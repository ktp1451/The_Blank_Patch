// EMOTIONS = PRODUCTS

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Emotions extends Model {}

Emotions.init(
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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    color_type: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'color',
        key: 'id'
      },
    aura_type: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'aura',
        key: 'id'
      },
    },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'emotion',
  }
);

module.exports = Emotions;