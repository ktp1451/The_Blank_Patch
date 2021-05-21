const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
  {
  //   // define columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  color_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'color',
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  }
);

module.exports = Cart;